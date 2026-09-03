# BidCoop — Postulación Asistida (extensión de Chrome)

**Fase 2 del plan de postulación asistida.** Esta extensión es de **solo lectura**: muestra los datos de una cotización ya preparados en BidCoop en un panel, con botones "Copiar" por campo. Nunca escribe ni envía nada en el formulario oficial de Mercado Público — eso lo haces siempre tú, manualmente.

## Cómo cargarla en Chrome

1. Abre `chrome://extensions` en Chrome.
2. Activa el interruptor **"Modo de desarrollador"** (arriba a la derecha).
3. Clic en **"Cargar descomprimida"**.
4. Selecciona esta carpeta (`bidcoop-extension/`).
5. Debería aparecer "BidCoop — Postulación Asistida" en la lista de extensiones.

## Configurarla

1. En `chrome://extensions`, busca la extensión y clic en **"Detalles"**.
2. Clic en **"Opciones de la extensión"**.
3. Completa:
   - **URL de BidCoop**: `https://bidcoop.vercel.app` (sin `/` al final).
   - **Token**: el mismo valor que pegaste en Vercel como `POSTULACION_API_TOKEN`.
4. Guardar.

## Cómo usarla

1. Entra a una Compra Ágil real en `mercadopublico.cl` o `buscador.mercadopublico.cl` (logueado con tu cuenta de proveedor).
2. Debería aparecer un botón flotante azul **"📋 Cargar datos BidCoop"** abajo a la derecha.
3. Clic en él — se abre un panel con organismo, monto, precio de referencia (regla 94%, con su advertencia de que no es un cálculo de margen real), e ítems.
4. Usa los botones **"Copiar"** para pegar cada valor donde corresponda en el formulario oficial.
5. Revisa y envía la cotización tú mismo, directamente en el portal — la extensión nunca lo hace por ti.

## Qué falta (Fase 3)

Rellenar automáticamente los campos del formulario (en vez de copiar/pegar manual) requiere ver el HTML real del formulario de postulación (nombres/ids de los campos), no solo capturas de pantalla — para no arriesgar escribir en el campo equivocado de un formulario de gobierno real. Cuando se tenga esa información, se agrega esa lógica sin tocar nada de lo que ya funciona acá.
