#!/usr/bin/env python3
"""
BidCoop — Script de Auditoría Estricta de Compras Ágiles (REGLA 18)
===================================================================
Selecciona una muestra mínima de:
  - 10 Compras Ágiles con MONTO_NO_ENCONTRADO (o $0)
  - 10 Compras Ágiles con monto recuperado/validado (> $0)
  - 5 Compras Ágiles con múltiples registros u órdenes
Muestra la cadena completa de trazabilidad:
  Compra Ágil → adjudicación → proveedor → Orden de Compra → monto encontrado → fuente utilizada → monto final.
"""

import json
import os
import sys

PROJECT_PATH = "/Users/jonathancooper/Documents/ANTIGRAVITY/Plataforma Avanzada de Abastecimiento"
MOCKDATA_PATH = os.path.join(PROJECT_PATH, "src/app/mockData.ts")

def load_opportunities():
    if not os.path.isfile(MOCKDATA_PATH):
        print("[FAIL] mockData.ts no encontrado.")
        sys.exit(1)
    with open(MOCKDATA_PATH, encoding="utf-8") as f:
        content = f.read()

    marker = "const rawOportunidades: any = ["
    idx = content.find(marker)
    if idx == -1:
        print("[FAIL] Marker no encontrado en mockData.ts.")
        sys.exit(1)

    start = idx + len(marker) - 1
    end = content.find(";\nexport const mockOportunidades", start)
    raw = content[start:end]
    return json.loads(raw)

def main():
    opps = load_opportunities()
    co_opps = [op for op in opps if op.get("modalidad") == "Compra Ágil" or op.get("tipoOficial") in ("CO", "COT")]

    print("=" * 80)
    print("BIDCOOP v7.5 — INFORME DE AUDITORÍA Y TRAZABILIDAD DE COMPRAS ÁGILES (REGLA 18)")
    print("=" * 80)
    print(f"Total Compras Ágiles analizadas: {len(co_opps)}\n")

    no_amount = [op for op in co_opps if op.get("monto_final", 0) == 0 or op.get("estado_validacion_monto") == "MONTO_NO_ENCONTRADO"]
    with_amount = [op for op in co_opps if op.get("monto_final", 0) > 0]
    multi_rec = [op for op in co_opps if op.get("codigoOrdenCompra") or op.get("sourceSystem") == "mercadopublico_excel"]

    sample_no_amount = no_amount[:10]
    sample_with_amount = with_amount[:10]
    sample_multi = multi_rec[:5]

    print("┌" + "─" * 78 + "┐")
    print("│ MUESTRA 1: 10 COMPRAS ÁGILES CON MONTO NO ENCONTRADO / EN $0".ljust(79) + "│")
    print("└" + "─" * 78 + "┘")
    for i, op in enumerate(sample_no_amount, 1):
        print(f"[{i:02d}] ID: {op.get('codigo')} | Título: {op.get('titulo')[:45]}")
        print(f"     Organismo: {op.get('organismo')}")
        print(f"     Trazabilidad: Compra Ágil ({op.get('codigo')}) → Adjudicación: {op.get('proveedorAdjudicado') or 'No informada'} → OC: {op.get('codigoOrdenCompra') or 'No generada/no encontrada'}")
        print(f"     Monto Original: ${op.get('monto_original', 0):,} | Monto Adjudicado: {op.get('monto_adjudicado') or 'N/A'} | Monto OC: {op.get('monto_oc') or 'N/A'}")
        print(f"     Monto Final: ${op.get('monto_final', 0):,} CLP | Fuente: {op.get('fuente_monto')} | Estado: {op.get('estado_validacion_monto')}")
        print("─" * 80)

    print("\n┌" + "─" * 78 + "┐")
    print("│ MUESTRA 2: 10 COMPRAS ÁGILES CON MONTO VALIDADOS Y RECUPERADOS (> $0)".ljust(79) + "│")
    print("└" + "─" * 78 + "┘")
    for i, op in enumerate(sample_with_amount, 1):
        print(f"[{i:02d}] ID: {op.get('codigo')} | Título: {op.get('titulo')[:45]}")
        print(f"     Organismo: {op.get('organismo')}")
        print(f"     Trazabilidad: Compra Ágil ({op.get('codigo')}) → Adjudicación: {op.get('proveedorAdjudicado') or 'Informada'} → OC: {op.get('codigoOrdenCompra') or 'Confirmada'}")
        print(f"     Monto Original: ${op.get('monto_original', 0):,} | Monto Final: ${op.get('monto_final', 0):,} CLP")
        print(f"     Fuente Utilizada: {op.get('fuente_monto')} | ID Fuente: {op.get('id_fuente_monto')} | Estado: {op.get('estado_validacion_monto')}")
        print("─" * 80)

    print("\n┌" + "─" * 78 + "┐")
    print("│ MUESTRA 3: 5 COMPRAS ÁGILES CON REGISTROS / ÓRDENES MÚLTIPLES".ljust(79) + "│")
    print("└" + "─" * 78 + "┘")
    for i, op in enumerate(sample_multi, 1):
        print(f"[{i:02d}] ID: {op.get('codigo')} | Título: {op.get('titulo')[:45]}")
        print(f"     Organismo: {op.get('organismo')}")
        print(f"     Código OC / Fuente: {op.get('codigoOrdenCompra') or op.get('sourceSystem')}")
        print(f"     Monto Final Consolidado: ${op.get('monto_final', 0):,} CLP | Fuente: {op.get('fuente_monto')}")
        print("─" * 80)

    print("\n" + "=" * 80)
    print("RESUMEN GENERAL DE CONTROL DE CALIDAD (REGLA 16)")
    print("=" * 80)
    print(f"COUNT(total compras ágiles):      {len(co_opps)}")
    print(f"COUNT(monto_final > 0):           {len(with_amount)}")
    print(f"COUNT(monto_final == 0):          {len(no_amount)}")
    print(f"SUM(monto_original):              ${sum(op.get('monto_original', 0) for op in co_opps):,} CLP")
    print(f"SUM(monto_final):                 ${sum(op.get('monto_final', 0) for op in co_opps):,} CLP")
    print(f"Monto Total Recuperado por Cruce: ${sum(op.get('monto_final', 0) for op in co_opps) - sum(op.get('monto_original', 0) for op in co_opps):,} CLP")
    print("=" * 80)

if __name__ == "__main__":
    main()
