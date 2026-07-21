/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

const TICKET = 'F8537A18-6766-4DEF-9E59-426B4FEE2844';
const BASE_URL = 'https://api.mercadopublico.cl/servicios/v1/publico';

// System-wide in-memory cache definitions
interface CacheEnvelope {
  data: any;
  timestamp: number;
}

// Global cache for the complete synced list
let syncCache: CacheEnvelope | null = null;
const SYNC_CACHE_TTL = 30 * 60 * 1000; // 30 minutes

// Cache for individual licitación details by code (lasts 24 hours)
const detailCache = new Map<string, CacheEnvelope>();
const DETAIL_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

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
    const cached = detailCache.get(codigo);
    const now = Date.now();
    if (cached && now - cached.timestamp < DETAIL_CACHE_TTL) {
      return NextResponse.json(cached.data);
    }

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

    detailCache.set(codigo, { data, timestamp: now });
    return NextResponse.json(data);
  }

  // =============================================
  // MODE: legacy single code lookup (backward compat)
  // =============================================
  if (codigo) {
    const cached = detailCache.get(codigo);
    const now = Date.now();
    if (cached && now - cached.timestamp < DETAIL_CACHE_TTL) {
      return NextResponse.json(cached.data);
    }

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

    detailCache.set(codigo, { data, timestamp: now });
    return NextResponse.json(data);
  }

  // =============================================
  // MODE: sync — Fetch ALL active licitaciones (estado=activas)
  // And fetch details for candidates in batches to prevent rate limit.
  // =============================================
  try {
    const now = Date.now();
    if (syncCache && now - syncCache.timestamp < SYNC_CACHE_TTL) {
      console.log('Returning cached sync data');
      return NextResponse.json(syncCache.data);
    }

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

    // Sort candidates by FechaCierre ascending (soonest first)
    candidates.sort((a, b) => {
      const dateA = a.FechaCierre ? new Date(a.FechaCierre).getTime() : Infinity;
      const dateB = b.FechaCierre ? new Date(b.FechaCierre).getTime() : Infinity;
      return dateA - dateB;
    });

    // Limit detailed enrichment to top 25 to avoid overwhelming rate limits & CPU
    const LIMIT = 25;
    const candidatesToFetch = candidates.slice(0, LIMIT);

    // 3. Pre-populate map with basic data
    const enrichedMap = new Map<string, any>();
    for (const item of candidatesToFetch) {
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

    // 4. Batch query details for candidatesToFetch, using detailCache if available
    const batchSize = 12;
    for (let i = 0; i < candidatesToFetch.length; i += batchSize) {
      const batch = candidatesToFetch.slice(i, i + batchSize);
      const promises = batch.map(async (item) => {
        const cached = detailCache.get(item.CodigoExterno);
        if (cached && now - cached.timestamp < DETAIL_CACHE_TTL) {
          return cached.data;
        }
        
        const fetched = await safeFetch(`${BASE_URL}/licitaciones.json?codigo=${item.CodigoExterno}&ticket=${TICKET}`, 4000);
        if (fetched?.Listado && Array.isArray(fetched.Listado) && fetched.Listado.length > 0) {
          detailCache.set(item.CodigoExterno, { data: fetched, timestamp: Date.now() });
        }
        return fetched;
      });
      
      const results = await Promise.all(promises);
      results.forEach((res, index) => {
        const originalItem = batch[index];
        if (res?.Listado && Array.isArray(res.Listado) && res.Listado.length > 0) {
          const detail = res.Listado[0];
          enrichedMap.set(originalItem.CodigoExterno, detail);
        }
      });

      // Brief delay between batches
      if (i + batchSize < candidatesToFetch.length) {
        await new Promise(resolve => setTimeout(resolve, 80));
      }
    }

    const finalEnrichedList = Array.from(enrichedMap.values());

    const resultPayload = {
      Listado: finalEnrichedList,
      Meta: {
        totalFromApi,
        candidatesFiltered: candidates.length,
        totalReturned: finalEnrichedList.length,
        source: 'estado=activas + cache-friendly batch enrichment',
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

