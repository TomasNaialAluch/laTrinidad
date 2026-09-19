# Página de Clientes — Frigorífico "La Trinidad"

Página interna a la que se llega tocando **"Ver más"** desde la sección de clientes del [home](HOME.md#4-a-quién-le-vendemos--dónde-atendemos). Mientras el home solo muestra 3-4 clientes destacados como muestra, acá se ve el **listado completo**.

Objetivo de la página: mostrar la variedad y el volumen de negocios que ya confían en Frigorífico "La Trinidad" (prueba social / B2B), y al mismo tiempo **invitar a nuevos clientes potenciales a sumarse**.

Estilo visual: misma paleta celeste `#87D3F8` / blanco `#FFFFFF` / marrón oscuro `#3A1A15` (ver [README.md](../README.md#paleta-de-colores)).

---

## Estructura de la página (de arriba hacia abajo)

### 1. Header

- Mismo header que el resto del sitio (logo + botón "Hacer pedido"), con un link para volver al home.

### 2. Título / intro

- Título corto, ej. "Nuestros clientes" o "Confían en nosotros".
- Bajada breve explicando que trabajan con distintos rubros: supermercados, carnicerías, restaurantes, geriátricos, salones de eventos, cocinas de catering, etc.

### 3. Listado de clientes por categoría

Acá va el contenido central de la página, generado a partir de los JSON en `src/data/clients/` (uno por rubro: `restaurants.json`, `butchers.json`, y los que se vayan sumando).

- Agrupado por **categoría/rubro** (una sección por cada archivo JSON, o por el campo `category` de cada cliente).
- Cada cliente se muestra como una tarjeta con:
  - Foto/logo (`image` del JSON).
  - Nombre y barrio/dirección.
  - Breve descripción (2-3 líneas, campo `description` del JSON).
- A medida que se sumen clientes nuevos (nuevas entradas en los JSON, o nuevos JSON para rubros nuevos como geriátricos o salones de eventos), aparecen automáticamente acá.

### 4. Cartel "Sumate a la familia" (llamado a nuevos clientes)

Sección pensada para quien todavía **no es cliente** y llegó explorando la página (dueño de restaurante, carnicería, geriátrico, etc.).

- Cartel destacado con un mensaje tipo: **"Sumate a la familia La Trinidad"**.
- Texto corto invitando a contactarse para cotizar/proveer: algo como *"Si tenés un supermercado, carnicería, restaurante, geriátrico, salón de eventos o cocina de catering, contactanos y sumate a la familia de clientes de Frigorífico 'La Trinidad'."*
- Botón de contacto (WhatsApp), mismo destino que el FAB.

### 5. FAB (botón flotante) — Hacer pedido

- Igual que en el home: botón flotante fijo abajo a la derecha. Lleva a la [página de pedido](ORDER.md), donde se ve el catálogo por categoría y desde ahí se deriva a WhatsApp.

### 6. Footer

- Mismo footer que el resto del sitio (info de contacto, dirección, horarios, redes, mapa).

---

## Pendiente de completar

- [ ] Texto final del cartel "Sumate a la familia".
- [ ] Sumar más categorías de clientes a `src/data/clients/` (geriátricos, salones de eventos, cocinas de catering, supermercados) a medida que haya info real.
- [ ] Definir si el listado se agrupa por categoría o se muestra todo junto con un filtro.
