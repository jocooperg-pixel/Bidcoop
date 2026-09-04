// El catálogo de productos propios ya no vive hardcodeado acá — es un
// catálogo real, persistido en Postgres (modelo Producto, packages/database/
// prisma/schema.prisma), servido por /api/db-productos y consumido en
// BusinessModule.tsx. Este archivo solo mantiene el tipo, por si algo más
// del proyecto lo necesita.

export interface CatalogProduct {
  sku: string;
  producto: string;
  empresa: 'Aminorte' | 'V-MOCCS';
  categoria: string;
  unidad: string;
  precioReferencial: number;
  estado: string;
}
