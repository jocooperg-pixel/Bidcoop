import { NextResponse } from 'next/server';
import { Oportunidad } from '../../types';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const payloadStr = data.get('payload');
    if (!payloadStr) {
      return NextResponse.json({ error: 'No payload provided' }, { status: 400 });
    }

    const oportunidades: Oportunidad[] = JSON.parse(payloadStr.toString());

    const headers = ['Código', 'Organismo', 'Título', 'Monto', 'Match %', 'Fecha Publicación', 'Fecha Límite', 'Rubro', 'Región', 'Riesgo', 'Estado', 'Modalidad'];

    const escapeHtml = (str: string) => String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    let tableHtml = '<table><thead><tr>';
    headers.forEach(h => { tableHtml += `<th>${escapeHtml(h)}</th>`; });
    tableHtml += '</tr></thead><tbody>';

    oportunidades.forEach(o => {
      tableHtml += '<tr>';
      tableHtml += `<td>${escapeHtml(o.codigo)}</td>`;
      tableHtml += `<td>${escapeHtml(o.organismo)}</td>`;
      tableHtml += `<td>${escapeHtml(o.titulo)}</td>`;
      tableHtml += `<td style="mso-number-format:'#,##0'">${o.monto}</td>`;
      tableHtml += `<td>${o.matchScore}%</td>`;
      tableHtml += `<td>${escapeHtml(o.fechaPublicacion)}</td>`;
      tableHtml += `<td>${escapeHtml(o.fechaCierre)}</td>`;
      tableHtml += `<td>${escapeHtml(o.rubro)}</td>`;
      tableHtml += `<td>${escapeHtml(o.region)}</td>`;
      tableHtml += `<td>${escapeHtml(o.riesgo)}</td>`;
      tableHtml += `<td>${escapeHtml(o.estado)}</td>`;
      tableHtml += `<td>${escapeHtml(o.modalidad)}</td>`;
      tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table>';

    const excelContent = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><style>th{background-color:#1e3a5f;color:white;font-weight:bold;padding:8px}td{padding:6px;border:1px solid #ddd}tr:nth-child(even){background-color:#f2f6fa}</style></head><body>${tableHtml}</body></html>`;

    const today = new Date().toISOString().split('T')[0];
    return new NextResponse(excelContent, {
      headers: {
        'Content-Type': 'application/vnd.ms-excel',
        'Content-Disposition': `attachment; filename="BidCoop_Reporte_Diario_Compras_Agiles_${today}.xls"`,
      },
    });
  } catch (error) {
    console.error('Error generating Excel on server:', error);
    return NextResponse.json({ error: 'Failed to generate Excel' }, { status: 500 });
  }
}
