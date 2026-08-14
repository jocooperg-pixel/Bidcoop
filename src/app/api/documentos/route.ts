import { NextRequest, NextResponse } from 'next/server';
import { put, head } from '@vercel/blob';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/documentos — repositorio real. Reemplaza los 4 documentos
 * hardcodeados que existían antes (nombres inventados, "Descargar" era un
 * alert() falso, "subir" solo guardaba un nombre de texto sin archivo real).
 * El tamaño se obtiene en vivo de Vercel Blob (head()) — nunca un valor
 * fabricado, y no puede desincronizarse del archivo real.
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });

    const documentos = await prisma.documento.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        responsable: { select: { nombre: true, email: true } },
        empresa: { select: { nombre: true } },
        oportunidad: { select: { codigo: true, tituloOficial: true } }
      }
    });

    const conTamano = await Promise.all(
      documentos.map(async (doc) => {
        let tamanoBytes: number | null = null;
        if (doc.urlArchivo) {
          try {
            const info = await head(doc.urlArchivo);
            tamanoBytes = info.size;
          } catch {
            tamanoBytes = null; // blob eliminado o inaccesible — honesto, no se inventa
          }
        }
        return { ...doc, tamanoBytes };
      })
    );

    return NextResponse.json({ documentos: conTamano });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar documentos: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/documentos — sube un archivo real a Vercel Blob (privado) y
 * crea el registro real en Postgres. responsableId siempre viene de la
 * sesión verificada, nunca de un campo del formulario.
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });

    const formData = await req.formData();
    const file = formData.get('file');
    const nombre = formData.get('nombre');
    const tipo = formData.get('tipo');
    const empresaNombre = formData.get('empresaNombre');
    const oportunidadId = formData.get('oportunidadId');
    const fechaVencimiento = formData.get('fechaVencimiento');
    const etiquetasRaw = formData.get('etiquetas');

    let empresaId: string | null = null;
    if (typeof empresaNombre === 'string' && empresaNombre) {
      const empresa = await prisma.empresa.findFirst({ where: { nombre: empresaNombre } });
      empresaId = empresa?.id ?? null;
    }

    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: 'Debes adjuntar un archivo real.' }, { status: 400 });
    }
    if (typeof nombre !== 'string' || !nombre.trim()) {
      return NextResponse.json({ error: 'Falta el nombre del documento.' }, { status: 400 });
    }
    const tipoValido = ['OFICIAL', 'INTERNO', 'GENERADO_IA'].includes(tipo as string) ? (tipo as string) : 'INTERNO';

    const pathname = `documentos/${crypto.randomUUID()}-${file.name}`;
    const blob = await put(pathname, file, {
      access: 'private',
      contentType: file.type || 'application/octet-stream'
    });

    const documento = await prisma.documento.create({
      data: {
        nombre: nombre.trim(),
        tipo: tipoValido as 'OFICIAL' | 'INTERNO' | 'GENERADO_IA',
        estado: 'VIGENTE',
        urlArchivo: blob.pathname,
        fechaEmision: new Date(),
        fechaVencimiento: typeof fechaVencimiento === 'string' && fechaVencimiento ? new Date(fechaVencimiento) : null,
        responsableId: sesion.usuarioId,
        empresaId,
        oportunidadId: typeof oportunidadId === 'string' && oportunidadId ? oportunidadId : null,
        etiquetas: typeof etiquetasRaw === 'string' && etiquetasRaw
          ? etiquetasRaw.split(',').map(e => e.trim()).filter(Boolean)
          : []
      }
    });

    return NextResponse.json({ documento });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al subir documento: ${msg}` }, { status: 500 });
  }
}
