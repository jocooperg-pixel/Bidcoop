#!/bin/bash
# ============================================================
# BidCoop — Runner Diario Maestro
# Ejecuta: Sync API Mercado Público + Correos + Git Push
# Autor: BidCoop / Jonathan Cooper
# ============================================================

PROJECT_PATH="/Users/jonathancooper/Desktop/ANTIGRAVITY/Plataforma Avanzada de Abastecimiento"
LOG_PATH="$PROJECT_PATH/scripts/sync.log"
PYTHON3=$(which python3)
NODE=$(which node)
NPM=$(which npm)

echo "" >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] BidCoop Runner Iniciado" >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"

# ── PASO 1: Sync desde API de Mercado Público ──────────────
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 1 — Sincronizando desde API Mercado Público..." >> "$LOG_PATH"
"$PYTHON3" "$PROJECT_PATH/scripts/auto-sync-mercadopublico.py" >> "$LOG_PATH" 2>&1
SYNC_EXIT=$?

if [ $SYNC_EXIT -ne 0 ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [WARNING] Sync API falló (exit $SYNC_EXIT). Usando datos previos." >> "$LOG_PATH"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Sync API completado exitosamente." >> "$LOG_PATH"
fi

# ── PASO 2: Git commit + push (activa Vercel deploy) ───────
echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 2 — Publicando en GitHub/Vercel..." >> "$LOG_PATH"
cd "$PROJECT_PATH"
git add -A >> "$LOG_PATH" 2>&1
git commit -m "sync: Actualización automática $(date '+%Y-%m-%d %H:%M') — API Mercado Público" >> "$LOG_PATH" 2>&1
git push origin main >> "$LOG_PATH" 2>&1
PUSH_EXIT=$?

if [ $PUSH_EXIT -ne 0 ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [WARNING] Git push falló (exit $PUSH_EXIT). Verificar credenciales." >> "$LOG_PATH"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Deploy a Vercel disparado exitosamente." >> "$LOG_PATH"
fi

# ── PASO 3: Enviar correos (solo a las 8 AM) ───────────────
HOUR=$(date +%H)
if [ "$HOUR" = "08" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 3 — Enviando reportes de correo 8 AM..." >> "$LOG_PATH"
  
  # Esperar que Vercel termine de deployar (30 segundos)
  sleep 30

  # Llamar al endpoint de correos de la plataforma en producción
  RESPONSE=$(curl -s -X POST "https://bidcoop.vercel.app/api/send-email-report" \
    -H "Content-Type: application/json" \
    -d '{}' \
    --max-time 120)
  
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [CORREO] Respuesta: $RESPONSE" >> "$LOG_PATH"
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [OK] Reportes de correo enviados." >> "$LOG_PATH"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] PASO 3 — Sync de fondo (no es hora de correos, son las $HOUR:xx)." >> "$LOG_PATH"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] BidCoop Runner Finalizado." >> "$LOG_PATH"
echo "======================================" >> "$LOG_PATH"
