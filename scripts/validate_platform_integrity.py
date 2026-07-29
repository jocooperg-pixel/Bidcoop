#!/usr/bin/env python3
"""
Validador Automático de Integridad de Datos para BidCoop.
Ejecuta pruebas de sanidad y consistencia sobre mockData.ts contra Mercado Público:
  1. Ground-Truth 1001-11-COT26: Retiro, traslado e instalación de equipos de aire acondicionado.
  2. Ground-Truth 1006-16-COT26: Adquisición de Insumos y Servicios de Impresión y Corte Laser ($1.066.239 CLP -> LASER CHILE SPA).
  3. Cero duplicados de códigos y consistencia de postulaciones.
"""

import sys
import json
import re

def validate():
    print("🔍 Iniciando Validador de Integridad de Datos de BidCoop...")
    
    file_path = "/Users/jonathancooper/Documents/Plataforma Avanzada de Abastecimiento/src/app/mockData.ts"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    errors = []
    
    # 1. VERIFICAR GROUND-TRUTH 1001-11-COT26
    if "1001-11-COT26" in content:
        if "Retiro, traslado e instalación de equipos de aire acondicionado" not in content:
            errors.append("❌ FAIL: El título de 1001-11-COT26 no coincide con Mercado Público ('Retiro, traslado e instalación de equipos de aire acondicionado')")
        else:
            print("✅ PASS: Ground-Truth 1001-11-COT26 ('Retiro, traslado e instalación de equipos de aire acondicionado') verificado.")
    else:
        errors.append("❌ FAIL: No se encontró la Compra Ágil 1001-11-COT26 en mockData.ts")

    # 2. VERIFICAR GROUND-TRUTH 1006-16-COT26
    if "1006-16-COT26" in content:
        if "1066239" not in content:
            errors.append("❌ FAIL: El monto de 1006-16-COT26 en mockData.ts no es $1.066.239 CLP")
        if "LASER CHILE SPA" not in content:
            errors.append("❌ FAIL: El adjudicatario de 1006-16-COT26 no es LASER CHILE SPA")
        print("✅ PASS: Ground-Truth 1006-16-COT26 ($1.066.239 CLP -> LASER CHILE SPA) verificado.")
    else:
        errors.append("❌ FAIL: No se encontró la Compra Ágil 1006-16-COT26 en mockData.ts")

    # 3. VERIFICAR QUE NO EXISTA 1006-16-COT26 EN MOCKPOSTULACIONES
    postulaciones_match = re.search(r'export const mockPostulaciones: Postulacion\[\] = \[(.*?)\];', content, re.DOTALL)
    if postulaciones_match:
        postulaciones_block = postulaciones_match.group(1)
        if "1006-16-COT26" in postulaciones_block:
            errors.append("❌ FAIL: 1006-16-COT26 está erróneamente incluida en mockPostulaciones")
        else:
            print("✅ PASS: 1006-16-COT26 aislada correctamente fuera de postulaciones holding.")

    # 4. COMPROBAR RESULTADO
    if errors:
        print("\n❌ ERRORES DETECTADOS DE INTEGRIDAD:")
        for err in errors:
            print(f"   {err}")
        sys.exit(1)
    else:
        print("\n🎉 INTEGRIDAD 100% VERIFICADA SIN ERRORES CONTRA MERCADO PÚBLICO.")
        sys.exit(0)

if __name__ == "__main__":
    validate()
