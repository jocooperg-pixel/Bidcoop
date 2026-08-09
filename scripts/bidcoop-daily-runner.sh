#!/bin/bash
# ============================================================
# BidCoop — Runner Diario Maestro v5.0
# Ejecuta sincronización unificada con Mercado Público
# → Actualiza mockData.ts → Escribe sync_meta.json → Git Push → Vercel
# ============================================================
# CORRECCIÓN v5.0: Ruta de proyecto corregida a /ANTIGRAVITY/
# ============================================================

PROJECT_PATH="/Users/jonathancooper/Documents/ANTIGRAVITY/Plataforma Avanzada de Abastecimiento"
APP_SUPPORT_PATH="/Users/jonathancooper/Library/Application Support/BidCoop"
SYNC_SCRIPT="$PROJECT_PATH/scripts/sync_mercadopublico.py"
LOG_PATH="$APP_SUPPORT_PATH/sync.log"
STAGING_FILE="$APP_SUPPORT_PATH/mockData.ts"
TARGET_FILE="$PROJECT_PATH/src/app/mockData.ts"
META_FILE="$PROJECT_PATH/data/sync_meta.json"
PYTHON3="/usr/bin/python3"
HORA_ACTUAL=$(date '+%H')

# ── Verificar que el directorio del proyecto existe ────────
if [ ! -d "$PROJECT_PATH" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [FATAL] PROJECT_PATH no existe: $PROJECT_PATH" >> "$LOG_PATH"
  exit 1
fi

# ── Verificar que Python3 existe ───────────────────────────
if [ ! -f "$PYTHON3" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [FATAL] Python3 no encontrado en $PYTHON3" >> "$LOG_PATH"
  exit 1
fi

echo "" >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] BidCoop Runner v5.0 Iniciado" >> "$LOG_PATH"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PROJECT_PATH: $PROJECT_PATH" >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"

# ── PASO 1: Sincronización unificada con Mercado Público ──
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 1 — Sincronizando con API Mercado Público..." >> "$LOG_PATH"

if [ ! -f "$SYNC_SCRIPT" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [FATAL] Script de sync no encontrado: $SYNC_SCRIPT" >> "$LOG_PATH"
  exit 1
fi

"$PYTHON3" "$SYNC_SCRIPT" >> "$LOG_PATH" 2>&1
SYNC_EXIT=$?

if [ $SYNC_EXIT -ne 0 ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [WARNING] Sincronización falló (exit $SYNC_EXIT). Los datos anteriores se conservan." >> "$LOG_PATH"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Sincronización completada exitosamente." >> "$LOG_PATH"
  # Copiar staging al directorio de Application Support (respaldo local)
  cp "$TARGET_FILE" "$STAGING_FILE" 2>/dev/null && \
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Copia de respaldo guardada en staging." >> "$LOG_PATH"
fi

# ── PASO 2: Git Commit & Push seguro para Vercel ──────────
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 2 — Desplegando cambios en GitHub / Vercel..." >> "$LOG_PATH"

cd "$PROJECT_PATH" || {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [FATAL] No se pudo acceder a PROJECT_PATH." >> "$LOG_PATH"
  exit 1
}

# Agregar solo los archivos gestionados por el sync
git add "$TARGET_FILE" "$META_FILE" 2>/dev/null

git diff --cached --quiet
HAS_CHANGES=$?

if [ $HAS_CHANGES -ne 0 ]; then
  # Obtener conteo de oportunidades del meta
  TOTAL_OPS="N/D"
  if [ -f "$META_FILE" ]; then
    TOTAL_OPS=$(python3 -c "import json; d=json.load(open('$META_FILE')); print(d.get('registrosEnPlataforma', 'N/D'))" 2>/dev/null || echo "N/D")
  fi

  git commit -m "sync: BidCoop v5 — $(date '+%Y-%m-%d %H:%M') — $TOTAL_OPS oportunidades activas" >> "$LOG_PATH" 2>&1

  # Pull con rebase antes de push para evitar conflictos
  git pull --rebase origin main >> "$LOG_PATH" 2>&1

  git push origin main >> "$LOG_PATH" 2>&1
  PUSH_EXIT=$?

  if [ $PUSH_EXIT -eq 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Deploy a Vercel disparado exitosamente." >> "$LOG_PATH"
  else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [WARNING] Git push falló (exit $PUSH_EXIT). Verificar credenciales o conflictos." >> "$LOG_PATH"
  fi
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [INFO] Sin cambios detectados en mockData.ts." >> "$LOG_PATH"
fi

# ── PASO 3: Verificación de salud ─────────────────────────
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 3 — Verificando salud de la sincronización..." >> "$LOG_PATH"

HEALTH_SCRIPT="$PROJECT_PATH/scripts/check_sync_health.py"
if [ -f "$HEALTH_SCRIPT" ]; then
  "$PYTHON3" "$HEALTH_SCRIPT" >> "$LOG_PATH" 2>&1
  HEALTH_EXIT=$?
  if [ $HEALTH_EXIT -ne 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [ALERT] Verificación de salud detectó anomalías. Revisar sync_meta.json." >> "$LOG_PATH"
  fi
fi

# ── PASO 4: Política de correos ───────────────────────────
echo "[$(date '+%Y-%m-%d %H:%M:%S')] [INFO] Reportes por correo se despachan manualmente desde la plataforma web BidCoop." >> "$LOG_PATH"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] BidCoop Runner v5.0 Finalizado." >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"
