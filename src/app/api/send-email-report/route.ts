import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email = 'jocooperg@gmail.com',
      empresa = 'Todas',
      oportunidades = [],
      apiKey = '',
      smtpUser = '',
      smtpPass = '',
      smtpHost = 'smtp.gmail.com',
      smtpPort = 465
    } = body;

    const activeResendKey = apiKey || process.env.RESEND_API_KEY;
    const today = new Date().toISOString().split('T')[0];
    const companyClean = empresa === 'Todas' ? 'Consolidado_Holding' : empresa.replace(/\s+/g, '_');
    const filename = `BidCoop_Reporte_Diario_Compras_Agiles_${companyClean}_${today}.csv`;

    // Filter opportunities
    const filteredOps = empresa === 'Todas' 
      ? oportunidades 
      : oportunidades.filter((op: any) => op.empresaMatch === empresa);

    const totalOps = filteredOps.length;
    const totalMonto = filteredOps.reduce((acc: number, curr: any) => acc + (curr.monto || 0), 0);

    // Build CSV attachment content
    const headers = [
      'Código Licitación',
      'Título / Descripción',
      'Organismo Comprador',
      'RUT Organismo',
      'Región',
      'Monto Estimado ($ CLP)',
      'Fecha Publicación',
      'Fecha Cierre',
      'Empresa Asignada',
      'Modalidad',
      'Estado',
      'Precio Sugerido AI ($ CLP)'
    ];

    const csvRows = filteredOps.map((op: any) => {
      const winPrice = Math.round((op.monto || 0) * 0.94);
      return [
        `"${op.codigo}"`,
        `"${(op.titulo || '').replace(/"/g, '""')}"`,
        `"${(op.organismo || '').replace(/"/g, '""')}"`,
        `"${op.organismoRut || '00.000.000-0'}"`,
        `"${op.region || 'Metropolitana'}"`,
        op.monto || 0,
        `"${op.fechaPublicacion}"`,
        `"${op.fechaCierre}"`,
        `"${op.empresaMatch || 'Inder-Roll'}"`,
        `"${op.modalidad || 'Compra Ágil'}"`,
        `"${op.estado || 'Publicada'}"`,
        winPrice
      ].join(';');
    });

    const csvString = '\uFEFF' + [headers.join(';'), ...csvRows].join('\n');

    // Build HTML Email Template
    const tableRowsHtml = filteredOps.slice(0, 15).map((op: any) => {
      const winPrice = Math.round((op.monto || 0) * 0.94);
      return `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px; font-family: monospace; font-weight: bold; color: #2563eb;">${op.codigo}</td>
          <td style="padding: 10px; font-weight: 600; color: #1e293b;">${op.titulo}</td>
          <td style="padding: 10px; color: #475569;">${op.organismo}</td>
          <td style="padding: 10px; font-weight: bold; color: #0f172a;">$${(op.monto || 0).toLocaleString('es-CL')} CLP</td>
          <td style="padding: 10px; font-weight: bold; color: #059669;">$${winPrice.toLocaleString('es-CL')} CLP</td>
          <td style="padding: 10px; color: #64748b;">${op.fechaCierre}</td>
        </tr>
      `;
    }).join('');

    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>BidCoop Reporte Diario 8:00 AM</title>
      </head>
      <body style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b;">
        <div style="max-width: 800px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); padding: 30px; color: #ffffff; text-align: left;">
            <div style="display: inline-block; background: #4f46e5; color: #ffffff; font-size: 10px; font-weight: 900; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
              BidCoop Reporte Oficial 08:00 AM
            </div>
            <h1 style="margin: 0; font-size: 22px; font-weight: 900;">Reporte Diario de Compras Ágiles Activas</h1>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #c7d2fe;">
              Segmento: <strong>${empresa === 'Todas' ? 'Consolidado Holding (Inder-Roll / Aminorte / V-MOCCS)' : empresa}</strong> | Fecha: ${today}
            </p>
          </div>

          <!-- Summary Bar -->
          <div style="background: #f1f5f9; padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-around;">
            <div style="text-align: center;">
              <span style="font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase;">Compras Ágiles Activas</span>
              <div style="font-size: 24px; font-weight: 900; color: #1e1b4b;">${totalOps}</div>
            </div>
            <div style="text-align: center;">
              <span style="font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase;">Presupuesto Total CLP</span>
              <div style="font-size: 24px; font-weight: 900; color: #059669;">$${totalMonto.toLocaleString('es-CL')} CLP</div>
            </div>
          </div>

          <!-- Content Body -->
          <div style="padding: 30px;">
            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              Estimado equipo comercial de <strong>${empresa}</strong>,<br>
              Adjunto a este correo electrónico se encuentra el archivo oficial <code>${filename}</code> con el desglose completo de todas las Compras Ágiles del rubro listadas para iniciar su cotización.
            </p>

            <h3 style="font-size: 16px; font-weight: 800; color: #0f172a; margin-top: 25px; margin-bottom: 15px;">
              📋 Resumen Ejecutivo de Compras Ágiles Destacadas (Primeras 15):
            </h3>

            <table style="width: 100%; border-collapse: collapse; font-size: 12px; text-align: left;">
              <thead>
                <tr style="background: #f8fafc; color: #475569; font-weight: 900; text-transform: uppercase; border-bottom: 2px solid #cbd5e1;">
                  <th style="padding: 10px;">Código MP</th>
                  <th style="padding: 10px;">Proceso</th>
                  <th style="padding: 10px;">Organismo</th>
                  <th style="padding: 10px;">Monto Est.</th>
                  <th style="padding: 10px;">Precio Sugerido AI</th>
                  <th style="padding: 10px;">Cierre</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
              </tbody>
            </table>

            <div style="margin-top: 30px; background: #e0e7ff; border: 1px solid #c7d2fe; padding: 15px; border-radius: 12px; font-size: 12px; color: #3730a3;">
              💡 <strong>Nota del Sistema BidCoop:</strong> Este reporte se adjunta automáticamente en formato <code>.CSV / Excel</code> compatible con Microsoft Excel y Google Sheets.
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #0f172a; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8;">
            Plataforma Avanzada de Abastecimiento BidCoop © 2026 — Notificación Automatizada 08:00 AM
          </div>
        </div>
      </body>
      </html>
    `;

    let emailStatus = '';
    let messageId = `bidcoop-${Date.now()}`;

    // 1. Priority 1: User-supplied or ENV Resend API Key
    if (activeResendKey) {
      const resend = new Resend(activeResendKey);
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [email],
        subject: `[BidCoop 08:00 AM] Reporte Diario de Compras Ágiles - ${empresa} (${today})`,
        html: htmlBody,
        attachments: [
          {
            filename,
            content: Buffer.from(csvString).toString('base64'),
          },
        ],
      });

      if (data.error) {
        throw new Error(`Resend Error: ${data.error.message}`);
      }

      emailStatus = `¡Correo entregado con éxito a ${email} vía Resend API! (ID: ${data.data?.id})`;
      messageId = data.data?.id || messageId;
    } 
    // 2. Priority 2: User-supplied SMTP (e.g. Gmail / Outlook / Office365 credentials)
    else if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort) || 465,
        secure: Number(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"BidCoop Notificaciones" <${smtpUser}>`,
        to: email,
        subject: `[BidCoop 08:00 AM] Reporte Diario de Compras Ágiles - ${empresa} (${today})`,
        html: htmlBody,
        attachments: [
          {
            filename,
            content: csvString,
          },
        ],
      });

      emailStatus = `¡Correo entregado con éxito a ${email} vía SMTP de ${smtpUser}!`;
      messageId = info.messageId;
    } 
    // 3. Fallback: Return missing credentials instruction
    else {
      return NextResponse.json({
        success: false,
        requiresCredentials: true,
        email,
        empresa,
        filename,
        totalOps,
        totalMonto,
        message: 'Para enviar correos reales a Gmail se requiere ingresar una Resend API Key o credenciales SMTP de Gmail/Outlook.',
        timestamp: new Date().toISOString()
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      email,
      empresa,
      filename,
      totalOps,
      totalMonto,
      emailStatus,
      messageId,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error sending email report:', error);
    return NextResponse.json(
      { error: `Error enviando correo: ${error.message}` },
      { status: 500 }
    );
  }
}
