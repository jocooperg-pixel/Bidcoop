import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/blob';
import { mockOportunidades } from '../../mockData';
import type { Postulacion } from '../../types';

// ═══════════════════════════════════════════════════════════════════════════
// Asistente conversacional BidCoop — responde ÚNICAMENTE con datos reales ya
// sincronizados desde Mercado Público (mismo mockOportunidades.ts que usa el
// resto de la plataforma) y postulaciones/watchlist reales guardadas en
// Vercel Blob. El prompt de sistema prohíbe explícitamente inventar montos,
// plazos, personas, RUTs o cualquier dato que no esté en el bloque de
// contexto — mismo principio "no inventar" que rige toda la plataforma.
// ═══════════════════════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ANTHROPIC_MODEL = 'claude-haiku-4-5-20251001';

async function loadJsonBlob<T>(pathname: string, fallback: T): Promise<T> {
  try {
    const result = await get(pathname, { access: 'private' });
    if (!result || result.statusCode !== 200) return fallback;
    const text = await new Response(result.stream).text();
    const parsed = JSON.parse(text);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function buildContext(postulaciones: Postulacion[], watchlist: { oportunidadId: string }[]) {
  const now = new Date();
  const activas = mockOportunidades.filter(o => o.estado === 'Publicada');

  const conHoras = activas
    .map(o => {
      if (!o.fechaCierre) return null;
      const cierre = new Date(o.fechaCierre);
      if (isNaN(cierre.getTime())) return null;
      const horas = (cierre.getTime() - now.getTime()) / (1000 * 60 * 60);
      return horas >= 0 ? { op: o, horas } : null;
    })
    .filter((x): x is { op: (typeof mockOportunidades)[number]; horas: number } => x !== null)
    .sort((a, b) => a.horas - b.horas);

  const cierresProximos7d = conHoras.filter(x => x.horas <= 168);

  const topMonto = [...activas]
    .filter(o => (o.monto || 0) > 0)
    .sort((a, b) => (b.monto || 0) - (a.monto || 0))
    .slice(0, 10);

  const watchlistIds = new Set(watchlist.map(w => w.oportunidadId));
  const seguidas = activas.filter(o => watchlistIds.has(o.id));

  const postuladasCount = postulaciones.length;
  const adjudicadasCount = activas.filter(o => o.estado === 'Adjudicada').length;

  const resumen = {
    fechaHoy: now.toISOString().slice(0, 10),
    totalOportunidadesActivas: activas.length,
    cierresProximos7Dias: cierresProximos7d.length,
    cierresProximosDetalle: cierresProximos7d.slice(0, 20).map(x => ({
      codigo: x.op.codigo,
      titulo: x.op.titulo,
      organismo: x.op.organismo,
      monto: x.op.monto || null,
      matchScore: x.op.matchScore,
      horasHastaCierre: Math.round(x.horas),
      empresaMatch: x.op.empresaMatch || null
    })),
    top10PorMonto: topMonto.map(o => ({
      codigo: o.codigo,
      titulo: o.titulo,
      organismo: o.organismo,
      monto: o.monto,
      matchScore: o.matchScore,
      empresaMatch: o.empresaMatch || null,
      fechaCierre: o.fechaCierre
    })),
    oportunidadesSeguidasPorElUsuario: seguidas.map(o => ({
      codigo: o.codigo,
      titulo: o.titulo,
      fechaCierre: o.fechaCierre,
      estado: o.estado
    })),
    postulacionesRealizadas: postuladasCount,
    oportunidadesAdjudicadasEnPlataforma: adjudicadasCount
  };

  return JSON.stringify(resumen, null, 2);
}

const SYSTEM_PROMPT = `Eres el Asistente BidCoop, integrado en una plataforma real de inteligencia comercial para licitaciones de Mercado Público (Chile).

REGLA ABSOLUTA — NUNCA LA ROMPAS: solo puedes usar los datos que aparecen literalmente en el bloque "CONTEXTO REAL" que recibes en cada mensaje. Ese bloque viene directo de la sincronización real con Mercado Público y de la base de datos de la plataforma — nunca de tu conocimiento general ni de tu entrenamiento.

- Si te preguntan algo que no está en el CONTEXTO REAL (un monto, un plazo, un dato de contacto, una probabilidad, una recomendación de precio, un competidor, etc.), responde explícitamente que no tienes esa información disponible en este momento y, si corresponde, sugiere revisar la ficha oficial en Mercado Público. NUNCA inventes ni estimes un valor que no esté en el contexto.
- No des consejos de precios, montos a ofertar ni probabilidades de adjudicación — no hay datos reales para respaldar eso.
- Responde en español, de forma breve y orientada a la acción: qué pasó, qué significa, y qué debería hacer el usuario hoy.
- Usa los códigos de licitación reales cuando los menciones, no los inventes.
- Si el usuario pregunta algo fuera del ámbito de licitaciones/compras públicas, redirígelo amablemente al propósito de la plataforma.`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'El asistente aún no está configurado: falta la variable de entorno ANTHROPIC_API_KEY en el proyecto de Vercel.' },
        { status: 503 }
      );
    }

    const body = await request.json().catch(() => null);
    const message: string = body?.message;
    const history: Array<{ role: 'user' | 'assistant'; content: string }> = Array.isArray(body?.history) ? body.history : [];

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Falta el mensaje.' }, { status: 400 });
    }

    const [postulaciones, watchlist] = await Promise.all([
      loadJsonBlob<Postulacion[]>('data/postulaciones.json', []),
      loadJsonBlob<{ oportunidadId: string }[]>('data/watchlist.json', [])
    ]);

    const contexto = buildContext(Array.isArray(postulaciones) ? postulaciones : [], Array.isArray(watchlist) ? watchlist : []);

    const messages = [
      ...history.slice(-10).map(h => ({ role: h.role, content: h.content })),
      {
        role: 'user' as const,
        content: `CONTEXTO REAL (datos sincronizados de Mercado Público, JSON):\n${contexto}\n\nPregunta del usuario: ${message}`
      }
    ];

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages
      })
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text().catch(() => '');
      console.error('[assistant] Anthropic API error:', anthropicRes.status, errText);
      return NextResponse.json({ error: 'No se pudo generar la respuesta en este momento. Intenta nuevamente.' }, { status: 502 });
    }

    const data = await anthropicRes.json();
    const reply = data?.content?.[0]?.text || 'No obtuve una respuesta. Intenta reformular la pregunta.';

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[assistant] error:', msg);
    return NextResponse.json({ error: 'Ocurrió un error al procesar tu mensaje.' }, { status: 500 });
  }
}
