import React, { useState } from 'react';
import { MiembroEquipo } from '../types';

interface ConfigModuleProps {
  activeSubSection: string;
  teamMembers: MiembroEquipo[];
  onUpdateRole: (id: string, newRol: 'Admin' | 'Gestor' | 'Lector') => void;
  currentUser: { nombre: string; email: string; avatar: string; rol: string };
  onUpdateProfile: (name: string, email: string) => void;
}

export default function ConfigModule({
  activeSubSection,
  teamMembers,
  onUpdateRole,
  currentUser,
  onUpdateProfile
}: ConfigModuleProps) {
  const [currentTab, setCurrentTab] = useState(activeSubSection || 'perfil');

  // Profile Editor States
  const [profName, setProfName] = useState(currentUser.nombre);
  const [profEmail, setProfEmail] = useState(currentUser.email);
  const [profNotificationEmail, setProfNotificationEmail] = useState(true);
  const [profNotificationBrowser, setProfNotificationBrowser] = useState(true);

  // Search parameters states
  const [synonyms, setSynonyms] = useState('cloro = cloro gel = amonio cuaternario, toalla = papel higienico');
  const [exclusions, setExclusions] = useState('importación directa, plazos &gt; 90');
  const [tagInput, setTagInput] = useState('');
  const [activeTags, setActiveTags] = useState(['Alta Rentabilidad', 'Bajo Riesgo', 'Frecuente', 'Urgente']);

  // Integrations states
  const [chileCompraKey, setChileCompraKey] = useState('cc-sandbox-99238-x7');
  const [elasticSearchUrl, setElasticSearchUrl] = useState('https://elastic.inderquim.internal:9200');

  // AI Prompt templates states
  const [aiBiddingPrompt, setAiBiddingPrompt] = useState(
    'Redacta una propuesta de suministro técnico detallada para la licitación. Resalta la certificación ISP, los plazos de despacho de 48 horas y la procedencia nacional de los insumos químicos.'
  );

  // Subscriptions states
  const [activePlan, setActivePlan] = useState<'starter' | 'growth' | 'enterprise'>('enterprise');

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(profName, profEmail);
    alert('Perfil actualizado con éxito.');
  };

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tagInput.trim() || activeTags.includes(tagInput)) return;
    setActiveTags(prev => [...prev, tagInput.trim()]);
    setTagInput('');
  };

  const handleDeleteTag = (tag: string) => {
    setActiveTags(prev => prev.filter(t => t !== tag));
  };

  const handlePlanChange = (plan: 'starter' | 'growth' | 'enterprise') => {
    setActivePlan(plan);
    alert(`Solicitud de cambio al plan ${plan.toUpperCase()} registrada. Se ha enviado al portal de pagos.`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* TABS CONTROLLER */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-2">
        {[
          { id: 'perfil', label: 'Mi Perfil' },
          { id: 'parametros', label: 'Espacio de Trabajo' },
          { id: 'ia-prompt', label: 'Plantillas de IA' },
          { id: 'suscripcion', label: 'Planes y Suscripción' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition ${
              currentTab === tab.id
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/10'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* =======================================================================
          TAB 1: PERFIL PERSONAL
          ======================================================================= */}
      {currentTab === 'perfil' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Ajustes Personales de la Cuenta</h3>
            
            <form onSubmit={handleProfileSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    value={profName}
                    onChange={(e) => setProfName(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    value={profEmail}
                    onChange={(e) => setProfEmail(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] uppercase font-black text-slate-400 block mb-2">Canales de Notificación</span>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-650 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={profNotificationEmail}
                      onChange={(e) => setProfNotificationEmail(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    Recibir resúmenes diarios de licitaciones por correo electrónico
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-650 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={profNotificationBrowser}
                      onChange={(e) => setProfNotificationBrowser(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    Notificaciones en tiempo real en el navegador ante cambios de estado
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition"
              >
                Guardar Cambios
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 text-xs">
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Detalles de Sesión</h3>
            <div className="space-y-3 font-semibold text-slate-500">
              <div>
                <span className="text-[9px] uppercase font-black text-slate-400 block">Rol Organizacional</span>
                <strong className="text-slate-800 dark:text-white mt-0.5 block">{currentUser.rol}</strong>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-slate-400 block">Último Acceso</span>
                <span className="text-slate-800 dark:text-white mt-0.5 block">Hoy desde Santiago (IP: 190.45.12.8)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 2: ESPACIO DE TRABAJO (WORKSPACE PARAMETERS)
          ======================================================================= */}
      {currentTab === 'parametros' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-5 text-xs">
            
            {/* Synonyms & Exclusions */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Reglas de Buscador Central</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Sinónimos de Búsqueda (Match IA)</label>
                  <input
                    type="text"
                    value={synonyms}
                    onChange={(e) => setSynonyms(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                  />
                  <span className="text-[9px] text-slate-400 block mt-1">Homologa búsquedas para que devuelvan resultados afines independientemente del término formal.</span>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Filtros de Exclusión Estrictos</label>
                  <input
                    type="text"
                    value={exclusions}
                    onChange={(e) => setExclusions(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                  />
                  <span className="text-[9px] text-slate-400 block mt-1">Evita desplegar oportunidades que contengan estos conceptos o plazos de pago mayores a 90 días.</span>
                </div>
              </div>
            </div>

            {/* Integrations */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Integraciones y API Keys</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">ChileCompra API Key</label>
                  <input
                    type="text"
                    value={chileCompraKey}
                    onChange={(e) => setChileCompraKey(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Elasticsearch Cluster Node</label>
                  <input
                    type="text"
                    value={elasticSearchUrl}
                    onChange={(e) => setElasticSearchUrl(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Parámetros de workspace guardados.')}
              className="py-2.5 px-6 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-black text-xs transition"
            >
              Guardar Configuración de Workspace
            </button>
          </div>

          {/* Tags management */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 text-xs">
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Administración de Etiquetas</h3>
            
            <form onSubmit={handleAddTag} className="flex gap-2">
              <input
                type="text"
                placeholder="Nueva etiqueta"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="flex-1 text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                required
              />
              <button
                type="submit"
                className="px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
              >
                +
              </button>
            </form>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {activeTags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-855 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full font-bold text-[10px]"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => handleDeleteTag(tag)}
                    className="text-red-500 font-extrabold hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 3: PLANTILLAS DE IA
          ======================================================================= */}
      {currentTab === 'ia-prompt' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 text-xs">
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Alineación del Asistente de Propuestas (IA)</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">Establezca las directrices de estilo y ventajas competitivas corporativas para redactar anexos.</p>
          </div>

          <div>
            <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Instrucciones del Prompt Base para Postulaciones</label>
            <textarea
              rows={6}
              value={aiBiddingPrompt}
              onChange={(e) => setAiBiddingPrompt(e.target.value)}
              className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white font-mono focus:border-blue-500"
            />
          </div>

          <button
            onClick={() => alert('Plantilla base de IA guardada.')}
            className="py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition"
          >
            ✓ Guardar Plantilla de IA
          </button>
        </div>
      )}

      {/* =======================================================================
          TAB 4: SUSCRIPCIONES
          ======================================================================= */}
      {currentTab === 'suscripcion' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">Planes Disponibles</h3>
            <p className="text-[10px] text-slate-400">Escoja la capacidad de descargas y velocidad de RAG que mejor se adapte a su volumen comercial.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'starter', label: 'Starter', precio: '$99', desc: 'Buscador y filtros básicos. 50 alertas mensuales.', features: ['Sincronización cada 24 horas', 'Exportar a CSV', '1 Usuario'] },
              { id: 'growth', label: 'Growth', precio: '$299', desc: 'Análisis e inteligencia con IA. 500 alertas mensuales.', features: ['Sincronización cada 6 horas', 'Historial de precios de adjudicación', '5 Usuarios'] },
              { id: 'enterprise', label: 'Enterprise', precio: '$999', desc: 'Soporte prioritario. Sincronización continua de Mercado Público.', features: ['Sincronización en tiempo real', 'Visor RAG de Bases ilimitadas', 'Usuarios Ilimitados', 'Acceso API'] }
            ].map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between h-96 shadow-md transition ${
                  activePlan === plan.id
                    ? 'border-blue-500 bg-blue-600/5 dark:bg-blue-950/10'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">{plan.label}</h4>
                    {activePlan === plan.id && (
                      <span className="text-[9px] uppercase font-black px-2 py-0.5 rounded bg-blue-600 text-white shadow-sm">Activo</span>
                    )}
                  </div>
                  <div>
                    <strong className="text-3xl font-black text-slate-900 dark:text-white">{plan.precio}</strong>
                    <span className="text-[10px] text-slate-400 font-bold block mt-1">por mes (Facturado anual)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{plan.desc}</p>
                  <ul className="space-y-1.5 text-[10px] font-bold text-slate-400 mt-2">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-slate-650 dark:text-slate-350">
                        <span className="text-blue-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handlePlanChange(plan.id as any)}
                  className={`w-full py-2.5 rounded-xl text-xs font-black transition ${
                    activePlan === plan.id
                      ? 'bg-slate-900 text-white dark:bg-slate-800 hover:bg-slate-800'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/10'
                  }`}
                >
                  {activePlan === plan.id ? 'Gestionar Facturación' : 'Cambiar a este Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
