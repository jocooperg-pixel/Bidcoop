#!/bin/bash
# ============================================================
# BidCoop — Runner Diario Maestro v4.1
# Ejecuta Ingesta de Planillas Excel de Cotizaciones -> Actualiza mockData.ts -> Git Pull/Push a Vercel
# ============================================================

PROJECT_PATH="/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento"
APP_SUPPORT_PATH="/Users/jonathancooper/Library/Application Support/BidCoop"
INGEST_SCRIPT="$PROJECT_PATH/scripts/ingest_excel_cotizaciones.py"
LOG_PATH="$APP_SUPPORT_PATH/sync.log"
TARGET_FILE="$PROJECT_PATH/src/app/mockData.ts"
STAGING_FILE="$APP_SUPPORT_PATH/mockData.ts"
PYTHON3="/usr/bin/python3"

echo "" >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] BidCoop Runner v4.1 Iniciado" >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"

# ── PASO 1: Ingesta de Excels con Regiones y Fechas Corregidas ─
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 1 — Ejecutando Ingesta de Cotizaciones desde Downloads..." >> "$LOG_PATH"

"$PYTHON3" "$INGEST_SCRIPT" >> "$LOG_PATH" 2>&1
INGEST_EXIT=$?

if [ $INGEST_EXIT -ne 0 ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [WARNING] Ingesta falló (exit $INGEST_EXIT)." >> "$LOG_PATH"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Ingesta completada exitosamente." >> "$LOG_PATH"
  # Sincronizar copia en Application Support staging
  cp "$TARGET_FILE" "$STAGING_FILE" 2>/dev/null
fi

# ── PASO 2: Git Commit & Push con Rebase Seguro para Vercel ──
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 2 — Desplegando cambios en GitHub / Vercel..." >> "$LOG_PATH"

cd "$PROJECT_PATH" || exit 1

git add "$TARGET_FILE" >> "$LOG_PATH" 2>&1
git diff --cached --quiet
HAS_CHANGES=$?

if [ $HAS_CHANGES -ne 0 ]; then
  git commit -m "sync: Actualización automática $(date '+%Y-%m-%d %H:%M') — Compras Ágiles oficiales" >> "$LOG_PATH" 2>&1
  git pull --rebase origin main >> "$LOG_PATH" 2>&1
  git push origin main >> "$LOG_PATH" 2>&1
  PUSH_EXIT=$?
  if [ $PUSH_EXIT -eq 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Deploy a Vercel disparado exitosamente." >> "$LOG_PATH"
  else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [WARNING] Git push falló (exit $PUSH_EXIT)." >> "$LOG_PATH"
  fi
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [INFO] Sin cambios detectados en mockData.ts." >> "$LOG_PATH"
fi

# ── PASO 3: Envío de Reportes por Correo (Solo a las 08:00 AM) ──
HOUR=$(date +%H)
if [ "$HOUR" = "08" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 3 — Enviando reportes de correo 8 AM..." >> "$LOG_PATH"
  sleep 30
  RESPONSE=$(curl -s -X POST "https://bidcoop.vercel.app/api/send-email-report" \
    -H "Content-Type: application/json" \
    -d '{}' \
    --max-time 120)
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [CORREO] Respuesta API: $RESPONSE" >> "$LOG_PATH"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 3 — Ejecución silenciosa (${HOUR}h)." >> "$LOG_PATH"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] BidCoop Runner v4.1 Finalizado." >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"
