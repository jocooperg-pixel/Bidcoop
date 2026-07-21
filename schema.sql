-- ==========================================
-- Licitia AI - Database Schema (PostgreSQL)
-- ==========================================

-- Habilitar extensión para UUID si es necesario
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: empresas_proveedoras
-- Almacena los perfiles comerciales de los proveedores del Estado.
CREATE TABLE IF NOT EXISTS empresas_proveedoras (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rut VARCHAR(15) UNIQUE NOT NULL, -- Formato: XX.XXX.XXX-X o X.XXX.XXX-X
    razon_social VARCHAR(255) NOT NULL,
    tamano VARCHAR(20) NOT NULL CHECK (tamano IN ('Grande', 'Mediana', 'Pequeña', 'Micro')),
    rubro VARCHAR(100) NOT NULL,
    ventas_convenio_marco NUMERIC(15, 2) DEFAULT 0,
    ventas_licitacion_publica NUMERIC(15, 2) DEFAULT 0,
    ventas_trato_directo NUMERIC(15, 2) DEFAULT 0,
    ventas_compra_agil NUMERIC(15, 2) DEFAULT 0,
    total_12_meses NUMERIC(15, 2) GENERATED ALWAYS AS (
        ventas_convenio_marco + ventas_licitacion_publica + ventas_trato_directo + ventas_compra_agil
    ) STORED,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: organismos_publicos
-- Almacena la información de los organismos compradores del Estado de Chile.
CREATE TABLE IF NOT EXISTS organismos_publicos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rut VARCHAR(15) UNIQUE NOT NULL, -- Formato: XX.XXX.XXX-X
    nombre VARCHAR(255) NOT NULL,
    compras_convenio_marco NUMERIC(15, 2) DEFAULT 0,
    compras_licitacion_publica NUMERIC(15, 2) DEFAULT 0,
    compras_trato_directo NUMERIC(15, 2) DEFAULT 0,
    compras_compra_agil NUMERIC(15, 2) DEFAULT 0,
    total_12_meses NUMERIC(15, 2) GENERATED ALWAYS AS (
        compras_convenio_marco + compras_licitacion_publica + compras_trato_directo + compras_compra_agil
    ) STORED,
    responsable_pago VARCHAR(100),
    contacto_email VARCHAR(255),
    contacto_telefono VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: transacciones_compra
-- Almacena el historial de adjudicaciones/compras registradas.
CREATE TABLE IF NOT EXISTS transacciones_compra (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    codigo_adjudicacion VARCHAR(50) UNIQUE NOT NULL, -- Código de Licitación u Orden de Compra
    organismo_id UUID REFERENCES organismos_publicos(id) ON DELETE RESTRICT,
    proveedor_id UUID REFERENCES empresas_proveedoras(id) ON DELETE RESTRICT,
    modalidad VARCHAR(30) NOT NULL CHECK (modalidad IN ('Convenio Marco', 'Licitación Pública', 'Trato Directo', 'Compra Ágil')),
    monto NUMERIC(15, 2) NOT NULL CHECK (monto >= 0),
    fecha DATE NOT NULL,
    detalles_item TEXT,
    sku_adjudicado VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- Índices para Optimización de Consultas (BI / Directorios)
-- ==========================================

-- Índices de búsqueda rápida por RUT y Nombre
CREATE INDEX IF NOT EXISTS idx_proveedor_rut ON empresas_proveedoras(rut);
CREATE INDEX IF NOT EXISTS idx_proveedor_razon_social ON empresas_proveedoras(razon_social);
CREATE INDEX IF NOT EXISTS idx_organismo_rut ON organismos_publicos(rut);
CREATE INDEX IF NOT EXISTS idx_organismo_nombre ON organismos_publicos(nombre);

-- Índices para filtros de BI y directorios
CREATE INDEX IF NOT EXISTS idx_proveedor_rubro ON empresas_proveedoras(rubro);
CREATE INDEX IF NOT EXISTS idx_proveedor_tamano ON empresas_proveedoras(tamano);

-- Índices de transacciones para análisis temporal y modalidad
CREATE INDEX IF NOT EXISTS idx_transacciones_fecha ON transacciones_compra(fecha);
CREATE INDEX IF NOT EXISTS idx_transacciones_modalidad ON transacciones_compra(modalidad);
CREATE INDEX IF NOT EXISTS idx_transacciones_monto ON transacciones_compra(monto);
