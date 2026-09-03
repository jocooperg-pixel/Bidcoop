import { NextRequest, NextResponse } from 'next/server';
import { mockOportunidades } from '@/app/mockData';

// ═══════════════════════════════════════════════════════════════════════════
// "Paquete de postulación": entrega los datos reales de una oportunidad ya
// armados para que la extensión de navegador de BidCoop los use al prellenar
// el formulario oficial de postulación en mercadopublico.cl. Este endpoint
// NUNCA envía nada a Mercado Público — solo lee y expone datos que BidCoop
// ya tiene. El envío real de la oferta sigue siendo 100% manual, dentro del
// portal oficial, fuera del control de BidCoop (ver Postulacion.estado en
// types.ts: solo pasa a 'Enviada' por confirmación humana explícita).
//
// Autenticación: token compartido simple (POSTULACION_API_TOKEN), consistente
// con el resto de las API routes de este proyecto interno de 2-3 personas —
// no hay sesión de usuario aquí porque quien llama es la extensión, no un
// navegador con cookie de BidCoop.
// ═══════════════════════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function getFichaUrl(codigo: string, sourceUrl?: string): string {
  if (sourceUrl) return sourceUrl;
  const code = (codigo || '').toUpperCase();
  return `https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${code}`;
}

export async function GET(request: NextRequest) {
  const expectedToken = process.env.POSTULACION_API_TOKEN;
  if (!expectedToken) {
    return NextResponse.json(
      { error: 'POSTULACION_API_TOKEN no está configurado en el servidor.' },
      { status: 500 }
    );
  }

  const authHeader = request.headers.get('authorization') || '';
  const providedToken = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (providedToken !== expectedToken) {
    return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  }

  const codigo = request.nextUrl.searchParams.get('codigo');
  if (!codigo) {
    return NextResponse.json(
      { error: 'Falta el parámetro "codigo".' },
      { status: 400 }
    );
  }

  const op = mockOportunidades.find(
    (o) => (o.codigo || '').toUpperCase() === codigo.toUpperCase()
  );

  if (!op) {
    return NextResponse.json(
      { error: `No se encontró ninguna oportunidad activa con código ${codigo} en BidCoop.` },
      { status: 404 }
    );
  }

  // Regla comercial fija (94% del presupuesto público) — la misma que ya se
  // usa en los reportes por correo (ReportsNotificationsModule.tsx,
  // send-email-report/route.ts). No es un cálculo de margen real: BidCoop no
  // tiene datos de costos ni de comportamiento de competidores.
  const precioReferencia94 = Math.round(op.monto * 0.94);

  return NextResponse.json({
    codigo: op.codigo,
    titulo: op.titulo,
    organismo: op.organismo,
    organismoRut: op.organismoRut,
    modalidad: op.modalidad,
    monto: op.monto,
    precioReferencia94,
    precioReferencia94Nota:
      'Regla comercial fija (94% del presupuesto público informado por el organismo), NO es un cálculo de margen real. Para margen real, usa el Simulador de Flete y Márgenes en BidCoop (Negocios → Postulación).',
    itemsOfertados: (op.items || []).map((item) => ({
      sku: item.sku,
      producto: item.producto,
      cantidad: item.cantidad,
      precioOferta: item.precioUnitario
    })),
    fechaCierre: op.fechaCierre,
    fichaUrl: getFichaUrl(op.codigo, op.sourceUrl),
    generadoEn: new Date().toISOString()
  });
}
