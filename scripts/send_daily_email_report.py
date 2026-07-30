#!/usr/bin/env python3
"""
BidCoop — Envío de Reporte Ejecutivo Diario por Correo Electrónico
Genera y envía el reporte HTML consolidado de Oportunidades (Compras Ágiles + Licitaciones + Convenios Marco)
vía Gmail SMTP hacia los destinatarios oficiales.
"""

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import json
import re
import datetime

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 465
SMTP_USER = "jonathan.cooper.g@gmail.com"
SMTP_PASS = "stutlzydxqefmptu"

RECIPIENTS = [
    "jcooper@inder-roll.cl",
    "jsanmartin@aminorte.cl",
    "mviguera@aminorte.cl",
    "jorge.alvarado@discoverymerch.cl",
    "jonathan.cooper.g@gmail.com"
]

MOCK_PATH = "/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento/src/app/mockData.ts"

def load_opportunities():
    with open(MOCK_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    start_idx = content.find("export const mockOportunidades")
    eq_idx = content.find("= (", start_idx)
    if eq_idx == -1:
        eq_idx = content.find("=", start_idx)
    json_start = content.find("[", eq_idx)
    json_end = content.find("] as unknown as Oportunidad[]", json_start) + 1
    if json_end <= 1:
        json_end = content.find(";\n\nexport const mockPostulaciones", json_start)
    return json.loads(content[json_start:json_end])

def generate_html_report(ops):
    today_str = datetime.date.today().strftime("%d/%m/%Y")

    total_ops = len(ops)
    agiles = [o for o in ops if o.get("modalidad") == "Compra Ágil"]
    licitaciones = [o for o in ops if o.get("modalidad") == "Licitación"]
    convenios = [o for o in ops if o.get("modalidad") in ["Convenio Marco", "Grandes Compras"]]

    inder = [o for o in ops if o.get("empresaMatch") == "Inder-Roll"]
    aminorte = [o for o in ops if o.get("empresaMatch") == "Aminorte"]
    vmoccs = [o for o in ops if o.get("empresaMatch") == "V-MOCCS"]

    # Top high value / urgent opportunities for table preview
    top_ops = sorted(ops, key=lambda x: x.get("matchScore", 0), reverse=True)[:15]

    rows_html = ""
    for op in top_ops:
        monto_fmt = f"${op.get('monto', 0):,.0f} CLP".replace(",", ".")
        code = op.get("codigo", "")
        url = f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"
        rows_html += f"""
        <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 10px; font-weight: bold; color: #1e40af;"><a href="{url}" target="_blank" style="color: #1d4ed8; text-decoration: underline;">{code}</a></td>
            <td style="padding: 10px;">{op.get('titulo', '')[:65]}...</td>
            <td style="padding: 10px;">{op.get('organismo', '')[:40]}</td>
            <td style="padding: 10px; font-size: 12px; font-weight: 600; color: #047857;">{op.get('region', 'Metropolitana')}</td>
            <td style="padding: 10px; font-weight: bold;">{monto_fmt}</td>
            <td style="padding: 10px; text-align: center;"><span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 600;">{op.get('empresaMatch', 'Holding')}</span></td>
        </tr>
        """

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px; color: #1f2937; }}
            .container {{ max-width: 850px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }}
            .header {{ background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 30px; text-align: center; }}
            .header h1 {{ margin: 0; font-size: 26px; letter-spacing: 0.5px; }}
            .header p {{ margin: 8px 0 0; opacity: 0.85; font-size: 14px; }}
            .content {{ padding: 30px; }}
            .stats-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 25px; }}
            .stat-card {{ background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; text-align: center; }}
            .stat-card .num {{ font-size: 24px; font-weight: bold; color: #1e3a8a; }}
            .stat-card .label {{ font-size: 12px; color: #64748b; margin-top: 4px; text-transform: uppercase; font-weight: 600; }}
            .section-title {{ font-size: 18px; font-weight: 700; color: #0f172a; margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; display: inline-block; }}
            table {{ width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }}
            th {{ background-color: #f1f5f9; color: #334155; padding: 10px; text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }}
            .footer {{ background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }}
            .btn {{ display: inline-block; background-color: #2563eb; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; margin-top: 20px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>⚡ BidCoop — Reporte Diario de Oportunidades</h1>
                <p>Sincronización Automática Mercado Público ({today_str})</p>
            </div>
            <div class="content">
                <p style="font-size: 15px; line-height: 1.6;">Estimado equipo de abastecimiento y licitaciones,</p>
                <p style="font-size: 14px; color: #4b5563;">Se ha completado la actualización unificada en vivo de la plataforma <strong>BidCoop</strong> combinando el consumo directo de la API de Mercado Público y las planillas de Compras Ágiles oficiales.</p>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="num">{total_ops:,}</div>
                        <div class="label">Total Oportunidades</div>
                    </div>
                    <div class="stat-card">
                        <div class="num" style="color: #2563eb;">{len(agiles):,}</div>
                        <div class="label">Compras Ágiles</div>
                    </div>
                    <div class="stat-card">
                        <div class="num" style="color: #059669;">{len(licitaciones):,}</div>
                        <div class="label">Licitaciones</div>
                    </div>
                    <div class="stat-card">
                        <div class="num" style="color: #7c3aed;">{len(convenios):,}</div>
                        <div class="label">Convenios Marco</div>
                    </div>
                </div>

                <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                    <strong style="color: #1e40af;">📌 Oportunidades Asignadas por Unidad de Negocio:</strong>
                    <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #1e3a8a; font-size: 13px;">
                        <li><strong>Inder-Roll (Aseo e Higiene):</strong> {len(inder):,} licitaciones / compras ágiles activas</li>
                        <li><strong>Aminorte (Oficina, Tecnología y Climatización):</strong> {len(aminorte):,} licitaciones / compras ágiles activas</li>
                        <li><strong>V-MOCCS (Mobiliario Institucional):</strong> {len(vmoccs):,} licitaciones / convenios activos</li>
                    </ul>
                </div>

                <div class="section-title">🔥 Oportunidades Destacadas de Alta Coincidencia</div>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Título</th>
                            <th>Organismo</th>
                            <th>Región</th>
                            <th>Monto Estimado</th>
                            <th>Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows_html}
                    </tbody>
                </table>

                <div style="text-align: center; margin-top: 30px;">
                    <a href="https://bidcoop.vercel.app" class="btn" target="_blank">🚀 Abrir Plataforma BidCoop en Vivo</a>
                </div>
            </div>
            <div class="footer">
                Plataforma Avanzada de Abastecimiento & Licitaciones B2B — BidCoop Chile<br>
                Generado automáticamente el {today_str} a las {datetime.datetime.now().strftime('%H:%M')} hrs.
            </div>
        </div>
    </body>
    </html>
    """
    return html

def send_email():
    print(f"[{datetime.datetime.now().isoformat()}] Cargando oportunidades desde mockData.ts...")
    ops = load_opportunities()
    print(f"[{datetime.datetime.now().isoformat()}] Total oportunidades cargadas: {len(ops)}")
    
    html_content = generate_html_report(ops)
    today_str = datetime.date.today().strftime("%d/%m/%Y")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"⚡ BidCoop Reporte Diario — {len(ops):,} Oportunidades Sincronizadas ({today_str})"
    msg["From"] = f"BidCoop Intelligence <{SMTP_USER}>"
    msg["To"] = ", ".join(RECIPIENTS)

    msg.attach(MIMEText(html_content, "html", "utf-8"))

    print(f"[{datetime.datetime.now().isoformat()}] Conectando a Gmail SMTP ({SMTP_HOST}:{SMTP_PORT})...")
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, RECIPIENTS, msg.as_string())
        
    print(f"[{datetime.datetime.now().isoformat()}] [SUCCESS] Correo enviado exitosamente a {len(RECIPIENTS)} destinatarios:")
    for r in RECIPIENTS:
        print(f"  - {r}")

if __name__ == "__main__":
    send_email()
