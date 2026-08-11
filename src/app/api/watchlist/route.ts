import { NextRequest, NextResponse } from 'next/server';
import { put, get } from '@vercel/blob';

// ═══════════════════════════════════════════════════════════════════════════
// Persistencia real de la watchlist ("Seguir Oportunidad") en Vercel Blob
// (store "bidcoop-data"), mismo patrón que /api/postulaciones. Antes el botón
// "Seguir Oportunidad" solo actualizaba un useState local en SearchModule —
// se perdía al recargar la página y no existía fuera de esa pestaña del
// navegador. Este endpoint la guarda en el servidor para que sea visible
// desde cualquier computador.
// ═══════════════════════════════════════════════════════════════════════════

export interface WatchlistEntry {
  oportunidadId: string;
  fechaAgregada: string;
}

const PATHNAME = 'data/watchlist.json';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const result = await get(PATHNAME, { access: 'private' });
    if (!result || result.statusCode !== 200) {
      console.warn('[watchlist] get() sin statusCode 200:', result?.statusCode);
      return NextResponse.json([]);
    }
    const text = await new Response(result.stream).text();
    const parsed = JSON.parse(text);
    return NextResponse.json(Array.isArray(parsed) ? parsed : []);
  } catch (err: unknown) {
    // Aún no existe el blob (nunca se ha seguido ninguna oportunidad) es un
    // caso honesto (lista vacía) — pero cualquier OTRO error se loguea para
    // poder diagnosticarlo en vez de esconderlo silenciosamente.
    console.error('[watchlist] GET falló:', err instanceof Error ? err.message : err);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Se espera un array de entradas de watchlist.' },
        { status: 400 }
      );
    }

    await put(PATHNAME, JSON.stringify(body, null, 2), {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true
    });

    return NextResponse.json({ success: true, count: body.length });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: `No se pudo guardar: ${msg}` }, { status: 500 });
  }
}
