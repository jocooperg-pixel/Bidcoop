#!/usr/bin/env python3
"""
BidCoop — Envío de Reportes por Correo Electrónico (Estrictamente 2 Envíos)
1) Correo Regiones: Compras Ágiles activas fuera de la RM (I a XVI regiones)
   Destinatarios BCC: mviguera@aminorte.cl + REPORT_RECIPIENT_EMAIL
2) Correo Región Metropolitana: Compras Ágiles activas de la RM
   Destinatarios BCC: mviguera@aminorte.cl + REPORT_RECIPIENT_EMAIL
"""

import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
import json
import re
import datetime
import csv
import io

# Nunca hardcodear una credencial ni un correo personal real aquí — este
# script vive en un repositorio público. Debe correr con SMTP_USER/SMTP_PASS/
# REPORT_RECIPIENT_EMAIL como variables de entorno reales
# (ej. `SMTP_USER=... SMTP_PASS=... REPORT_RECIPIENT_EMAIL=... python3 scripts/...`).
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 465
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
REPORT_RECIPIENT_EMAIL = os.environ.get("REPORT_RECIPIENT_EMAIL", "")

EMAILS_REGIONES = [e for e in ["mviguera@aminorte.cl", REPORT_RECIPIENT_EMAIL] if e]

EMAILS_RM = [e for e in ["mviguera@aminorte.cl", REPORT_RECIPIENT_EMAIL] if e]

MOCK_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src/app/mockData.ts")

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

def build_email_body(zone_title, zone_subtitle, ops):
    today_str = datetime.date.today().strftime("%Y-%m-%d")
    total_monto = sum(o.get("monto", 0) for o in ops)
    
    rows_html = ""
    for idx, op in enumerate(ops):
        monto_val = op.get('monto', 0)
        win_price = round(monto_val * 0.94)
        monto_fmt = f"${monto_val:,.0f} CLP".replace(",", ".")
        win_fmt = f"${win_price:,.0f} CLP".replace(",", ".")
        code = op.get("codigo", "")
        url = f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"
        bg_color = "#ffffff" if idx % 2 == 0 else "#f8fafc"
        empresa_tag = op.get("empresaMatch", "HOLDING")
        rubro_tag = op.get("rubro", "Artículos de Escritorio y Oficina")
        match_pct = op.get("matchScore", 92)
        close_date = op.get("fechaCierre", today_str).split("T")[0]

        rows_html += f"""
        <tr style="border-bottom: 1px solid #e2e8f0; background-color: {bg_color};">
          <td style="padding: 12px 10px; vertical-align: top;">
            <div style="font-family: monospace; font-size: 13px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">
              <a href="{url}" target="_blank" style="color: #0f172a; text-decoration: underline;">{code}</a>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 900; border: 1px solid #bae6fd;">
                {empresa_tag}
              </span>
              <span style="background: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 800;">
                {rubro_tag}
              </span>
            </div>
          </td>
          <td style="padding: 12px 10px; vertical-align: top; font-size: 11px; font-weight: 800; color: #1e293b; text-transform: uppercase; line-height: 1.4;">
            {op.get('organismo', '')}
            <div style="font-size: 10px; font-weight: 800; color: #0284c7; margin-top: 3px;">
              📍 {op.get('region', 'Región Metropolitana')}
            </div>
          </td>
          <td style="padding: 12px 10px; vertical-align: top;">
            <div style="font-size: 12px; font-weight: 800; color: #0f172a; margin-bottom: 3px; line-height: 1.3;">
              {op.get('titulo', '')}
            </div>
            <div style="font-size: 10px; color: #64748b;">
              {op.get('descripcion', 'Compra Ágil publicada en Mercado Público.')[:120]}
            </div>
          </td>
          <td style="padding: 12px 10px; vertical-align: top; text-align: right;">
            <div style="font-size: 13px; font-weight: 900; color: #0f172a;">
              {monto_fmt}
            </div>
            <div style="font-size: 10px; font-weight: 800; color: #059669; margin-top: 2px;">
              Precio Óptimo: {win_fmt}
            </div>
          </td>
          <td style="padding: 12px 10px; vertical-align: top; text-align: center;">
            <span style="font-size: 11px; font-weight: 900; color: #16a34a; background: #dcfce7; padding: 3px 8px; border-radius: 6px; border: 1px solid #bbf7d0;">
              {match_pct}%
            </span>
          </td>
          <td style="padding: 12px 10px; vertical-align: top; font-size: 11px; color: #334155; font-weight: 800; text-align: right;">
            {close_date}
          </td>
        </tr>
        """

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>{zone_title} - BidCoop</title>
    </head>
    <body style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #0f172a;">
      <div style="max-width: 980px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #cbd5e1; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15,23,42,0.1);">
        
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px 30px 25px 30px; color: #ffffff; border-bottom: 4px solid #00bfa5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="vertical-align: middle;">
                <div style="display: inline-block; background: #00bfa5; color: #0f2952; font-size: 10px; font-weight: 900; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                  BIDCOOP REPORTE DIARIO CON ADJUNTO CSV DESGLOSE COMPLETO (08:00 AM)
                </div>
                <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff;">
                  {zone_title}
                </h1>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">
                  {zone_subtitle} — Fecha: {today_str}
                </p>
              </td>
              <td style="vertical-align: middle; text-align: right; width: 80px;">
                <div style="width: 56px; height: 56px; border-radius: 9999px; background: #ffffff; padding: 3px; border: 2px solid #00bfa5; display: inline-block; overflow: hidden;">
                  <img src="https://bidcoop.vercel.app/bidcoop-logo.png" alt="BidCoop" width="50" height="50" style="width: 100%; height: 100%; object-fit: contain; border-radius: 9999px;" />
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- Body Content -->
        <div style="padding: 25px;">
          <!-- KPI Summary Box -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="width: 50%; padding-right: 8px;">
                <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #059669; padding: 14px; border-radius: 10px;">
                  <div style="font-size: 10px; font-weight: 900; color: #059669; text-transform: uppercase;">Total Compras Ágiles Activas</div>
                  <div style="font-size: 24px; font-weight: 900; color: #0f172a; margin-top: 2px;">{len(ops):,} Oportunidades</div>
                </div>
              </td>
              <td style="width: 50%; padding-left: 8px;">
                <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; padding: 14px; border-radius: 10px;">
                  <div style="font-size: 10px; font-weight: 900; color: #0284c7; text-transform: uppercase;">Presupuesto Consolidado CLP</div>
                  <div style="font-size: 24px; font-weight: 900; color: #0f172a; margin-top: 2px;">${total_monto:,.0f} CLP</div>
                </div>
              </td>
            </tr>
          </table>

          <!-- Main Interactive Table -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; overflow: hidden;">
            <div style="background: #0f172a; color: #ffffff; padding: 12px 16px; font-size: 12px; font-weight: 900; display: flex; justify-content: space-between;">
              <span>📋 INFORME COMPLETO ({len(ops):,} COMPRAS ÁGILES DISPONIBLES)</span>
            </div>
            <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff;">
              <thead>
                <tr style="background: #f1f5f9; color: #475569; font-size: 10px; font-weight: 900; text-transform: uppercase; border-bottom: 2px solid #cbd5e1;">
                  <th style="padding: 10px; width: 22%;">CÓDIGO / EMPRESA</th>
                  <th style="padding: 10px; width: 24%;">ORGANISMO & REGIÓN</th>
                  <th style="padding: 10px; width: 28%;">OPORTUNIDAD</th>
                  <th style="padding: 10px; text-align: right; width: 14%;">MONTO ESTIMADO</th>
                  <th style="padding: 10px; text-align: center; width: 6%;">MATCH</th>
                  <th style="padding: 10px; text-align: right; width: 6%;">CIERRE</th>
                </tr>
              </thead>
              <tbody>
                {rows_html}
              </tbody>
            </table>
          </div>

          <!-- Footer info -->
          <div style="margin-top: 25px; padding: 15px; background: #f8fafc; border-radius: 10px; font-size: 11px; color: #64748b; border: 1px solid #e2e8f0; text-align: center;">
            📎 Se adjunta la planilla <strong>.CSV</strong> con el desglose completo de compras ágiles respetando la misma estructura y formato de la plataforma.
          </div>
        </div>
      </div>
    </body>
    </html>
    """
    return html

def dispatch_email(subject, recipients, ops, csv_filename):
    today_str = datetime.date.today().strftime("%Y-%m-%d")
    csv_data = generate_csv_attachment(ops)
    html_body = build_email_body(subject, f"Reporte Exclusivo {subject}", ops)

    msg = MIMEMultipart("mixed")
    msg["Subject"] = f"⚡ [BidCoop 08:00 AM] BIDCOOP REPORTE DIARIO CON ADJUNTO CSV DESGLOSE COMPLETO — {subject} ({today_str})"
    msg["From"] = f"Jonathan Cooper - BidCoop Intelligence <{SMTP_USER}>"
    msg["To"] = SMTP_USER

    body_part = MIMEText(html_body, "html", "utf-8")
    msg.attach(body_part)

    att = MIMEApplication(csv_data, _subtype="csv")
    att.add_header("Content-Disposition", "attachment", filename=csv_filename)
    msg.attach(att)

    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, recipients, msg.as_string())

    print(f"[{datetime.datetime.now().isoformat()}] [OK] {subject} enviado a {len(recipients)} destinatarios en CCO:")
    for r in recipients:
        print(f"  - {r}")

def main():
    if not SMTP_USER or not SMTP_PASS:
        print("[ERROR] Faltan SMTP_USER/SMTP_PASS como variables de entorno reales. No se enviará nada.")
        return
    if not REPORT_RECIPIENT_EMAIL:
        print("[ERROR] Falta REPORT_RECIPIENT_EMAIL como variable de entorno real. No se enviará nada.")
        return
    today = datetime.date.today().isoformat()
    print(f"[{datetime.datetime.now().isoformat()}] Cargando oportunidades desde mockData.ts...")
    ops = load_opportunities()
    
    # Filter active Compras Ágiles (Publicadas and close date >= today)
    def parse_iso(d_str):
        if not d_str: return today
        clean = str(d_str).strip().split(' ')[0]
        if 'T' in clean:
            clean = clean.split('T')[0]
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
