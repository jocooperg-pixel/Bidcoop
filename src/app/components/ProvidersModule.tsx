'use client';
import React, { useState, useMemo } from 'react';
import { listadoProveedores, articulosMasVendidos, Proveedor, ArticuloMasVendido } from '../providersData';

export default function ProvidersModule() {
  const [search, setSearch] = useState('');
  const [selectedRubro, setSelectedRubro] = useState('Todos');
  const [selectedRegion, setSelectedRegion] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedProv, setExpandedProv] = useState<string | null>(null);
  
  // Tab control: 'proveedores' | 'articulos'
  const [activeTab, setActiveTab] = useState<'proveedores' | 'articulos'>('proveedores');
  
  const itemsPerPage = 15;

  // Regions list
  const regiones = useMemo(() => {
    const set = new Set(listadoProveedores.map(p => p.region));
    return ['Todos', ...Array.from(set).sort()];
  }, []);

  // Filtered providers
  const filtered = useMemo(() => {
    return listadoProveedores.filter(p => {
      const matchSearch = 
        p.razonSocial.toLowerCase().includes(search.toLowerCase()) ||
        p.rut.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase()) ||
        p.comuna.toLowerCase().includes(search.toLowerCase());
        
      const matchRubro = selectedRubro === 'Todos' || p.rubro === selectedRubro;
      const matchRegion = selectedRegion === 'Todos' || p.region === selectedRegion;

      return matchSearch && matchRubro && matchRegion;
    });
  }, [search, selectedRubro, selectedRegion]);

  // Paginated providers
  const paginated = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filtered.slice(startIndex, startIndex + itemsPerPage);
  }, [filtered, currentPage]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setExpandedProv(null); // Close expanded details on page change
  };

  const handleExportCSV = () => {
    const headers = 'RUT,Razon Social,Tipo,Rubro,Email,Telefono,Comuna,Region,Representante,Sitio Web\n';
    const rows = filtered.map(p => 
      `"${p.rut}","${p.razonSocial}","${p.tipoEmpresa}","${p.rubro}","${p.email}","${p.telefono}","${p.comuna}","${p.region}","${p.representante}","${p.web}"`
    ).join('\n');
    
    const blob = new Blob(['\ufeff' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'directorio_proveedores_convenios.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Group top articles by convenio
  const aseoArticles = useMemo(() => {
    return articulosMasVendidos.filter(a => a.convenio === 'Aseo e Higiene');
  }, []);

  const escritorioArticles = useMemo(() => {
    return articulosMasVendidos.filter(a => a.convenio === 'Artículos de Escritorio y Oficina');
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
            👥 Inteligencia de Mercado y Proveedores
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Análisis de competidores, directorio de contactos y artículos más vendidos para Aseo e Higiene y Artículos de Escritorio.
          </p>
        </div>
        
        {activeTab === 'proveedores' && (
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-black shadow-md shadow-emerald-500/10 flex items-center gap-1.5 transition cursor-pointer self-start sm:self-auto"
          >
            <span>📥</span> Exportar listado filtrado (.CSV)
          </button>
        )}
      </div>

      {/* METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <span className="text-2xl p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">👥</span>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Proveedores</p>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{listadoProveedores.length}</h3>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <span className="text-2xl p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">🧼</span>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Convenio Aseo</p>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {listadoProveedores.filter(p => p.rubro === 'Aseo e Higiene').length}
            </h3>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <span className="text-2xl p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">✏️</span>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Convenio Escritorio</p>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {listadoProveedores.filter(p => p.rubro === 'Artículos de Escritorio y Oficina').length}
            </h3>
          </div>
        </div>
      </div>

      {/* TAB SWITCHER */}
      <div className="flex border-b border-slate-100 dark:border-slate-800 gap-6">
        <button
          onClick={() => setActiveTab('proveedores')}
          className={`pb-3 text-xs font-black transition relative cursor-pointer ${
            activeTab === 'proveedores'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-slate-400 hover:text-slate-650 dark:hover:text-slate-300'
          }`}
        >
          <span>📁</span> Directorio de Proveedores
          {activeTab === 'proveedores' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('articulos')}
          className={`pb-3 text-xs font-black transition relative cursor-pointer ${
            activeTab === 'articulos'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-slate-400 hover:text-slate-650 dark:hover:text-slate-300'
          }`}
        >
          <span>🛍️</span> Artículos Más Vendidos
          {activeTab === 'articulos' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>
      </div>

      {/* TAB 1: PROVIDERS TABLE LIST */}
      {activeTab === 'proveedores' && (
        <div className="space-y-4">
          
          {/* FILTER BAR */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Search */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Buscar Proveedor</label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm">🔍</span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  placeholder="Razón Social, RUT, Email..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-white"
                />
              </div>
            </div>

            {/* Rubro Filter */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Convenio / Rubro</label>
              <select
                value={selectedRubro}
                onChange={(e) => { setSelectedRubro(e.target.value); setCurrentPage(1); }}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-white"
              >
                <option value="Todos">Todos los Convenios</option>
                <option value="Aseo e Higiene">Aseo e Higiene (Inder-Roll)</option>
                <option value="Artículos de Escritorio y Oficina">Artículos de Escritorio y Oficina (Aminorte)</option>
              </select>
            </div>

            {/* Region Filter */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Región</label>
              <select
                value={selectedRegion}
                onChange={(e) => { setSelectedRegion(e.target.value); setCurrentPage(1); }}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-white"
              >
                {regiones.map(reg => (
                  <option key={reg} value={reg}>{reg}</option>
                ))}
              </select>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/30 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    <th className="py-3 px-4">Proveedor / RUT</th>
                    <th className="py-3 px-4">Convenio</th>
                    <th className="py-3 px-4">Ubicación</th>
                    <th className="py-3 px-4">Contacto</th>
                    <th className="py-3 px-4 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/60 text-xs">
                  {paginated.length > 0 ? (
                    paginated.map((prov, index) => {
                      const isExpanded = expandedProv === prov.rut;
                      return (
                        <React.Fragment key={prov.rut}>
                          <tr className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors ${
                            isExpanded ? 'bg-slate-50/30 dark:bg-slate-800/20' : ''
                          }`}>
                            <td className="py-4 px-4">
                              <div className="font-black text-slate-900 dark:text-white max-w-[250px] truncate" title={prov.razonSocial}>
                                {prov.razonSocial}
                              </div>
                              <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                                {prov.rut}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                                prov.rubro === 'Aseo e Higiene'
                                  ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                                  : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400'
                              }`}>
                                {prov.rubro === 'Aseo e Higiene' ? 'Aseo 🧼' : 'Escritorio ✏️'}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="text-slate-800 dark:text-slate-200 font-medium">
                                {prov.comuna}
                              </div>
                              <div className="text-[10px] text-slate-450 dark:text-slate-500">
                                {prov.region}
                              </div>
                            </td>
                            <td className="py-4 px-4 space-y-0.5">
                              <div className="flex items-center gap-1">
                                <span className="text-[10px]">📧</span>
                                <a href={`mailto:${prov.email}`} className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                                  {prov.email}
                                </a>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                <span>📞</span>
                                <span className="font-mono">{prov.telefono}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <button
                                onClick={() => setExpandedProv(isExpanded ? null : prov.rut)}
                                className={`px-3 py-1.5 rounded-xl text-[10px] font-black transition cursor-pointer ${
                                  isExpanded
                                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-350'
                                    : 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40'
                                }`}
                              >
                                {isExpanded ? 'Ocultar Ventas ➖' : 'Ver Ventas 📊'}
                              </button>
                            </td>
                          </tr>
                          
                          {/* Expanded row details: Sales history table */}
                          {isExpanded && (
                            <tr>
                              <td colSpan={5} className="py-4 px-6 bg-slate-50/40 dark:bg-slate-800/10 border-t border-slate-100 dark:border-slate-800">
                                <div className="space-y-3 animate-in slide-in-from-top-1 duration-150">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                                      Historial de Ventas / Adjudicaciones en Mercado Público
                                    </h4>
                                    <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500">
                                      Registro de {prov.ventas.length} transacciones
                                    </span>
                                  </div>

                                  {prov.ventas && prov.ventas.length > 0 ? (
                                    <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl overflow-hidden">
                                      <table className="w-full text-left border-collapse">
                                        <thead>
                                          <tr className="bg-slate-100/50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 text-[9px] font-black uppercase text-slate-450 tracking-wider">
                                            <th className="py-2 px-3">Artículo / Descripción</th>
                                            <th className="py-2 px-3">Precio Neto</th>
                                            <th className="py-2 px-3">Comprador / Destino</th>
                                            <th className="py-2 px-3">Modalidad</th>
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100/55 dark:divide-slate-800/40 text-[11px] text-slate-700 dark:text-slate-300">
                                          {prov.ventas.map((v, sIdx) => (
                                            <tr key={sIdx} className="hover:bg-slate-100/20 dark:hover:bg-slate-800/10 transition">
                                              <td className="py-2 px-3 font-bold text-slate-850 dark:text-slate-200">
                                                {v.articulo}
                                              </td>
                                              <td className="py-2 px-3 font-mono font-black text-slate-900 dark:text-white">
                                                ${v.precio.toLocaleString('es-CL')} CLP
                                              </td>
                                              <td className="py-2 px-3">
                                                {v.compradorRegion}
                                              </td>
                                              <td className="py-2 px-3">
                                                <span className="text-[9px] font-bold text-blue-500 uppercase">
                                                  {v.modalidad}
                                                </span>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  ) : (
                                    <div className="p-6 text-center text-slate-400 italic">
                                      Sin historial de ventas disponible en el sistema.
                                    </div>
                                  )}
                                  
                                  {prov.web !== 'No disponible' && (
                                    <div className="pt-1 flex">
                                      <a
                                        href={prov.web.startsWith('http') ? prov.web : `http://${prov.web}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-black text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                      >
                                        Visitar sitio corporativo de {prov.razonSocial} 🌐
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-450 dark:text-slate-500">
                        <span className="text-3xl block mb-2">📭</span>
                        <p className="font-bold">No se encontraron proveedores que coincidan con los filtros</p>
                        <p className="text-[10px] text-slate-400 mt-1">Intente cambiar su término de búsqueda o filtros regionales.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION PANEL */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Mostrando {filtered.length} proveedores
                </span>
                
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-lg border border-slate-150 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 disabled:opacity-50 disabled:pointer-events-none transition cursor-pointer"
                  >
                    Atrás
                  </button>
                  <span className="text-xs font-black text-slate-700 dark:text-slate-350 px-1">
                    Página {currentPage} de {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-lg border border-slate-150 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 disabled:opacity-50 disabled:pointer-events-none transition cursor-pointer"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: TOP SELLING ARTICLES */}
      {activeTab === 'articulos' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-200">
          
          {/* CATEGORY 1: ASEO E HIGIENE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-50 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-xl p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40">🧼</span>
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    Convenio Aseo e Higiene
                  </h3>
                  <p className="text-[10px] text-slate-450 dark:text-slate-500 font-medium">INDER-ROLL / Winkler e Inderquim</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] font-black">
                Top Demandados
              </span>
            </div>

            <div className="space-y-3">
              {aseoArticles.map((art, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-800/35 border border-slate-100 dark:border-slate-800/60 text-xs hover:border-blue-200 dark:hover:border-blue-900/60 transition"
                >
                  <div className="space-y-1 max-w-[65%]">
                    <h4 className="font-black text-slate-850 dark:text-slate-200 truncate" title={art.nombre}>
                      {art.nombre}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-bold uppercase">
                      <span>Udm: {art.unidadMedida}</span>
                      <span>•</span>
                      <span className="text-blue-500">Aseo e Higiene</span>
                    </div>
                  </div>
                  <div className="text-right space-y-0.5">
                    <div className="font-mono font-black text-slate-900 dark:text-white">
                      ${art.precio.toLocaleString('es-CL')} CLP
                    </div>
                    <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 font-mono">
                      {art.cantidadVendida.toLocaleString('es-CL')} vendidos
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY 2: ESCRITORIO Y OFICINA */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-50 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-xl p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40">✏️</span>
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    Convenio Artículos de Escritorio
                  </h3>
                  <p className="text-[10px] text-slate-450 dark:text-slate-500 font-medium">AMINORTE / Prisa / Dimeiggs</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[9px] font-black">
                Top Demandados
              </span>
            </div>

            <div className="space-y-3">
              {escritorioArticles.map((art, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-800/35 border border-slate-100 dark:border-slate-800/60 text-xs hover:border-indigo-200 dark:hover:border-indigo-900/60 transition"
                >
                  <div className="space-y-1 max-w-[65%]">
                    <h4 className="font-black text-slate-850 dark:text-slate-200 truncate" title={art.nombre}>
                      {art.nombre}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-bold uppercase">
                      <span>Udm: {art.unidadMedida}</span>
                      <span>•</span>
                      <span className="text-indigo-500">Escritorio y Oficina</span>
                    </div>
                  </div>
                  <div className="text-right space-y-0.5">
                    <div className="font-mono font-black text-slate-900 dark:text-white">
                      ${art.precio.toLocaleString('es-CL')} CLP
                    </div>
                    <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 font-mono">
                      {art.cantidadVendida.toLocaleString('es-CL')} vendidos
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
