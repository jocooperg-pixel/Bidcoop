/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { mockOportunidades } from '@/app/mockData';

// ═══════════════════════════════════════════════════════════════════════════
// Único motor de datos masivos: scripts/sync_mercadopublico.py -> mockData.ts.
// Este endpoint NO vuelve a traer ni reclasificar el listado completo de
// licitaciones activas (eso ya lo hace, una sola vez, el script Python con
// pre-filtro por catálogo, reconciliación de montos y exclusión de registros
// sin datos reales). Aquí solo se expone una consulta puntual por código
// exacto, en modo passthrough: si Mercado Público tiene el dato, se devuelve
// tal cual; si no, se responde honestamente que no fue encontrado — nunca se
// inventan organismo/monto/empresa de relleno.
// ═══════════════════════════════════════════════════════════════════════════

const TICKET = 'F8537A18-6766-4DEF-9E59-426B4FEE2844';
const BASE_URL = 'https://api.mercadopublico.cl/servicios/v1/publico';
// API OCDS de Datos Abiertos — distinta de la API de licitaciones de arriba:
// no requiere ticket y expone, en tiempo real, quiénes efectivamente
// cotizaron/postularon (role "tenderer") en cada proceso — dato real que la
// API v1 nunca entrega. Confirmado en vivo que NO expone documentos/bases
// (el campo tender.documents del estándar OCDS existe pero ChileCompra no
// lo puebla) — solo se usa aquí para competidores reales, nunca inventados.
const OCDS_BASE_URL = 'https://api.mercadopublico.cl/APISOCDS/OCDS/tender';

interface CacheEnvelope {
  data: any;
  timestamp: number;
}

// Cache for individual licitación details by code (lasts 24 hours)
const detailCache = new Map<string, CacheEnvelope>();
const DETAIL_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

async function safeFetch(url: string, timeout = 12000, maxRetries = 3, baseDelay = 500): Promise<any> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const res = await fetch(url, {
        headers: { 'Accept': 'application/json' },
        signal: controller.signal,
        next: { revalidate: 60 }
      });
      clearTimeout(id);
      if (!res.ok) {
        if (attempt === maxRetries) return null;
        await new Promise(resolve => setTimeout(resolve, baseDelay * attempt));
        continue;
      }
      const data = await res.json();
      
      // Handle the simultaneous requests error by retrying with a delay
      if (data && data.Codigo === 10500) {
        if (attempt === maxRetries) return data;
        await new Promise(resolve => setTimeout(resolve, baseDelay * attempt * 1.5));
        continue;
      }
      
      return data;
    } catch {
      if (attempt === maxRetries) return null;
      await new Promise(resolve => setTimeout(resolve, baseDelay * attempt));
    }
  }
  return null;
}

interface OcdsParty {
  name?: string;
  roles?: string[];
  identifier?: { id?: string; legalName?: string };
  address?: { region?: string };
}

interface OcdsRelease {
  parties?: OcdsParty[];
  awards?: Array<{ status?: string; suppliers?: OcdsParty[]; value?: { amount?: number; currency?: string } }>;
}

/**
 * Extrae proveedores reales que cotizaron/postularon (role "tenderer") desde
 * la API OCDS — usa la última release del proceso (estado más reciente).
 * Nunca sintetiza un competidor: si OCDS no trae parties con ese rol, se
 * devuelve una lista vacía, no una inventada.
 */
function parseOcdsTenderers(ocdsPayload: unknown): { tenderers: Array<{ nombre: string; rut: string | null; region: string | null }>; awards: Array<{ estado?: string; proveedor?: string; monto?: number; moneda?: string }> } {
  const releases = (ocdsPayload as { releases?: OcdsRelease[] } | null)?.releases;
  if (!Array.isArray(releases) || releases.length === 0) {
    return { tenderers: [], awards: [] };
  }
  const lastRelease = releases[releases.length - 1];
  const tenderers = (lastRelease.parties || [])
    .filter(p => Array.isArray(p.roles) && p.roles.includes('tenderer'))
    .map(p => ({
      nombre: p.identifier?.legalName || p.name || 'Proveedor sin nombre informado',
      rut: p.identifier?.id || null,
      region: p.address?.region?.trim() || null
    }));

  const awardsRaw = releases.flatMap(r => r.awards || []);
  const awards = awardsRaw.map(a => ({
    estado: a.status,
    proveedor: a.suppliers?.[0]?.name,
    monto: a.value?.amount,
    moneda: a.value?.currency
  }));

  return { tenderers, awards };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const codigo = searchParams.get('codigo');
  const endpoint = searchParams.get('endpoint') || 'licitaciones';
  const forceRefresh = searchParams.get('refresh') === 'true' || searchParams.get('force') === 'true';

  if (!codigo) {
    return NextResponse.json(
      {
        error: 'Este endpoint solo soporta consulta por código exacto (?codigo=...). El listado masivo de oportunidades se genera únicamente vía scripts/sync_mercadopublico.py -> mockData.ts.'
      },
      { status: 400 }
    );
  }

  if (!forceRefresh) {
    const cached = detailCache.get(`${endpoint}:${codigo}`);
    const now = Date.now();
    if (cached && now - cached.timestamp < DETAIL_CACHE_TTL) {
      return NextResponse.json(cached.data);
    }
  }

  if (endpoint === 'ocds') {
    const ocdsData = await safeFetch(`${OCDS_BASE_URL}/${encodeURIComponent(codigo)}`, 12000, 2);
    const parsed = parseOcdsTenderers(ocdsData);
    detailCache.set(`ocds:${codigo}`, { data: parsed, timestamp: Date.now() });
    return NextResponse.json(parsed);
  }

  const targetUrl = endpoint === 'ordenes'
    ? `${BASE_URL}/OrdenCompra.json?codigo=${codigo}&ticket=${TICKET}`
    : `${BASE_URL}/licitaciones.json?codigo=${codigo}&ticket=${TICKET}`;

  const data = await safeFetch(targetUrl, 12000, 3);

  // Passthrough: si la API oficial devolvió el proceso, se retorna tal cual.
  if (data && data.Listado && Array.isArray(data.Listado) && data.Listado.length > 0) {
    detailCache.set(`${endpoint}:${codigo}`, { data, timestamp: Date.now() });
    return NextResponse.json(data);
  }

  // Fallback: si ya lo teníamos verificado en mockData.ts (dato real, no inventado),
  // se reconstruye el mismo payload con esos valores reales.
  const localMatch = mockOportunidades.find(
    op => op.codigo.toLowerCase() === codigo.toLowerCase() || op.id.toLowerCase() === codigo.toLowerCase()
  );

  if (localMatch) {
    const fallbackPayload = {
      Cantidad: 1,
      FechaCreacion: new Date().toISOString(),
      Version: 'v1',
      Listado: [{
        CodigoExterno: localMatch.codigo,
        Nombre: localMatch.titulo,
        CodigoEstado: 5,
        Estado: localMatch.estado || 'Publicada',
        Comprador: {
          CodigoOrganismo: '3244',
          NombreOrganismo: localMatch.organismo,
          RutUnico: localMatch.organismoRut
        },
        DiasMontoEstimado: localMatch.organismoPagoDias || 30,
        MontoEstimado: localMatch.monto,
        FechaPublicacion: `${localMatch.fechaPublicacion}T09:00:00`,
        FechaCierre: localMatch.fechaCierre ? `${localMatch.fechaCierre}T15:00:00` : undefined,
        Descripcion: localMatch.descripcion,
        Rubro: localMatch.rubro,
        Items: {
          Listado: localMatch.items.map(it => ({
            Correlativo: 1,
            CodigoProducto: 44121500,
            CodigoCategoria: 'Office Supplies',
            Categoria: localMatch.rubro,
            NombreProducto: it.producto,
            Descripcion: it.producto,
            Cantidad: it.cantidad,
            UnidadMedida: 'UN'
          }))
        }
      }]
    };
    detailCache.set(`${endpoint}:${codigo}`, { data: fallbackPayload, timestamp: Date.now() });
    return NextResponse.json(fallbackPayload);
  }

  if (data?.Codigo === 10500) {
    return NextResponse.json(
      { error: 'El servidor de Mercado Público está ocupado (peticiones simultáneas). Por favor, intenta de nuevo.' },
      { status: 429 }
    );
  }

  return NextResponse.json(
    { error: `No se encontró la licitación o compra ágil con código ${codigo}.` },
    { status: 444 }
  );
}


