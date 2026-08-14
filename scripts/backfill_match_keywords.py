"""
Backfill de matchKeywords para registros de mockData.ts sincronizados antes
de que el sync guardara este campo. Recalcula con la MISMA función real que
produjo matchScore (calculate_company_match) usando título/descripción ya
almacenados — sin llamadas de red. Si el score recalculado no coincide con
el guardado, se reporta y NO se sobreescribe ese registro (evita introducir
una inconsistencia nueva mientras se corrige una vieja).
"""
import json
import re
import sys
from pathlib import Path

PROJECT_PATH = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PROJECT_PATH / "scripts"))

from sync_mercadopublico import calculate_company_match  # noqa: E402

MOCK_DATA_PATH = PROJECT_PATH / "src/app/mockData.ts"


def main():
    text = MOCK_DATA_PATH.read_text(encoding="utf-8")

    start_marker = "const rawOportunidades: any = "
    end_marker = ";\nexport const mockOportunidades"
    start_idx = text.index(start_marker) + len(start_marker)
    end_idx = text.index(end_marker, start_idx)

    array_json = text[start_idx:end_idx]
    registros = json.loads(array_json)

    actualizados = 0
    ya_tenian = 0
    inconsistentes = []

    for r in registros:
        if r.get("matchKeywords") is not None:
            ya_tenian += 1
            continue

        titulo = r.get("titulo", "")
        descripcion = r.get("descripcion", "")
        _, _, _, confidence, keywords = calculate_company_match(titulo, descripcion)

        score_guardado = r.get("matchScore")
        if keywords and score_guardado is not None and confidence != score_guardado:
            inconsistentes.append({"codigo": r.get("codigo"), "guardado": score_guardado, "recalculado": confidence})
            continue

        r["matchKeywords"] = keywords
        actualizados += 1

    new_array_json = json.dumps(registros, indent=2, ensure_ascii=False)
    new_text = text[:start_idx] + new_array_json + text[end_idx:]
    MOCK_DATA_PATH.write_text(new_text, encoding="utf-8")

    print(f"Actualizados con matchKeywords: {actualizados}")
    print(f"Ya tenían matchKeywords: {ya_tenian}")
    print(f"Inconsistentes (score recalculado != guardado, NO sobreescritos): {len(inconsistentes)}")
    for i in inconsistentes[:10]:
        print(f"  {i['codigo']}: guardado={i['guardado']} recalculado={i['recalculado']}")


if __name__ == "__main__":
    main()
