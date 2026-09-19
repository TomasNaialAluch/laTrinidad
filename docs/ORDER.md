# Página de Pedido — Frigorífico "La Trinidad"

Página a la que se llega tocando el **FAB** (botón flotante) desde cualquier parte del sitio (home, clientes, etc). Es la página de "hacer pedido".

## Idea central

Esta página **no es un carrito de compra ni un checkout**. El objetivo real no es que el cliente arme un pedido cerrado con precio final, sino **generar el contacto por WhatsApp**, con o sin pedido armado. ¿Por qué?

- No todos los clientes pagan el mismo precio: los precios varían según volumen, frecuencia, tipo de cliente (carnicería, restaurante, geriátrico, etc.) y forma de pago. No tiene sentido mostrar una lista de precios fija e igual para todos.
- Lo que sí sirve es que el cliente vea **qué productos hay y en qué categorías**, para llegar al WhatsApp ya sabiendo qué preguntar, y que desde ahí Frigorífico "La Trinidad" pueda **asesorarlo y armar un presupuesto a medida** que le convenga a ambas partes.

En resumen: la página engancha con el catálogo, pero **todos los caminos llevan al WhatsApp**.

Estilo visual: misma paleta celeste `#87D3F8` / blanco `#FFFFFF` / marrón oscuro `#3A1A15` (ver [README.md](../README.md#paleta-de-colores)).

---

## Estructura de la página (de arriba hacia abajo)

### 1. Header

- Mismo header del sitio (logo + link para volver al home).

### 2. Intro corta

- Título tipo "Hacé tu pedido" o "Consultá nuestro catálogo".
- Bajada explicando la dinámica: *"Elegí lo que te interesa y contactanos por WhatsApp. Te asesoramos y armamos un precio a medida según tu volumen y tipo de negocio."*

### 3. Catálogo de productos por categoría

- Los productos de [src/assets/products/](../src/assets/products/) agrupados por categoría (cortes frescos, chacinados/embutidos, achuras/menudencias, etc. — a definir la categorización final).
- Cada producto se muestra con su foto, nombre, y:
  - **Con precio**: si es un producto de precio más estable (ej. algo que no varía tanto por volumen), se puede mostrar un precio de referencia u "desde $X".
  - **Sin precio**: la mayoría de los productos, sobre todo los que se cotizan por volumen/cliente — en vez de precio, un botón o texto tipo **"Consultar"**.
- Esta info (nombre, categoría, si tiene precio o no) conviene manejarla como datos en `src/data/` (similar a `src/data/clients/`), por ejemplo `src/data/products.json`, para no tener que tocar el HTML cada vez que cambia un precio o se agrega un producto.

### 4. Selección simple (opcional, sin carrito real)

- Se puede permitir marcar/tildar los productos de interés (sin cantidades ni totales) para que al ir al WhatsApp el mensaje ya venga con esos productos precargados.
- Esto es un "plus" de UX, no un carrito de e-commerce. Si complica demasiado, se puede dejar para una segunda versión y arrancar solo con el catálogo + botón de contacto general.

### 5. Botón de contacto — WhatsApp

- Botón bien visible (no flotante esta vez, dentro del flujo de la página) tipo **"Contactar por WhatsApp"**.
- Abre WhatsApp con un mensaje predefinido que incluye los productos tildados (si se implementa el punto 4) o un mensaje genérico tipo *"Hola, quiero hacer una consulta/pedido"*.
- Repetir este botón al final de la página, después de todo el catálogo.

### 6. Footer

- Mismo footer del sitio (contacto, dirección, horarios, redes, mapa).

---

## Pendiente de completar

- [ ] Categorías finales de productos (cómo se van a agrupar).
- [ ] Qué productos van con precio de referencia y cuáles solo "Consultar".
- [ ] Armar `src/data/products.json` con el detalle de cada producto.
- [ ] Número de WhatsApp y texto del mensaje predefinido.
- [ ] Definir si se implementa la selección simple (punto 4) o se arranca sin ella.
