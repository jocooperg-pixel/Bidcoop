// SDK Client Wrapper for Mercado Público (ChileCompra) API v1
import fetch from 'node-fetch';

export interface MPOpciones {
  ticket?: string;
  baseUrl?: string;
}

export class MercadoPublicoClient {
  private ticket: string;
  private baseUrl: string;

  constructor(opciones?: MPOpciones) {
    this.ticket = opciones?.ticket || 'F8537A18-6766-4DEF-9E59-426B4FEE2844';
    this.baseUrl = opciones?.baseUrl || 'https://api.mercadopublico.cl/servicios/v1/publico';
  }

  // Fetch bidding documents by code or date (DDMMYYYY)
  async fetchLicitaciones(params: { codigo?: string; fecha?: string }) {
    let url = '';
    if (params.codigo) {
      url = `${this.baseUrl}/licitaciones.json?codigo=${params.codigo}&ticket=${this.ticket}`;
    } else if (params.fecha) {
      url = `${this.baseUrl}/licitaciones.json?fecha=${params.fecha}&ticket=${this.ticket}`;
    } else {
      throw new Error('Debe proporcionar un "codigo" de licitación o una "fecha" en formato DDMMYYYY.');
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API respondió con status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error al consultar licitaciones de Mercado Público:', error);
      throw error;
    }
  }

  // Fetch purchase order (Orden de Compra) details by code
  async fetchOrdenCompra(codigo: string) {
    if (!codigo) {
      throw new Error('Debe especificar el código de la Orden de Compra.');
    }

    const url = `${this.baseUrl}/OrdenCompra.json?codigo=${codigo}&ticket=${this.ticket}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API respondió con status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error al consultar Orden de Compra de Mercado Público:', error);
      throw error;
    }
  }

  // Search active Compras Ágiles (simulated / query list wrapper)
  async searchComprasAgiles(convenioId?: number) {
    // Under 100 UTM bidding calls
    return [
      {
        id: `CA-3000-26`,
        titulo: `Suministro de cloro y desinfectantes para jardines infantiles`,
        organismo: 'Junta Nacional de Jardines Infantiles (JUNJI)',
        monto: 1500000,
        convenioId: 2, // Aseo e Higiene
        fechaCierre: '2026-07-15 12:00'
      },
      {
        id: `CA-3001-26`,
        titulo: `Adquisición menor de insumos químicos para piscinas públicas`,
        organismo: 'Ilustre Municipalidad de Santiago',
        monto: 3400000,
        convenioId: 2, // Aseo e Higiene
        fechaCierre: '2026-07-16 15:00'
      }
    ].filter(item => !convenioId || item.convenioId === convenioId);
  }
}
