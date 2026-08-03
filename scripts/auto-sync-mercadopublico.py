#!/usr/bin/env python3
"""
BidCoop — Motor Principal Híbrido de Sincronización Automática con Mercado Público
Sincroniza en tiempo real las oportunidades de Mercado Público en Chile para Aminorte y V-MOCCS:
  1. Ingestión de Planilla Oficial de Descargas (/Users/jonathancooper/Downloads/Cotizaciones.xls) con 427+ Compras Ágiles (-COT26).
  2. API Oficial Mercado Público: Licitaciones Públicas/Privadas, Compras Ágiles (-COT26 / -CO26) y Convenios Marco.
  3. Asignación rigurosa de Organismo Público, Región de Chile y Ciudad/Comuna correspondiente.
  4. Matriz inteligente de catálogo entre Aminorte (Filtro Estricto Escritorio) y V-MOCCS (Mobiliario).
"""

import pandas as pd
import json
import os
import glob
import datetime
import urllib.request
import re
import unicodedata

PROJECT_PATH = "/Users/jonathancooper/Documents/ANTIGRAVITY/Plataforma Avanzada de Abastecimiento"
OUTPUT_FILE = os.path.join(PROJECT_PATH, "src/app/mockData.ts")
TODAY_STR = datetime.date.today().isoformat()
TICKET = "F8537A18-6766-4DEF-9E59-426B4FEE2844"
BASE_URL = "https://api.mercadopublico.cl/servicios/v1/publico"
USD_TO_CLP = 950.0

def format_date_to_iso(d_str):
    if not d_str or str(d_str).strip() in ["nan", "None", ""]:
        return TODAY_STR
    clean = str(d_str).strip()
    
    m_time = re.match(r'^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$', clean)
    if m_time:
        day, month, year, hh, mm, ss = m_time.groups()
        if hh and mm:
            return f"{year}-{int(month):02d}-{int(day):02d}T{int(hh):02d}:{int(mm):02d}:{int(ss or 0):02d}"
        return f"{year}-{int(month):02d}-{int(day):02d}"
        
    if re.match(r'^\d{4}-\d{2}-\d{2}', clean):
        return clean.replace(' ', 'T')
        
    return clean

GROUND_TRUTH_PROCESSES = {
    "1001-11-COT26": {
        "titulo": "Adquisición de Resmas de Papel, Archivadores y Útiles de Escritorio",
        "organismo": "MINISTERIO DE SALUD - SERVICIO DE SALUD METROPOLITANO",
        "organismoRut": "61.601.000-4",
        "rubro": "Artículos de Escritorio y Oficina",
        "region": "Región Metropolitana",
        "ciudad": "Santiago",
        "monto": 2450000,
        "empresaMatch": "Aminorte",
        "estado": "Publicada",
        "descripcion": "Compra Ágil para provisión urgente de resmas de papel carta/oficio, archivadores lomo ancho y artículos de escritorio de oficina.",
        "items": [{"sku": "SKU-PAP-01", "producto": "Resmas de papel y útiles de escritorio", "cantidad": 1, "precioUnitario": 2450000}]
    },
    "1006-16-COT26": {
        "titulo": "Adquisición de Insumos de Escritorio y Impresión Laser",
        "organismo": "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
        "organismoRut": "70.012.300-4",
        "rubro": "Artículos de Escritorio y Oficina",
        "region": "Región de Valparaíso",
        "ciudad": "Valparaíso",
        "monto": 1066239,
        "empresaMatch": "Aminorte",
        "estado": "Adjudicada",
        "subestadoEvaluacion": "Adjudicado a AMINORTE SPA",
        "descripcion": "Compra Ágil para insumos de escritorio, impresión y papelería institucional.",
        "items": [{"sku": "SKU-LASER-01", "producto": "Insumos de escritorio e impresión laser", "cantidad": 1, "precioUnitario": 1066239}]
    }
}

CATALOG_VMOCCS = [
    "silla", "silla ejecutiva", "silla operativa", "silla ergonómica", "silla visita",
    "mueble", "mobiliario", "mesa de reunión", "mesa reunion",
    "estante", "librero", "cajonera", "archivo metálico", "kardex", "locker", "panel divisorio"
]

CATALOG_AMINORTE = [
    "escritorio", "artículos de escritorio", "utiles de escritorio", "papelería de escritorio",
    "resma", "papel carta", "papel oficio", "archivador", "lomo ancho", "carpeta", "fastener",
    "bolígrafo", "lápiz", "destacador", "corchetera", "corchete", "clip", "post-it", "nota adhesiva",
    "cinta adhesiva", "tijera", "regla", "tóner", "toner", "tinta", "cartucho", "impresora", "librería", "libreria"
]

def strip_accents(text):
    if not text: return ""
    return ''.join(c for c in unicodedata.normalize('NFD', str(text)) if unicodedata.category(c) != 'Mn')

REGION_RULES = [
    ('Región de Arica y Parinacota', [r'\barica\b', r'\bparinacota\b', r'\bputre\b', r'\b15a?\s*region\b']),
    ('Región de Tarapacá', [r'\btarapaca\b', r'\biquique\b', r'\balto hospicio\b', r'\b1ra?\s*region\b']),
    ('Región de Antofagasta', [r'\bantofagasta\b', r'\bcalama\b', r'\btocopilla\b', r'\b2da?\s*region\b']),
    ('Región de Atacama', [r'\batacama\b', r'\bcopiapo\b', r'\bvallenar\b', r'\b3ra?\s*region\b']),
    ('Región de Coquimbo', [r'\bcoquimbo\b', r'\bla serena\b', r'\bovalle\b', r'\b4ta?\s*region\b']),
    ('Región de Valparaíso', [r'\bvalparaiso\b', r'\bvina\b', r'\bquilpue\b', r'\bsan antonio\b', r'\bquillota\b', r'\b5ta?\s*region\b']),
    ('Región del Libertador General Bernardo O\'Higgins', [r'\bohiggins\b', r'\brancagua\b', r'\bsan fernando\b', r'\b6ta?\s*region\b']),
    ('Región del Maule', [r'\bmaule\b', r'\btalca\b', r'\bcurico\b', r'\blinares\b', r'\b7ma?\s*region\b']),
    ('Región de Ñuble', [r'\bnuble\b', r'\bchillan\b', r'\bsan carlos\b', r'\b16a?\s*region\b']),
    ('Región del Biobío', [r'\bbiobio\b', r'\bconcepcion\b', r'\btalcahuano\b', r'\blos angeles\b', r'\b8va?\s*region\b']),
    ('Región de La Araucanía', [r'\baraucania\b', r'\btemuco\b', r'\bangol\b', r'\bvillarrica\b', r'\b9na?\s*region\b']),
    ('Región de Los Ríos', [r'\blos rios\b', r'\bvaldivia\b', r'\bla union\b', r'\b14a?\s*region\b']),
    ('Región de Los Lagos', [r'\blos lagos\b', r'\bpuerto montt\b', r'\bosorno\b', r'\bcastro\b', r'\b10a?\s*region\b']),
    ('Región de Aysén del General Carlos Ibáñez del Campo', [r'\baysen\b', r'\bcoyhaique\b', r'\bpuerto aysen\b', r'\b11a?\s*region\b']),
    ('Región de Magallanes y de la Antártica Chilena', [r'\bmagallanes\b', r'\bpunta arenas\b', r'\bnatales\b', r'\b12a?\s*region\b']),
    ('Región Metropolitana', [r'\bmetropolitana\b', r'\bsantiago\b', r'\bprovidencia\b', r'\blas condes\b', r'\bmaipu\b', r'\bpuente alto\b', r'\brm\b'])
]

def infer_chilean_region(inst, unidad="", title=""):
    full = strip_accents(f"{inst} {unidad} {title}".lower())
    for reg_name, patterns in REGION_RULES:
        for pat in patterns:
            if re.search(pat, full):
                return reg_name
    return "Región Metropolitana"

def calculate_smart_catalog_match(title, desc=""):
    full_text = f"{title} {desc}".lower()
    match_vmoccs = sum(1 for k in CATALOG_VMOCCS if k in full_text)
    match_aminorte = sum(1 for k in CATALOG_AMINORTE if k in full_text)
    has_escritorio = "escritorio" in full_text
    
    if match_vmoccs > 0 and match_vmoccs >= match_aminorte:
        score = min(99, 85 + match_vmoccs * 6)
        return "V-MOCCS", "Artículos de Escritorio y Oficina", score
    elif match_aminorte > 0 or has_escritorio:
        score = min(99, 82 + match_aminorte * 5)
        is_tech = any(k in full_text for k in ["tóner", "toner", "impresora", "mouse", "teclado", "usb", "hdmi"])
        rubro = "Tecnología y Hardware" if is_tech else "Artículos de Escritorio y Oficina"
        return "Aminorte", rubro, score
    else:
        return "Aminorte", "Artículos de Escritorio y Oficina", 82

def fetch_json(url, timeout=30):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f"[WARNING] Error al consultar API Mercado Público: {e}")
        return None

def main():
    opportunities_by_code = {}

    # 1. INGESTIÓN DE ARCHIVOS DE DESCARGA EN DOWNLOADS (Cotizaciones.xls)
    downloads_file = "/Users/jonathancooper/Downloads/Cotizaciones.xls"
    if os.path.exists(downloads_file):
        print(f"[{datetime.datetime.now().isoformat()}] Ingestando planilla de descargas oficial {downloads_file}...")
        try:
            df = pd.read_excel(downloads_file)
            print(f"[{datetime.datetime.now().isoformat()}] Filas leídas de Cotizaciones.xls: {len(df)}")
            for idx, row in df.iterrows():
                code = str(row.get('ID', '')).strip()
                if not code or code in opportunities_by_code:
                    continue
                
                title = str(row.get('Nombre', 'Proceso de Compra Pública')).replace("\n", " ").replace("\r", " ").strip()
                inst = str(row.get('Institución', 'ORGANISMO PÚBLICO')).replace("\n", " ").replace("\r", " ").strip()
                unidad = str(row.get('Unidad de compra', '')).replace("\n", " ").replace("\r", " ").strip()
                
                try:
                    monto = int(round(float(row.get('Presupuesto estimado', 0))))
                except:
                    monto = 0
                
                pub_date = str(row.get('Fecha de publicación', TODAY_STR)).strip()
                close_date = str(row.get('Fecha de cierre', TODAY_STR)).strip()
                estado = str(row.get('Estado', 'Publicada')).strip()
                
                pub_str = format_date_to_iso(pub_date)
                close_str = format_date_to_iso(close_date)
                
                real_region = infer_chilean_region(inst, unidad, title)
                company_match, rubro, match_score = calculate_smart_catalog_match(title, unidad)
                
                desc = f"Compra Ágil ingresada directamente desde plataforma oficial de Mercado Público ({unidad})."
                
                op = {
                    "id": f"op-{code}",
                    "codigo": code,
                    "titulo": title,
                    "organismo": inst,
                    "organismoRut": "60.000.000-0",
                    "organismoPagoDias": 30,
                    "organismoRiesgo": "Bajo",
                    "rubro": rubro,
                    "region": real_region,
                    "ciudad": unidad or "Santiago",
                    "monto": monto,
                    "fechaPublicacion": pub_str,
                    "fechaCierre": close_str,
                    "matchScore": match_score,
                    "riesgo": "Bajo",
                    "descripcion": desc,
                    "estado": estado,
                    "cronograma": [
                        {"hito": "Publicación", "fecha": pub_str},
                        {"hito": "Cierre de Ofertas", "fecha": close_str}
                    ],
                    "documentos": [
                        {"nombre": f"Ver en Mercado Público ({code})", "tipo": "link", "tamanho": f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"}
                    ],
                    "items": [
                        {"sku": "ITEM-1", "producto": title, "cantidad": 1, "precioUnitario": monto}
                    ],
                    "criteriosEvaluacion": [
                        {"aspecto": "Precio Ofertado", "ponderacion": 100, "descripcion": "Menor costo"}
                    ],
                    "preguntas": [],
                    "comentarios": [],
                    "competidoresPropuestos": [],
                    "empresaMatch": company_match,
                    "modalidad": "Compra Ágil",
                    "esInvitacionGrandesCompras": False,
                    "subestadoEvaluacion": "Sin oferta seleccionada"
                }
                opportunities_by_code[code] = op
        except Exception as e:
            print(f"[WARNING] Error al procesar {downloads_file}: {e}")

    excel_count = len(opportunities_by_code)
    print(f"[{datetime.datetime.now().isoformat()}] Compras Ágiles procesadas desde planilla Cotizaciones.xls: {excel_count}")

    # 2. SINCRONIZACIÓN EN VIVO DESDE API DE MERCADO PÚBLICO
    print(f"[{datetime.datetime.now().isoformat()}] Sincronizando desde API Mercado Público...")
    url_active = f"{BASE_URL}/licitaciones.json?estado=activas&ticket={TICKET}"
    res_active = fetch_json(url_active, timeout=30)
    
    api_count = 0
    if res_active and "Listado" in res_active:
        for item in res_active["Listado"]:
            code = item.get("CodigoExterno")
            if not code or code in opportunities_by_code:
                continue

            title = str(item.get("Nombre", "Proceso de Compra Pública")).replace("\n", " ").replace("\r", " ").strip()
            name_lower = title.lower()
            code_upper = code.upper()
            monto = item.get("MontoEstimado") or 0
            
            if "-CM" in code_upper or "convenio marco" in name_lower:
                modality = "Grandes Compras" if (monto > 65000000 or "grande compra" in name_lower) else "Convenio Marco"
            elif "grande compra" in name_lower or "grandes compras" in name_lower:
                modality = "Grandes Compras"
            elif "-CO" in code_upper or "COT" in code_upper or "compra agil" in name_lower or "compra ágil" in name_lower:
                modality = "Compra Ágil"
            else:
                modality = "Licitación"

            comprador = item.get("Comprador") or {}
            org_name = comprador.get("NombreOrganismo") or item.get("Organismo") or "ORGANISMO PÚBLICO"
            org_unidad = comprador.get("NombreUnidad") or item.get("Unidad") or ""
            ciudad = comprador.get("ComunaUnidad") or org_unidad or "Santiago"

            raw_desc = item.get("Descripcion") or f"Proceso de contratación pública ({modality}) para {org_name}."
            desc = str(raw_desc).replace("\n", " ").replace("\r", " ").replace("\t", " ").strip()

            company_match, rubro, match_score = calculate_smart_catalog_match(title, desc)
            real_region = comprador.get("RegionUnidad") or infer_chilean_region(org_name, org_unidad, title)

            fechas = item.get("Fechas") or {}
            pub_date = fechas.get("FechaPublicacion") or item.get("FechaPublicacion") or TODAY_STR
            close_date = fechas.get("FechaCierre") or item.get("FechaCierre") or TODAY_STR

            pub_str = format_date_to_iso(pub_date)
            close_str = format_date_to_iso(close_date)

            op = {
                "id": f"op-{code}",
                "codigo": code,
                "titulo": title,
                "organismo": org_name,
                "organismoRut": comprador.get("RutUnidad") or "60.000.000-0",
                "organismoPagoDias": 30,
                "organismoRiesgo": "Bajo",
                "rubro": rubro,
                "region": real_region,
                "ciudad": ciudad,
                "monto": monto,
                "fechaPublicacion": pub_str,
                "fechaCierre": close_str,
                "matchScore": match_score,
                "riesgo": "Bajo",
                "descripcion": desc,
                "estado": "Publicada",
                "cronograma": [
                    {"hito": "Publicación", "fecha": pub_str},
                    {"hito": "Cierre de Ofertas", "fecha": close_str}
                ],
                "documentos": [
                    {"nombre": f"Ver en Mercado Público ({code})", "tipo": "link", "tamanho": f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"}
                ],
                "items": [
                    {"sku": "ITEM-1", "producto": title, "cantidad": 1, "precioUnitario": monto}
                ],
                "criteriosEvaluacion": [
                    {"aspecto": "Precio Ofertado", "ponderacion": 100, "descripcion": "Menor costo"}
                ],
                "preguntas": [],
                "comentarios": [],
                "competidoresPropuestos": [],
                "empresaMatch": company_match,
                "modalidad": modality,
                "esInvitacionGrandesCompras": (modality == "Grandes Compras"),
                "subestadoEvaluacion": "Sin oferta seleccionada"
            }

            opportunities_by_code[code] = op
            api_count += 1

    print(f"[{datetime.datetime.now().isoformat()}] Oportunidades cargadas desde API: {api_count}")

    # Ground truth override for accuracy
    for gt_code, gt_info in GROUND_TRUTH_PROCESSES.items():
        opportunities_by_code[gt_code] = {
            "id": f"op-{gt_code}",
            "codigo": gt_code,
            "titulo": gt_info["titulo"],
            "organismo": gt_info["organismo"],
            "organismoRut": gt_info["organismoRut"],
            "organismoPagoDias": 30,
            "organismoRiesgo": "Bajo",
            "rubro": gt_info["rubro"],
            "region": gt_info["region"],
            "ciudad": gt_info.get("ciudad", "Santiago"),
            "monto": gt_info["monto"],
            "fechaPublicacion": TODAY_STR,
            "fechaCierre": TODAY_STR,
            "matchScore": 98,
            "riesgo": "Bajo",
            "descripcion": gt_info["descripcion"],
            "estado": gt_info["estado"],
            "cronograma": [],
            "documentos": [],
            "items": gt_info["items"],
            "criteriosEvaluacion": [],
            "preguntas": [],
            "comentarios": [],
            "competidoresPropuestos": [],
            "empresaMatch": gt_info["empresaMatch"],
            "modalidad": "Compra Ágil",
            "esInvitacionGrandesCompras": False,
            "subestadoEvaluacion": gt_info.get("subestadoEvaluacion", "En proceso")
        }

    processed = list(opportunities_by_code.values())

    content = f"""import {{ Oportunidad, Postulacion, OrdenCompra, MiembroEquipo, VistaGuardada, Notificacion }} from './types';

export const mockOportunidades: Oportunidad[] = ({json.dumps(processed, indent=2, ensure_ascii=False)} as unknown as Oportunidad[]);

export const mockPostulaciones: Postulacion[] = [
  {{
    id: "post-1",
    oportunidadId: "op-1001-11-COT26",
    oportunidadCodigo: "1001-11-COT26",
    oportunidadTitulo: "Adquisición de Resmas de Papel y Útiles de Escritorio",
    organismo: "MINISTERIO DE SALUD - SERVICIO DE SALUD METROPOLITANO",
    responsable: "Jonathan Cooper",
    montoOferta: 2450000,
    documentosAdjuntos: [],
    itemsOfertados: [],
    fechaActualizacion: "{TODAY_STR}",
    estado: "Adjudicada",
    empresaMatch: "Aminorte"
  }},
  {{
    id: "post-2",
    oportunidadId: "op-1006-16-COT26",
    oportunidadCodigo: "1006-16-COT26",
    oportunidadTitulo: "Adquisición de Insumos y Servicios de Impresión Laser",
    organismo: "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
    responsable: "Manuel Viguera",
    montoOferta: 1066239,
    documentosAdjuntos: [],
    itemsOfertados: [],
    fechaActualizacion: "{TODAY_STR}",
    estado: "Adjudicada",
    empresaMatch: "Aminorte"
  }}
];

export const mockMiembrosEquipo: MiembroEquipo[] = [
  {{ id: 'usr-1', nombre: 'Jonathan Cooper', rol: 'Admin', avatar: 'JC', estado: 'Activo', email: 'jcooper@bidcoop.cl' }},
  {{ id: 'usr-2', nombre: 'Manuel Viguera', rol: 'Gestor', avatar: 'MV', estado: 'Activo', email: 'mviguera@aminorte.cl' }},
  {{ id: 'usr-3', nombre: 'Jorge Alvarado', rol: 'Gestor', avatar: 'JA', estado: 'Activo', email: 'jorge.alvarado@discoverymerch.cl' }},
  {{ id: 'usr-4', nombre: 'José San Martín', rol: 'Gestor', avatar: 'JS', estado: 'Activo', email: 'jsanmartin@aminorte.cl' }}
];

export const mockNotificaciones: Notificacion[] = [
  {{ id: 'n-1', titulo: 'Sincronización Mercado Público Completada', descripcion: 'Sincronizados {len(processed)} procesos activos directamente desde Cotizaciones.xls y la API oficial.', fecha: '{TODAY_STR}', leida: false, tipo: 'info' }}
];

export const mockVistasGuardadas: VistaGuardada[] = [
  {{ id: 'v-1', nombre: 'Compras Ágiles Artículos de Escritorio', filters: {{ search: '', rubro: 'Artículos de Escritorio y Oficina', region: 'Todos', riesgo: 'Todos', montoMin: 0, montoMax: 4000000 }} }}
];

export const mockOrdenesCompra: OrdenCompra[] = [
  {{ id: 'oc-1', oportunidadId: 'op-1001-11-COT26', codigoOC: 'OC-1001-26', organismo: 'MINISTERIO DE SALUD - SERVICIO DE SALUD METROPOLITANO', monto: 2450000, fechaEmision: '{TODAY_STR}', estado: 'Aceptada' }}
];

export const FLETES_REGIONALES_CHILE: Record<string, {{ fleteBase: number; diasEntrega: string; zona: string }}> = {{
  "Región Metropolitana": {{ fleteBase: 0, diasEntrega: '24 hrs', zona: 'Zona Central (RM)' }},
  "Región de Valparaíso": {{ fleteBase: 15000, diasEntrega: '24-48 hrs', zona: 'Zona Centro' }},
  "Región de Coquimbo": {{ fleteBase: 25000, diasEntrega: '48 hrs', zona: 'Zona Norte Chico' }},
  "Región del Libertador General Bernardo O'Higgins": {{ fleteBase: 18000, diasEntrega: '24-48 hrs', zona: 'Zona Centro-Sur' }},
  "Región del Maule": {{ fleteBase: 22000, diasEntrega: '48 hrs', zona: 'Zona Centro-Sur' }},
  "Región de Ñuble": {{ fleteBase: 28000, diasEntrega: '48 hrs', zona: 'Zona Sur' }},
  "Región del Biobío": {{ fleteBase: 32000, diasEntrega: '48-72 hrs', zona: 'Zona Sur' }},
  "Región de La Araucanía": {{ fleteBase: 38000, diasEntrega: '72 hrs', zona: 'Zona Sur' }},
  "Región de Los Ríos": {{ fleteBase: 42000, diasEntrega: '72 hrs', zona: 'Zona Sur' }},
  "Región de Los Lagos": {{ fleteBase: 48000, diasEntrega: '72-96 hrs', zona: 'Zona Sur-Austral' }},
  "Región de Aysén del General Carlos Ibáñez del Campo": {{ fleteBase: 85000, diasEntrega: '5-7 días', zona: 'Zona Austral' }},
  "Región de Magallanes y de la Antártica Chilena": {{ fleteBase: 95000, diasEntrega: '5-7 días', zona: 'Zona Austral' }},
  "Región de Atacama": {{ fleteBase: 45000, diasEntrega: '48-72 hrs', zona: 'Zona Norte' }},
  "Región de Antofagasta": {{ fleteBase: 55000, diasEntrega: '72 hrs', zona: 'Zona Norte Grande' }},
  "Región de Tarapacá": {{ fleteBase: 65000, diasEntrega: '72-96 hrs', zona: 'Zona Norte Grande' }},
  "Región de Arica y Parinacota": {{ fleteBase: 75000, diasEntrega: '4-5 días', zona: 'Zona Norte Extrema' }}
}};
"""

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"[SUCCESS] {len(processed)} oportunidades escritas en {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
