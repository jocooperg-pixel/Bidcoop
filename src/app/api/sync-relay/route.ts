/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

// Relay muy acotado para que scripts/sync_mercadopublico.py (corre en
// GitHub Actions) pueda llegar a la API de licitaciones de Mercado Público
// sin usar la IP del runner de GitHub Actions directamente.
//
// Motivo: confirmado en vivo (run #61/#62 del workflow, con reintentos y
// esperas reales de hasta 2.5 minutos entre intentos) que api.mercadopublico.cl
// responde 200 OK con Listado vacío específicamente desde las IPs de los
// runners de GitHub Actions — nunca desde una IP normal ni desde Vercel,
// donde este mismo endpoint funciona bien en producción. En vez de mover
// todo el motor de sync (reconciliación, matching por catálogo, exclusión
// de datos sin verificar, escritura de mockData.ts) a Vercel — reescritura
// grande y riesgosa de un script ya probado — este relay solo reenvía la
// llamada puntual a la API pública, sin tocar el resto del pipeline.
//
// Deliberadamente NO acepta una URL arbitraria del llamador (evita volverse
// un proxy abierto): solo construye la URL de licitaciones.json con un
// allowlist fijo de parámetros. Nunca sirve datos privados — todo lo que
// expone es exactamente lo que api.mercadopublico.cl ya expone públicamente
// con el mismo ticket, que además ya es público en este mismo repositorio
// (ver src/app/api/mercadopublico/route.ts). Excluido de la sesión
// requerida por proxy.ts porque lo llama un script externo, no un usuario
// logueado — ver el comentario en proxy.ts.

const TICKET = process.env.MERCADOPUBLICO_TICKET || 'F8537A18-6766-4DEF-9E59-426B4FEE2844';
const BASE_URL = 'https://api.mercadopublico.cl/servicios/v1/publico';

async function safeFetch(url: string, timeout = 25000): Promise<any> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json', 'User-Agent': 'BidCoop-Relay/1.0' },
      signal: controller.signal
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(id);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const estado = searchParams.get('estado');
  const pagina = searchParams.get('pagina');
  const fecha = searchParams.get('fecha');
  const codigo = searchParams.get('codigo');

  const params = new URLSearchParams({ ticket: TICKET });
  if (estado) params.set('estado', estado);
  if (pagina) params.set('pagina', pagina);
  if (fecha) params.set('fecha', fecha);
  if (codigo) params.set('codigo', codigo);

  const data = await safeFetch(`${BASE_URL}/licitaciones.json?${params.toString()}`);

  if (data === null) {
    return NextResponse.json({ error: 'No se pudo obtener respuesta de Mercado Público.' }, { status: 502 });
  }

  return NextResponse.json(data);
}
