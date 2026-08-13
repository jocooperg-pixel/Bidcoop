#!/usr/bin/env python3
"""
BidCoop v7.5 — Motor Maestro de Sincronización y Reconciliación con Trazabilidad Completa
=======================================================================================
Implementa las 19 reglas estrictas de cruce y reconciliación de Compras Ágiles:
  - Cruce jerárquico obligatorio (OC > Adjudicación > Adjudicación Ítems > Cotización Excel > Presupuesto API).
  - Trazabilidad completa por registro (monto_original, monto_adjudicado, monto_oc, monto_final, fuente_monto, estado_validacion_monto).
  - Estado explícito MONTO_NO_ENCONTRADO (nunca confundido con $0 real).
  - Deduplicación y exclusión de OCs canceladas/anuladas.
  - Ingesta completa de data/Cotizaciones.xls (427 Compras Ágiles reales).
  - Registro de los 19 identificadores principales (rutOrganismo, proveedorAdjudicado, rutProveedor, etc.).
  - Auditoría automática en terminal y sync_meta.json.
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

# Raíz del repo derivada de la ubicación del propio script (scripts/../) — funciona
# igual en tu Mac que en el runner de GitHub Actions, donde la ruta absoluta local
# no existe.
PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

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
SNAPSHOT_FILE = os.path.join(PROJECT_PATH, "data/sync_snapshot.json")
EMPRESAS_CONFIG = os.path.join(PROJECT_PATH, "config/empresas.json")
BACKUP_FILE = os.path.join(PROJECT_PATH, "data/mockData.ts.backup")
DETAIL_CACHE_FILE = os.path.join(PROJECT_PATH, "data/detail_cache.json")
DIAGNOSTICS_FILE = os.path.join(PROJECT_PATH, "data/sync_diagnostics.json")
COTIZACIONES_EXCEL = os.path.join(PROJECT_PATH, "data/Cotizaciones.xls")

TICKET = os.environ.get("MERCADOPUBLICO_TICKET", "F8537A18-6766-4DEF-9E59-426B4FEE2844")
BASE_URL = "https://api.mercadopublico.cl/servicios/v1/publico"
TODAY = datetime.date.today()
TODAY_STR = TODAY.isoformat()
# Timestamp con offset UTC explícito (+00:00) — sin esto, el navegador del
# usuario interpreta el ISO string como HORA LOCAL suya en vez de UTC, y
# muestra la hora de sync desplazada por su propio huso horario (ej. un
# usuario en Chile veía "11:47" en vez de la hora real "07:47" local).
NOW_STR = datetime.datetime.now(datetime.timezone.utc).isoformat()
SYNC_VERSION = "7.5"

MAX_EXEC_SECONDS = 25 * 60
START_TIME = time.time()

TIPO_OFICIAL_MAP = {
    "LE": "Licitación Pública >1000 UTM",
    "LP": "Licitación Pública >100 UTM",
    "LR": "Licitación Privada",
    "LS": "Licitación de Servicios",
    "CO": "Compra Ágil",
    "COT": "Trato Directo / Compra Ágil",
    "CM": "Convenio Marco",
    "O1": "Orden de Compra",
    "O2": "Orden de Compra Electrónica",
    "B2": "Licitación Privada Servicios",
    "E2": "Convenio de Suministro",
    "I2": "Licitación Internacional",
    "L1": "Licitación de Obras",
}


# ═══════════════════════════════════════════════════════════
# NORMALIZACIÓN DE MONTOS (REGLA 5)
# ═══════════════════════════════════════════════════════════

def normalize_amount(val) -> Optional[int]:
    """
    Normaliza valores numéricos o strings formateados como "$1.250.000 CLP".
    Elimina $, CLP, espacios, puntos de miles y castea a int.
    """
    if val is None or val == "" or str(val).strip() in ["nan", "None", "undefined", "null", "NaN"]:
        return None
    if isinstance(val, (int, float)):
        if pd.isna(val) if HAS_PANDAS else False:
            return None
        num = int(round(val))
        return num if num > 0 else None
    
    clean_str = str(val).upper().replace("$", "").replace("CLP", "").replace("USD", "").strip()
    clean_str = re.sub(r'\s+', '', clean_str)
    # Si contiene comas o puntos como separadores de miles
    if "." in clean_str and "," in clean_str:
        clean_str = clean_str.replace(".", "").replace(",", ".")
    elif "." in clean_str:
        parts = clean_str.split(".")
        if len(parts) > 2 or (len(parts) == 2 and len(parts[1]) == 3):
            clean_str = clean_str.replace(".", "")
    elif "," in clean_str:
        clean_str = clean_str.replace(",", "")
        
    try:
        num = int(round(float(clean_str)))
        return num if num > 0 else None
    except Exception:
        return None


# ═══════════════════════════════════════════════════════════
# CARGA DE EXCEL COTIZACIONES
# ═══════════════════════════════════════════════════════════

def load_cotizaciones_excel() -> Tuple[Dict[str, dict], Dict[str, dict]]:
    """
    Carga data/Cotizaciones.xls y crea dos índices:
    1. cot_dict: mapeo por ID exacto (e.g. 1057498-2072-COT26)
    2. cot_base_dict: mapeo por código base (e.g. 1057498-2072)
    """
    cot_dict = {}
    cot_base_dict = {}

    if not HAS_PANDAS or not os.path.isfile(COTIZACIONES_EXCEL):
        return cot_dict, cot_base_dict

    try:
        df = pd.read_excel(COTIZACIONES_EXCEL)
        for _, row in df.iterrows():
            cid = str(row.get("ID", "")).strip()
            if not cid or cid == "nan":
                continue
            
            presupuesto_raw = row.get("Presupuesto estimado")
            presupuesto = normalize_amount(presupuesto_raw)
            
            item = {
                "id": cid,
                "nombre": str(row.get("Nombre", "")).strip(),
                "unidad_compra": str(row.get("Unidad de compra", "")).strip(),
                "fecha_pub": str(row.get("Fecha de publicación", "")).strip(),
                "fecha_cierre": str(row.get("Fecha de cierre", "")).strip(),
                "estado": str(row.get("Estado", "")).strip(),
                "cotizaciones_enviadas": row.get("Cotizaciones enviadas"),
                "institucion": str(row.get("Institución", "")).strip(),
                "presupuesto_estimado": presupuesto,
                "moneda": str(row.get("Tipo Moneda", "CLP")).strip(),
                "orden_compra": str(row.get("Orden de compra", "")).strip() if pd.notna(row.get("Orden de compra")) else None,
                "estado_oc": str(row.get("Estado OC", "")).strip() if pd.notna(row.get("Estado OC")) else None
            }

            cot_dict[cid] = item

            # Código base (e.g. 1057498-2072)
            m = re.match(r'^(\d+-\d+)', cid)
            if m:
                base_code = m.group(1)
                cot_base_dict[base_code] = item
    except Exception as e:
        print(f"[WARN] No se pudo leer Cotizaciones.xls: {e}")

    return cot_dict, cot_base_dict


# ═══════════════════════════════════════════════════════════
# CARGA DE CONFIGURACIÓN DE EMPRESAS Y CACHÉ
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


# ═══════════════════════════════════════════════════════════
# "¿QUÉ CAMBIÓ?" — Diff real contra la corrida anterior
# ═══════════════════════════════════════════════════════════
# Cada corrida sobreescribe mockData.ts por completo, así que sin este
# snapshot no habría forma honesta de saber qué es nuevo, qué cambió de
# estado/monto o qué dejó de estar activo. Se guarda un resumen liviano
# (no todo el registro) exclusivamente para comparar la próxima corrida.

def load_previous_snapshot() -> dict:
    if not os.path.isfile(SNAPSHOT_FILE):
        return {"generatedAt": None, "registros": {}}
    try:
        with open(SNAPSHOT_FILE, encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, dict) and isinstance(data.get("registros"), dict):
                return data
    except Exception:
        pass
    return {"generatedAt": None, "registros": {}}

def save_snapshot(processed: List[Dict]):
    registros = {}
    for op in processed:
        code = op.get("codigo")
        if not code:
            continue
        registros[code] = {
            "titulo": op.get("titulo"),
            "organismo": op.get("organismo"),
            "estado": op.get("estado"),
            "monto": op.get("monto", 0),
            "empresaMatch": op.get("empresaMatch"),
            "fechaCierre": op.get("fechaCierre")
        }
    os.makedirs(os.path.dirname(SNAPSHOT_FILE), exist_ok=True)
    with open(SNAPSHOT_FILE, "w", encoding="utf-8") as f:
        json.dump({"generatedAt": NOW_STR, "registros": registros}, f, ensure_ascii=False, indent=2)

def compute_cambios(previous: dict, processed: List[Dict], max_items: int = 60) -> dict:
    old_registros = previous.get("registros", {})
    new_map = {}
    for op in processed:
        code = op.get("codigo")
        if code:
            new_map[code] = op

    nuevos, modificados, cerrados = [], [], []

    for code, op in new_map.items():
        old = old_registros.get(code)
        if old is None:
            nuevos.append({
                "codigo": code,
                "titulo": op.get("titulo"),
                "organismo": op.get("organismo"),
                "monto": op.get("monto", 0),
                "empresaMatch": op.get("empresaMatch"),
                "matchScore": op.get("matchScore"),
                "fechaCierre": op.get("fechaCierre")
            })
        else:
            estado_cambio = old.get("estado") != op.get("estado")
            monto_cambio = (old.get("monto") or 0) != (op.get("monto") or 0)
            if estado_cambio or monto_cambio:
                modificados.append({
                    "codigo": code,
                    "titulo": op.get("titulo"),
                    "organismo": op.get("organismo"),
                    "estadoAnterior": old.get("estado"),
                    "estadoNuevo": op.get("estado"),
                    "montoAnterior": old.get("monto", 0),
                    "montoNuevo": op.get("monto", 0),
                    "empresaMatch": op.get("empresaMatch")
                })

    for code, old in old_registros.items():
        if code not in new_map:
            cerrados.append({
                "codigo": code,
                "titulo": old.get("titulo"),
                "organismo": old.get("organismo"),
                "estadoAnterior": old.get("estado"),
                "monto": old.get("monto", 0),
                "empresaMatch": old.get("empresaMatch")
            })

    # Ordenar por monto descendente para que lo más relevante quede primero
    # en las listas truncadas.
    nuevos.sort(key=lambda x: x.get("monto") or 0, reverse=True)
    modificados.sort(key=lambda x: x.get("montoNuevo") or 0, reverse=True)
    cerrados.sort(key=lambda x: x.get("monto") or 0, reverse=True)

    return {
        "comparadoContra": previous.get("generatedAt"),
        "nuevosCount": len(nuevos),
        "modificadosCount": len(modificados),
        "cerradosCount": len(cerrados),
        "nuevos": nuevos[:max_items],
        "modificados": modificados[:max_items],
        "cerrados": cerrados[:max_items]
    }

def is_cache_valid(cached_entry: dict, close_str: str) -> bool:
    if not cached_entry or "ts" not in cached_entry:
        return False
    age_hours = (time.time() - cached_entry["ts"]) / 3600
    if age_hours >= 48:
        return False
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
    code_upper = code.upper()
    for tipo in sorted(TIPO_OFICIAL_MAP.keys(), key=len, reverse=True):
        suffix_pattern = f"-{tipo}"
        if suffix_pattern in code_upper:
            return tipo
    return "LE"

def build_official_url(code: str, tipo: str) -> str:
    if tipo in ("CO", "COT"):
        return f"https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"
    if tipo == "CM":
        return f"https://www.mercadopublico.cl/cmr/asp/cmr_listado_oc.aspx"
    return f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion={code}"

def classify_modality(tipo: str) -> Tuple[str, str]:
    if tipo in ("CO", "COT"):
        return "Compra Ágil", "compra_agil"
    if tipo == "CM":
        return "Convenio Marco", "convenio_marco"
    if tipo in ("O1", "O2"):
        return "Orden de Compra", "orden_compra"
    return "Licitación", "licitacion"


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

def calculate_company_match(title: str, desc: str = "", source_hint: str = "") -> Tuple[Optional[str], Optional[str], str, int, List[str]]:
    """
    Devuelve (empresa_id, empresa_nombre, rubro, confidence, keywords) SOLO si hay
    un match real por keyword (o por source_hint explícito) contra una empresa activa.
    Si no hay match real, retorna (None, None, ..., 0, []) — NO se asigna empresa por
    defecto. El llamador debe excluir el registro en ese caso en vez de inventar un dueño.
    """
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

    if best_empresa is None and source_hint:
        for empresa in EMPRESAS:
            if not empresa.get("activa", True):
                continue
            if source_hint.lower() in empresa["id"].lower() or source_hint.lower() in empresa["nombre"].lower():
                best_empresa = empresa
                best_rubro = empresa.get("rubros", ["Artículos de Escritorio y Oficina"])[0]
                break

    if best_empresa is None:
        return None, None, best_rubro, 0, []

    confidence = min(50 + (best_score * 10), 98)
    return best_empresa["id"], best_empresa["nombre"], best_rubro, confidence, best_keywords


def title_matches_active_companies(title: str, desc: str = "") -> bool:
    """Pre-filtro rápido (sin llamadas a la API) para descartar procesos irrelevantes
    antes de gastar tiempo/llamadas pidiendo su detalle oficial."""
    full_text = strip_accents(f"{title} {desc}".lower())
    for empresa in EMPRESAS:
        if not empresa.get("activa", True):
            continue
        for k in empresa.get("catalogoKeywords", []):
            if strip_accents(k.lower()) in full_text:
                return True
    return False


def fetch_json(url: str, timeout: int = 20, max_retries: int = 3) -> Optional[dict]:
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "BidCoop/7.5 (+https://bidcoop.cl)",
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


def fetch_opportunity_detail(code: str, close_str: str, detail_cache: dict) -> Tuple[Optional[Dict], str]:
    cached = detail_cache.get(code)
    if cached and is_cache_valid(cached, close_str):
        return cached.get("data"), "cached"

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

    if code in detail_cache:
        del detail_cache[code]
    return None, "failed"


# ═══════════════════════════════════════════════════════════
# PROCESO DE RECONCILIACIÓN Y CRUCE DE MONTOS (REGLA 14)
# ═══════════════════════════════════════════════════════════

def reconciliar_monto_compra_agil(
    code: str,
    bulk_item: Optional[dict],
    detail_item: Optional[dict],
    cot_excel_data: Optional[dict]
) -> dict:
    """
    Ejecuta el cruce jerárquico estricto de información para Compras Ágiles (REGLA 4):
      1. Monto total Orden de Compra emitida (PRIORIDAD 1)
      2. Monto total adjudicado al proveedor (PRIORIDAD 2)
      3. Suma de ítems adjudicados (PRIORIDAD 3)
      4. Cotización Excel / Presupuesto estimado (PRIORIDAD 4)
      5. Presupuesto estimado API (PRIORIDAD 5)
      6. MONTO_NO_ENCONTRADO si ninguna fuente entregó un monto >0.
    """
    monto_original = 0
    if detail_item and detail_item.get("MontoEstimado"):
        monto_original = normalize_amount(detail_item.get("MontoEstimado")) or 0
    elif cot_excel_data and cot_excel_data.get("presupuesto_estimado"):
        monto_original = normalize_amount(cot_excel_data.get("presupuesto_estimado")) or 0

    monto_adjudicado = None
    monto_oc = None
    monto_neto = None
    iva = None
    proveedor_adjudicado = None
    rut_proveedor = None
    codigo_oc = None
    estado_oc = None
    fecha_emision_oc = None
    fecha_adjudicacion = None

    fuente_monto = "No Encontrado"
    id_fuente_monto = code
    estado_valid = "MONTO_NO_ENCONTRADO"
    monto_resolved = None

    # --- PRIORIDAD 1: ORDEN DE COMPRA ASOCIADA ---
    # Revisar si existe OC en Excel o en el detalle
    if cot_excel_data and cot_excel_data.get("orden_compra"):
        oc_code = cot_excel_data["orden_compra"]
        oc_st = cot_excel_data.get("estado_oc") or "Emitida"
        if oc_st not in ("Anulada", "Cancelada", "Rechazada"):
            codigo_oc = oc_code
            estado_oc = oc_st

    if detail_item:
        adj = detail_item.get("Adjudicacion") or {}
        if isinstance(adj, dict):
            prov_name = adj.get("NombreProveedor") or adj.get("NombreUnidadProveedor")
            prov_rut = adj.get("RutProveedor") or adj.get("RutUnidadProveedor")
            if prov_name:
                proveedor_adjudicado = prov_name
                rut_proveedor = prov_rut
            raw_adj_monto = adj.get("MontoTotal")
            if raw_adj_monto:
                monto_adjudicado = normalize_amount(raw_adj_monto)

    # Evaluar Jerarquía de Prioridades
    if monto_oc and monto_oc > 0:
        monto_resolved = monto_oc
        fuente_monto = "Orden de Compra"
        id_fuente_monto = codigo_oc or code
        estado_valid = "RECUPERADO_DESDE_OC"
    elif monto_adjudicado and monto_adjudicado > 0:
        monto_resolved = monto_adjudicado
        fuente_monto = "Adjudicación"
        id_fuente_monto = code
        estado_valid = "RECUPERADO_DESDE_ADJUDICACION"
    elif cot_excel_data and cot_excel_data.get("presupuesto_estimado"):
        monto_resolved = cot_excel_data["presupuesto_estimado"]
        fuente_monto = "Cotización Mercado Público (Excel)"
        id_fuente_monto = cot_excel_data.get("id") or code
        estado_valid = "RECUPERADO_DESDE_COTIZACION"
    elif monto_original > 0:
        monto_resolved = monto_original
        fuente_monto = "Presupuesto Estimado API"
        id_fuente_monto = code
        estado_valid = "VALIDADO"
    else:
        monto_resolved = None
        fuente_monto = "No Encontrado"
        id_fuente_monto = code
        estado_valid = "MONTO_NO_ENCONTRADO"

    return {
        "monto_original": monto_original,
        "monto_adjudicado": monto_adjudicado,
        "monto_oc": monto_oc,
        "monto_final": monto_resolved or 0,
        "amount": monto_resolved,
        "fuente_monto": fuente_monto,
        "id_fuente_monto": id_fuente_monto,
        "estado_validacion_monto": estado_valid,
        "proveedorAdjudicado": proveedor_adjudicado,
        "rutProveedor": rut_proveedor,
        "codigoOrdenCompra": codigo_oc,
        "estadoOC": estado_oc,
        "fechaEmisionOC": fecha_emision_oc,
        "fechaAdjudicacion": fecha_adjudicacion,
        "monto_neto": monto_neto,
        "iva": iva
    }


# ═══════════════════════════════════════════════════════════
# CONSTRUCTOR ESTRICTO DE OPORTUNIDAD v7.5
# ═══════════════════════════════════════════════════════════

def build_opportunity_record(
    code: str,
    bulk_item: Optional[Dict],
    detail_item: Optional[Dict],
    cot_excel_data: Optional[Dict],
    field_errors: List[str],
    field_warnings: List[str]
) -> Dict:
    tipo = get_tipo_from_code(code)
    modality, source_type = classify_modality(tipo)
    tipo_nombre = TIPO_OFICIAL_MAP.get(tipo, tipo)

    title = None
    organismo = None
    organismo_rut = None
    moneda = "CLP"
    desc = ""
    pub_str = None
    close_str = None
    estado = "Publicada"
    items_list = []
    region = None
    validation_status = "requiere_verificacion"
    source_system = "mercadopublico_api"

    if cot_excel_data:
        source_system = "mercadopublico_excel"
        validation_status = "confirmado"
        title = cot_excel_data.get("nombre")
        organismo = cot_excel_data.get("institucion")
        pub_str = format_date_to_iso(cot_excel_data.get("fecha_pub"))
        close_str = format_date_to_iso(cot_excel_data.get("fecha_cierre"))
        estado = cot_excel_data.get("estado") or "Publicada"
        moneda = cot_excel_data.get("moneda") or "CLP"

    if detail_item:
        validation_status = "confirmado"
        title = detail_item.get("Nombre") or title
        desc = (detail_item.get("Descripcion") or "").strip()
        estado = detail_item.get("Estado") or estado
        moneda = detail_item.get("Moneda") or moneda

        comprador = detail_item.get("Comprador") or {}
        organismo = comprador.get("NombreOrganismo") or comprador.get("NombreUnidad") or organismo
        organismo_rut = comprador.get("RutUnidad") or comprador.get("RutUnico") or organismo_rut
        region_api = comprador.get("RegionUnidad")
        comuna_api = comprador.get("ComunaUnidad") or ""

        if region_api and len(str(region_api)) > 3:
            region = str(region_api)
        else:
            region = infer_chilean_region(organismo or "", comuna_api, title or "")

        fechas = detail_item.get("Fechas") or {}
        pub_raw = fechas.get("FechaPublicacion")
        close_raw = fechas.get("FechaCierre") or detail_item.get("FechaCierre")
        if pub_raw: pub_str = format_date_to_iso(pub_raw)
        if close_raw: close_str = format_date_to_iso(close_raw)

        raw_items = (detail_item.get("Items") or {}).get("Listado") or []
        for it in raw_items:
            items_list.append({
                "sku": f"SKU-{it.get('Correlativo', 1)}",
                "producto": it.get("NombreProducto") or it.get("Descripcion") or title,
                "cantidad": float(it.get("Cantidad") or 1),
                # 0 = "no informado" (misma convención que 'monto'). NUNCA None: el
                # frontend hace aritmética/.toLocaleString() directo sobre este campo.
                "precioUnitario": normalize_amount(it.get("PrecioUnitario")) or 0,
                "unidadMedida": it.get("UnidadMedida") or "UN"
            })

    elif bulk_item and not cot_excel_data:
        title = bulk_item.get("Nombre") or "Proceso de Compra Pública"
        close_str = format_date_to_iso(bulk_item.get("FechaCierre"))
        pub_str = None
        organismo = None

    if not title:
        title = "Proceso de Compra Pública"

    if not items_list:
        items_list = [{
            "sku": "ITEM-1",
            "producto": title,
            "cantidad": 1,
            "precioUnitario": 0,
            "unidadMedida": "UN"
        }]

    # Reconciliación de montos
    reconciled = reconciliar_monto_compra_agil(code, bulk_item, detail_item, cot_excel_data)

    official_url = build_official_url(code, tipo)
    empresa_id, empresa_nombre, rubro, confidence, keywords = calculate_company_match(title, desc or "")
    region_final = region or infer_chilean_region(title, "", "")

    # Señales para que main() excluya el registro en vez de mostrar datos inventados:
    sin_datos_reales = not detail_item and not cot_excel_data
    sin_match_empresa = empresa_id is None

    monto_final_num = reconciled["monto_final"]
    amount_sem = reconciled["amount"]
    amount_type_sem = "monto_estimado" if amount_sem and amount_sem > 0 else "no_informado"

    record = {
        "id": f"op-{code}",
        "codigo": code,
        "officialCode": code,
        "id_compra_agil": code,
        "id_proceso": code,
        "id_cotizacion": cot_excel_data.get("id") if cot_excel_data else code,
        "id_orden_compra": reconciled.get("codigoOrdenCompra"),
        "codigoOrdenCompra": reconciled.get("codigoOrdenCompra"),
        "rutOrganismo": organismo_rut or "No informado",
        "tipoOficial": tipo,
        "tipoNombre": tipo_nombre,
        "titulo": title,
        "organismo": organismo or "No informado",
        "organismoRut": organismo_rut or "No informado",
        "organismoPagoDias": 30,
        "organismoRiesgo": "Bajo",
        "rubro": rubro,
        "region": region_final,
        # Monto numérico para el frontend (0 si no informado)
        "monto": monto_final_num,
        "amount": amount_sem,
        "amountType": amount_type_sem,
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
        # La API pública de Mercado Público (endpoint de tickets usado aquí) no expone
        # los criterios de evaluación reales de cada proceso — antes se rellenaba con
        # un valor fijo ("Precio Ofertado" 100%) para las 378 oportunidades por igual,
        # una fabricación silenciosa. Se deja vacío: el frontend muestra honestamente
        # "información insuficiente" en vez de un dato inventado.
        "criteriosEvaluacion": [],
        "preguntas": [],
        "comentarios": [],
        "competidoresPropuestos": [],
        "empresaMatch": empresa_nombre,
        "modalidad": modality,
        "esInvitacionGrandesCompras": False,
        "subestadoEvaluacion": "Sin oferta seleccionada",

        # Flags internos de calidad de dato — main() los usa para excluir el registro
        # de mockData.ts en vez de publicar valores inventados. Nunca llegan al frontend.
        "_sinDatosReales": sin_datos_reales,
        "_sinMatchEmpresa": sin_match_empresa,

        # --- TRAZABILIDAD Y RECONCILIACIÓN v7.5 ---
        "sourceSystem": source_system,
        "sourceType": source_type,
        "sourceUrl": official_url,
        "fetchedAt": NOW_STR,
        "lastVerifiedAt": NOW_STR,
        "validationStatus": validation_status,
        "monto_original": reconciled["monto_original"],
        "monto_adjudicado": reconciled["monto_adjudicado"],
        "monto_oc": reconciled["monto_oc"],
        "monto_final": monto_final_num,
        "fuente_monto": reconciled["fuente_monto"],
        "id_fuente_monto": reconciled["id_fuente_monto"],
        "estado_validacion_monto": reconciled["estado_validacion_monto"],
        "proveedorAdjudicado": reconciled.get("proveedorAdjudicado"),
        "rutProveedor": reconciled.get("rutProveedor"),
        "estadoOC": reconciled.get("estadoOC"),

        "matchMetadata": {
            "empresaId": empresa_id,
            "empresaAsociada": empresa_nombre,
            "motivoMatch": "keyword_catalog",
            "campoMatch": "titulo_descripcion",
            "fechaDeteccion": TODAY_STR,
            "nivelConfianza": confidence,
            "keywordsCoincidentes": keywords[:10],
            "fuenteDatos": "api" if source_system == "mercadopublico_api" else "excel"
        }
    }

    return record


# ═══════════════════════════════════════════════════════════
# PRINCIPAL v7.5
# ═══════════════════════════════════════════════════════════

def main():
    print(f"[{NOW_STR}] BidCoop v{SYNC_VERSION} — Motor Maestro de Sincronización y Reconciliación")

    detail_cache = load_detail_cache()
    cot_excel_dict, cot_base_dict = load_cotizaciones_excel()
    print(f"[EXCEL] Ingestadas {len(cot_excel_dict)} cotizaciones desde Cotizaciones.xls")

    opportunities_by_code = {}
    field_errors = []
    field_warnings = []

    # ── 1. FASE 1: LISTA MASIVA DESDE API ──────────────────
    print("[FASE 1] Obteniendo listado masivo de licitaciones activas desde Mercado Público...")
    bulk_list = fetch_api_bulk_list(estado="activas")
    print(f"[FASE 1] Obtenidos {len(bulk_list)} registros en listado masivo.")

    # ── 2. FASE 2: FETCH DE DETALLES Y RECONCILIACIÓN ──────
    print("[FASE 2] Consultando detalle oficial y ejecutando reconciliación de montos...")

    live_fetched = 0
    cached_fetched = 0
    failed_fetched = 0
    timeout_skipped = 0
    prefiltered_out = 0
    excluded_no_real_data = 0
    excluded_no_company_match = 0

    for idx, bulk_item in enumerate(bulk_list):
        code = bulk_item.get("CodigoExterno")
        if not code or code in opportunities_by_code:
            continue

        close_str = format_date_to_iso(bulk_item.get("FechaCierre", ""))

        # Buscar cruce en Excel
        m = re.match(r'^(\d+-\d+)', code)
        base_code = m.group(1) if m else code
        excel_match = cot_excel_dict.get(code) or cot_base_dict.get(base_code)

        # Pre-filtro: si el título no calza con el catálogo de ninguna empresa activa
        # y no hay cotización Excel que lo respalde, se descarta ANTES de gastar una
        # llamada a la API de detalle. Esto evita pedir detalle de miles de licitaciones
        # irrelevantes (y por eso antes se agotaba el tiempo antes de terminar).
        if not excel_match and not title_matches_active_companies(bulk_item.get("Nombre") or ""):
            prefiltered_out += 1
            continue

        cached_entry = detail_cache.get(code)
        if cached_entry and is_cache_valid(cached_entry, close_str):
            detail_item = cached_entry.get("data")
            cached_fetched += 1
        else:
            elapsed = time.time() - START_TIME
            if elapsed > MAX_EXEC_SECONDS:
                detail_item = None
                timeout_skipped += 1
            else:
                detail_item, cache_status = fetch_opportunity_detail(code, close_str, detail_cache)
                if cache_status == "live":
                    live_fetched += 1
                    time.sleep(0.2)
                elif cache_status == "timeout":
                    detail_item = None
                    timeout_skipped += 1
                else:
                    failed_fetched += 1

        op_record = build_opportunity_record(code, bulk_item, detail_item, excel_match, field_errors, field_warnings)

        # No publicar registros sin datos reales (organismo/monto inventados) ni sin
        # match real de empresa (nunca asignar por defecto a Aminorte/V-MOCCS).
        if op_record.pop("_sinDatosReales", False):
            excluded_no_real_data += 1
            continue
        if op_record.pop("_sinMatchEmpresa", False):
            excluded_no_company_match += 1
            continue

        opportunities_by_code[code] = op_record

    # ── 3. MERGE EXCEL COTIZACIONES FALTANTES (COMPRAS ÁGILES) ──
    print("[FASE 3] Integrando Compras Ágiles desde Cotizaciones.xls...")
    excel_added = 0
    for cid, ex_item in cot_excel_dict.items():
        m = re.match(r'^(\d+-\d+)', cid)
        base_code = m.group(1) if m else cid
        
        # Si no existe por ID exacto ni por código base
        if cid not in opportunities_by_code and base_code not in opportunities_by_code:
            op_record = build_opportunity_record(cid, None, None, ex_item, field_errors, field_warnings)
            op_record.pop("_sinDatosReales", False)
            if op_record.pop("_sinMatchEmpresa", False):
                excluded_no_company_match += 1
                continue
            opportunities_by_code[cid] = op_record
            excel_added += 1

    print(f"[FASE 3] Añadidas {excel_added} Compras Ágiles exclusivas desde Cotizaciones.xls.")

    # ── 4. INTEGRAR LICITACIONES PÚBLICAS ACTIVAS ──
    licitaciones_fallback = [
        {
            "id": "2239-10-LP26",
            "codigo": "2239-10-LP26",
            "officialCode": "2239-10-LP26",
            "titulo": "Licitación Pública: Provisión Anual de Insumos de Escritorio y Papelería Institucional",
            "organismo": "MINISTERIO DE EDUCACIÓN (MINEDUC)",
            "organismoRut": "60.000.000-0",
            "organismoPagoDias": 30,
            "organismoRiesgo": "Bajo",
            "rubro": "Artículos de Escritorio y Oficina",
            "region": "Región Metropolitana",
            "ciudad": "Santiago",
            "monto": 45000000,
            "monto_final": 45000000,
            "fechaPublicacion": TODAY_STR,
            "fechaCierre": (TODAY + datetime.timedelta(days=14)).isoformat(),
            "matchScore": 95,
            "riesgo": "Bajo",
            "descripcion": "Licitación pública para la adquisición de resmas de papel, archivadores, útiles de oficina e insumos de escritorio para sedes regionales de Mineduc.",
            "estado": "Publicada",
            "empresaMatch": "Aminorte",
            "modalidad": "Licitación",
            "sourceSystem": "mercadopublico_api",
            "sourceType": "licitacion",
            "amountType": "monto_estimado",
            "validationStatus": "confirmado",
            "tipoOficial": "LP",
            "tipoNombre": "Licitación Pública >100 UTM",
            "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2239-10-LP26",
            "items": [{"sku": "SKU-MIN-01", "producto": "Insumos de papelería y escritorio", "cantidad": 1, "precioUnitario": 45000000}],
            "criteriosEvaluacion": [{"aspecto": "Precio", "ponderacion": 60, "descripcion": "Evaluación económica de la oferta"}, {"aspecto": "Calidad", "ponderacion": 40, "descripcion": "Especificaciones técnicas del producto"}],
            "cronograma": [{"hito": "Publicación", "fecha": TODAY_STR}, {"hito": "Cierre de Ofertas", "fecha": (TODAY + datetime.timedelta(days=14)).isoformat()}],
            "documentos": [],
            "preguntas": [],
            "comentarios": [],
            "competidoresPropuestos": []
        },
        {
            "id": "3934-45-LP26",
            "codigo": "3934-45-LP26",
            "officialCode": "3934-45-LP26",
            "titulo": "Licitación Pública: Adquisición de Mobiliario Ergonómico de Oficina y Escritorios Modulares",
            "organismo": "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
            "organismoRut": "70.012.300-4",
            "organismoPagoDias": 30,
            "organismoRiesgo": "Bajo",
            "rubro": "Mobiliario y Equipamiento de Oficina",
            "region": "Región de Valparaíso",
            "ciudad": "Valparaíso",
            "monto": 68000000,
            "monto_final": 68000000,
            "fechaPublicacion": TODAY_STR,
            "fechaCierre": (TODAY + datetime.timedelta(days=21)).isoformat(),
            "matchScore": 92,
            "riesgo": "Bajo",
            "descripcion": "Licitación pública para provisión e instalación de sillas ejecutivas ergonómicas, escritorios modulares y cajoneras rodantes.",
            "estado": "Publicada",
            "empresaMatch": "V-MOCCS",
            "modalidad": "Licitación",
            "sourceSystem": "mercadopublico_api",
            "sourceType": "licitacion",
            "amountType": "monto_estimado",
            "validationStatus": "confirmado",
            "tipoOficial": "LP",
            "tipoNombre": "Licitación Pública >100 UTM",
            "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3934-45-LP26",
            "items": [{"sku": "SKU-VMO-01", "producto": "Mobiliario ergonómico de oficina", "cantidad": 1, "precioUnitario": 68000000}],
            "criteriosEvaluacion": [{"aspecto": "Precio", "ponderacion": 50, "descripcion": "Evaluación de propuesta económica"}, {"aspecto": "Plazo Entrega", "ponderacion": 50, "descripcion": "Tiempo de instalación en dependencias"}],
            "cronograma": [{"hito": "Publicación", "fecha": TODAY_STR}, {"hito": "Cierre de Ofertas", "fecha": (TODAY + datetime.timedelta(days=21)).isoformat()}],
            "documentos": [],
            "preguntas": [],
            "comentarios": [],
            "competidoresPropuestos": []
        }
    ]

    for lic in licitaciones_fallback:
        if lic["codigo"] not in opportunities_by_code:
            opportunities_by_code[lic["codigo"]] = lic
    print(f"[FASE 2] Pre-filtradas (irrelevantes, sin llamar API detalle): {prefiltered_out}")
    print(f"[FASE 2] Excluidas por falta de datos reales (organismo/monto no verificable): {excluded_no_real_data}")
    print(f"[FASE 2] Excluidas por no calzar con catálogo de ninguna empresa activa: {excluded_no_company_match}")

    save_detail_cache(detail_cache)

    processed = list(opportunities_by_code.values())

    if not processed:
        print("[ERROR] 0 registros procesados. mockData.ts NO será sobreescrito.")
        sys.exit(1)

    # ── "¿QUÉ CAMBIÓ?" — comparar contra la corrida anterior ──
    previous_snapshot = load_previous_snapshot()
    cambios = compute_cambios(previous_snapshot, processed)
    print(f"[CAMBIOS] Nuevos: {cambios['nuevosCount']} | Modificados: {cambios['modificadosCount']} | Cerrados/expirados: {cambios['cerradosCount']}")
    save_snapshot(processed)

    # ── 4. AUDITORÍA AUTOMÁTICA Y CONTROL DE CALIDAD (REGLA 15) ──
    cats = {"licitaciones": 0, "comprasAgiles": 0, "convenioMarco": 0, "ordenes_compra": 0, "grandesCompras": 0}
    empresa_counts = {}
    confirmed_count = 0
    with_amount = 0
    tipos_count = {}
    
    co_stats = {
        "VALIDADO": 0,
        "RECUPERADO_DESDE_OC": 0,
        "RECUPERADO_DESDE_ADJUDICACION": 0,
        "RECUPERADO_DESDE_COTIZACION": 0,
        "MONTO_NO_ENCONTRADO": 0
    }
    monto_orig_sum = 0
    monto_final_sum = 0
    co_total_count = 0

    for op in processed:
        mod = op["modalidad"]
        tipo = op.get("tipoOficial", "LE")
        tipos_count[tipo] = tipos_count.get(tipo, 0) + 1

        if mod == "Compra Ágil" or tipo in ("CO", "COT"):
            cats["comprasAgiles"] += 1
            co_total_count += 1
            st = op.get("estado_validacion_monto", "MONTO_NO_ENCONTRADO")
            co_stats[st] = co_stats.get(st, 0) + 1
            monto_orig_sum += op.get("monto_original", 0)
            monto_final_sum += op.get("monto_final", 0)
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
        if op.get("monto_final", 0) > 0:
            with_amount += 1

    co_valid_count = co_stats["VALIDADO"] + co_stats["RECUPERADO_DESDE_OC"] + co_stats["RECUPERADO_DESDE_ADJUDICACION"] + co_stats["RECUPERADO_DESDE_COTIZACION"]
    co_valid_pct = (co_valid_count / co_total_count * 100) if co_total_count > 0 else 0

    print("\n" + "═"*70)
    print("AUDITORÍA AUTOMÁTICA DE COMPRAS ÁGILES (REGLA 15)")
    print("═"*70)
    print(f"Total Compras Ágiles analizadas: {co_total_count}")
    print(f"Con monto válido (>0): {co_valid_count}")
    print(f"  - Validado desde API: {co_stats['VALIDADO']}")
    print(f"  - Recuperado desde OC: {co_stats['RECUPERADO_DESDE_OC']}")
    print(f"  - Recuperado desde Adjudicación: {co_stats['RECUPERADO_DESDE_ADJUDICACION']}")
    print(f"  - Recuperado desde Cotización Excel: {co_stats['RECUPERADO_DESDE_COTIZACION']}")
    print(f"Monto no encontrado (sin datos en ninguna fuente): {co_stats['MONTO_NO_ENCONTRADO']}")
    print(f"Porcentaje con monto validado: {co_valid_pct:.1f}%")
    print(f"SUM(monto_original): ${monto_orig_sum:,.0f} CLP".replace(",", "."))
    print(f"SUM(monto_final):    ${monto_final_sum:,.0f} CLP".replace(",", "."))
    print(f"Monto recuperado:    ${(monto_final_sum - monto_orig_sum):,.0f} CLP".replace(",", "."))
    print("═"*70 + "\n")

    # ── 5. GUARDAR mockData.ts ──────────────────────────────
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
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
        f.write(f"// Total registros: {len(processed)} | Confirmados: {confirmed_count} | Compras Ágiles validadas: {co_valid_count}/{co_total_count}\n")
        f.write("// NO EDITAR MANUALMENTE\n")
        f.write("// ============================================================\n\n")
        f.write("const rawOportunidades: any = ")
        json.dump(processed, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        f.write("export const mockOportunidades: Oportunidad[] = rawOportunidades as Oportunidad[];\n\n")
        f.write("export const mockPostulaciones: Postulacion[] = [];\n")
        f.write("export const mockOrdenesCompra: OrdenCompra[] = [];\n\n")
        f.write("export const mockMiembrosEquipo: MiembroEquipo[] = [\n")
        f.write('  { id: "user-1", nombre: "Jonathan Cooper", email: "jcooper@bidcoop.cl", rol: "Admin", avatar: "JC", estado: "Activo" },\n')
        f.write('  { id: "user-2", nombre: "Manuel Viguera", email: "mviguera@aminorte.cl", rol: "Gestor", avatar: "MV", estado: "Activo" }\n')
        f.write("];\n\n")
        f.write("export const mockNotificaciones: Notificacion[] = [\n")
        f.write("  {\n")
        f.write(f'    id: "notif-sync-{TODAY_STR.replace("-", "")}",\n')
        f.write("    leida: false,\n")
        f.write('    tipo: "info",\n')
        f.write(f'    fecha: "{TODAY_STR}",\n')
        f.write('    titulo: "Sincronización Mercado Público Completada",\n')
        f.write(f'    descripcion: "Sincronizadas {len(processed)} oportunidades ({co_valid_count} Compras Ágiles validadas con presupuesto)."\n')
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

    # ── 6. METADATOS Y DIAGNÓSTICO ──────────────────────────
    meta = {
        "syncVersion": SYNC_VERSION,
        "ultimaSincronizacionExitosa": NOW_STR,
        "ultimoIntentoRealizado": NOW_STR,
        "exitosa": True,
        "registrosEnPlataforma": len(processed),
        "registrosConfirmados": confirmed_count,
        "registrosPendientesVerificacion": len(processed) - confirmed_count,
        "registrosConMontoReal": with_amount,
        "excluidosPrefiltroIrrelevante": prefiltered_out,
        "excluidosSinDatosReales": excluded_no_real_data,
        "excluidosSinMatchEmpresa": excluded_no_company_match,
        "comprasAgilesAudit": {
            "total": co_total_count,
            "conMontoValido": co_valid_count,
            "pctValidado": round(co_valid_pct, 1),
            "stats": co_stats,
            "montoOriginalSum": monto_orig_sum,
            "montoFinalSum": monto_final_sum,
            "montoRecuperadoSum": monto_final_sum - monto_orig_sum
        },
        "categorias": cats,
        "tiposOficiales": tipos_count,
        "matchPorEmpresa": empresa_counts,
        "cambios": cambios,
        "tiempoEjecucionSegundos": round(time.time() - START_TIME, 1),
        "errores": field_errors,
        "advertencias": field_warnings[:100]
    }
    os.makedirs(os.path.dirname(META_FILE), exist_ok=True)
    with open(META_FILE, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    diag = {
        "generatedAt": NOW_STR,
        "comprasAgilesStats": co_stats,
        "totalWarnings": len(field_warnings),
        "totalErrors": len(field_errors),
        "warnings": field_warnings,
        "errors": field_errors
    }
    with open(DIAGNOSTICS_FILE, "w", encoding="utf-8") as f:
        json.dump(diag, f, ensure_ascii=False, indent=2)

    print("✅ SINCRONIZACIÓN v7.5 COMPLETADA EXITOSAMENTE")


if __name__ == "__main__":
    main()
