#!/usr/bin/env python3
"""
BidCoop — Monitor de Salud de Sincronización
=============================================
Verifica el estado de la última sincronización y genera alertas cuando:
  - La sync no se ha ejecutado en más de X horas
  - El conteo de registros cayó más del 20%
  - Una empresa no tiene oportunidades asignadas
  - Una categoría dejó de recibir resultados
  - La API no respondió en el último intento

Retorna exit code 0 si todo está bien, 1 si hay alertas.
"""

import json
import os
import sys
import datetime

def _detect_project_path():
    env_path = os.environ.get("BIDCOOP_PROJECT_PATH")
    if env_path and os.path.isdir(env_path):
        return env_path
    script_dir = os.path.dirname(os.path.abspath(__file__))
    candidate = os.path.dirname(script_dir)
    if os.path.isfile(os.path.join(candidate, "package.json")):
        return candidate
    canonical = "/Users/jonathancooper/Documents/ANTIGRAVITY/Plataforma Avanzada de Abastecimiento"
    if os.path.isdir(canonical):
        return canonical
    raise RuntimeError("No se pudo detectar PROJECT_PATH.")

PROJECT_PATH = _detect_project_path()
META_FILE = os.path.join(PROJECT_PATH, "data/sync_meta.json")
EMPRESAS_CONFIG = os.path.join(PROJECT_PATH, "config/empresas.json")

# Thresholds de alerta
MAX_HORAS_SIN_SYNC = 8           # Alerta si no se sincronizó en 8 horas
CAIDA_MAXIMA_PCT = 20.0          # Alerta si los registros bajan más del 20%
MIN_OPORTUNIDADES_POR_EMPRESA = 1  # Cada empresa debe tener al menos 1 oportunidad


def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def check_health():
    alertas = []
    ahora = datetime.datetime.now(datetime.timezone.utc)
    print(f"[{ahora.isoformat()}] BidCoop — Verificación de salud")

    if not os.path.isfile(META_FILE):
        print("[ALERT] sync_meta.json no existe. El script de sync nunca se ha ejecutado.")
        return 1

    meta = load_json(META_FILE)

    # ── 1. Verificar tiempo desde última sync exitosa ────────
    ultima_sync_str = meta.get("ultimaSincronizacionExitosa", "")
    if not ultima_sync_str:
        alertas.append("[ALERT] No hay sincronización exitosa registrada.")
    else:
        ultima_sync = datetime.datetime.fromisoformat(ultima_sync_str)
        if ultima_sync.tzinfo is None:
            ultima_sync = ultima_sync.replace(tzinfo=datetime.timezone.utc)
        horas = (ahora - ultima_sync).total_seconds() / 3600
        if horas > MAX_HORAS_SIN_SYNC:
            alertas.append(f"[ALERT] Última sync exitosa hace {horas:.1f} horas (máximo: {MAX_HORAS_SIN_SYNC}h). Posible falla del cron.")
        else:
            print(f"[OK] Última sync exitosa: hace {horas:.1f} horas ({ultima_sync_str})")

    # ── 2. Verificar si la última sync fue exitosa ───────────
    if not meta.get("exitosa", False):
        alertas.append("[ALERT] La última sincronización registrada falló.")
        for err in meta.get("errores", []):
            print(f"  ERROR: {err}")

    # ── 3. Verificar caída de registros ─────────────────────
    total_actual = meta.get("registrosEnPlataforma", 0)
    total_anterior = meta.get("registrosAnteriores", 0)
    if total_anterior > 0:
        variacion_pct = ((total_anterior - total_actual) / total_anterior) * 100
        if variacion_pct > CAIDA_MAXIMA_PCT:
            alertas.append(
                f"[ALERT] Caída anormal de registros: {total_anterior} → {total_actual} "
                f"(-{variacion_pct:.1f}%). Posible falla de API o paginación."
            )
        elif total_actual < total_anterior:
            print(f"[OK] Registros: {total_actual} (variación normal: -{total_anterior - total_actual})")
        else:
            print(f"[OK] Registros: {total_actual} (+{total_actual - total_anterior} desde última sync)")
    else:
        print(f"[OK] Registros en plataforma: {total_actual}")

    # ── 4. Verificar que todas las empresas tienen matches ──
    if os.path.isfile(EMPRESAS_CONFIG):
        empresas_cfg = load_json(EMPRESAS_CONFIG)
        empresas_activas = [e for e in empresas_cfg.get("empresas", []) if e.get("activa", True)]
        match_por_empresa = meta.get("matchPorEmpresa", {})
        for empresa in empresas_activas:
            nombre = empresa["nombre"]
            count = match_por_empresa.get(nombre, 0)
            if count < MIN_OPORTUNIDADES_POR_EMPRESA:
                alertas.append(f"[ALERT] Empresa '{nombre}' tiene {count} oportunidades asignadas. Revisar catálogo de keywords.")
            else:
                print(f"[OK] {nombre}: {count} oportunidades")

    # ── 5. Verificar categorías con 0 resultados ─────────────
    categorias = meta.get("categorias", {})
    if categorias.get("licitaciones", 0) == 0:
        alertas.append("[ALERT] Categoría 'Licitaciones' tiene 0 registros. Verificar endpoint de API.")
    if categorias.get("comprasAgiles", 0) == 0:
        alertas.append("[WARNING] Categoría 'Compras Ágiles' tiene 0 registros. Verificar planilla Excel o endpoint tipo=CO.")

    print(f"[INFO] Categorías: {categorias}")

    # ── 6. Mostrar errores y advertencias del último sync ────
    errores_sync = meta.get("errores", [])
    if errores_sync:
        print(f"[WARNING] {len(errores_sync)} error(es) en último sync:")
        for e in errores_sync:
            print(f"  - {e}")

    # ── 7. Resumen ───────────────────────────────────────────
    print(f"\n{'='*50}")
    if alertas:
        print(f"[RESULTADO] {len(alertas)} ALERTA(S) DETECTADA(S):")
        for a in alertas:
            print(f"  {a}")
        print(f"{'='*50}")
        return 1
    else:
        print(f"[RESULTADO] ✅ Sistema saludable. Sin alertas.")
        print(f"{'='*50}")
        return 0


if __name__ == "__main__":
    sys.exit(check_health())
