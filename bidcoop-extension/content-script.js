// BidCoop — Postulación Asistida (Fase 2: panel de solo lectura).
//
// Este script NUNCA escribe en el formulario oficial ni hace clic en nada —
// solo detecta el código de la Compra Ágil en la página actual, trae el
// paquete de datos ya preparado en BidCoop, y lo muestra en un panel con
// botones "Copiar" por campo para que tú los pegues manualmente en el
// formulario real. El envío de la oferta siempre lo haces tú, en
// mercadopublico.cl.
//
// La Fase 3 (rellenar los campos del formulario automáticamente) requiere
// haber visto el HTML real del formulario (ids/names/estructura), no solo
// capturas de pantalla — hasta entonces, este panel se queda en solo lectura
// a propósito, para no arriesgar escribir en el campo equivocado de un
// formulario de gobierno real.

(function () {
  function extractCodigoFromPage() {
    // 1) Query param ?code= (patrón de buscador.mercadopublico.cl/ficha)
    const urlParams = new URLSearchParams(window.location.search);
    const fromQuery = urlParams.get('code') || urlParams.get('codigo');
    if (fromQuery) return fromQuery.trim();

    // 2) Texto visible de la página — más confiable que la URL en el
    // formulario legacy de postulación, donde la URL no siempre refleja el
    // código real. Cubre ambos patrones de encabezado ya vistos en vivo:
    // "Detalle Compra Ágil {código}" (ficha pública) y
    // "Detalle de la cotización {código}" (formulario de postulación).
    const text = document.body ? document.body.innerText : '';
    const match = text.match(/Detalle (?:Compra Ágil|de la cotización)\s+([A-Za-z0-9-]+)/i);
    return match ? match[1] : null;
  }

  function formatCLP(value) {
    if (value === null || value === undefined) return 'No informado';
    return '$' + Number(value).toLocaleString('es-CL');
  }

  function buildField(label, value, opts) {
    opts = opts || {};
    const field = document.createElement('div');
    field.className = 'bc-field';

    const labelRow = document.createElement('div');
    labelRow.className = 'bc-label';
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    labelRow.appendChild(labelSpan);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'bc-copy';
    copyBtn.type = 'button';
    copyBtn.textContent = 'Copiar';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(String(value)).then(() => {
        copyBtn.textContent = '✓';
        setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 1200);
      });
    });
    labelRow.appendChild(copyBtn);

    const valueDiv = document.createElement('div');
    valueDiv.className = 'bc-value';
    valueDiv.textContent = value;

    field.appendChild(labelRow);
    field.appendChild(valueDiv);

    if (opts.note) {
      const note = document.createElement('div');
      note.className = 'bc-note';
      note.textContent = opts.note;
      field.appendChild(note);
    }
    return field;
  }

  function renderPaquete(container, paquete) {
    container.innerHTML = '';

    container.appendChild(buildField('Código', paquete.codigo));
    container.appendChild(buildField('Organismo', paquete.organismo, { note: paquete.organismoRut }));
    container.appendChild(buildField('Título', paquete.titulo));
    container.appendChild(buildField('Presupuesto estimado', formatCLP(paquete.monto)));
    container.appendChild(buildField('Precio de referencia (regla 94%)', formatCLP(paquete.precioReferencia94)));

    const disclaimer = document.createElement('div');
    disclaimer.className = 'bc-disclaimer';
    disclaimer.textContent = paquete.precioReferencia94Nota;
    container.appendChild(disclaimer);

    if (paquete.itemsOfertados && paquete.itemsOfertados.length) {
      const itemsTitle = document.createElement('div');
      itemsTitle.className = 'bc-label';
      itemsTitle.style.marginTop = '14px';
      itemsTitle.textContent = `Ítems (${paquete.itemsOfertados.length})`;
      container.appendChild(itemsTitle);

      paquete.itemsOfertados.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'bc-item-row';

        const nameRow = document.createElement('div');
        nameRow.className = 'bc-value';
        nameRow.textContent = `${item.producto} (ID: ${item.sku})`;
        row.appendChild(nameRow);

        row.appendChild(buildField('Cantidad', item.cantidad));
        row.appendChild(buildField(
          'Precio unitario en BidCoop',
          item.precioOferta ? formatCLP(item.precioOferta) : 'No informado',
          { note: 'BidCoop no calcula el precio de venta real — cárgalo tú según tu simulador de márgenes.' }
        ));

        container.appendChild(row);
      });
    }

    container.appendChild(buildField('Fecha de cierre', paquete.fechaCierre));
    container.appendChild(buildField('Ficha oficial', paquete.fichaUrl));
  }

  function renderError(container, message) {
    container.innerHTML = '';
    const err = document.createElement('div');
    err.className = 'bc-error';
    err.textContent = message;
    container.appendChild(err);
  }

  async function loadPaquete(codigo, container) {
    container.innerHTML = '<div class="bc-value">Cargando…</div>';

    chrome.storage.sync.get(['bidcoopBaseUrl', 'bidcoopToken'], async (config) => {
      if (!config.bidcoopBaseUrl || !config.bidcoopToken) {
        renderError(container, 'Configura la URL de BidCoop y el token en las opciones de la extensión (clic derecho en el ícono → Opciones).');
        return;
      }

      try {
        const res = await fetch(
          `${config.bidcoopBaseUrl}/api/postulaciones/paquete?codigo=${encodeURIComponent(codigo)}`,
          { headers: { Authorization: `Bearer ${config.bidcoopToken}` } }
        );
        const data = await res.json();

        if (!res.ok) {
          renderError(container, data.error || `Error ${res.status} al consultar BidCoop.`);
          return;
        }

        renderPaquete(container, data);
      } catch (err) {
        renderError(container, `No se pudo conectar con BidCoop: ${err.message}`);
      }
    });
  }

  function mountPanel(codigo) {
    if (document.getElementById('bidcoop-panel') || document.getElementById('bidcoop-panel-launcher')) return;

    const launcher = document.createElement('button');
    launcher.id = 'bidcoop-panel-launcher';
    launcher.type = 'button';
    launcher.textContent = `📋 Cargar datos BidCoop (${codigo})`;
    document.body.appendChild(launcher);

    launcher.addEventListener('click', () => {
      launcher.remove();

      const panel = document.createElement('div');
      panel.id = 'bidcoop-panel';

      const header = document.createElement('div');
      header.className = 'bc-header';
      header.innerHTML = '<strong>BidCoop — Postulación Asistida</strong>';
      const closeBtn = document.createElement('button');
      closeBtn.className = 'bc-close';
      closeBtn.type = 'button';
      closeBtn.textContent = '✕';
      closeBtn.addEventListener('click', () => {
        panel.remove();
        document.body.appendChild(launcher);
      });
      header.appendChild(closeBtn);

      const body = document.createElement('div');
      body.className = 'bc-body';

      panel.appendChild(header);
      panel.appendChild(body);
      document.body.appendChild(panel);

      loadPaquete(codigo, body);
    });
  }

  const codigo = extractCodigoFromPage();
  if (codigo) {
    // Espera breve por si el SPA todavía está renderizando el encabezado
    // cuando este script corre (run_at: document_idle ya ayuda, esto es un
    // respaldo adicional).
    setTimeout(() => mountPanel(codigo), 500);
  }
})();
