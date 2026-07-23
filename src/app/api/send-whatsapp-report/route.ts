import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      phone = '56977222179, 56984093057, 56947479588, 56963084062',
      empresa = 'Consolidado Holding',
      oportunidades = [],
      instanceId = process.env.ULTRAMSG_INSTANCE_ID || 'instance185972',
      token = process.env.ULTRAMSG_TOKEN || 'j5tw4912zijm9wg6',
      twilioSid = process.env.TWILIO_ACCOUNT_SID || '',
      twilioToken = process.env.TWILIO_AUTH_TOKEN || '',
      twilioFrom = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886'
    } = body;

    const today = new Date().toISOString().split('T')[0];
    
    // Filter active published opportunities
    const activeOps = oportunidades.filter((op: any) => {
      const matchCompany = empresa === 'Consolidado Holding' || empresa === 'Todas' || op.empresaMatch === empresa;
      const matchEstado = op.estado === 'Publicada' || !op.estado;
      return matchCompany && matchEstado;
    });

    const totalOps = activeOps.length;
    const totalMonto = activeOps.reduce((acc: number, curr: any) => acc + (curr.monto || 0), 0);

    // Group active opportunities by Rubro
    const opsByRubro: Record<string, any[]> = {};
    activeOps.forEach((op: any) => {
      const rubroName = op.rubro || 'Aseo e Higiene';
      if (!opsByRubro[rubroName]) opsByRubro[rubroName] = [];
      opsByRubro[rubroName].push(op);
    });

    // Format WhatsApp Push Text Message
    let messageText = `🚨 *BidCoop Reports — Alerta Push 08:00 AM* 🇨🇱\n\n`;
    messageText += `Hola, aquí está el consolidado de *Compras Ágiles Vigentes por Rubro* para *${empresa}* (${today}):\n\n`;
    messageText += `📊 *Resumen Ejecutivo*:\n`;
    messageText += `• Total Procesos Vigentes: *${totalOps} Compras Ágiles*\n`;
    messageText += `• Presupuesto Total: *$${totalMonto.toLocaleString('es-CL')} CLP*\n\n`;

    // Grouped details by Rubro
    Object.keys(opsByRubro).forEach((rubro) => {
      const ops = opsByRubro[rubro];
      const rubroTotal = ops.reduce((acc, curr) => acc + (curr.monto || 0), 0);
      messageText += `📂 *RUBRO: ${rubro.toUpperCase()}* (${ops.length} procesos - $${rubroTotal.toLocaleString('es-CL')} CLP):\n`;

      ops.slice(0, 3).forEach((op: any, idx: number) => {
        const winPrice = Math.round((op.monto || 0) * 0.94);
        messageText += ` ${idx + 1}. *[${op.codigo}]* ${(op.titulo || '').slice(0, 40)}...\n    🏛️ ${op.organismo}\n    💰 Presupuesto: $${(op.monto || 0).toLocaleString('es-CL')} CLP\n    🎯 Precio AI: $${winPrice.toLocaleString('es-CL')} CLP | Cierre: ${op.fechaCierre}\n`;
      });
      messageText += `\n`;
    });

    messageText += `💡 *Win-Rate AI*: Ofertar al 94% del presupuesto estimado para maximizar adjudicación.\n\n`;
    messageText += `🔗 Descarga el reporte Excel completo en: https://bidcoop.vercel.app\n`;
    messageText += `_BidCoop Automated Bot Service © 2026_`;

    // Support multiple destination numbers separated by comma, newline or semicolon
    const phonesList = phone
      .split(/[\n,;]+/)
      .map((p: string) => p.replace(/[^0-9]/g, ''))
      .filter((p: string) => p.length >= 8);

    if (phonesList.length === 0) {
      phonesList.push('56977222179');
    }

    let pushStatus = '';
    let provider = twilioSid && twilioToken ? 'Twilio WhatsApp Cloud API' : 'UltraMsg WhatsApp Cloud API';
    const results: string[] = [];

    // Loop through each destination phone number
    for (const cleanPhone of phonesList) {
      if (twilioSid && twilioToken) {
        const authHeader = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
        const twilioRes = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            From: twilioFrom.startsWith('whatsapp:') ? twilioFrom : `whatsapp:${twilioFrom}`,
            To: `whatsapp:+${cleanPhone}`,
            Body: messageText
          })
        });
        const data = await twilioRes.json();
        if (data.sid) {
          results.push(`+${cleanPhone} (Twilio OK)`);
        } else {
          results.push(`+${cleanPhone} (Error: ${data.message || 'Twilio Fail'})`);
        }
      } else if (instanceId && token) {
        const ultramsgRes = await fetch(`https://api.ultramsg.com/${instanceId}/messages/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            token,
            to: cleanPhone,
            body: messageText
          })
        });
        const data = await ultramsgRes.json();
        if (data.sent === 'true' || data.id) {
          results.push(`+${cleanPhone} (UltraMsg OK)`);
        } else {
          results.push(`+${cleanPhone} (Error: ${data.error || 'Fail'})`);
        }
      }
    }

    pushStatus = `¡Notificación Push enviada con éxito vía ${provider} a ${results.length} números: ${results.join(', ')}!`;

    return NextResponse.json({
      success: true,
      sender: 'BidCoop Reports Bot',
      destination: results.join(', '),
      totalDestinations: results.length,
      provider,
      pushStatus,
      totalOps,
      totalMonto,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error sending WhatsApp push message:', error);
    return NextResponse.json(
      { error: `Error enviando WhatsApp Push: ${error.message}` },
      { status: 500 }
    );
  }
}
