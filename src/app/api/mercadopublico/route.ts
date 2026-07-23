/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { mockOportunidades } from '@/app/mockData';

const TICKET = 'F8537A18-6766-4DEF-9E59-426B4FEE2844';
const BASE_URL = 'https://api.mercadopublico.cl/servicios/v1/publico';

// System-wide in-memory cache definitions
interface CacheEnvelope {
  data: any;
  timestamp: number;
}

// Global cache for the complete synced list
let syncCache: CacheEnvelope | null = null;
const SYNC_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const codigo = searchParams.get('codigo');
  const endpoint = searchParams.get('endpoint') || 'licitaciones';
  const mode = searchParams.get('mode') || 'sync'; // 'sync' | 'detail' | 'docs'
  const forceRefresh = searchParams.get('refresh') === 'true' || searchParams.get('force') === 'true';

  if (forceRefresh) {
    syncCache = null;
  }

  // =============================================
  // MODE: Single code lookup (detail or direct query)
  // =============================================
  if (codigo) {
    if (!forceRefresh) {
      const cached = detailCache.get(codigo);
      const now = Date.now();
      if (cached && now - cached.timestamp < DETAIL_CACHE_TTL) {
        return NextResponse.json(cached.data);
      }
    }

    const targetUrl = endpoint === 'ordenes'
      ? `${BASE_URL}/OrdenCompra.json?codigo=${codigo}&ticket=${TICKET}`
      : `${BASE_URL}/licitaciones.json?codigo=${codigo}&ticket=${TICKET}`;
    
    const data = await safeFetch(targetUrl, 12000, 3);
    
    // If live API returned valid results, return & cache
    if (data && data.Listado && Array.isArray(data.Listado) && data.Listado.length > 0) {
      detailCache.set(codigo, { data, timestamp: Date.now() });
      return NextResponse.json(data);
    }

    // Fallback: search in local mockOportunidades
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
            RutUnico: localMatch.organismoRut || '76.123.456-7'
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
      detailCache.set(codigo, { data: fallbackPayload, timestamp: Date.now() });
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

  // =============================================
  // MODE: sync — Fetch active licitaciones
  // =============================================
  try {
    const now = Date.now();
    if (!forceRefresh && syncCache && now - syncCache.timestamp < SYNC_CACHE_TTL) {
      return NextResponse.json(syncCache.data);
    }

    // 1. Fetch live active list from Mercado Público API
    const data = await safeFetch(
      `${BASE_URL}/licitaciones.json?estado=activas&ticket=${TICKET}`,
      15000
    );

    const allLicitaciones: any[] = data?.Listado || [];
    let totalFromApi = data?.Cantidad || allLicitaciones.length;

    const keywords = [
      'aseo', 'higiene', 'limpieza', 'cloro', 'detergente', 'jabon', 'jabón', 
      'resma', 'oficina', 'escritorio', 'papelería', 'papeleria', 'librería', 
      'libreria', 'útiles', 'utiles', 'papel', 'archivador', 'desinfect'
    ];

    let candidates = allLicitaciones.filter(item => {
      const code = (item.CodigoExterno || '').toUpperCase();
      const name = (item.Nombre || '').toLowerCase();
      const isCo = code.includes('-CO') || code.includes('COT');
      const matchesKw = keywords.some(kw => name.includes(kw));
      return isCo || matchesKw;
    });

    // Convert all mockOportunidades into API-compatible objects so that all static opportunities (including the 48 new Compras Ágiles) are always present
    const mappedMock = mockOportunidades.map(op => ({
      CodigoExterno: op.codigo,
      Nombre: op.titulo,
      Estado: op.estado || 'Publicada',
      CodigoEstado: 5,
      FechaCierre: op.fechaCierre ? `${op.fechaCierre}T15:00:00` : '2026-07-28T15:00:00',
      FechaPublicacion: op.fechaPublicacion ? `${op.fechaPublicacion}T09:00:00` : '2026-07-22T09:00:00',
      Descripcion: op.descripcion,
      MontoEstimado: op.monto,
      Rubro: op.rubro,
      EmpresaMatch: op.empresaMatch,
      Modalidad: op.modalidad,
      Items: { Listado: (op.items || []).map(it => ({ Correlativo: 1, Descripcion: it.producto, Cantidad: it.cantidad, PrecioUnitario: it.precioUnitario })) },
      Comprador: { NombreOrganismo: op.organismo, RutUnidad: op.organismoRut, RegionUnidad: op.region }
    }));

    const existingMockCodes = new Set(mappedMock.map(m => m.CodigoExterno));
    const newApiCandidates = candidates.filter(item => item.CodigoExterno && !existingMockCodes.has(item.CodigoExterno));

    const combinedList = [...mappedMock, ...newApiCandidates];

    combinedList.sort((a, b) => {
      const dateA = a.FechaCierre ? new Date(a.FechaCierre).getTime() : Infinity;
      const dateB = b.FechaCierre ? new Date(b.FechaCierre).getTime() : Infinity;
      return dateA - dateB;
    });

    const enrichedMap = new Map<string, any>();
    for (const item of combinedList) {
      enrichedMap.set(item.CodigoExterno, {
        CodigoExterno: item.CodigoExterno,
        Nombre: item.Nombre,
        Estado: item.Estado || 'Publicada',
        CodigoEstado: item.CodigoEstado || 5,
        FechaCierre: item.FechaCierre,
        FechaPublicacion: item.FechaPublicacion || new Date().toISOString(),
        Descripcion: item.Descripcion || '',
        MontoEstimado: item.MontoEstimado || null,
        Rubro: item.Rubro || 'Artículos de Escritorio y Oficina',
        EmpresaMatch: item.EmpresaMatch,
        Modalidad: item.Modalidad,
        Items: item.Items || { Listado: [] },
        Fechas: { FechaPublicacion: item.FechaPublicacion || new Date().toISOString(), FechaCierre: item.FechaCierre },
        Comprador: item.Comprador || { NombreOrganismo: 'Organismo Público' }
      });
    }

    const finalEnrichedList = Array.from(enrichedMap.values());

    const resultPayload = {
      Listado: finalEnrichedList,
      Meta: {
        totalFromApi,
        candidatesFiltered: candidates.length,
        totalReturned: finalEnrichedList.length,
        source: 'Mercado Público API + Full Local Sync',
        timestamp: new Date().toISOString()
      }
    };

    syncCache = {
      data: resultPayload,
      timestamp: Date.now()
    };

    return NextResponse.json(resultPayload);
  } catch (error: any) {
    console.error('Error syncing Mercado Público:', error);
    return NextResponse.json(
      { error: `Error de sincronización: ${error.message}` },
      { status: 500 }
    );
  }
}


