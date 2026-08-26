#!/usr/bin/env python3
"""Valida la estructura y consistencia del dataset vigente de BidCoop."""

import json
import os
import re
import sys
from collections import Counter


PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_DATA_FILE = os.path.join(PROJECT_PATH, "src", "app", "mockData.ts")
META_FILE = os.path.join(PROJECT_PATH, "data", "sync_meta.json")


def load_dataset(content):
    marker = "const rawOportunidades: any = "
    start = content.index(marker) + len(marker)
    end = content.index("];", start) + 1
    return json.loads(content[start:end])

def validate():
    print("🔍 Iniciando Validador de Integridad de Datos de BidCoop...")
    
    with open(MOCK_DATA_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    dataset = load_dataset(content)
    errors = []

    if not dataset:
        errors.append("❌ FAIL: El dataset de oportunidades está vacío")

    codes = [item.get("codigo") for item in dataset]
    missing_codes = sum(code in (None, "") for code in codes)
    duplicate_counts = Counter(code for code in codes if code)
    duplicates = sorted(code for code, count in duplicate_counts.items() if count > 1)
    if missing_codes:
        errors.append(f"❌ FAIL: {missing_codes} registros no tienen código oficial")
    if duplicates:
        errors.append(f"❌ FAIL: Hay códigos duplicados: {', '.join(duplicates[:10])}")

    malformed = [code for code in codes if code and not re.fullmatch(r"[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+", code)]
    if malformed:
        errors.append(f"❌ FAIL: Hay códigos con formato inválido: {', '.join(malformed[:10])}")

    required_fields = ("codigo", "officialCode", "titulo", "organismo", "tipoOficial", "empresaMatch", "sourceUrl")
    incomplete = [item.get("codigo", "SIN-CODIGO") for item in dataset if any(item.get(field) in (None, "") for field in required_fields)]
    if incomplete:
        errors.append(f"❌ FAIL: {len(incomplete)} registros carecen de campos obligatorios")

    if os.path.isfile(META_FILE):
        with open(META_FILE, encoding="utf-8") as f:
            meta = json.load(f)
        expected = meta.get("registrosEnPlataforma")
        if expected is not None and expected != len(dataset):
            errors.append(f"❌ FAIL: sync_meta registra {expected}, pero mockData.ts contiene {len(dataset)} oportunidades")

    if errors:
        print("\n❌ ERRORES DETECTADOS DE INTEGRIDAD:")
        for err in errors:
            print(f"   {err}")
        sys.exit(1)
    else:
        print(f"\n🎉 INTEGRIDAD VERIFICADA: {len(dataset)} oportunidades, códigos únicos y metadatos consistentes.")
        sys.exit(0)

if __name__ == "__main__":
    validate()
