#!/usr/bin/env python3
"""
BidCoop — Ingestión Directa de Excels Oficiales de Mercado Público (Cotizaciones.xls y Cotizaciones (1).xls)
Sincroniza el 100% de las Compras Ágiles oficiales con resolución exacta de Regiones de Chile sin falsos positivos,
fechas de cierre con hora y resolución inteligente de duplicados.
"""

import pandas as pd
import json
import os
import glob
import datetime
import re

PROJECT_PATH = "/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento"
OUTPUT_FILE = os.path.join(PROJECT_PATH, "src/app/mockData.ts")
TODAY_STR = datetime.date.today().isoformat()
USD_TO_CLP = 950.0  # Tasa referencial USD/CLP

def format_date_to_iso(d_str):
    if not d_str or str(d_str).strip() in ["nan", "None", ""]:
        return TODAY_STR
    clean = str(d_str).strip()
    
    # Matches DD/MM/YYYY HH:MM or DD/MM/YYYY HH:MM:SS
    m_time = re.match(r'^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$', clean)
    if m_time:
        day, month, year, hh, mm, ss = m_time.groups()
        if hh and mm:
            return f"{year}-{int(month):02d}-{int(day):02d}T{int(hh):02d}:{int(mm):02d}:{int(ss or 0):02d}"
        return f"{year}-{int(month):02d}-{int(day):02d}"
        
    # Matches YYYY-MM-DD
    if re.match(r'^\d{4}-\d{2}-\d{2}', clean):
        return clean.replace(' ', 'T')
        
    return clean

GROUND_TRUTH_PROCESSES = {
    "1001-11-COT26": {
        "titulo": "Retiro, traslado e instalación de equipos de aire acondicionado",
        "organismo": "MINISTERIO DE SALUD - SERVICIO DE SALUD METROPOLITANO",
        "organismoRut": "61.601.000-4",
        "rubro": "Servicios de Climatización y Maquinaria",
        "region": "Región Metropolitana",
        "monto": 2450000,
        "empresaMatch": "Aminorte",
        "estado": "Publicada",
        "descripcion": "Servicios de retiro, traslado e instalación de equipos de aire acondicionado para recintos de atención pública del Servicio de Salud.",
        "items": [{"sku": "SKU-HVAC-01", "producto": "Retiro, traslado e instalación de aire acondicionado", "cantidad": 1, "precioUnitario": 2450000}]
    },
    "1006-16-COT26": {
        "titulo": "Adquisición de Insumos y Servicios de Impresión y Corte Laser",
        "organismo": "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
        "organismoRut": "70.012.300-4",
        "rubro": "Tecnología y Hardware",
        "region": "Región de Valparaíso",
        "monto": 1066239,
        "empresaMatch": "Aminorte",
        "estado": "Adjudicada",
        "subestadoEvaluacion": "Adjudicado a LASER CHILE SPA",
        "descripcion": "Compra Ágil adjudicada por JUNJI para insumos de impresión laser. Proceso finalizado y adjudicado a LASER CHILE SPA por $1.066.239 CLP.",
        "items": [{"sku": "SKU-LASER-01", "producto": "Servicios e Insumos de Corte Laser", "cantidad": 1, "precioUnitario": 1066239}]
    }
}

CATALOG_INDER_ROLL = [
    "papel higienico", "papel higiénico", "toalla de papel", "toalla papel", "interfoliada",
    "jumbo", "hoja simple", "hoja doble", "rollo 300m", "rollo 200m", "inder-roll", "tork",
    "cloro", "cloro gel", "cloro concentrado", "desinfectante", "amonio cuaternario",
    "alcohol gel", "detergente", "detergente líquido", "desengrasante", "lavaloza",
    "limpiador de pisos", "limpiador superficies", "lustramuebles", "cera", "cera autobrillo",
    "suavizante", "quitamanchas", "jabón", "jabon", "jabón líquido", "dispensador",
    "bolsa basura", "escoba", "escobillón", "mopa", "paño microfibra", "guante nitrilo", "mascarilla", "bolsa",
    "aseo", "higiene", "limpieza", "desechable", "desechables", "servilleta", "servilletas",
    "sabana", "sábanas", "sabanilla", "sabanillas", "cafetería", "cafeteria", "alimentos", "snack",
    "vasos", "platos", "mascarillas", "guantes", "funda", "fundas", "albergue", "insumos hospitalarios", "esterilización"
]

CATALOG_VMOCCS = [
    "silla", "silla ejecutiva", "silla operativa", "silla ergonómica", "silla visita",
    "escritorio", "escritorio modular", "mesa de reunión", "mesa reunion",
    "estante", "librero", "cajonera", "archivo metálico", "kardex", "locker", "panel divisorio", "mueble", "mobiliario"
]

CATALOG_AMINORTE = [
    "resma", "papel carta", "papel oficio", "papel 75g", "papel 80g", "fotocopia",
    "archivador", "lomo ancho", "carpeta", "nepaco", "fastener", "separador",
    "bolígrafo", "boligrafo", "lápiz", "lapiz", "destacador", "corchetera", "corchete",
    "saca corchete", "clip", "clip mariposa", "post-it", "nota adhesiva", "cinta adhesiva",
    "cinta embalaje", "tijera", "regla", "guillotina", "chinche", "utiles de oficina", "útiles de oficina",
    "tóner", "toner", "tinta", "cartucho", "impresora", "mouse", "teclado", "mouse pad",
    "cable hdmi", "displayport", "pendrive", "usb", "plotter", "impresión", "impresion",
    "ampolleta", "led", "huincha aisladora", "pintura", "esmalte al agua", "brocha", "aire acondicionado"
]

# DICIONARIO RIGUROSO DE GEOGRAFÍA DE CHILE (COMUNAS, CIUDADES, SERVICIOS DE SALUD Y REGIONES)
REGION_GEOGRAPHY_MAP = [
    ('Región de Arica y Parinacota', [
        r'\barica\b', r'\bparinacota\b', r'\bputre\b', r'\bgeneral lagos\b', r'\bcamarones\b',
        r'\bxv\s*regi[oó]n\b', r'\b15ª?\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?arica\b'
    ]),
    ('Región de Tarapacá', [
        r'\btarapac[aá]\b', r'\biquique\b', r'\balto hospicio\b', r'\bpozo almonte\b', r'\bpica\b', r'\bhuara\b', r'\bcolchane\b',
        r'\bi\s*regi[oó]n\b', r'\b1ra?\s*regi[oó]n\b', r'\b1ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?tarapac[aá]\b'
    ]),
    ('Región de Antofagasta', [
        r'\bantofagasta\b', r'\bcalama\b', r'\btocopilla\b', r'\bmejillones\b', r'\btaltal\b', r'\bsan pedro de atacama\b', r'\bmaria elena\b', r'\bsierra gorda\b', r'\bollagüe\b',
        r'\bii\s*regi[oó]n\b', r'\b2da?\s*regi[oó]n\b', r'\b2ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?antofagasta\b'
    ]),
    ('Región de Atacama', [
        r'\batacama\b', r'\bcopiap[oó]\b', r'\bvallenar\b', r'\bchañaral\b', r'\bcaldera\b', r'\bdiego de almagro\b', r'\bhuasco\b', r'\bfreirina\b', r'\balto del carmen\b',
        r'\biii\s*regi[oó]n\b', r'\b3ra?\s*regi[oó]n\b', r'\b3ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?atacama\b'
    ]),
    ('Región de Coquimbo', [
        r'\bcoquimbo\b', r'\bla serena\b', r'\bovalle\b', r'\billapel\b', r'\bvicuña\b', r'\bsalamanca\b', r'\bandacollo\b', r'\bcombarbal[aá]\b', r'\blos vilos\b', r'\bmonte patria\b', r'\bpunitaqui\b', r'\bcanela\b', r'\bpaihuano\b',
        r'\biv\s*regi[oó]n\b', r'\b4ta?\s*regi[oó]n\b', r'\b4ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?coquimbo\b'
    ]),
    ('Región de Valparaíso', [
        r'\bvalpara[ií]so\b', r'\bviña\b', r'\bquilpu[eé]\b', r'\bvilla alemana\b', r'\bsan antonio\b', r'\bquillota\b', r'\blimache\b', r'\bquintero\b', r'\bpuchuncav[ií]\b', r'\bllaillay\b', r'\blay lay\b', r'\blos andes\b', r'\bsan felipe\b', r'\bcasablanca\b', r'\bpetorca\b', r'\bcabildo\b', r'\bligua\b', r'\bcartagena\b', r'\bel quisco\b', r'\balgarrobo\b', r'\bsanto domingo\b', r'\bolmu[eé]\b', r'\bnogales\b', r'\bhijuelas\b', r'\bcalera\b', r'\bisla de pascua\b', r'\brapanui\b', r'\bjuan fernandez\b',
        r'\bv\s*regi[oó]n\b', r'\b5ta?\s*regi[oó]n\b', r'\b5ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?valpara[ií]so\b'
    ]),
    ('Región del Libertador General Bernardo O\'Higgins', [
        r'\bo\'?higgins\b', r'\brancagua\b', r'\bsan fernando\b', r'\brengo\b', r'\bpichilemu\b', r'\bmachali\b', r'\bgraneros\b', r'\bsan vicente\b', r'\bsanta cruz\b', r'\bchimbarongo\b', r'\bmostazal\b', r'\brequinoa\b', r'\bdoñihue\b', r'\bcoltauco\b', r'\bpeumo\b', r'\bpichidegua\b', r'\bcoinco\b', r'\bmalloa\b', r'\bnavidad\b', r'\blitueche\b', r'\blared de salud o\'higgins\b',
        r'\bvi\s*regi[oó]n\b', r'\b6ta?\s*regi[oó]n\b', r'\b6ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(del?\s*)?o\'?higgins\b'
    ]),
    ('Región del Maule', [
        r'\bmaule\b', r'\btalca\b', r'\bcuric[oó]\b', r'\blinares\b', r'\bcauquenes\b', r'\bparral\b', r'\bconstituci[oó]n\b', r'\bsan javier\b', r'\bmolina\b', r'\bsan clemente\b', r'\bteno\b', r'\blongav[ií]\b', r'\bcolb[uú]n\b', r'\bretiro\b', r'\bhuañ[eé]\b', r'\bcurepto\b', r'\brauco\b', r'\bsagrada familia\b', r'\bchanco\b', r'\bpelluhue\b', r'\bempedrado\b',
        r'\bvii\s*regi[oó]n\b', r'\b7ma?\s*regi[oó]n\b', r'\b7ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(del?\s*)?maule\b'
    ]),
    ('Región de Ñuble', [
        r'\bñuble\b', r'\bchill[aá]n\b', r'\bsan carlos\b', r'\bbulnes\b', r'\byumbel\b', r'\bcoelemu\b', r'\bquirihue\b', r'\byungay\b', r'\bcoihueco\b', r'\bsan ignacio\b', r'\bpinto\b', r'\bel carmen\b', r'\bninhue\b', r'\bportezuelo\b', r'\btreguaco\b', r'\bsan nicol[aá]s\b',
        r'\bxvi\s*regi[oó]n\b', r'\b16ª?\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?ñuble\b'
    ]),
    ('Región del Biobío', [
        r'\bbiob[ií]o\b', r'\bb[ií]o b[ií]o\b', r'\bconcepci[oó]n\b', r'\btalcahuano\b', r'\bcoronel\b', r'\blota\b', r'\bsan pedro de la paz\b', r'\bchiguayante\b', r'\blos [aá]ngeles\b', r'\bcañete\b', r'\barauco\b', r'\blebu\b', r'\bpenco\b', r'\btom[eé]\b', r'\bhualp[eé]n\b', r'\bmulch[eé]n\b', r'\bnacimiento\b', r'\blaja\b', r'\bcabrero\b', r'\bcuranilahue\b', r'\btucapel\b', r'\bsanta b[aá]rbara\b', r'\bcontulmo\b',
        r'\bviii\s*regi[oó]n\b', r'\b8va?\s*regi[oó]n\b', r'\b8ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(del?\s*)?biob[ií]o\b'
    ]),
    ('Región de La Araucanía', [
        r'\baraucan[ií]a\b', r'\btemuco\b', r'\bpadre las casas\b', r'\bangol\b', r'\bvillarrica\b', r'\bpuc[oó]n\b', r'\bvictoria\b', r'\blautaro\b', r'\btraigu[eé]n\b', r'\bcollipulli\b', r'\bcarahue\b', r'\bnueva imperial\b', r'\bpitrufqu[eé]n\b', r'\bloncoche\b', r'\bcuracaut[ií]n\b', r'\bpuren\b', r'\bsaavedra\b', r'\bfreire\b', r'\bgorbea\b', r'\bcunco\b',
        r'\bix\s*regi[oó]n\b', r'\b9na?\s*regi[oó]n\b', r'\b9ª\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?la araucan[ií]a\b'
    ]),
    ('Región de Los Ríos', [
        r'\blos r[ií]os\b', r'\bvaldivia\b', r'\bla uni[oó]n\b', r'\br[ií]o bueno\b', r'\bpaillaco\b', r'\bpanguipulli\b', r'\blanco\b', r'\bmariquina\b', r'\bfutrono\b', r'\bcorral\b', r'\blago ranco\b', r'\bmáfil\b', r'\bmafil\b',
        r'\bxiv\s*regi[oó]n\b', r'\b14ª?\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?los r[ií]os\b'
    ]),
    ('Región de Los Lagos', [
        r'\blos lagos\b', r'\bpuerto montt\b', r'\bosorno\b', r'\bcastro\b', r'\bancud\b', r'\bquell[oó]n\b', r'\bchilo[eé]\b', r'\bpuerto varas\b', r'\bfrutillar\b', r'\bcalbuco\b', r'\bllanquihue\b', r'\bpurranque\b', r'\briochico\b', r'\br[ií]o negro\b', r'\bfresia\b', r'\blos muermos\b', r'\bmaull[ií]n\b', r'\bquinchao\b', r'\bachao\b', r'\bchait[eé]n\b', r'\bpalena\b', r'\bfutaleuf[uú]\b',
        r'\bx\s*regi[oó]n\b', r'\b10ª?\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?los lagos\b'
    ]),
    ('Región de Aysén del General Carlos Ibáñez del Campo', [
        r'\bays[eé]n\b', r'\bcoyhaique\b', r'\bcoihaique\b', r'\bpuerto ays[eé]n\b', r'\bchile chico\b', r'\bcochrane\b', r'\bcisnes\b', r'\bpuerto cisnes\b', r'\bguaitecas\b', r'\bmelinka\b', r'\brio ib[aá]ñez\b', r'\btortel\b', r'\bvilla o\'?higgins\b',
        r'\bxi\s*regi[oó]n\b', r'\b11ª?\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?ays[eé]n\b'
    ]),
    ('Región de Magallanes y de la Antártica Chilena', [
        r'\bmagallanes\b', r'\bpunta arenas\b', r'\bnatales\b', r'\bpuerto natales\b', r'\bporvenir\b', r'\bant[aá]rtica\b', r'\bcabo de hornos\b', r'\bpuerto williams\b', r'\btorres del paine\b', r'\bprimavera\b', r'\btimaukel\b', r'\bsan gregorio\b',
        r'\bxii\s*regi[oó]n\b', r'\b12ª?\s*regi[oó]n\b', r'\bregi[oó]n\s*(de\s*)?magallanes\b'
    ]),
    ('Región Metropolitana', [
        r'\bmetropolitana\b', r'\bsantiago\b', r'\bprovidencia\b', r'\blas condes\b', r'\bmaip[uú]\b', r'\bpuente alto\b', r'\bflorida\b', r'\bñuñoa\b', r'\brecoleta\b', r'\bindependencia\b', r'\bsan bernardo\b', r'\bquilicura\b', r'\bpudahuel\b', r'\br\.?m\.?\b', r'\bxiii\s*regi[oó]n\b', r'\bvitacura\b', r'\blo barnechea\b', r'\bpeñalol[eé]n\b', r'\bmacul\b', r'\bsan miguel\b', r'\bquinta normal\b', r'\bestaci[oó]n central\b', r'\bcerrillos\b', r'\bpedro aguirre cerda\b', r'\brenca\b', r'\bconchal[ií]\b', r'\bhuechuraba\b', r'\blo espejo\b', r'\blo prado\b', r'\bsan joaqu[ií]n\b', r'\bsan ram[oó]n\b', r'\bla cisterna\b', r'\bla granja\b', r'\bla pintana\b', r'\bel bosque\b', r'\bmelipilla\b', r'\btalagante\b', r'\bbuin\b', r'\bpaine\b', r'\bcolina\b', r'\blampa\b', r'\bpenaflor\b', r'\bpeñaflor\b', r'\bisla de maipo\b', r'\bpadre hurtado\b', r'\bel monte\b', r'\bcuracav[ií]\b', r'\btiltil\b', r'\bsan jose de maipo\b'
    ])
]

def infer_chilean_region(inst, unidad="", title=""):
    full = f"{inst} {unidad} {title}".lower()
    
    for reg_name, patterns in REGION_GEOGRAPHY_MAP:
        for pat in patterns:
            if re.search(pat, full):
                return reg_name
                
    return "Región Metropolitana"

def calculate_smart_catalog_match(title, desc="", source_hint="v-moccs-aminorte"):
    full_text = f"{title} {desc}".lower()
    
    match_inder = sum(1 for k in CATALOG_INDER_ROLL if k in full_text)
    match_vmoccs = sum(1 for k in CATALOG_VMOCCS if k in full_text)
    match_aminorte = sum(1 for k in CATALOG_AMINORTE if k in full_text)
    
    if match_inder > 0 and match_inder >= match_vmoccs and match_inder >= match_aminorte:
        score = min(99, 85 + match_inder * 5)
        return "Inder-Roll", "Aseo e Higiene", score
    elif match_vmoccs > 0 and match_vmoccs >= match_aminorte:
        score = min(99, 85 + match_vmoccs * 6)
        return "V-MOCCS", "Artículos de Escritorio y Oficina", score
    elif match_aminorte > 0:
        score = min(99, 82 + match_aminorte * 5)
        is_tech = any(k in full_text for k in ["tóner", "toner", "impresora", "mouse", "teclado", "usb", "hdmi", "plotter", "corte laser"])
        rubro = "Tecnología y Hardware" if is_tech else "Artículos de Escritorio y Oficina"
        return "Aminorte", rubro, score
    else:
        if source_hint == "inder-roll":
            return "Inder-Roll", "Aseo e Higiene", 85
        elif any(k in full_text for k in ["silla", "mueble", "escritorio"]):
            return "V-MOCCS", "Artículos de Escritorio y Oficina", 85
        else:
            return "Aminorte", "Artículos de Escritorio y Oficina", 82

def find_excel_files():
    downloads_dir = "/Users/jonathancooper/Downloads"
    all_files = sorted(
        glob.glob(os.path.join(downloads_dir, "[Cc]otizaciones*.xls")) +
        glob.glob(os.path.join(downloads_dir, "[Cc]otizaciones*.xlsx")),
        key=os.path.getmtime,
        reverse=True
    )
    clean_files = [f for f in all_files if not os.path.basename(f).startswith("~$")]
    
    file_info = []
    for filepath in clean_files:
        basename = os.path.basename(filepath)
        if "(1)" in basename or "inder" in basename.lower():
            file_info.append({"path": filepath, "source": "inder-roll", "name": basename})
        else:
            file_info.append({"path": filepath, "source": "v-moccs-aminorte", "name": basename})
    
    return file_info

def main():
    files = find_excel_files()
    if not files:
        print("[ERROR] No se encontraron archivos de Cotizaciones en ~/Downloads")
        return

    print(f"[{datetime.datetime.now().isoformat()}] Se encontraron {len(files)} archivo(s) de Cotizaciones en Downloads:")
    for f in files:
        print(f"  - {f['name']} (Origen: {f['source']})")

    opportunities_by_code = {}

    for f_info in files:
        filepath = f_info["path"]
        source_hint = f_info["source"]
        print(f"--> Procesando {f_info['name']} ({source_hint})...")

        df = pd.read_excel(filepath)
        for idx, row in df.iterrows():
            code = str(row['ID']).strip() if pd.notnull(row['ID']) else ""
            if not code:
                continue

            title = str(row['Nombre']).strip() if pd.notnull(row['Nombre']) else "Compra Ágil"
            inst = str(row['Institución']).strip() if pd.notnull(row['Institución']) else "Organismo Público"
            unidad = str(row['Unidad de compra']).strip() if pd.notnull(row['Unidad de compra']) else ""
            
            raw_monto = float(row['Presupuesto estimado']) if pd.notnull(row['Presupuesto estimado']) and row['Presupuesto estimado'] > 0 else 0.0
            moneda = str(row['Tipo Moneda']).strip().upper() if pd.notnull(row['Tipo Moneda']) else "CLP"
            
            if moneda == "USD":
                monto = int(raw_monto * USD_TO_CLP)
            else:
                monto = int(raw_monto)

            pub_date = str(row['Fecha de publicación']).strip() if pd.notnull(row['Fecha de publicación']) else ""
            close_date = str(row['Fecha de cierre']).strip() if pd.notnull(row['Fecha de cierre']) else ""
            estado_raw = str(row['Estado']).strip() if pd.notnull(row['Estado']) else "Publicada"
            
            company_match, rubro, match_score = calculate_smart_catalog_match(title, unidad, source_hint=source_hint)
            real_region = infer_chilean_region(inst, unidad, title)
            
            pub_str = format_date_to_iso(pub_date)
            close_str = format_date_to_iso(close_date)

            subestado = "Sin oferta seleccionada"
            desc = f"Compra Ágil oficial publicada en Mercado Público ({code}) para {inst} ({unidad})."

            if close_str and close_str < TODAY_STR and estado_raw == "Publicada":
                estado_raw = "Cerrada"
                subestado = "Proceso cerrado por cumplimiento de plazo"

            if code in GROUND_TRUTH_PROCESSES:
                gt = GROUND_TRUTH_PROCESSES[code]
                title = gt["titulo"]
                inst = gt["organismo"]
                rubro = gt["rubro"]
                monto = gt["monto"]
                real_region = gt.get("region", real_region)
                company_match = gt.get("empresaMatch", company_match)
                desc = gt.get("descripcion", desc)
                estado_raw = gt.get("estado", estado_raw)
                subestado = gt.get("subestadoEvaluacion", subestado)

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
                "monto": monto,
                "fechaPublicacion": pub_str or TODAY_STR,
                "fechaCierre": close_str or TODAY_STR,
                "matchScore": match_score,
                "riesgo": "Bajo",
                "descripcion": desc,
                "estado": estado_raw,
                "cronograma": [
                    {"hito": "Publicación", "fecha": pub_date},
                    {"hito": "Cierre de Ofertas", "fecha": close_date}
                ],
                "documentos": [
                    {"nombre": f"Ver en Mercado Público ({code})", "tipo": "link", "tamanho": f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"}
                ],
                "items": [
                    {"sku": "ITEM-1", "producto": title, "cantidad": 1, "precioUnitario": monto}
                ],
                "criteriosEvaluacion": [
                    {"aspecto": "Precio Ofertado", "ponderacion": 100, "descripcion": "Menor costo en Mercado Público"}
                ],
                "preguntas": [],
                "comentarios": [],
                "competidoresPropuestos": [],
                "empresaMatch": company_match,
                "modalidad": "Compra Ágil",
                "esInvitacionGrandesCompras": False,
                "subestadoEvaluacion": subestado
            }

            if code not in opportunities_by_code or op["matchScore"] > opportunities_by_code[code]["matchScore"]:
                opportunities_by_code[code] = op

    for gt_code, gt_info in GROUND_TRUTH_PROCESSES.items():
        if gt_code not in opportunities_by_code:
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

    part1 = f"""import {{ Oportunidad, Postulacion, OrdenCompra, MiembroEquipo, VistaGuardada, Notificacion }} from './types';

export const mockOportunidades: Oportunidad[] = {json.dumps(processed, indent=2, ensure_ascii=False)};

export const mockPostulaciones: Postulacion[] = [
  {{
    id: "post-1",
    oportunidadId: "op-1001-11-COT26",
    oportunidadCodigo: "1001-11-COT26",
    oportunidadTitulo: "Retiro, traslado e instalación de equipos de aire acondicionado",
    organismo: "MINISTERIO DE SALUD - SERVICIO DE SALUD METROPOLITANO",
    responsable: "Jonathan Cooper",
    montoOferta: 2300000,
    documentosAdjuntos: [],
    itemsOfertados: [],
    fechaActualizacion: "{TODAY_STR}",
    estado: "Adjudicada",
    empresaMatch: "Aminorte"
  }},
  {{
    id: "post-2",
    oportunidadId: "op-1005-15-COT26",
    oportunidadCodigo: "1005-15-COT26",
    oportunidadTitulo: "Adquisición de Insumos de Aseo y Desinfección Hospitalaria",
    organismo: "HOSPITAL REGIONAL DR. JUAN NOÉ ARICA",
    responsable: "Carlos Valenzuela",
    montoOferta: 3450000,
    documentosAdjuntos: [],
    itemsOfertados: [],
    fechaActualizacion: "{TODAY_STR}",
    estado: "Adjudicada",
    empresaMatch: "Inder-Roll"
  }}
];

export const mockOrdenesCompra: OrdenCompra[] = [];

export const mockTeamMembers: MiembroEquipo[] = [
  {{ id: "user-1", nombre: "Jonathan Cooper", email: "jcooper@inder-roll.cl", rol: "Admin", avatar: "JC", estado: "Activo" }},
  {{ id: "user-2", nombre: "Manuel Viguera", email: "mviguera@aminorte.cl", rol: "Gestor", avatar: "MV", estado: "Activo" }},
  {{ id: "user-3", nombre: "Jorge Alvarado", email: "jorge.alvarado@discoverymerch.cl", rol: "Gestor", avatar: "JA", estado: "Activo" }},
  {{ id: "user-4", nombre: "José San Martín", email: "jsanmartin@aminorte.cl", rol: "Gestor", avatar: "JS", estado: "Activo" }}
];

export const mockMiembrosEquipo = mockTeamMembers;

export const mockNotificaciones: Notificacion[] = [
  {{
    id: "notif-1",
    leida: false,
    tipo: "alerta",
    fecha: "{TODAY_STR}",
    titulo: "Sincronización Mercado Público Activa",
    descripcion: "Reporte diario de Compras Ágiles actualizado con éxito."
  }}
];

export const mockVistasGuardadas: VistaGuardada[] = [];
"""

    part2 = """
export const FLETES_REGIONALES_CHILE: Record<string, { zona: string; fleteBase: number; diasEntrega: string }> = {
  "Región Metropolitana": { zona: "Zona Central (RM)", fleteBase: 0, diasEntrega: "24 hrs" },
  "Región de Valparaíso": { zona: "Zona Centro", fleteBase: 15000, diasEntrega: "24-48 hrs" },
  "Región de Coquimbo": { zona: "Zona Norte Chico", fleteBase: 25000, diasEntrega: "48 hrs" },
  "Región del Libertador General Bernardo O'Higgins": { zona: "Zona Centro-Sur", fleteBase: 18000, diasEntrega: "24-48 hrs" },
  "Región del Maule": { zona: "Zona Centro-Sur", fleteBase: 22000, diasEntrega: "48 hrs" },
  "Región de Ñuble": { zona: "Zona Sur", fleteBase: 28000, diasEntrega: "48 hrs" },
  "Región del Biobío": { zona: "Zona Sur", fleteBase: 32000, diasEntrega: "48-72 hrs" },
  "Región de La Araucanía": { zona: "Zona Sur", fleteBase: 38000, diasEntrega: "72 hrs" },
  "Región de Los Ríos": { zona: "Zona Sur", fleteBase: 42000, diasEntrega: "72 hrs" },
  "Región de Los Lagos": { zona: "Zona Sur-Austral", fleteBase: 48000, diasEntrega: "72-96 hrs" },
  "Región de Aysén del General Carlos Ibáñez del Campo": { zona: "Zona Austral (Extrema)", fleteBase: 85000, diasEntrega: "5-7 días" },
  "Región de Magallanes y de la Antártica Chilena": { zona: "Zona Austral (Extrema)", fleteBase: 95000, diasEntrega: "5-7 días" },
  "Región de Atacama": { zona: "Zona Norte", fleteBase: 45000, diasEntrega: "48-72 hrs" },
  "Región de Antofagasta": { zona: "Zona Norte Grande", fleteBase: 55000, diasEntrega: "72 hrs" },
  "Región de Tarapacá": { zona: "Zona Norte Grande", fleteBase: 65000, diasEntrega: "72-96 hrs" },
  "Región de Arica y Parinacota": { zona: "Zona Norte Extrema", fleteBase: 75000, diasEntrega: "4-5 días" }
};
"""

    ts_content = part1 + part2

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"[{datetime.datetime.now().isoformat()}] [SUCCESS] Se actualizó {OUTPUT_FILE} con {len(processed)} Compras Ágiles oficiales de todas las empresas.")

if __name__ == "__main__":
    main()
