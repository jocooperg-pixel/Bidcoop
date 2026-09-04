'use client';

import React, { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AssistantWidgetProps {
  // Cuando se setea (ej. desde "Preguntar a la IA sobre este proceso" en
  // SearchModule), el widget se abre solo y adjunta el detalle real de ese
  // proceso (descripción, ítems, criterios) a cada pregunta — hasta que el
  // usuario lo quite manualmente.
  contextCodigo?: string;
  contextTitulo?: string;
  onContextConsumed?: () => void;
}

export default function AssistantWidget({ contextCodigo, contextTitulo, onContextConsumed }: AssistantWidgetProps = {}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [notConfigured, setNotConfigured] = useState(false);
  const [activeContext, setActiveContext] = useState<{ codigo: string; titulo?: string } | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (contextCodigo) {
      setActiveContext({ codigo: contextCodigo, titulo: contextTitulo });
      setOpen(true);
      onContextConsumed?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextCodigo]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages, codigo: activeContext?.codigo })
      });
      const data = await res.json();

      if (res.status === 503) {
        setNotConfigured(true);
        setMessages(prev => [...prev, { role: 'assistant', content: data.error }]);
      } else if (!res.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.error || 'Ocurrió un error inesperado.' }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'No se pudo conectar con el asistente. Revisa tu conexión e intenta nuevamente.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-xl shadow-blue-600/30 flex items-center justify-center text-2xl transition-transform hover:scale-105 cursor-pointer"
        title="Asistente BidCoop"
      >
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-40 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shrink-0">
            <h3 className="text-sm font-black">🤖 Asistente BidCoop</h3>
            <p className="text-[10px] text-blue-100 font-semibold">Responde solo con datos reales sincronizados — nunca inventa cifras.</p>
          </div>

          {activeContext && (
            <div className="px-4 py-2 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900/40 flex items-center justify-between gap-2 shrink-0">
              <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 truncate">
                📌 Preguntando sobre {activeContext.codigo}{activeContext.titulo ? `: ${activeContext.titulo}` : ''}
              </span>
              <button
                type="button"
                onClick={() => setActiveContext(undefined)}
                className="shrink-0 text-[10px] font-black text-amber-600 hover:text-amber-800 dark:text-amber-400"
                title="Quitar contexto — volver a preguntas generales"
              >
                ✕
              </button>
            </div>
          )}

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2.5 bg-slate-50 dark:bg-slate-950">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 text-xs py-8 px-4">
                Pregúntame sobre tus oportunidades activas, cierres próximos o dónde está el dinero. Si no tengo el dato real, te lo digo — no invento.
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-sm'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-xs text-slate-400">
                  Pensando…
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0 bg-white dark:bg-slate-900">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              disabled={notConfigured || loading}
              placeholder={notConfigured ? 'Asistente no configurado (falta API key)' : '¿Qué cierra esta semana?'}
              className="flex-1 text-xs px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-slate-100 focus:border-blue-500 disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={notConfigured || loading || !input.trim()}
              className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-black transition cursor-pointer"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
