#!/usr/bin/env python3
"""
BidCoop v7.6 — Motor Maestro de Sincronización y Reconciliación con Trazabilidad Completa
=======================================================================================
Implementa las reglas estrictas de cruce y reconciliación de Compras Ágiles:
  - Licitaciones (LP/LE/L1/CO/CM/...) vía API pública v1 de Mercado Público.
  - Compras Ágiles (-COT##) vía API oficial v2 de Compra Ágil
    (https://api2.mercadopublico.cl/v2/compra-agil) — la API v1 de licitaciones
    NUNCA soportó Compra Ágil (confirmado públicamente por ChileCompra), por lo
    que antes de v7.6 la única fuente era un Excel manual (Cotizaciones.xls),
    reemplazado por completo con esta API real.
  - Trazabilidad completa por registro (monto_original, monto_adjudicado, monto_oc, monto_final, fuente_monto, estado_validacion_monto).
  - Estado explícito MONTO_NO_ENCONTRADO (nunca confundido con $0 real).
  - Registro de los identificadores principales (rutOrganismo, proveedorAdjudicado, rutProveedor, etc.).
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
            val = val.strip()
            if len(val) >= 2 and val[0] == val[-1] and val[0] in ("'", '"'):
                val = val[1:-1]
            os.environ.setdefault(key.strip(), val)

_load_env_local()

OUTPUT_FILE = os.path.join(PROJECT_PATH, "src/app/mockData.ts")
META_FILE = os.path.join(PROJECT_PATH, "data/sync_meta.json")
SNAPSHOT_FILE = os.path.join(PROJECT_PATH, "data/sync_snapshot.json")
EMPRESAS_CONFIG = os.path.join(PROJECT_PATH, "config/empresas.json")
BACKUP_FILE = os.path.join(PROJECT_PATH, "data/mockData.ts.backup")
DETAIL_CACHE_FILE = os.path.join(PROJECT_PATH, "data/detail_cache.json")
DIAGNOSTICS_FILE = os.path.join(PROJECT_PATH, "data/sync_diagnostics.json")

TICKET = os.environ.get("MERCADOPUBLICO_TICKET", "F8537A18-6766-4DEF-9E59-426B4FEE2844")
BASE_URL = "https://api.mercadopublico.cl/servicios/v1/publico"

# Confirmado en vivo (runs #61/#62 del workflow) que api.mercadopublico.cl
# responde 200 OK con Listado vacío específicamente desde las IPs de los
# runners de GitHub Actions — nunca desde una IP normal ni desde Vercel,
# donde el mismo endpoint funciona bien en producción. En vez de mover todo
# este motor a Vercel, se relevan solo las llamadas a licitaciones.json a
# través de /api/sync-relay (deploy de este mismo repo), que reenvía la
# petición desde la IP de Vercel — ver ese endpoint para el detalle y por
# qué es seguro exponerlo sin sesión. Se puede desactivar (volver a pedirle
# directo a Mercado Público) con SYNC_RELAY_URL="" si el relay no está
# disponible.
_relay_default = "https://bidcoop.vercel.app/api/sync-relay"
RELAY_BASE_URL = os.environ.get("SYNC_RELAY_URL", _relay_default)
if RELAY_BASE_URL == "off":
    RELAY_BASE_URL = ""

# API oficial v2 de Compra Ágil (lanzada por ChileCompra en mayo 2026) — dominio
# y esquema de autenticación distintos de la API v1 de licitaciones (header
# 'ticket' en vez de query param). Sin ticket configurado, la sincronización de
# Compras Ágiles se omite explícitamente (nunca se cae de vuelta a un Excel ni
# se inventa un dato) — ver fetch_compraagil_bulk_list().
COMPRAAGIL_TICKET = os.environ.get("MERCADOPUBLICO_COMPRAAGIL_TICKET", "")
COMPRAAGIL_BASE_URL = "https://api2.mercadopublico.cl"

TODAY = datetime.date.today()
TODAY_STR = TODAY.isoformat()
# Timestamp con offset UTC explícito (+00:00) — sin esto, el navegador del
# usuario interpreta el ISO string como HORA LOCAL suya en vez de UTC, y
# muestra la hora de sync desplazada por su propio huso horario (ej. un
# usuario en Chile veía "11:47" en vez de la hora real "07:47" local).
NOW_STR = datetime.datetime.now(datetime.timezone.utc).isoformat()
SYNC_VERSION = "7.6"

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

def load_previous_full_dataset() -> List[Dict]:
    """
    Lee el mockData.ts ya publicado y extrae el array de oportunidades tal
    cual quedó en la última corrida exitosa. Usado únicamente como fallback
    cuando una fuente parcial (hoy: Compra Ágil vía API v2) falla a mitad de
    camino, para conservar ese dato real de la corrida anterior en vez de
    publicar un dataset vacío que sugiera falsamente que el mercado se vació
    — nunca se usa para inventar nada nuevo, solo para no perder lo último
    que sí se confirmó real.
    """
    if not os.path.isfile(OUTPUT_FILE):
        return []
    try:
        with open(OUTPUT_FILE, encoding="utf-8") as f:
            content = f.read()
        marker = "const rawOportunidades: any = "
        start = content.index(marker) + len(marker)
        end = content.index("];", start) + 1  # incluye el ']' de cierre, excluye el ';'
        data = json.loads(content[start:end])
        if isinstance(data, list):
            return data
    except Exception as e:
        print(f"  [WARN] No se pudo leer el mockData.ts previo como fallback: {e}")
    return []

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
        # Compra Ágil vive en un buscador SPA separado (subdominio propio,
        # lanzado junto con la API v2), no en las rutas /Procurement/... del
        # portal legacy. La ruta vieja (DAP/Details.aspx) daba 404 real —
        # confirmado en vivo el 2026-08-20 navegando el sitio: el link real
        # que arma buscador.mercadopublico.cl al abrir el detalle de un
        # proceso es esta.
        return f"https://buscador.mercadopublico.cl/ficha?code={code}"
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
                # Términos cortos como "sast" colisionan con substrings de palabras
                # comunes (ej. "desastres") y frases genéricas como "seguridad de la
                # información" aparecen como boilerplate legal en licitaciones sin
                # relación a ciberseguridad — se usan solo frases compuestas específicas.
                is_ciber = any(k in full_text for k in ["hacking", "pentest", "phishing", "ciberseguridad", "attack surface", "codigo estatico", "auditoria de codigo fuente", "revision de codigo fuente", "analisis de vulnerabilidades", "evaluacion de vulnerabilidades", "vulnerability assessment", "escaneo de vulnerabilidades", "gestion de vulnerabilidades"])
                if is_ciber and "Servicios de Ciberseguridad" in rubros:
                    best_rubro = "Servicios de Ciberseguridad"
                elif is_tech and "Tecnología y Hardware" in rubros:
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
                "User-Agent": "BidCoop/7.6 (+https://bidcoop.cl)",
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


def licitaciones_url(**params: str) -> str:
    """Construye la URL de licitaciones.json — vía el relay de Vercel
    (RELAY_BASE_URL) si está configurado, o directo a Mercado Público si no."""
    base = RELAY_BASE_URL if RELAY_BASE_URL else f"{BASE_URL}/licitaciones.json"
    query = "&".join(f"{k}={v}" for k, v in params.items() if v is not None)
    ticket_part = "" if RELAY_BASE_URL else f"&ticket={TICKET}"
    return f"{base}?{query}{ticket_part}"


def fetch_api_bulk_list(estado: str = "activas") -> List[Dict]:
    results = []
    page = 1
    total_pages_estimate = 10

    while page <= total_pages_estimate:
        url = licitaciones_url(estado=estado, pagina=str(page))
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


def fetch_api_by_recent_dates(days_back: int = 7) -> List[Dict]:
    """
    Complementa fetch_api_bulk_list(estado="activas") para LICITACIONES
    (LP/LE/L1/CM/...): "activas" solo devuelve procesos vigentes en este
    instante, así que cualquier proceso que cerró hace poco pero cuyo
    detalle todavía interesa (para el diff "¿Qué cambió?"/"cerrados") no
    aparece ahí. Se cubre consultando licitaciones.json?fecha=DDMMYYYY día
    por día. NOTA: confirmado en vivo que este endpoint (y el de
    estado=activas) NUNCA devuelven registros de Compra Ágil (-COT), sin
    importar la fecha consultada — ChileCompra mismo confirmó públicamente
    que la API v1 de licitaciones no soporta Compra Ágil. Esa cobertura
    viene exclusivamente de fetch_compraagil_bulk_list() (API v2 oficial).
    Deduplicación por CodigoExterno la hace naturalmente el llamador (mismo
    dict opportunities_by_code que usa el listado de "activas").
    """
    results = []
    seen_codes = set()
    today = datetime.date.today()
    for i in range(days_back):
        d = today - datetime.timedelta(days=i)
        fecha = d.strftime("%d%m%Y")
        url = licitaciones_url(fecha=fecha)
        data = fetch_json(url, timeout=30)
        if data is None:
            print(f"  [WARN] Consulta por fecha {fecha} falló sin respuesta.")
            continue
        listado = data.get("Listado", [])
        for item in listado:
            code = item.get("CodigoExterno")
            if code and code not in seen_codes:
                seen_codes.add(code)
                results.append(item)
        time.sleep(0.4)
    return results


def fetch_opportunity_detail(code: str, close_str: str, detail_cache: dict) -> Tuple[Optional[Dict], str]:
    cached = detail_cache.get(code)
    if cached and is_cache_valid(cached, close_str):
        return cached.get("data"), "cached"

    elapsed = time.time() - START_TIME
    if elapsed > MAX_EXEC_SECONDS:
        return None, "timeout"

    url = licitaciones_url(codigo=code)
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
# API v2 DE COMPRA ÁGIL (api2.mercadopublico.cl) — reemplaza el Excel manual
# ═══════════════════════════════════════════════════════════

def fetch_compraagil_json(url: str, timeout: int = 20, max_retries: int = 3) -> Optional[dict]:
    """Igual que fetch_json, pero la API v2 de Compra Ágil autentica con el
    ticket en un HEADER HTTP ('ticket: ...'), no como query param — a
    diferencia de la API v1 de licitaciones."""
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "BidCoop/7.6 (+https://bidcoop.cl)",
                "Accept": "application/json",
                "ticket": COMPRAAGIL_TICKET
            })
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return json.loads(resp.read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            if e.code == 429:
                # Cuota diaria agotada — reintentar en la misma corrida no sirve
                # (se restablece recién al día siguiente, según la guía oficial).
                print("  [WARN] Cuota diaria de la API Compra Ágil v2 agotada (429).")
                return None
            if e.code == 404:
                return None
            if attempt < max_retries:
                time.sleep(2.5 * attempt)
        except Exception:
            if attempt < max_retries:
                time.sleep(2.5 * attempt)
    return None


def fetch_compraagil_bulk_list(days_back: int = 15) -> List[Dict]:
    """
    Lista todas las Compras Ágiles publicadas en los últimos `days_back` días
    vía la API oficial v2 (GET /v2/compra-agil), paginando hasta agotar
    payload.paginacion.total_paginas. 15 días cubre con margen la ventana de
    vigencia típica de una Compra Ágil (cierra en 1-5 días hábiles) más el
    historial reciente necesario para el diff "¿Qué cambió?".
    """
    if not COMPRAAGIL_TICKET:
        print("  [WARN] MERCADOPUBLICO_COMPRAAGIL_TICKET no configurado — Compras Ágiles NO se sincronizarán (se omite, no se inventa ni se usa un Excel).")
        return []

    desde = (datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=days_back)).strftime("%Y-%m-%dT00:00:00Z")
    results = []
    page = 1
    total_pages = 1
    max_pages_safety = 100  # ~5.000 registros — margen amplio sobre el volumen real observado
    consecutive_failures = 0
    # Máximo de páginas seguidas que pueden fallar antes de asumir que es una
    # caída real de la API (no una página suelta con un 504 pasajero — este
    # endpoint es notoriamente inestable, se observaron 504 intermitentes en
    # ~30-40% de las llamadas en vivo el 2026-08-19). Antes, una sola página
    # fallida abortaba TODA la paginación restante — como está ordenado por
    # FechaPublicacion descendente, eso podía tirar silenciosamente Compras
    # Ágiles recién publicadas que sí calzaban con el catálogo, sin que
    # ninguna salvaguarda lo detectara (el total final seguía viéndose
    # "normal"). Ahora se salta la página fallida y se sigue con la
    # siguiente; solo se detiene si fallan varias seguidas.
    max_consecutive_failures = 5
    while page <= total_pages and page <= max_pages_safety:
        url = (f"{COMPRAAGIL_BASE_URL}/v2/compra-agil"
               f"?publicado_desde={desde}&tamano_pagina=50&numero_pagina={page}"
               f"&ordenar_por=FechaPublicacion")
        data = fetch_compraagil_json(url, timeout=30)
        if data is None or data.get("success") != "OK":
            consecutive_failures += 1
            print(f"  [WARN] Página {page} de Compra Ágil v2 falló ({consecutive_failures}/{max_consecutive_failures} fallos seguidos) — se salta y sigue con la siguiente.")
            if consecutive_failures >= max_consecutive_failures:
                print(f"  [WARN] {max_consecutive_failures} páginas seguidas fallaron — probable caída real de la API, se detiene la paginación acá.")
                break
            page += 1
            time.sleep(1.0)
            continue

        consecutive_failures = 0
        payload = data.get("payload") or {}
        items = payload.get("items") or []
        results.extend(items)
        paginacion = payload.get("paginacion") or {}
        total_pages = paginacion.get("total_paginas", 1) or 1
        page += 1
        time.sleep(0.25)

    return results


def fetch_compraagil_detail(code: str, detail_cache: dict) -> Optional[Dict]:
    """Detalle completo de una Compra Ágil (productos, proveedores cotizando,
    presupuesto). Usa el mismo detail_cache que las licitaciones, bajo una
    clave prefijada ('CA:') para no colisionar con códigos de licitación."""
    cache_key = f"CA:{code}"
    cached = detail_cache.get(cache_key)
    if cached:
        cached_data = cached.get("data") or {}
        close_str = (cached_data.get("fechas") or {}).get("fecha_cierre")
        # Un detalle cacheado con productos_solicitados vacío casi siempre es
        # una respuesta incompleta de una consulta que coincidió con una falla
        # parcial de la API (frecuente en api2.mercadopublico.cl) — no un
        # proceso genuinamente sin ítems (esos casos reales existen, pero son
        # la minoría). Confiar en ese caché por 48h propagaba el ítem
        # genérico "ITEM-1"/sku sintético en cada sync posterior en vez de
        # reintentar. Se fuerza un reintento en vez de servir el caché vacío.
        if is_cache_valid(cached, close_str) and cached_data.get("productos_solicitados"):
            return cached_data

    elapsed = time.time() - START_TIME
    if elapsed > MAX_EXEC_SECONDS:
        return None

    url = f"{COMPRAAGIL_BASE_URL}/v2/compra-agil/{code}"
    data = fetch_compraagil_json(url, timeout=20, max_retries=2)
    if data and data.get("success") == "OK" and data.get("payload"):
        detail = data["payload"]
        detail_cache[cache_key] = {"data": detail, "ts": time.time(), "fetchedAt": NOW_STR}
        return detail

    if cache_key in detail_cache:
        del detail_cache[cache_key]
    return None


# ═══════════════════════════════════════════════════════════
# PROCESO DE RECONCILIACIÓN Y CRUCE DE MONTOS (REGLA 14)
# ═══════════════════════════════════════════════════════════

def reconciliar_monto_compra_agil(
    code: str,
    bulk_item: Optional[dict],
    detail_item: Optional[dict]
) -> dict:
    """
    Ejecuta el cruce jerárquico de información para el tipo "CO" de 2 letras
    (raro; distinto del formato "-COT" que ahora se sincroniza en su
    totalidad vía la API v2 de Compra Ágil — ver build_compraagil_record()):
      1. Monto total Orden de Compra emitida (PRIORIDAD 1)
      2. Monto total adjudicado al proveedor (PRIORIDAD 2)
      3. Presupuesto estimado API (PRIORIDAD 3)
      4. MONTO_NO_ENCONTRADO si ninguna fuente entregó un monto >0.
    """
    monto_original = 0
    if detail_item and detail_item.get("MontoEstimado"):
        monto_original = normalize_amount(detail_item.get("MontoEstimado")) or 0

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

    # --- PRIORIDAD 1: ORDEN DE COMPRA ASOCIADA (según detalle oficial) ---
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
# CONSTRUCTOR ESTRICTO DE OPORTUNIDAD v7.6
# ═══════════════════════════════════════════════════════════

def build_opportunity_record(
    code: str,
    bulk_item: Optional[Dict],
    detail_item: Optional[Dict],
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

    elif bulk_item:
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
    reconciled = reconciliar_monto_compra_agil(code, bulk_item, detail_item)

    official_url = build_official_url(code, tipo)
    empresa_id, empresa_nombre, rubro, confidence, keywords = calculate_company_match(title, desc or "")
    region_final = region or infer_chilean_region(title, "", "")

    # Señales para que main() excluya el registro en vez de mostrar datos inventados:
    sin_datos_reales = not detail_item
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
        "id_cotizacion": code,
        "id_orden_compra": reconciled.get("codigoOrdenCompra"),
        "codigoOrdenCompra": reconciled.get("codigoOrdenCompra"),
        "rutOrganismo": organismo_rut or "No informado",
        "tipoOficial": tipo,
        "tipoNombre": tipo_nombre,
        "titulo": title,
        "organismo": organismo or "No informado",
        "organismoRut": organismo_rut or "No informado",
        # La API pública de Mercado Público no expone días de pago ni riesgo
        # del organismo — nunca fijar 'Bajo'/30 aquí, aunque parezca inocuo.
        # 'Sin evaluar'/None es el único valor honesto sin una fuente real.
        "organismoPagoDias": None,
        "organismoRiesgo": "Sin evaluar",
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
        # Los keywords reales que produjeron matchScore — antes se calculaban
        # y se descartaban. Sin esto, el frontend no tenía forma de explicar
        # matchScore salvo recalculándolo con OTRO motor (smartMatchEngine.ts,
        # keywords y fórmula distintas), lo que producía dos porcentajes de
        # match diferentes en la misma pantalla para la misma oportunidad.
        "matchKeywords": keywords,
        "riesgo": "Sin evaluar",
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

        # --- TRAZABILIDAD Y RECONCILIACIÓN v7.6 ---
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
            "fuenteDatos": "api"
        }
    }

    return record


# ═══════════════════════════════════════════════════════════
# CONSTRUCTOR DE COMPRA ÁGIL DESDE API v2 (reemplaza el cruce con Excel)
# ═══════════════════════════════════════════════════════════

ESTADO_COMPRAAGIL_DISPLAY = {
    "publicada": "Publicada",
    "cerrada": "Cerrada",
    "desierta": "Desierta",
    "cancelada": "Cancelada",
    "proveedor_seleccionado": "Adjudicada",
    "oc_emitida": "Adjudicada",
}

def build_compraagil_record(
    list_item: Dict,
    detail: Optional[Dict],
    field_errors: List[str],
    field_warnings: List[str]
) -> Dict:
    """
    Construye un registro de Oportunidad para una Compra Ágil obtenida desde
    la API oficial v2 (api2.mercadopublico.cl/v2/compra-agil) — mismo esquema
    de salida que build_opportunity_record() para que el frontend no
    distinga la fuente. Reemplaza el cruce contra Cotizaciones.xls.
    """
    code = list_item.get("codigo")
    tipo = "COT"
    tipo_nombre = TIPO_OFICIAL_MAP.get(tipo, tipo)
    modality, source_type = classify_modality(tipo)

    # El listado trae lo esencial; el detalle agrega descripción, productos
    # solicitados y proveedores cotizando. Se usa detalle cuando está
    # disponible y se cae al listado sin inventar campos que faltan.
    src = detail or list_item

    title = src.get("nombre") or "Proceso de Compra Pública"
    desc = ((detail or {}).get("descripcion") or "").strip()

    estado_info = src.get("estado") or {}
    estado_codigo = estado_info.get("codigo") or "publicada"
    estado = ESTADO_COMPRAAGIL_DISPLAY.get(estado_codigo) or estado_info.get("glosa") or "Publicada"

    fechas = src.get("fechas") or {}
    pub_str = format_date_to_iso(fechas.get("fecha_publicacion"))
    close_str = format_date_to_iso(fechas.get("fecha_cierre"))

    institucion = src.get("institucion") or {}
    organismo = institucion.get("organismo_comprador") or "No informado"
    organismo_rut = institucion.get("rut") or "No informado"
    # La API entrega directamente el nombre de región oficial (con espacios
    # sobrantes en algunos casos, ej. "Región del Biobío ") — se usa tal cual
    # tras strip() en vez de re-inferirlo por texto libre.
    region_final = (institucion.get("nombre_region") or "").strip() or infer_chilean_region(organismo, "", title)

    # Monto: la API v2 solo expone el presupuesto informado por el comprador
    # (disponible o estimado). El monto final de la OC emitida NO es
    # confiable en esta API — codigo_orden_compra/estado_orden_compra
    # retornan null incluso cuando la OC existe (documentado explícitamente
    # en el changelog v3.0 de la guía oficial). Nunca se inventa ese monto;
    # solo se usa lo que el comprador informó como presupuesto real.
    presupuesto = (detail or {}).get("presupuesto") or {}
    monto_disponible = normalize_amount(presupuesto.get("monto_disponible_clp") or presupuesto.get("monto_disponible"))
    monto_estimado = normalize_amount(presupuesto.get("presupuesto_estimado"))
    monto_lista = normalize_amount((list_item.get("montos") or {}).get("monto_disponible_clp"))
    monto_resolved = monto_disponible or monto_estimado or monto_lista

    if monto_resolved and monto_resolved > 0:
        fuente_monto = "Presupuesto Compra Ágil (API v2)"
        estado_validacion_monto = "VALIDADO"
    else:
        monto_resolved = None
        fuente_monto = "No Encontrado"
        estado_validacion_monto = "MONTO_NO_ENCONTRADO"

    items_list = []
    for p in ((detail or {}).get("productos_solicitados") or []):
        items_list.append({
            # ID real del producto (catálogo ChileCompra) — antes se guardaba
            # con prefijo sintético "SKU-", pero este es el mismo número que
            # el formulario oficial de postulación muestra como "ID: {n}" en
            # cada línea de cotización. Guardarlo tal cual permite emparejar
            # con certeza cada ítem de BidCoop con su fila real en el portal
            # (confirmado en vivo el 2026-09-03 revisando el formulario real).
            "sku": str(p.get("codigo_producto") or "SIN-ID"),
            "producto": p.get("nombre") or title,
            "cantidad": float(p.get("cantidad") or 1),
            # La API no informa precio unitario del lado solicitado (solo del
            # lado cotizado por cada proveedor, en proveedores_cotizando[]) —
            # 0 = "no informado", misma convención que el resto del motor.
            "precioUnitario": 0,
            "unidadMedida": p.get("unidad_medida") or "UN"
        })
    if not items_list:
        items_list = [{"sku": "ITEM-1", "producto": title, "cantidad": 1, "precioUnitario": 0, "unidadMedida": "UN"}]

    official_url = build_official_url(code, tipo)
    empresa_id, empresa_nombre, rubro, confidence, keywords = calculate_company_match(title, desc)

    # Señal para que main() excluya el registro en vez de mostrar datos
    # inventados — aquí siempre hay al menos list_item real de la API.
    sin_datos_reales = False
    sin_match_empresa = empresa_id is None

    monto_final_num = monto_resolved or 0
    amount_type_sem = "monto_estimado" if monto_resolved and monto_resolved > 0 else "no_informado"

    record = {
        "id": f"op-{code}",
        "codigo": code,
        "officialCode": code,
        "id_compra_agil": code,
        "id_proceso": code,
        "id_cotizacion": code,
        "id_orden_compra": (detail or {}).get("id_orden_compra"),
        "codigoOrdenCompra": None,
        "rutOrganismo": organismo_rut,
        "tipoOficial": tipo,
        "tipoNombre": tipo_nombre,
        "titulo": title,
        "organismo": organismo,
        "organismoRut": organismo_rut,
        "organismoPagoDias": None,
        "organismoRiesgo": "Sin evaluar",
        "rubro": rubro,
        "region": region_final,
        "monto": monto_final_num,
        "amount": monto_resolved,
        "amountType": amount_type_sem,
        "currency": presupuesto.get("moneda") or "CLP",
        "fechaPublicacion": pub_str or close_str or TODAY_STR,
        "fechaCierre": close_str or TODAY_STR,
        "matchScore": confidence,
        "matchKeywords": keywords,
        "riesgo": "Sin evaluar",
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
        "criteriosEvaluacion": [],
        "preguntas": [],
        "comentarios": [],
        "competidoresPropuestos": [],
        "empresaMatch": empresa_nombre,
        "modalidad": modality,
        "esInvitacionGrandesCompras": False,
        "subestadoEvaluacion": "Sin oferta seleccionada",

        "_sinDatosReales": sin_datos_reales,
        "_sinMatchEmpresa": sin_match_empresa,

        "sourceSystem": "mercadopublico_api_compraagil_v2",
        "sourceType": source_type,
        "sourceUrl": official_url,
        "fetchedAt": NOW_STR,
        "lastVerifiedAt": NOW_STR,
        "validationStatus": "confirmado",
        "monto_original": monto_estimado or monto_disponible or 0,
        "monto_adjudicado": None,
        "monto_oc": None,
        "monto_final": monto_final_num,
        "fuente_monto": fuente_monto,
        "id_fuente_monto": code,
        "estado_validacion_monto": estado_validacion_monto,
        "proveedorAdjudicado": None,
        "rutProveedor": None,
        "estadoOC": None,

        "matchMetadata": {
            "empresaId": empresa_id,
            "empresaAsociada": empresa_nombre,
            "motivoMatch": "keyword_catalog",
            "campoMatch": "titulo_descripcion",
            "fechaDeteccion": TODAY_STR,
            "nivelConfianza": confidence,
            "keywordsCoincidentes": keywords[:10],
            "fuenteDatos": "api"
        }
    }

    return record


# ═══════════════════════════════════════════════════════════
# PRINCIPAL v7.6
# ═══════════════════════════════════════════════════════════

def main():
    print(f"[{NOW_STR}] BidCoop v{SYNC_VERSION} — Motor Maestro de Sincronización y Reconciliación")

    detail_cache = load_detail_cache()
    previous_snapshot = load_previous_snapshot()

    opportunities_by_code = {}
    field_errors = []
    field_warnings = []

    # ── 1. FASE 1: LISTA MASIVA DESDE API ──────────────────
    # Reintento a nivel de corrida completa (no solo dentro de fetch_json):
    # se observó en producción (GitHub Actions) que la API a veces responde
    # 200 OK con Listado vacío específicamente desde IPs de runners en la
    # nube — no es un timeout (fetch_json ya reintenta eso internamente),
    # es una respuesta "exitosa" sin datos. Un solo intento vacío no basta
    # para asumir que la API está caída; se espera y se reintenta la
    # corrida completa un par de veces antes de rendirse.
    print("[FASE 1] Obteniendo listado masivo de licitaciones activas desde Mercado Público...")
    bulk_list = fetch_api_bulk_list(estado="activas")
    for retry_attempt in range(1, 3):
        if bulk_list:
            break
        wait_s = 45 * retry_attempt
        print(f"  [WARN] Listado masivo vino vacío (intento {retry_attempt}/2) — esperando {wait_s}s y reintentando...")
        time.sleep(wait_s)
        bulk_list = fetch_api_bulk_list(estado="activas")
    print(f"[FASE 1] Obtenidos {len(bulk_list)} registros en listado masivo (estado=activas).")

    # estado=activas apenas expone un puñado de Compras Ágiles vigentes en un
    # instante dado (ventanas de vigencia muy cortas). Se complementa con
    # consultas reales por fecha de los últimos días — misma API oficial,
    # sin inventar nada — para no depender de un Excel estático desactualizado
    # como única fuente de Compras Ágiles recientes.
    print("[FASE 1] Complementando con consulta por fecha (últimos 7 días) para cobertura real de Compras Ágiles...")
    recent_list = fetch_api_by_recent_dates(days_back=7)
    bulk_codes = {item.get("CodigoExterno") for item in bulk_list}
    added_from_dates = 0
    for item in recent_list:
        code = item.get("CodigoExterno")
        if code and code not in bulk_codes:
            bulk_list.append(item)
            bulk_codes.add(code)
            added_from_dates += 1
    print(f"[FASE 1] Sumados {added_from_dates} registros adicionales reales desde consulta por fecha (no estaban en 'activas').")

    # SALVAGUARDA: si la API pública no devolvió NINGÚN registro (ni por
    # estado=activas ni por ninguna de las consultas por fecha), es una
    # falla de la API (red, rate-limit, mantención) — no un mercado real sin
    # movimiento. Seguir de largo sobrescribiría mockData.ts perdiendo
    # cientos de licitaciones reales vigentes de una corrida anterior
    # exitosa. Se aborta sin tocar mockData.ts; el próximo ciclo de sync
    # (cada 3h) reintenta solo.
    if len(bulk_list) == 0:
        print("[ERROR] La API de Mercado Público no devolvió NINGÚN registro (ni 'activas' ni por fecha) — probable falla temporal de red/API. Abortando sin sobrescribir mockData.ts para no perder datos reales ya sincronizados.")
        sys.exit(1)

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

        # Pre-filtro: si el título no calza con el catálogo de ninguna empresa
        # activa, se descarta ANTES de gastar una llamada a la API de detalle.
        # Esto evita pedir detalle de miles de licitaciones irrelevantes (y por
        # eso antes se agotaba el tiempo antes de terminar).
        if not title_matches_active_companies(bulk_item.get("Nombre") or ""):
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

        op_record = build_opportunity_record(code, bulk_item, detail_item, field_errors, field_warnings)

        # No publicar registros sin datos reales (organismo/monto inventados) ni sin
        # match real de empresa (nunca asignar por defecto a Aminorte/V-MOCCS).
        if op_record.pop("_sinDatosReales", False):
            excluded_no_real_data += 1
            continue
        if op_record.pop("_sinMatchEmpresa", False):
            excluded_no_company_match += 1
            continue

        opportunities_by_code[code] = op_record

    # ── 3. FASE 3: COMPRAS ÁGILES DESDE API OFICIAL v2 ──────
    print("[FASE 3] Sincronizando Compras Ágiles desde API oficial v2 (api2.mercadopublico.cl)...")
    compraagil_list = fetch_compraagil_bulk_list(days_back=15)
    print(f"[FASE 3] Obtenidos {len(compraagil_list)} registros de Compra Ágil (últimos 15 días).")

    compraagil_prefiltered_out = 0
    compraagil_added = 0
    for ca_item in compraagil_list:
        code = ca_item.get("codigo")
        if not code or code in opportunities_by_code:
            continue

        nombre = ca_item.get("nombre") or ""
        if not title_matches_active_companies(nombre):
            compraagil_prefiltered_out += 1
            continue

        detail = fetch_compraagil_detail(code, detail_cache)
        if detail:
            live_fetched += 1
            time.sleep(0.15)

        op_record = build_compraagil_record(ca_item, detail, field_errors, field_warnings)

        if op_record.pop("_sinDatosReales", False):
            excluded_no_real_data += 1
            continue
        if op_record.pop("_sinMatchEmpresa", False):
            excluded_no_company_match += 1
            continue

        opportunities_by_code[code] = op_record
        compraagil_added += 1

    print(f"[FASE 3] Añadidas {compraagil_added} Compras Ágiles reales desde API v2 (pre-filtradas por catálogo: {compraagil_prefiltered_out}).")

    # SALVAGUARDA ESPECÍFICA DE COMPRA ÁGIL: si la API v2 falla a mitad de
    # camino (cuota agotada, caída de red, mantención de ChileCompra), no se
    # aborta TODO el ciclo — eso congelaría también licitaciones, que sí tiene
    # datos frescos y correctos vía la API v1 (independiente). En vez de eso,
    # se conservan las Compras Ágiles del último mockData.ts publicado (dato
    # real de la corrida anterior, no inventado) mientras licitaciones sigue
    # actualizándose con normalidad. Se compara contra cuántos códigos "-COT"
    # había en la corrida anterior.
    prev_compraagil_count = sum(1 for code in previous_snapshot.get("registros", {}) if "-COT" in code)
    if COMPRAAGIL_TICKET and prev_compraagil_count >= 20 and compraagil_added < prev_compraagil_count * 0.4:
        print(f"[ERROR] Caída drástica de Compras Ágiles: {prev_compraagil_count} → {compraagil_added} "
              f"({round(100 - compraagil_added / prev_compraagil_count * 100)}% menos). Probable falla parcial de "
              f"la API v2 de Compra Ágil (cuota agotada, error de red).")
        previous_full = load_previous_full_dataset()
        carried_over = 0
        for record in previous_full:
            code = record.get("codigo")
            if code and "-COT" in code and code not in opportunities_by_code:
                opportunities_by_code[code] = record
                carried_over += 1
        if carried_over > 0:
            print(f"  [INFO] Conservadas {carried_over} Compras Ágiles de la última sincronización exitosa "
                  f"— licitaciones sigue actualizándose con normalidad este ciclo.")
        else:
            print("  [ERROR] No se pudo recuperar el dataset previo de Compras Ágiles tampoco. "
                  "Abortando sin sobrescribir mockData.ts.")
            sys.exit(1)

    print(f"[FASE 2] Pre-filtradas (irrelevantes, sin llamar API detalle): {prefiltered_out}")
    print(f"[FASE 2] Excluidas por falta de datos reales (organismo/monto no verificable): {excluded_no_real_data}")
    print(f"[FASE 2] Excluidas por no calzar con catálogo de ninguna empresa activa: {excluded_no_company_match}")

    save_detail_cache(detail_cache)

    processed = list(opportunities_by_code.values())

    if not processed:
        print("[ERROR] 0 registros procesados. mockData.ts NO será sobreescrito.")
        sys.exit(1)

    # SALVAGUARDA: aunque la API haya respondido algo, si el resultado final
    # cae de forma drástica respecto a la corrida anterior (ej. una falla
    # parcial de red a mitad de camino), es más probable que sea una falla
    # de sincronización que un mercado real que se vació de golpe. Se aborta
    # sin sobrescribir en vez de publicar un dataset dañado — el próximo
    # ciclo de 3h reintenta con datos frescos.
    prev_count = len(previous_snapshot.get("registros", {}))
    if prev_count >= 50 and len(processed) < prev_count * 0.6:
        print(f"[ERROR] Caída drástica de registros: {prev_count} → {len(processed)} ({round(100 - len(processed) / prev_count * 100)}% menos). "
              f"Probable falla parcial de la API, no un mercado real vaciado de golpe. Abortando sin sobrescribir mockData.ts.")
        sys.exit(1)

    # ── "¿QUÉ CAMBIÓ?" — comparar contra la corrida anterior ──
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

    print("✅ SINCRONIZACIÓN v7.6 COMPLETADA EXITOSAMENTE")


if __name__ == "__main__":
    main()
