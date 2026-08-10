import { NextRequest, NextResponse } from 'next/server';
import { put, get } from '@vercel/blob';

// ═══════════════════════════════════════════════════════════════════════════
// Persistencia real de postulaciones en Vercel Blob (store "bidcoop-data").
// Antes vivían solo en localStorage del navegador — visibles solo en el mismo
// computador. Este endpoint las guarda en el servidor para que cualquier
// computador que entre a la plataforma vea las mismas postulaciones.
// ═══════════════════════════════════════════════════════════════════════════

const PATHNAME = 'data/postulaciones.json';

// Siempre leer/escribir en vivo — nunca servir una respuesta cacheada de este
// endpoint (los datos cambian con cada postulación desde cualquier computador).
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const result = await get(PATHNAME, { access: 'private' });
    if (!result || result.statusCode !== 200) {
      return NextResponse.json([]);
    }
    const text = await new Response(result.stream).text();
    const parsed = JSON.parse(text);
    return NextResponse.json(Array.isArray(parsed) ? parsed : []);
  } catch {
    // Aún no existe el blob (nunca se ha guardado ninguna postulación) —
    // estado inicial honesto: lista vacía, no un error.
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Se espera un array de postulaciones.' },
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
