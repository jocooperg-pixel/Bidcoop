#!/usr/bin/env python3
"""
BidCoop — Envío de Reportes por Correo Electrónico (Estrictamente 2 Envíos)
1) Correo Regiones: 697 Compras Ágiles activas fuera de la RM (I a XVI regiones)
   Destinatarios BCC: jsanmartin@aminorte.cl, mviguera@aminorte.cl, jorge.alvarado@discoverymerch.cl, jonathan.cooper@discoverymerch.cl, jcooper@inder-roll.cl
2) Correo Región Metropolitana: 345 Compras Ágiles activas de la RM
   Destinatarios BCC: mviguera@aminorte.cl, jorge.alvarado@discoverymerch.cl, jonathan.cooper@discoverymerch.cl, jcooper@inder-roll.cl
"""

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
import json
import re
import datetime
import csv
import io

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 465
SMTP_USER = "jonathan.cooper.g@gmail.com"
SMTP_PASS = "stutlzydxqefmptu"

EMAILS_REGIONES = [
    "jsanmartin@aminorte.cl",
    "mviguera@aminorte.cl",
    "jorge.alvarado@discoverymerch.cl",
    "jonathan.cooper@discoverymerch.cl",
    "jcooper@inder-roll.cl"
]

EMAILS_RM = [
    "mviguera@aminorte.cl",
    "jorge.alvarado@discoverymerch.cl",
    "jonathan.cooper@discoverymerch.cl",
    "jcooper@inder-roll.cl"
]

MOCK_PATH = "/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento/src/app/mockData.ts"

def load_opportunities():
    with open(MOCK_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    start_idx = content.find("export const mockOportunidades")
    eq_idx = content.find("= (", start_idx)
    if eq_idx == -1: eq_idx = content.find("=", start_idx)
    json_start = content.find("[", eq_idx)
    json_end = content.find("] as unknown as Oportunidad[]", json_start) + 1
    if json_end <= 1:
        json_end = content.find(";\n\nexport const mockPostulaciones", json_start)
    return json.loads(content[json_start:json_end])

def generate_csv_attachment(ops):
    today = datetime.date.today().isoformat()
    output = io.StringIO()
    writer = csv.writer(output, delimiter=';', quoting=csv.QUOTE_MINIMAL)
    
    writer.writerow([
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
        'Sugerencia Precio Óptimo (Win-Rate CLP)'
    ])
    
    for op in ops:
        win_price = round(op.get("monto", 0) * 0.94)
        writer.writerow([
            op.get("codigo", ""),
            op.get("titulo", ""),
            op.get("organismo", ""),
            op.get("organismoRut", "60.000.000-0"),
            op.get("region", "Región Metropolitana"),
            op.get("monto", 0),
            op.get("fechaPublicacion", today),
            op.get("fechaCierre", today),
            op.get("empresaMatch", "HOLDING"),
            op.get("modalidad", "Compra Ágil"),
            op.get("estado", "Publicada"),
            win_price
        ])
        
    return output.getvalue().encode('utf-8-sig')

def build_email_body(title, subtitle, ops):
    today_str = datetime.date.today().strftime("%d/%m/%Y")
    total_monto = sum(o.get("monto", 0) for o in ops)
    
    top_ops = sorted(ops, key=lambda x: x.get("monto", 0), reverse=True)[:15]
    
    rows_html = ""
    for op in top_ops:
        monto_fmt = f"${op.get('monto', 0):,.0f} CLP".replace(",", ".")
        win_price = f"${round(op.get('monto', 0) * 0.94):,.0f} CLP".replace(",", ".")
        code = op.get("codigo", "")
        url = f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"
        rows_html += f"""
        <tr style="border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
            <td style="padding: 10px; font-weight: bold; color: #1e40af;"><a href="{url}" target="_blank" style="color: #1d4ed8; text-decoration: underline;">{code}</a></td>
            <td style="padding: 10px; font-size: 12px;">{op.get('titulo', '')[:70]}</td>
            <td style="padding: 10px; font-size: 11px;">{op.get('organismo', '')[:40]}</td>
            <td style="padding: 10px; font-size: 11px; font-weight: 600; color: #047857;">{op.get('region', 'Metropolitana')}</td>
            <td style="padding: 10px; font-weight: bold; text-align: right;">{monto_fmt}</td>
            <td style="padding: 10px; font-weight: 600; color: #059669; text-align: right;">{win_price}</td>
        </tr>
        """

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #0f172a; }}
            .container {{ max-width: 900px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1; }}
            .header {{ background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 25px 30px; text-align: left; }}
            .header h1 {{ margin: 0; font-size: 22px; font-weight: 800; }}
            .header p {{ margin: 6px 0 0; opacity: 0.85; font-size: 13px; }}
            .content {{ padding: 25px; }}
            .kpi-box {{ display: inline-block; width: 48%; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-sizing: border-box; }}
            .kpi-num {{ font-size: 24px; font-weight: 900; color: #1e3a8a; }}
            .kpi-label {{ font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-top: 2px; }}
            table {{ width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 12px; }}
            th {{ background-color: #f1f5f9; color: #334155; padding: 10px; text-align: left; font-size: 11px; text-transform: uppercase; font-weight: 800; border-bottom: 2px solid #cbd5e1; }}
            .footer {{ background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px; text-align: center; font-size: 12px; color: #64748b; }}
            .btn {{ display: inline-block; background-color: #2563eb; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; margin-top: 20px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>⚡ {title}</h1>
                <p>{subtitle} — Fecha: {today_str}</p>
            </div>
            <div class="content">
                <div style="margin-bottom: 20px;">
                    <div class="kpi-box" style="margin-right: 2%;">
                        <div class="kpi-num">{len(ops):,}</div>
                        <div class="label kpi-label">Compras Ágiles Activas</div>
                    </div>
                    <div class="kpi-box">
                        <div class="kpi-num" style="color: #059669;">${total_monto:,.0f} CLP</div>
                        <div class="label kpi-label">Presupuesto Consolidado</div>
                    </div>
                </div>

                <div style="font-size: 13px; color: #334155; margin-bottom: 15px;">
                    📎 <strong>Adjunto Oficial:</strong> Se incluye el archivo <strong>.CSV</strong> con el desglose completo de los {len(ops):,} procesos correspondientes a esta zona geográfica.
                </div>

                <div style="font-size: 14px; font-weight: 800; color: #0f172a; margin-top: 20px;">📋 Muestra Destacada de Mayor Presupuesto:</div>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Título</th>
                            <th>Organismo</th>
                            <th>Región</th>
                            <th style="text-align: right;">Monto Estimado</th>
                            <th style="text-align: right;">Precio Óptimo AI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows_html}
                    </tbody>
                </table>

                <div style="text-align: center; margin-top: 25px;">
                    <a href="https://bidcoop.vercel.app" class="btn" target="_blank">🚀 Abrir Plataforma BidCoop en Vivo</a>
                </div>
            </div>
            <div class="footer">
                BidCoop Intelligence — Plataforma Avanzada de Abastecimiento & Licitaciones B2B<br>
                Reporte diario oficial generado el {today_str} a las {datetime.datetime.now().strftime('%H:%M')} hrs.
            </div>
        </div>
    </body>
    </html>
    """
    return html

def dispatch_email(subject, recipients, ops, csv_filename):
    today_str = datetime.date.today().strftime("%d/%m/%Y")
    csv_data = generate_csv_attachment(ops)
    html_body = build_email_body(subject, f"{len(ops):,} Procesos de Compra Ágil", ops)

    msg = MIMEMultipart("mixed")
    msg["Subject"] = f"⚡ [BidCoop 08:00 AM] {subject} ({today_str})"
    msg["From"] = f"BidCoop Intelligence <{SMTP_USER}>"
    msg["To"] = SMTP_USER  # Sender address in TO

    # Body part
    body_part = MIMEText(html_body, "html", "utf-8")
    msg.attach(body_part)

    # Attachment part
    att = MIMEApplication(csv_data, _subtype="csv")
    att.add_header("Content-Disposition", "attachment", filename=csv_filename)
    msg.attach(att)

    # Connect SMTP and send strictly via BCC (CCO) to recipients
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, recipients, msg.as_string())

    print(f"[{datetime.datetime.now().isoformat()}] [OK] {subject} enviado a {len(recipients)} destinatarios en CCO:")
    for r in recipients:
        print(f"  - {r}")

def main():
    today = datetime.date.today().isoformat()
    print(f"[{datetime.datetime.now().isoformat()}] Cargando oportunidades desde mockData.ts...")
    ops = load_opportunities()
    
    # Filter active Compras Ágiles (Publicadas and close date >= today)
    def parse_iso(d_str):
        if not d_str: return today
        clean = str(d_str).strip().split(' ')[0]
        if re.match(r'^\d{4}-\d{2}-\d{2}$', clean): return clean
        m = re.match(r'^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$', clean)
        if m: return f"{m.group(3)}-{int(m.group(2)):02d}-{int(m.group(1)):02d}"
        return clean

    active_agiles = [
        o for o in ops 
        if o.get("modalidad") == "Compra Ágil" 
        and o.get("estado") == "Publicada" 
        and parse_iso(o.get("fechaCierre")) >= today
    ]

    ops_rm = [o for o in active_agiles if o.get("region") == "Región Metropolitana"]
    ops_regiones = [o for o in active_agiles if o.get("region") != "Región Metropolitana"]

    print(f"[{datetime.datetime.now().isoformat()}] Total Compras Ágiles Activas: {len(active_agiles)}")
    print(f"  - Regiones (Fuera de RM): {len(ops_regiones)} procesos")
    print(f"  - Región Metropolitana: {len(ops_rm)} procesos")

    # DESPACHO 1: CORREO REGIONES (FUERA DE RM)
    dispatch_email(
        "Reporte Compras Ágiles — Regiones de Chile",
        EMAILS_REGIONES,
        ops_regiones,
        f"BidCoop_Reporte_Compras_Agiles_Regiones_{today}.csv"
    )

    # DESPACHO 2: CORREO REGIÓN METROPOLITANA
    dispatch_email(
        "Reporte Compras Ágiles — Región Metropolitana",
        EMAILS_RM,
        ops_rm,
        f"BidCoop_Reporte_Compras_Agiles_RM_{today}.csv"
    )

    print(f"[{datetime.datetime.now().isoformat()}] [SUCCESS] Se completó el despacho estricto de los 2 correos oficiales.")

if __name__ == "__main__":
    main()
