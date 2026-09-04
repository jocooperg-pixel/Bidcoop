import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/blob';
import { prisma } from '@bidcoop/database';
import { mockOportunidades } from '../../mockData';
import type { Postulacion } from '../../types';
import syncMeta from '../../../../data/sync_meta.json';

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

function countBy<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = keyFn(item) || 'Sin dato';
    out[key] = (out[key] || 0) + 1;
  }
  return out;
}

async function buildContext(
  postulaciones: Postulacion[],
  watchlist: { oportunidadId: string }[],
  totalCompradores: number,
  totalProveedores: number
) {
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
    .slice(0, 15);

  const watchlistIds = new Set(watchlist.map(w => w.oportunidadId));
  const seguidas = activas.filter(o => watchlistIds.has(o.id));

  const montoTotalActivoCLP = activas.reduce((sum, o) => sum + (o.monto || 0), 0);

  const adjudicadasReales = mockOportunidades
    .filter(o => o.estado === 'Adjudicada')
    .slice(0, 15)
    .map(o => ({
      codigo: o.codigo,
      titulo: o.titulo,
      organismo: o.organismo,
      proveedorAdjudicado: o.proveedorAdjudicado || null,
      monto: o.monto || null
    }));

  const postulacionesPorEstado = countBy(postulaciones, p => p.estado);

  const resumen = {
    metaSincronizacion: {
      fechaHoy: now.toISOString().slice(0, 10),
      ultimaSincronizacionExitosa: syncMeta.ultimaSincronizacionExitosa,
      totalRegistrosEnPlataforma: syncMeta.registrosEnPlataforma,
      fuente: 'API oficial de Mercado Público (ChileCompra), sincronizada automáticamente cada 3 horas'
    },
    totalOportunidadesActivas: activas.length,
    montoTotalActivoEstimadoCLP: montoTotalActivoCLP,
    desglosePorModalidad: countBy(activas, o => o.modalidad),
    desglosePorEmpresaMatch: countBy(activas, o => o.empresaMatch || 'Sin match de catálogo'),
    desglosePorRegion: countBy(activas, o => o.region),
    desglosePorRubro: countBy(activas, o => o.rubro),
    cierresProximos7Dias: cierresProximos7d.length,
    cierresProximosDetalle: cierresProximos7d.slice(0, 30).map(x => ({
      codigo: x.op.codigo,
      titulo: x.op.titulo,
      organismo: x.op.organismo,
      modalidad: x.op.modalidad,
      region: x.op.region,
      monto: x.op.monto || null,
      matchScore: x.op.matchScore,
      horasHastaCierre: Math.round(x.horas),
      empresaMatch: x.op.empresaMatch || null
    })),
    top15PorMonto: topMonto.map(o => ({
      codigo: o.codigo,
      titulo: o.titulo,
      organismo: o.organismo,
      modalidad: o.modalidad,
      region: o.region,
      monto: o.monto,
      matchScore: o.matchScore,
      empresaMatch: o.empresaMatch || null,
      fechaCierre: o.fechaCierre
    })),
    procesosAdjudicadosConDatosReales: adjudicadasReales,
    oportunidadesSeguidasPorElUsuario: seguidas.map(o => ({
      codigo: o.codigo,
      titulo: o.titulo,
      fechaCierre: o.fechaCierre,
      estado: o.estado
    })),
    postulaciones: {
      total: postulaciones.length,
      porEstado: postulacionesPorEstado
    },
    directorioReal: {
      totalCompradoresRegistrados: totalCompradores,
      totalProveedoresRegistrados: totalProveedores
    }
  };

  return JSON.stringify(resumen, null, 2);
}

// Módulo "Preguntas IA con datos reales del proceso": la API pública de
// Mercado Público NO expone URLs descargables de bases técnicas/anexos
// (confirmado leyendo el diccionario de datos oficial completo, 97 campos)
// — así que este bloque nunca incluye ni pretende haber leído un PDF. Solo
// arma los campos estructurados reales que BidCoop ya capturó para ese
// proceso específico (descripción, ítems, criterios, cronograma), para que
// el asistente pueda responder preguntas puntuales sobre ese proceso en
// vez de solo agregados generales.
function buildOportunidadDetailContext(codigo: string): string | null {
  const op = mockOportunidades.find(o => o.codigo.toUpperCase() === codigo.toUpperCase());
  if (!op) return null;

  const detalle = {
    codigo: op.codigo,
    titulo: op.titulo,
    organismo: op.organismo,
    organismoRut: op.organismoRut || null,
    modalidad: op.modalidad,
    estado: op.estado,
    region: op.region,
    monto: op.monto || null,
    fechaPublicacion: op.fechaPublicacion,
    fechaCierre: op.fechaCierre,
    descripcion: op.descripcion || 'No informado por Mercado Público.',
    items: (op.items || []).map(it => ({
      sku: it.sku,
      producto: it.producto,
      cantidad: it.cantidad,
      unidadMedida: it.unidadMedida || null,
      especificacionTecnica: it.especificacionTecnica || null
    })),
    criteriosEvaluacion: op.criteriosEvaluacion || [],
    cronograma: op.cronograma || [],
    fichaOficialUrl: op.sourceUrl || null,
    // Límite explícito para que el asistente nunca dé a entender que leyó
    // un PDF de bases o hizo un análisis legal de admisibilidad.
    limitacionReal: 'Este bloque contiene solo los campos estructurados que la API pública de Mercado Público entrega — no incluye el PDF de bases técnicas ni anexos (esa API no los expone). No es un análisis legal de admisibilidad.'
  };

  return JSON.stringify(detalle, null, 2);
}

const SYSTEM_PROMPT = `Eres el Asistente BidCoop, integrado en una plataforma real de inteligencia comercial para licitaciones de Mercado Público (Chile).

REGLA ABSOLUTA — NUNCA LA ROMPAS: solo puedes usar los datos que aparecen literalmente en el bloque "CONTEXTO REAL" que recibes en cada mensaje. Ese bloque viene directo de la sincronización real con Mercado Público y de la base de datos de la plataforma — nunca de tu conocimiento general ni de tu entrenamiento.

- Si te preguntan algo que no está en el CONTEXTO REAL (un monto, un plazo, un dato de contacto, una probabilidad, una recomendación de precio, un competidor, etc.), responde explícitamente que no tienes esa información disponible en este momento y, si corresponde, sugiere revisar la ficha oficial en Mercado Público. NUNCA inventes ni estimes un valor que no esté en el contexto.
- No des consejos de precios, montos a ofertar ni probabilidades de adjudicación — no hay datos reales para respaldar eso.
- Responde en español, de forma breve y orientada a la acción: qué pasó, qué significa, y qué debería hacer el usuario hoy.
- Usa los códigos de licitación reales cuando los menciones, no los inventes.
- Si el usuario pregunta algo fuera del ámbito de licitaciones/compras públicas, redirígelo amablemente al propósito de la plataforma.

Cuando el mensaje incluya un bloque "DETALLE DEL PROCESO" (datos reales de un proceso específico): puedes responder con esos campos (descripción, ítems, criterios de evaluación, cronograma). IMPORTANTE — nunca digas que "leíste las bases" ni que hiciste un "análisis de admisibilidad" o "de riesgos legales": la API pública de Mercado Público no expone el PDF de bases técnicas ni anexos, así que ese bloque solo trae los campos estructurados oficiales, nunca el documento completo. Si te preguntan por riesgos de inadmisibilidad, solo puedes señalar algo verificable en esos campos (ej. el proceso cierra en menos de 48 horas, o el monto no está informado) — nunca una lista genérica de riesgos legales que no puedas respaldar con ese dato real.`;

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
    const codigo: string | undefined = typeof body?.codigo === 'string' && body.codigo.trim() ? body.codigo.trim() : undefined;

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Falta el mensaje.' }, { status: 400 });
    }

    const [postulaciones, watchlist, totalCompradores, totalProveedores] = await Promise.all([
      loadJsonBlob<Postulacion[]>('data/postulaciones.json', []),
      loadJsonBlob<{ oportunidadId: string }[]>('data/watchlist.json', []),
      prisma.comprador.count().catch(() => 0),
      prisma.proveedor.count().catch(() => 0)
    ]);

    const contexto = await buildContext(
      Array.isArray(postulaciones) ? postulaciones : [],
      Array.isArray(watchlist) ? watchlist : [],
      totalCompradores,
      totalProveedores
    );

    const detalleProceso = codigo ? buildOportunidadDetailContext(codigo) : null;
    const bloqueDetalle = detalleProceso
      ? `\n\nDETALLE DEL PROCESO (código ${codigo}, datos reales de Mercado Público, JSON):\n${detalleProceso}`
      : codigo
        ? `\n\nDETALLE DEL PROCESO: el código ${codigo} no se encontró en la base actual de BidCoop.`
        : '';

    const messages = [
      ...history.slice(-10).map(h => ({ role: h.role, content: h.content })),
      {
        role: 'user' as const,
        content: `CONTEXTO REAL (datos sincronizados de Mercado Público, JSON):\n${contexto}${bloqueDetalle}\n\nPregunta del usuario: ${message}`
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
