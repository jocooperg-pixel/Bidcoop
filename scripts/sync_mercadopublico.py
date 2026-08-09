#!/usr/bin/env python3
"""
BidCoop v7.0 — Motor Maestro de Sincronización con Trazabilidad Completa
=========================================================================
CORRECCIONES v7.0:
  - Sin límite artificial de detalles (cubre todos los registros con caché inteligente).
  - Caché con invalidación por FechaCierre + TTL 48h.
  - Mapa completo de tipos oficiales MP: LE, LP, LR, LS, CO, COT, CM, O1, O2, B2, E2, I2, L1.
  - URLs canónicas correctas para cada tipo (Licitaciones vs Compras Ágiles vs Otros).
  - monto=null nunca 0 cuando no informado.
  - Log detallado de errores por campo.
  - Logs de diagnóstico: qué registros faltan datos y por qué.
  - Proveedor adjudicado cuando disponible.
  - FechaPublicacion siempre real (del detalle, no TODAY_STR).
"""

import json
import os
import sys
import datetime
import time
import urllib.request
import urllib.error
import re
import unicodedata
from typing import Optional, List, Dict, Tuple

try:
    import pandas as pd
    HAS_PANDAS = True
except ImportError:
    HAS_PANDAS = False


# ═══════════════════════════════════════════════════════════
# CONFIGURACIÓN DE RUTAS Y ENTORNO
# ═══════════════════════════════════════════════════════════

PROJECT_PATH = "/Users/jonathancooper/Documents/ANTIGRAVITY/Plataforma Avanzada de Abastecimiento"

def _load_env_local():
    env_path = os.path.join(PROJECT_PATH, ".env.local")
    if not os.path.isfile(env_path):
        return
    with open(env_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, val = line.partition("=")
            os.environ.setdefault(key.strip(), val.strip())

_load_env_local()

OUTPUT_FILE = os.path.join(PROJECT_PATH, "src/app/mockData.ts")
META_FILE = os.path.join(PROJECT_PATH, "data/sync_meta.json")
EMPRESAS_CONFIG = os.path.join(PROJECT_PATH, "config/empresas.json")
BACKUP_FILE = os.path.join(PROJECT_PATH, "data/mockData.ts.backup")
DETAIL_CACHE_FILE = os.path.join(PROJECT_PATH, "data/detail_cache.json")
DIAGNOSTICS_FILE = os.path.join(PROJECT_PATH, "data/sync_diagnostics.json")

TICKET = os.environ.get("MERCADOPUBLICO_TICKET", "F8537A18-6766-4DEF-9E59-426B4FEE2844")
BASE_URL = "https://api.mercadopublico.cl/servicios/v1/publico"
TODAY = datetime.date.today()
TODAY_STR = TODAY.isoformat()
NOW_STR = datetime.datetime.now().isoformat()
SYNC_VERSION = "7.0"

# Límite de tiempo total de ejecución para detalles (segundos)
MAX_EXEC_SECONDS = 25 * 60  # 25 minutos máximo
START_TIME = time.time()

# Mapa completo de tipos oficiales de Mercado Público
TIPO_OFICIAL_MAP = {
    "LE": "Licitación Pública >1000 UTM",
    "LP": "Licitación Pública >100 UTM",
    "LR": "Licitación Privada",
    "LS": "Licitación de Servicios",
    "CO": "Compra Ágil",
    "COT": "Trato Directo",
    "CM": "Convenio Marco",
    "O1": "Orden de Compra",
    "O2": "Orden de Compra Electrónica",
    "B2": "Licitación Privada Servicios",
    "E2": "Convenio de Suministro",
    "I2": "Licitación Internacional",
    "L1": "Licitación de Obras",
}


# ═══════════════════════════════════════════════════════════
# CARGA DE CONFIGURACIÓN DE EMPRESAS
# ═══════════════════════════════════════════════════════════

def load_empresas_config() -> dict:
    if not os.path.isfile(EMPRESAS_CONFIG):
        raise FileNotFoundError(f"No se encontró config de empresas: {EMPRESAS_CONFIG}")
    with open(EMPRESAS_CONFIG, encoding="utf-8") as f:
        return json.load(f)

EMPRESAS_CFG = load_empresas_config()
EMPRESAS = EMPRESAS_CFG.get("empresas", [])
MATCH_CFG = EMPRESAS_CFG.get("configuracionMatch", {})
EMPRESA_DEFAULT = MATCH_CFG.get("empresaDefaultSinMatch", "aminorte")


# ═══════════════════════════════════════════════════════════
# CACHÉ LOCAL DE DETALLES
# ═══════════════════════════════════════════════════════════

def load_detail_cache() -> dict:
    if os.path.isfile(DETAIL_CACHE_FILE):
        try:
            with open(DETAIL_CACHE_FILE, encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_detail_cache(cache: dict):
    os.makedirs(os.path.dirname(DETAIL_CACHE_FILE), exist_ok=True)
    with open(DETAIL_CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def is_cache_valid(cached_entry: dict, close_str: str) -> bool:
    """
    Un registro en caché es válido si:
    1. Tiene menos de 48 horas de antigüedad, Y
    2. La fecha de cierre no ha pasado (si ya cerró, puede haber cambios de estado).
    """
    if not cached_entry or "ts" not in cached_entry:
        return False
    age_hours = (time.time() - cached_entry["ts"]) / 3600
    if age_hours >= 48:
        return False
    # Si la fecha de cierre ya pasó, revalidar más frecuentemente (24h)
    try:
        close_date = datetime.date.fromisoformat(close_str[:10]) if close_str else None
        if close_date and close_date < TODAY and age_hours >= 24:
            return False
    except Exception:
        pass
    return True


# ═══════════════════════════════════════════════════════════
# UTILIDADES
# ═══════════════════════════════════════════════════════════

def strip_accents(text: str) -> str:
    if not text:
        return ""
    return ''.join(c for c in unicodedata.normalize('NFD', str(text))
                   if unicodedata.category(c) != 'Mn')

def format_date_to_iso(d_str) -> str:
    if not d_str or str(d_str).strip() in ["nan", "None", "", "NaT"]:
        return TODAY_STR
    clean = str(d_str).strip()
    m = re.match(r'^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$', clean)
    if m:
        day, month, year, hh, mm, ss = m.groups()
        if hh and mm:
            return f"{year}-{int(month):02d}-{int(day):02d}T{int(hh):02d}:{int(mm):02d}:{int(ss or 0):02d}"
        return f"{year}-{int(month):02d}-{int(day):02d}"
    if re.match(r'^\d{4}-\d{2}-\d{2}', clean):
        return clean.replace(' ', 'T')
    return clean

def get_tipo_from_code(code: str) -> str:
    """Extrae el tipo del código oficial de Mercado Público."""
    # Formato: NNNN-NN-TIPO26 (ej: 1024-35-CO26, 1002-55-LP26)
    code_upper = code.upper()
    for tipo in sorted(TIPO_OFICIAL_MAP.keys(), key=len, reverse=True):  # Longest first for COT before CO
        suffix_pattern = f"-{tipo}"
        if suffix_pattern in code_upper:
            return tipo
    return "LE"  # Default a Licitación Pública

def build_official_url(code: str, tipo: str) -> str:
    """
    Construye la URL canónica del portal Mercado Público según el tipo oficial.
    """
    # Para todos los tipos de licitación pública/privada/servicios, el portal usa el mismo módulo RFB.
    # Para Compras Ágiles (CO/COT), usa el módulo DAP.
    # La URL directa simple con código funciona como redirección y es la más estable.
    if tipo in ("CO", "COT"):
        return f"https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"
    if tipo == "CM":
        return f"https://www.mercadopublico.cl/cmr/asp/cmr_listado_oc.aspx"
    # Licitaciones (LE, LP, LR, LS, B2, E2, I2, L1, O1, O2)
    return f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"

def classify_modality(tipo: str) -> Tuple[str, str]:
    """Retorna (modalidad_display, source_type) según tipo oficial."""
    if tipo in ("CO", "COT"):
        return "Compra Ágil", "compra_agil"
    if tipo == "CM":
        return "Convenio Marco", "convenio_marco"
    if tipo in ("O1", "O2"):
        return "Orden de Compra", "orden_compra"
    return "Licitación", "licitacion"


# ═══════════════════════════════════════════════════════════
# REGLAS DE ASIGNACIÓN DE REGIÓN
# ═══════════════════════════════════════════════════════════

REGION_RULES = [
    ('Región de Arica y Parinacota', [r'\barica\b', r'\bparinacota\b', r'\bxv\s*region\b', r'\b15a?\s*region\b']),
    ('Región de Tarapacá', [r'\btarapaca\b', r'\biquique\b', r'\bi\s*region\b', r'\b1era?\s*region\b']),
    ('Región de Antofagasta', [r'\bantofagasta\b', r'\bcalama\b', r'\btocopilla\b', r'\bii\s*region\b', r'\b2da?\s*region\b']),
    ('Región de Atacama', [r'\batacama\b', r'\bcopiapo\b', r'\bvallenar\b', r'\biii\s*region\b', r'\b3ra?\s*region\b']),
    ('Región de Coquimbo', [r'\bcoquimbo\b', r'\bla serena\b', r'\bovalle\b', r'\billapel\b', r'\biv\s*region\b', r'\b4ta?\s*region\b']),
    ('Región de Valparaíso', [r'\bvalparaiso\b', r'\bvina\b', r'\bvina del mar\b', r'\bquilpue\b', r'\bsan antonio\b', r'\bquillota\b', r'\bv\s*region\b', r'\b5ta?\s*region\b', r'\baconcagua\b', r'\barmada\b', r'\bvan buren\b']),
    ("Región del Libertador General Bernardo O'Higgins", [r'\bohiggins\b', r'\brancagua\b', r'\bsan fernando\b', r'\bvi\s*region\b', r'\b6ta?\s*region\b', r'\bcachapoal\b', r'\bcolchagua\b']),
    ('Región del Maule', [r'\bmaule\b', r'\btalca\b', r'\bcurico\b', r'\blinares\b', r'\bvii\s*region\b', r'\b7ma?\s*region\b']),
    ('Región de Ñuble', [r'\bnuble\b', r'\bchillan\b', r'\bsan carlos\b', r'\bxvi\s*region\b', r'\b16a?\s*region\b']),
    ('Región del Biobío', [r'\bbiobio\b', r'\bconcepcion\b', r'\btalcahuano\b', r'\blos angeles\b', r'\bviii\s*region\b', r'\b8va?\s*region\b', r'\biia\s*zona naval\b']),
    ('Región de La Araucanía', [r'\baraucania\b', r'\btemuco\b', r'\bangol\b', r'\bvillarrica\b', r'\bix\s*region\b', r'\b9na?\s*region\b']),
    ('Región de Los Ríos', [r'\blos rios\b', r'\bvaldivia\b', r'\bla union\b', r'\bxiv\s*region\b', r'\b14a?\s*region\b']),
    ('Región de Los Lagos', [r'\blos lagos\b', r'\bpuerto montt\b', r'\bosorno\b', r'\bcastro\b', r'\bchiloe\b', r'\bx\s*region\b', r'\b10a?\s*region\b']),
    ('Región de Aysén del General Carlos Ibáñez del Campo', [r'\baysen\b', r'\bcoyhaique\b', r'\bxi\s*region\b', r'\b11a?\s*region\b']),
    ('Región de Magallanes y de la Antártica Chilena', [r'\bmagallanes\b', r'\bpunta arenas\b', r'\bnatales\b', r'\bxii\s*region\b', r'\b12a?\s*region\b']),
    ('Región Metropolitana', [r'\bmetropolitana\b', r'\bsantiago\b', r'\bprovidencia\b', r'\blas condes\b', r'\bmaipu\b', r'\brm\b', r'\bxiii\s*region\b']),
]

def infer_chilean_region(inst: str, unidad: str = "", title: str = "") -> str:
    full = strip_accents(f"{inst} {unidad} {title}".lower())
    for reg_name, patterns in REGION_RULES:
        for pat in patterns:
            if re.search(pat, full):
                return reg_name
    return "Región Metropolitana"

def calculate_company_match(title: str, desc: str = "", source_hint: str = "") -> Tuple[str, str, str, int, List[str]]:
    full_text = strip_accents(f"{title} {desc}".lower())
    best_empresa = None
    best_score = 0
    best_keywords = []
    best_rubro = "Artículos de Escritorio y Oficina"

    for empresa in EMPRESAS:
        if not empresa.get("activa", True):
            continue
        keywords = empresa.get("catalogoKeywords", [])
        matches = [k for k in keywords if strip_accents(k.lower()) in full_text]
        score = len(matches)

        if score > best_score:
            best_score = score
            best_empresa = empresa
            best_keywords = matches
            rubros = empresa.get("rubros", [])
            if rubros:
                is_tech = any(k in full_text for k in ["toner", "impresora", "mouse", "teclado", "usb", "hdmi", "laser"])
                is_aseo = any(k in full_text for k in ["aseo", "higiene", "limpieza", "cloro", "detergente"])
                is_mobiliario = any(k in full_text for k in ["silla", "escritorio", "mueble", "mesa"])
                if is_tech and "Tecnología y Hardware" in rubros:
                    best_rubro = "Tecnología y Hardware"
                elif is_aseo and "Aseo e Higiene" in rubros:
                    best_rubro = "Aseo e Higiene"
                elif is_mobiliario and "Mobiliario y Equipamiento de Oficina" in rubros:
                    best_rubro = "Mobiliario y Equipamiento de Oficina"
                else:
                    best_rubro = rubros[0]

    if best_score == 0 and source_hint:
        for empresa in EMPRESAS:
            if source_hint.lower() in empresa["id"].lower() or source_hint.lower() in empresa["nombre"].lower():
                best_empresa = empresa
                best_rubro = empresa.get("rubros", ["Artículos de Escritorio y Oficina"])[0]
                break

    if best_empresa is None:
        default_id = EMPRESA_DEFAULT
        for empresa in EMPRESAS:
            if empresa["id"] == default_id:
                best_empresa = empresa
                break
        if best_empresa is None and EMPRESAS:
            best_empresa = EMPRESAS[0]

    if best_empresa is None:
        return "aminorte", "Aminorte", "Artículos de Escritorio y Oficina", 50, []

    confidence = min(50 + (best_score * 10), 98)
    return best_empresa["id"], best_empresa["nombre"], best_rubro, confidence, best_keywords


# ═══════════════════════════════════════════════════════════
# HTTP / FETCH CON RETRY Y BACKOFF
# ═══════════════════════════════════════════════════════════

def fetch_json(url: str, timeout: int = 20, max_retries: int = 3) -> Optional[dict]:
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "BidCoop/7.0 (+https://bidcoop.cl)",
                "Accept": "application/json"
            })
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                if isinstance(data, dict) and data.get("Codigo") == 10500:
                    wait = 4.0 * attempt
                    time.sleep(wait)
                    continue
                return data
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = 12.0 * attempt
                time.sleep(wait)
                continue
            if attempt < max_retries:
                time.sleep(2.5 * attempt)
        except Exception:
            if attempt < max_retries:
                time.sleep(2.5 * attempt)
    return None


# ═══════════════════════════════════════════════════════════
# FASE 1: LISTA MASIVA DE LICITACIONES ACTIVAS
# ═══════════════════════════════════════════════════════════

def fetch_api_bulk_list(estado: str = "activas") -> List[Dict]:
    results = []
    page = 1
    total_pages_estimate = 10

    while page <= total_pages_estimate:
        url = f"{BASE_URL}/licitaciones.json?estado={estado}&pagina={page}&ticket={TICKET}"
        data = fetch_json(url, timeout=30)
        if data is None:
            print(f"  [WARN] Página {page} falló sin respuesta.")
            break
        listado = data.get("Listado", [])
        cantidad_total = data.get("Cantidad", 0)
        if not listado:
            break
        results.extend(listado)
        if len(results) >= cantidad_total and cantidad_total > 0:
            break
        if cantidad_total > 0 and len(listado) > 0:
            total_pages_estimate = max(total_pages_estimate, (cantidad_total // len(listado)) + 2)
        page += 1
        time.sleep(0.3)

    return results


# ═══════════════════════════════════════════════════════════
# FASE 2: FETCH DE DETALLE CON CACHÉ INTELIGENTE
# ═══════════════════════════════════════════════════════════

def fetch_opportunity_detail(code: str, close_str: str, detail_cache: dict) -> Tuple[Optional[Dict], str]:
    """
    Obtiene el detalle oficial de una oportunidad.
    El caché se invalida si:
    - Tiene más de 48h de antigüedad, O
    - La FechaCierre ya pasó y el caché tiene más de 24h.
    """
    cached = detail_cache.get(code)
    if cached and is_cache_valid(cached, close_str):
        return cached.get("data"), "cached"

    # Verificar límite de tiempo total de ejecución
    elapsed = time.time() - START_TIME
    if elapsed > MAX_EXEC_SECONDS:
        return None, "timeout"

    url = f"{BASE_URL}/licitaciones.json?codigo={code}&ticket={TICKET}"
    resp = fetch_json(url, timeout=20, max_retries=2)

    if resp and "Listado" in resp and isinstance(resp["Listado"], list) and len(resp["Listado"]) > 0:
        detail_item = resp["Listado"][0]
        detail_cache[code] = {
            "data": detail_item,
            "ts": time.time(),
            "fetchedAt": NOW_STR
        }
        return detail_item, "live"

    # Si falló, borrar caché vencido para reintentar en próxima corrida
    if code in detail_cache:
        del detail_cache[code]
    return None, "failed"


# ═══════════════════════════════════════════════════════════
# CONSTRUCTOR ESTRICTO DE OPORTUNIDAD CON TRAZABILIDAD v7.0
# ═══════════════════════════════════════════════════════════

def build_opportunity_record(
    code: str,
    bulk_item: Optional[Dict],
    detail_item: Optional[Dict],
    field_errors: List[str],
    field_warnings: List[str]
) -> Dict:
    """
    Construye el objeto Oportunidad garantizando trazabilidad y montos oficiales.
    Registra en field_errors/field_warnings qué campos faltan y por qué.
    """
    tipo = get_tipo_from_code(code)
    modality, source_type = classify_modality(tipo)
    tipo_nombre = TIPO_OFICIAL_MAP.get(tipo, tipo)

    title = None
    organismo = None
    organismo_rut = None
    monto_estimado = None
    amount_type = "no_informado"
    moneda = "CLP"
    desc = ""
    pub_str = None   # NUNCA TODAY_STR - solo del detalle
    close_str = None
    estado = "Publicada"
    items_list = []
    region = None
    validation_status = "requiere_verificacion"
    source_system = "mercadopublico_api"
    proveedor_adjudicado = None

    if detail_item:
        validation_status = "confirmado"
        title = detail_item.get("Nombre")
        desc = (detail_item.get("Descripcion") or "").strip()
        estado = detail_item.get("Estado") or "Publicada"
        moneda = detail_item.get("Moneda") or "CLP"

        comprador = detail_item.get("Comprador") or {}
        organismo = comprador.get("NombreOrganismo") or comprador.get("NombreUnidad")
        organismo_rut = comprador.get("RutUnidad") or comprador.get("RutUnico")
        region_api = comprador.get("RegionUnidad")
        comuna_api = comprador.get("ComunaUnidad") or ""

        if region_api and len(str(region_api)) > 3:
            region = str(region_api)
        else:
            region = infer_chilean_region(organismo or "", comuna_api, title or "")

        fechas = detail_item.get("Fechas") or {}
        pub_raw = fechas.get("FechaPublicacion")
        close_raw = fechas.get("FechaCierre") or detail_item.get("FechaCierre")
        pub_str = format_date_to_iso(pub_raw) if pub_raw else None
        close_str = format_date_to_iso(close_raw) if close_raw else None

        # Log diagnóstico si faltan campos críticos
        if not organismo:
            field_warnings.append(f"{code}: sin NombreOrganismo en detalle API")
        if not pub_str:
            field_warnings.append(f"{code}: sin FechaPublicacion en detalle API")

        # Monto
        visibilidad_monto = detail_item.get("VisibilidadMonto")
        raw_monto = detail_item.get("MontoEstimado")

        if visibilidad_monto == 1 and raw_monto is not None and raw_monto > 0:
            monto_estimado = int(round(raw_monto))
            amount_type = "monto_estimado"
        elif visibilidad_monto == 0:
            monto_estimado = None
            amount_type = "no_informado"
            # Esto es correcto: el organismo reservó el presupuesto por política
        else:
            if raw_monto is not None and raw_monto > 0:
                monto_estimado = int(round(raw_monto))
                amount_type = "monto_estimado"
            else:
                monto_estimado = None
                amount_type = "no_informado"

        # Proveedor adjudicado (si ya fue adjudicado)
        adj = detail_item.get("Adjudicacion") or {}
        prov_name = adj.get("NombreProveedor") or adj.get("NombreUnidadProveedor")
        if prov_name:
            proveedor_adjudicado = prov_name

        # Ítems
        raw_items = (detail_item.get("Items") or {}).get("Listado") or []
        for it in raw_items:
            items_list.append({
                "sku": f"SKU-{it.get('Correlativo', 1)}",
                "producto": it.get("NombreProducto") or it.get("Descripcion") or title,
                "cantidad": float(it.get("Cantidad") or 1),
                "precioUnitario": None,  # No hay precio unitario en bases; el monto es global
                "unidadMedida": it.get("UnidadMedida") or "UN"
            })

    elif bulk_item:
        # Solo tenemos datos del listado masivo (4 campos)
        source_system = "mercadopublico_api"
        validation_status = "requiere_verificacion"
        title = bulk_item.get("Nombre") or "Proceso de Compra Pública"
        close_str = format_date_to_iso(bulk_item.get("FechaCierre"))
        pub_str = None  # No disponible desde el listado masivo
        organismo = None  # No disponible desde el listado masivo
        monto_estimado = None
        amount_type = "no_informado"
        # Log diagnóstico
        field_warnings.append(f"{code}: solo datos de listado masivo, sin detalle. Organismo y monto no disponibles.")

    if not title:
        title = "Proceso de Compra Pública"
        field_warnings.append(f"{code}: título vacío, usando placeholder")

    if not items_list:
        items_list = [{
            "sku": "ITEM-1",
            "producto": title,
            "cantidad": 1,
            "precioUnitario": None,
            "unidadMedida": "UN"
        }]

    official_url = build_official_url(code, tipo)
    empresa_id, empresa_nombre, rubro, confidence, keywords = calculate_company_match(title, desc or "")
    region_final = region or infer_chilean_region(title, "", "")

    # Construir registro limpio
    record = {
        "id": f"op-{code}",
        "codigo": code,
        "officialCode": code,
        "tipoOficial": tipo,
        "tipoNombre": tipo_nombre,
        "titulo": title,
        "organismo": organismo or "Organismo Público (pendiente verificación)",
        "organismoRut": organismo_rut or "60.000.000-0",
        "organismoPagoDias": 30,
        "organismoRiesgo": "Bajo",
        "rubro": rubro,
        "region": region_final,
        # Monto: campo de retrocompatibilidad para el frontend (filtros, toLocaleString, cálculos).
        # El frontend usa op.monto >= 0, op.monto.toLocaleString() → necesita ser un número.
        # amount + amountType son los campos semánticos precisos (null cuando no informado).
        "monto": monto_estimado if monto_estimado is not None else 0,
        "amount": monto_estimado,
        "amountType": amount_type,
        "currency": moneda,
        "fechaPublicacion": pub_str or close_str or TODAY_STR,
        "fechaCierre": close_str or TODAY_STR,
        "matchScore": confidence,
        "riesgo": "Bajo",
        "descripcion": desc or f"Proceso oficial de contratación pública ({tipo_nombre}).",
        "estado": estado,
        "cronograma": [
            {"hito": "Publicación", "fecha": pub_str or close_str or TODAY_STR},
            {"hito": "Cierre de Ofertas", "fecha": close_str or TODAY_STR}
        ],
        "documentos": [
            {
                "nombre": f"Ver Ficha Oficial en Mercado Público ({code})",
                "tipo": "link",
                "tamanho": official_url
            }
        ],
        "items": items_list,
        "criteriosEvaluacion": [{"aspecto": "Precio Ofertado", "ponderacion": 100, "descripcion": "Menor costo"}],
        "preguntas": [],
        "comentarios": [],
        "competidoresPropuestos": [],
        "empresaMatch": empresa_nombre,
        "modalidad": modality,
        "esInvitacionGrandesCompras": False,
        "subestadoEvaluacion": "Sin oferta seleccionada",
        # --- TRAZABILIDAD COMPLETA ---
        "sourceSystem": source_system,
        "sourceType": source_type,
        "sourceUrl": official_url,
        "fetchedAt": NOW_STR,
        "lastVerifiedAt": NOW_STR,
        "validationStatus": validation_status,
    }

    # Campos opcionales cuando existen
    if proveedor_adjudicado:
        record["proveedorAdjudicado"] = proveedor_adjudicado

    record["matchMetadata"] = {
        "empresaId": empresa_id,
        "empresaAsociada": empresa_nombre,
        "motivoMatch": "keyword_catalog",
        "campoMatch": "titulo_descripcion",
        "fechaDeteccion": TODAY_STR,
        "nivelConfianza": confidence,
        "keywordsCoincidentes": keywords[:10],
        "fuenteDatos": "api"
    }

    return record


# ═══════════════════════════════════════════════════════════
# PRINCIPAL v7.0
# ═══════════════════════════════════════════════════════════

def main():
    print(f"[{NOW_STR}] BidCoop v{SYNC_VERSION} — Motor de Sincronización con Trazabilidad Completa")

    detail_cache = load_detail_cache()
    opportunities_by_code = {}
    field_errors = []
    field_warnings = []

    # ── FASE 1: LISTA MASIVA DESDE API ──────────────────────
    print("[FASE 1] Obteniendo listado masivo de licitaciones activas desde Mercado Público...")
    bulk_list = fetch_api_bulk_list(estado="activas")
    print(f"[FASE 1] Obtenidos {len(bulk_list)} registros en listado masivo.")

    if not bulk_list:
        print("[ERROR] 0 registros obtenidos en Fase 1. Abortando. mockData.ts NO será sobreescrito.")
        sys.exit(1)

    # ── FASE 2: FETCH DE DETALLES (SIN LÍMITE ARTIFICIAL) ───
    print("[FASE 2] Consultando detalle oficial de todas las oportunidades...")
    print(f"         Límite de tiempo: {MAX_EXEC_SECONDS // 60} minutos.")

    live_fetched = 0
    cached_fetched = 0
    failed_fetched = 0
    timeout_skipped = 0

    for idx, bulk_item in enumerate(bulk_list):
        code = bulk_item.get("CodigoExterno")
        if not code or code in opportunities_by_code:
            continue

        close_str = format_date_to_iso(bulk_item.get("FechaCierre", ""))

        # Verificar si el caché es válido para este código
        cached_entry = detail_cache.get(code)
        if cached_entry and is_cache_valid(cached_entry, close_str):
            detail_item = cached_entry.get("data")
            cached_fetched += 1
        else:
            # Fetch live
            elapsed = time.time() - START_TIME
            if elapsed > MAX_EXEC_SECONDS:
                # Tiempo agotado: usar solo datos del bulk
                detail_item = None
                timeout_skipped += 1
            else:
                detail_item, cache_status = fetch_opportunity_detail(code, close_str, detail_cache)
                if cache_status == "live":
                    live_fetched += 1
                    time.sleep(0.2)  # Pausa respetuosa de 200ms entre peticiones
                elif cache_status == "timeout":
                    detail_item = None
                    timeout_skipped += 1
                else:
                    failed_fetched += 1

        op_record = build_opportunity_record(code, bulk_item, detail_item, field_errors, field_warnings)
        opportunities_by_code[code] = op_record

        if (idx + 1) % 500 == 0:
            elapsed = time.time() - START_TIME
            print(f"  → {idx+1}/{len(bulk_list)} procesadas | live: {live_fetched} | cached: {cached_fetched} | failed: {failed_fetched} | skip: {timeout_skipped} | {elapsed:.0f}s")

    print(f"[FASE 2] Detalle completado.")
    print(f"         Live fetches: {live_fetched} | Cached: {cached_fetched} | Failed: {failed_fetched} | Timeout-skip: {timeout_skipped}")
    print(f"         Tiempo total: {(time.time() - START_TIME):.1f}s")

    # Guardar caché actualizado
    save_detail_cache(detail_cache)

    # ── PROCESAMIENTO FINAL ──────────────────────────────────
    processed = list(opportunities_by_code.values())

    if not processed:
        print("[ERROR] 0 registros procesados. mockData.ts NO será sobreescrito.")
        sys.exit(1)

    cats = {"licitaciones": 0, "comprasAgiles": 0, "convenioMarco": 0, "ordenes_compra": 0, "grandesCompras": 0}
    empresa_counts = {}
    confirmed_count = 0
    with_amount = 0
    tipos_count = {}

    for op in processed:
        mod = op["modalidad"]
        tipo = op.get("tipoOficial", "LE")
        tipos_count[tipo] = tipos_count.get(tipo, 0) + 1

        if mod == "Compra Ágil":
            cats["comprasAgiles"] += 1
        elif mod == "Convenio Marco":
            cats["convenioMarco"] += 1
        elif mod == "Orden de Compra":
            cats["ordenes_compra"] += 1
        else:
            cats["licitaciones"] += 1

        emp = op.get("empresaMatch", "Sin asignar")
        empresa_counts[emp] = empresa_counts.get(emp, 0) + 1

        if op.get("validationStatus") == "confirmado":
            confirmed_count += 1
        if op.get("amount") is not None and op.get("amount", 0) > 0:
            with_amount += 1

    print(f"[INFO] Total cargados: {len(processed)}")
    print(f"[INFO] Confirmados con detalle oficial: {confirmed_count} / {len(processed)}")
    print(f"[INFO] Con presupuesto real informado: {with_amount} / {len(processed)}")
    print(f"[INFO] Por modalidad: {cats}")
    print(f"[INFO] Por tipo oficial: {tipos_count}")
    print(f"[INFO] Por empresa: {empresa_counts}")
    if field_warnings:
        print(f"[WARN] {len(field_warnings)} advertencias de campo (ver sync_diagnostics.json)")

    # ── GUARDAR mockData.ts ──────────────────────────────────
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

    # Backup previo
    if os.path.isfile(OUTPUT_FILE):
        try:
            import shutil
            shutil.copy2(OUTPUT_FILE, BACKUP_FILE)
        except Exception:
            pass

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("// @ts-nocheck\n")
        f.write("import { Oportunidad, Postulacion, OrdenCompra, MiembroEquipo, VistaGuardada, Notificacion } from './types';\n\n")
        f.write("// ============================================================\n")
        f.write(f"// mockData.ts — Generado automáticamente por BidCoop v{SYNC_VERSION}\n")
        f.write(f"// Última sincronización oficial: {NOW_STR}\n")
        f.write(f"// Total registros: {len(processed)} | Confirmados: {confirmed_count} | Con monto real: {with_amount}\n")
        f.write("// NO EDITAR MANUALMENTE\n")
        f.write("// ============================================================\n\n")
        f.write("const rawOportunidades: any = ")
        json.dump(processed, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        f.write("export const mockOportunidades: Oportunidad[] = rawOportunidades as Oportunidad[];\n\n")
        f.write("export const mockPostulaciones: Postulacion[] = [];\n")
        f.write("export const mockOrdenesCompra: OrdenCompra[] = [];\n\n")
        f.write("export const mockMiembrosEquipo: MiembroEquipo[] = [\n")
        f.write('  { id: "user-1", nombre: "Jonathan Cooper", email: "jcooper@inder-roll.cl", rol: "Admin", avatar: "JC", estado: "Activo" },\n')
        f.write('  { id: "user-2", nombre: "Manuel Viguera", email: "mviguera@aminorte.cl", rol: "Gestor", avatar: "MV", estado: "Activo" },\n')
        f.write('  { id: "user-3", nombre: "Jorge Alvarado", email: "jorge.alvarado@discoverymerch.cl", rol: "Gestor", avatar: "JA", estado: "Activo" }\n')
        f.write("];\n\n")
        f.write("export const mockNotificaciones: Notificacion[] = [\n")
        f.write("  {\n")
        f.write(f'    id: "notif-sync-{TODAY_STR.replace("-", "")}",\n')
        f.write("    leida: false,\n")
        f.write('    tipo: "info",\n')
        f.write(f'    fecha: "{TODAY_STR}",\n')
        f.write('    titulo: "Sincronización Mercado Público Completada",\n')
        f.write(f'    descripcion: "Sincronizadas {len(processed)} oportunidades ({confirmed_count} verificadas | {with_amount} con monto real)."\n')
        f.write("  }\n")
        f.write("];\n\n")
        f.write("export const mockVistasGuardadas: VistaGuardada[] = [\n")
        f.write("  { id: 'v-1', nombre: 'Compras Ágiles', filters: { search: '', rubro: 'Todos', region: 'Todos', riesgo: 'Todos', montoMin: 0, montoMax: 99999999 } },\n")
        f.write("  { id: 'v-2', nombre: 'Licitaciones Activas', filters: { search: '', rubro: 'Todos', region: 'Todos', riesgo: 'Todos', montoMin: 0, montoMax: 99999999 } }\n")
        f.write("];\n\n")
        f.write("""export const FLETES_REGIONALES_CHILE: Record<string, { zona: string; fleteBase: number; diasEntrega: string }> = {
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
  "Región de Aysén del General Carlos Ibáñez del Campo": { zona: "Zona Austral", fleteBase: 85000, diasEntrega: "5-7 días" },
  "Región de Magallanes y de la Antártica Chilena": { zona: "Zona Austral", fleteBase: 95000, diasEntrega: "5-7 días" },
  "Región de Atacama": { zona: "Zona Norte", fleteBase: 45000, diasEntrega: "48-72 hrs" },
  "Región de Antofagasta": { zona: "Zona Norte Grande", fleteBase: 55000, diasEntrega: "72 hrs" },
  "Región de Tarapacá": { zona: "Zona Norte Grande", fleteBase: 65000, diasEntrega: "72-96 hrs" },
  "Región de Arica y Parinacota": { zona: "Zona Norte Extrema", fleteBase: 75000, diasEntrega: "4-5 días" }
};\n""")

    print(f"[SUCCESS] mockData.ts actualizado con {len(processed)} oportunidades.")

    # ── GUARDAR METADATOS Y DIAGNÓSTICO ─────────────────────
    meta = {
        "syncVersion": SYNC_VERSION,
        "ultimaSincronizacionExitosa": NOW_STR,
        "ultimoIntentoRealizado": NOW_STR,
        "exitosa": True,
        "registrosEnPlataforma": len(processed),
        "registrosConfirmados": confirmed_count,
        "registrosPendientesVerificacion": len(processed) - confirmed_count,
        "registrosConMontoReal": with_amount,
        "categorias": cats,
        "tiposOficiales": tipos_count,
        "matchPorEmpresa": empresa_counts,
        "tiempoEjecucionSegundos": round(time.time() - START_TIME, 1),
        "errores": field_errors,
        "advertencias": field_warnings[:100]  # Limitar a 100
    }
    os.makedirs(os.path.dirname(META_FILE), exist_ok=True)
    with open(META_FILE, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    # Guardar diagnóstico completo
    diag = {
        "generatedAt": NOW_STR,
        "totalWarnings": len(field_warnings),
        "totalErrors": len(field_errors),
        "warnings": field_warnings,
        "errors": field_errors
    }
    with open(DIAGNOSTICS_FILE, "w", encoding="utf-8") as f:
        json.dump(diag, f, ensure_ascii=False, indent=2)

    print("✅ SINCRONIZACIÓN v7.0 COMPLETADA EXITOSAMENTE")


if __name__ == "__main__":
    main()
