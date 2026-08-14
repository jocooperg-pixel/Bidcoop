import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/blob';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../../utils/session';

/**
 * GET /api/documentos/[id]/download — descarga real. Antes "Descargar"
 * era un alert() que no entregaba ningún archivo. Streamea el contenido
 * real desde Vercel Blob (privado) con el nombre real del documento.
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });

    const { id } = await params;
    const documento = await prisma.documento.findUnique({ where: { id } });
    if (!documento || !documento.urlArchivo) {
      return NextResponse.json({ error: 'Documento no encontrado.' }, { status: 404 });
    }

    const blob = await get(documento.urlArchivo, { access: 'private' });
    if (!blob || blob.statusCode !== 200) {
      return NextResponse.json({ error: 'El archivo no está disponible en el almacenamiento.' }, { status: 404 });
    }

    return new NextResponse(blob.stream, {
      headers: {
        'Content-Type': blob.blob.contentType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${documento.nombre.replace(/"/g, '')}"`
      }
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al descargar documento: ${msg}` }, { status: 500 });
  }
}
