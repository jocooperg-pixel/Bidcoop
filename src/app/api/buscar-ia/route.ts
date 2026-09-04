import { NextRequest, NextResponse } from 'next/server';
import { obtenerSesionDesdeRequest } from '../../utils/session';

// ═══════════════════════════════════════════════════════════════════════════
// Búsqueda semántica asistida por IA sobre el buscador de BidCoop — mismo
// patrón que src/app/api/assistant/route.ts (fetch directo a la API de
// Anthropic, modelo claude-haiku-4-5-20251001). NO amplía el universo de
// datos: recibe únicamente las oportunidades que el frontend ya filtró por
// catálogo (las mismas ~1300 que ve el buscador normal), y le pide a Claude
// que seleccione y ordene por relevancia semántica los códigos que calzan
// con la consulta en lenguaje libre del usuario — nunca que genere,
// describa o invente una oportunidad nueva. La respuesta se valida contra
// la lista real recibida antes de devolverla: cualquier código que Claude
// hubiera alucinado (no presente en la lista enviada) se descarta.
// ═══════════════════════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ANTHROPIC_MODEL = 'claude-haiku-4-5-20251001';
const MAX_OPORTUNIDADES = 1500;
const MAX_RESULTADOS = 80;

interface OportunidadLigera {
  codigo: string;
  titulo: string;
  organismo: string;
  rubro?: string;
  region?: string;
  monto?: number | null;
  modalidad?: string;
}

const SYSTEM_PROMPT = `Eres un motor de búsqueda semántica dentro de BidCoop, una plataforma real de licitaciones de Mercado Público (Chile).

Recibes una consulta en lenguaje libre y una lista JSON de oportunidades reales (código, título, organismo, rubro, región, monto, modalidad). Tu única tarea es seleccionar, de ESA lista y solo de ESA lista, los códigos que calzan semánticamente con la consulta, ordenados de mayor a menor relevancia.

REGLAS ABSOLUTAS:
- Responde EXCLUSIVAMENTE con un array JSON de strings (los códigos), sin texto adicional, sin markdown, sin explicación. Ejemplo válido: ["1234-56-COT26","5678-90-LE26"]
- Cada código que devuelvas debe existir literalmente en la lista recibida. Nunca inventes, completes ni modifiques un código.
- Si ninguna oportunidad calza con la consulta, responde exactamente: []
- Nunca devuelvas más de ${MAX_RESULTADOS} códigos.`;

export async function POST(request: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(request);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'La búsqueda con IA aún no está configurada: falta la variable de entorno ANTHROPIC_API_KEY en el proyecto de Vercel.' },
        { status: 503 }
      );
    }

    const body = await request.json().catch(() => null);
    const consulta: string = typeof body?.consulta === 'string' ? body.consulta.trim() : '';
    const oportunidades: OportunidadLigera[] = Array.isArray(body?.oportunidades) ? body.oportunidades : [];
    // Configuración de Búsqueda (estilo LicitaPyme): 0.0 "Creativo" a 1.0
    // "Conservador", mapeado directo al parámetro real de la API de
    // Anthropic (rango 0-1) — nunca cambia qué oportunidades existen, solo
    // qué tan literal/libre es la interpretación semántica de la consulta.
    const temperaturaRaw = typeof body?.temperatura === 'number' ? body.temperatura : 0.5;
    const temperatura = Math.min(1, Math.max(0, temperaturaRaw));

    if (!consulta) {
      return NextResponse.json({ error: 'Falta la consulta de búsqueda.' }, { status: 400 });
    }
    if (consulta.length > 300) {
      return NextResponse.json({ error: 'La consulta es demasiado larga (máximo 300 caracteres).' }, { status: 400 });
    }
    if (oportunidades.length === 0) {
      return NextResponse.json({ codigos: [] });
    }

    const listaAcotada = oportunidades.slice(0, MAX_OPORTUNIDADES);
    const codigosValidos = new Set(listaAcotada.map(o => o.codigo));

    const listaLigera = listaAcotada.map(o => ({
      codigo: o.codigo,
      titulo: o.titulo,
      organismo: o.organismo,
      rubro: o.rubro || null,
      region: o.region || null,
      monto: o.monto ?? null,
      modalidad: o.modalidad || null
    }));

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 2048,
        temperature: temperatura,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: `Consulta del usuario: "${consulta}"\n\nOportunidades reales disponibles (JSON):\n${JSON.stringify(listaLigera)}`
          }
        ]
      })
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text().catch(() => '');
      console.error('[buscar-ia] Anthropic API error:', anthropicRes.status, errText);
      return NextResponse.json({ error: 'No se pudo completar la búsqueda con IA en este momento. Intenta nuevamente.' }, { status: 502 });
    }

    const data = await anthropicRes.json();
    const textoRespuesta: string = data?.content?.[0]?.text || '[]';

    let codigosDevueltos: unknown;
    try {
      codigosDevueltos = JSON.parse(textoRespuesta);
    } catch {
      const match = textoRespuesta.match(/\[[\s\S]*\]/);
      codigosDevueltos = match ? JSON.parse(match[0]) : [];
    }

    const codigosFiltrados = Array.isArray(codigosDevueltos)
      ? codigosDevueltos.filter((c): c is string => typeof c === 'string' && codigosValidos.has(c)).slice(0, MAX_RESULTADOS)
      : [];

    return NextResponse.json({ codigos: codigosFiltrados });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[buscar-ia] error:', msg);
    return NextResponse.json({ error: 'Ocurrió un error al procesar la búsqueda con IA.' }, { status: 500 });
  }
}
