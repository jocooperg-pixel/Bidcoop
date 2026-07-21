import { NextResponse } from 'next/server';

const TICKET = 'F8537A18-6766-4DEF-9E59-426B4FEE2844';
const BASE_URL = 'https://api.mercadopublico.cl/servicios/v1/publico';

async function safeFetch(url: string, timeout = 15000, maxRetries = 4, baseDelay = 600): Promise<any> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const res = await fetch(url, {
        headers: { 'Accept': 'application/json' },
        signal: controller.signal,
        next: { revalidate: 300 }
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

  // =============================================
  // MODE: detail — Fetch full detail of a single licitación by code (includes items, fechas, comprador)
  // =============================================
  if (codigo && mode === 'detail') {
    const targetUrl = endpoint === 'ordenes'
      ? `${BASE_URL}/OrdenCompra.json?codigo=${codigo}&ticket=${TICKET}`
      : `${BASE_URL}/licitaciones.json?codigo=${codigo}&ticket=${TICKET}`;
    
    const data = await safeFetch(targetUrl, 15000, 4);
    if (!data) {
      return NextResponse.json(
        { error: 'No se pudo conectar con el servidor de Mercado Público.' },
        { status: 500 }
      );
    }
    if (data.Codigo === 10500) {
      return NextResponse.json(
        { error: 'El servidor de Mercado Público está ocupado (peticiones simultáneas). Por favor, intenta de nuevo.' },
        { status: 429 }
      );
    }
    return NextResponse.json(data);
  }

  // =============================================
  // MODE: legacy single code lookup (backward compat)
  // =============================================
  if (codigo) {
    const targetUrl = endpoint === 'ordenes'
      ? `${BASE_URL}/OrdenCompra.json?codigo=${codigo}&ticket=${TICKET}`
      : `${BASE_URL}/licitaciones.json?codigo=${codigo}&ticket=${TICKET}`;
    
    const data = await safeFetch(targetUrl, 15000, 4);
    if (!data) {
      return NextResponse.json(
        { error: 'No se pudo conectar con el servidor de Mercado Público.' },
        { status: 500 }
      );
    }
    if (data.Codigo === 10500) {
      return NextResponse.json(
        { error: 'El servidor de Mercado Público está ocupado (peticiones simultáneas). Por favor, intenta de nuevo.' },
        { status: 429 }
      );
    }
    return NextResponse.json(data);
  }

  // =============================================
  // MODE: sync — Fetch ALL active licitaciones (estado=activas)
  // And fetch details for candidates in batches to prevent rate limit.
  // =============================================
  try {
    // 1. Fetch lightweight active list
    const data = await safeFetch(
      `${BASE_URL}/licitaciones.json?estado=activas&ticket=${TICKET}`,
      20000
    );

    const allLicitaciones: any[] = data?.Listado || [];
    const totalFromApi = data?.Cantidad || allLicitaciones.length;

    // 2. Identify candidates: all CO (Compra Ágil) + name keyword matches
    const keywords = [
      'aseo', 'higiene', 'limpieza', 'cloro', 'detergente', 'jabon', 'jabón', 
      'resma', 'oficina', 'escritorio', 'papelería', 'papeleria', 'librería', 
      'libreria', 'útiles', 'utiles', 'papel', 'archivador', 'desinfect'
    ];

    const candidates = allLicitaciones.filter(item => {
      const code = (item.CodigoExterno || '').toUpperCase();
      const name = (item.Nombre || '').toLowerCase();
      const isCo = code.includes('-CO') || code.includes('COT');
      const matchesKw = keywords.some(kw => name.includes(kw));
      return isCo || matchesKw;
    });

    // 3. Pre-populate map with basic data
    const enrichedMap = new Map<string, any>();
    for (const item of candidates) {
      enrichedMap.set(item.CodigoExterno, {
        CodigoExterno: item.CodigoExterno,
        Nombre: item.Nombre,
        Estado: item.Estado || 'Publicada',
        CodigoEstado: item.CodigoEstado,
        FechaCierre: item.FechaCierre,
        Descripcion: '',
        MontoEstimado: null,
        Items: { Listado: [] },
        Fechas: { FechaPublicacion: new Date().toISOString(), FechaCierre: item.FechaCierre },
        Comprador: { NombreOrganismo: 'Organismo Público' }
      });
    }

    // 4. Batch query details to get Rubro, Descripcion, Items, Fechas, Comprador
    // Use smaller batch size (12) to stay safely within ChileCompra API thresholds
    const batchSize = 12;
    for (let i = 0; i < candidates.length; i += batchSize) {
      const batch = candidates.slice(i, i + batchSize);
      const promises = batch.map(item =>
        safeFetch(`${BASE_URL}/licitaciones.json?codigo=${item.CodigoExterno}&ticket=${TICKET}`, 4000)
      );
      
      const results = await Promise.all(promises);
      results.forEach((res, index) => {
        const originalItem = batch[index];
        if (res?.Listado && Array.isArray(res.Listado) && res.Listado.length > 0) {
          const detail = res.Listado[0];
          enrichedMap.set(originalItem.CodigoExterno, detail);
        }
      });

      // Brief delay between batches
      if (i + batchSize < candidates.length) {
        await new Promise(resolve => setTimeout(resolve, 80));
      }
    }

    const finalEnrichedList = Array.from(enrichedMap.values());

    return NextResponse.json({
      Listado: finalEnrichedList,
      Meta: {
        totalFromApi,
        candidatesFiltered: candidates.length,
        totalReturned: finalEnrichedList.length,
        source: 'estado=activas + batch enrichment',
        timestamp: new Date().toISOString()
      }
    });
  } catch (error: any) {
    console.error('Error syncing Mercado Público:', error);
    return NextResponse.json(
      { error: `Error de sincronización: ${error.message}` },
      { status: 500 }
    );
  }
}
