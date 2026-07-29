#!/bin/bash
# Instala el cronjob para ejecutar la sincronización automática 2 veces al día (08:00 AM y 14:00 PM)

SCRIPT_PATH="/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento/scripts/auto-sync-mercadopublico.py"
LOG_PATH="/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento/scripts/sync.log"
CRON_JOB="0 8,14 * * * /usr/bin/python3 \"$SCRIPT_PATH\" >> \"$LOG_PATH\" 2>&1"

# Añadir a crontab sin duplicar
(crontab -l 2>/dev/null | grep -v "$SCRIPT_PATH"; echo "$CRON_JOB") | crontab -

echo "✅ CronJob instalado exitosamente."
echo "⏰ Se ejecutará automáticamente todos los días a las 08:00 AM y 14:00 PM."
echo "📋 Registro de actividad en: $LOG_PATH"
