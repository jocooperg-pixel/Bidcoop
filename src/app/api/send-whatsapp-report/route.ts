import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      phone = '56977222179',
      empresa = 'Consolidado Holding',
      oportunidades = [],
      instanceId = process.env.ULTRAMSG_INSTANCE_ID || 'instance185972',
      token = process.env.ULTRAMSG_TOKEN || 'j5tw4912zijm9wg6',
      twilioSid = process.env.TWILIO_ACCOUNT_SID,
      twilioToken = process.env.TWILIO_AUTH_TOKEN,
      twilioFrom = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886'
    } = body;

    const today = new Date().toISOString().split('T')[0];
    const totalOps = oportunidades.length;
    const totalMonto = oportunidades.reduce((acc: number, curr: any) => acc + (curr.monto || 0), 0);

    // Format WhatsApp Push Text Message
    let messageText = `🚨 *BidCoop Reports — Alerta Push 08:00 AM* 🇨🇱\n\n`;
    messageText += `Hola *Jonathan Cooper*, aquí está la actualización automatizada para *${empresa}* (${today}):\n\n`;
    messageText += `📊 *Resumen Ejecutivo*:\n`;
    messageText += `• Compras Ágiles Activas: *${totalOps} procesos*\n`;
    messageText += `• Presupuesto Total: *$${totalMonto.toLocaleString('es-CL')} CLP*\n\n`;
    messageText += `📋 *Top Compras Ágiles Destacadas*:\n`;

    oportunidades.slice(0, 5).forEach((op: any, idx: number) => {
      const winPrice = Math.round((op.monto || 0) * 0.94);
      messageText += `${idx + 1}. *[${op.codigo}]* ${(op.titulo || '').slice(0, 45)}...\n   🏛️ ${op.organismo}\n   💰 Presupuesto: $${(op.monto || 0).toLocaleString('es-CL')} CLP\n   🎯 Precio Sugerido AI: $${winPrice.toLocaleString('es-CL')} CLP\n   ⏰ Cierre: ${op.fechaCierre}\n\n`;
    });

    messageText += `💡 *Win-Rate AI*: Se recomienda ofertar al 94% para maximizar adjudicación.\n\n`;
    messageText += `🔗 Plataforma Oficial: https://bidcoop.vercel.app\n`;
    messageText += `_BidCoop Automated Bot Service © 2026_`;

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    let pushStatus = '';
    let provider = 'Simulado / Servidor Vercel';

    // 1. UltraMsg Provider (Free WhatsApp API)
    if (instanceId && token) {
      provider = 'UltraMsg WhatsApp Cloud API';
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
        pushStatus = `¡Notificación Push enviada con éxito desde BidCoop Bot a +${cleanPhone}!`;
      } else {
        throw new Error(data.error || 'Error enviando vía UltraMsg');
      }
    } 
    // 2. Twilio WhatsApp API Provider
    else if (twilioSid && twilioToken) {
      provider = 'Twilio WhatsApp Business API';
      const authHeader = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
      const twilioRes = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          From: twilioFrom,
          To: `whatsapp:+${cleanPhone}`,
          Body: messageText
        })
      });
      const data = await twilioRes.json();
      if (data.sid) {
        pushStatus = `¡Notificación Push enviada con éxito desde Twilio (BidCoop Reports) a +${cleanPhone}!`;
      } else {
        throw new Error(data.message || 'Error enviando vía Twilio');
      }
    }
    // 3. Fallback / Test Server Response
    else {
      pushStatus = `Alerta Push procesada para +${cleanPhone} desde el remitente 'BidCoop Reports'. Para habilitar el pop-up nativo en tu WhatsApp sin abrir enlaces, ingresa tu Token de WhatsApp API (Twilio / Meta / UltraMsg).`;
    }

    return NextResponse.json({
      success: true,
      sender: 'BidCoop Reports Bot',
      destination: `+${cleanPhone}`,
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
