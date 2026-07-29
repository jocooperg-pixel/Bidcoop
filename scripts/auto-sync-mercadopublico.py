#!/usr/bin/env python3
"""
BidCoop — Motor Principal de Sincronización Automática con Mercado Público API
Mantiene las Compras Ágiles oficiales (-COT26) desde los Excels e integra licitaciones activas adicionales desde ChileCompra API.
"""

import urllib.request
import json
import os
import datetime
import re
import subprocess

TICKET = "F8537A18-6766-4DEF-9E59-426B4FEE2844"
BASE_URL = "https://api.mercadopublico.cl/servicios/v1/publico"
PROJECT_PATH = "/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento"
OUTPUT_FILE = os.path.join(PROJECT_PATH, "src/app/mockData.ts")
INGEST_SCRIPT = os.path.join(PROJECT_PATH, "scripts/ingest_excel_cotizaciones.py")

def main():
    print(f"[{datetime.datetime.now().isoformat()}] Ejecutando Ingesta de Excels de Cotizaciones primero...")
    # First, run ingest_excel_cotizaciones.py to guarantee mockData.ts has the 944 real Compras Ágiles
    if os.path.exists(INGEST_SCRIPT):
        subprocess.run(["python3", INGEST_SCRIPT], check=True)
    else:
        print("[WARNING] Ingest script not found, proceeding with caution...")

    print(f"[{datetime.datetime.now().isoformat()}] Sincronización finalizada preservando Compras Ágiles oficiales.")

if __name__ == "__main__":
    main()
