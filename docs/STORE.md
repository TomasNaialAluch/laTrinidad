# Página del Local — Frigorífico "La Trinidad"

Página interna a la que se llega tocando **"Ver más"** desde la sección de fotos del local del [home](HOME.md#5-fotos-del-local). Mientras el home solo muestra una muestra chica de fotos, acá está el contenido completo: **todas las fotos del local** junto con la **descripción de quiénes somos**.

Objetivo de la página: que alguien que quiere conocer más a fondo el lugar (antes de ir a comprar o de sumarse como cliente mayorista) pueda ver el local de verdad funcionando y entender la historia/forma de trabajo del frigorífico.

Estilo visual: misma paleta celeste `#87D3F8` / blanco `#FFFFFF` / marrón oscuro `#3A1A15` (ver [README.md](../README.md#paleta-de-colores)).

---

## Estructura de la página (de arriba hacia abajo)

### 1. Header

- Mismo header del sitio (logo + link para volver al home).

### 2. Quiénes somos

- Texto completo (más extendido que el resumen del home) contando la historia de Frigorífico "La Trinidad": desde cuándo están, cómo trabajan, qué los distingue (calidad, precio, atención a mayoristas), que hacen venta en el local **y envíos**. **A completar por ustedes con la info real** — puede ser el mismo texto del home ampliado, o un texto nuevo más detallado.
- Acompañado del isologo (`src/assets/logos/logoisobandera.png` o `logofondoblacno.png`).

### 3. Galería completa de fotos del local

- Todas las fotos de [src/assets/store/](../src/assets/store/) (`1.jpeg` a `18.jpeg`), en grilla o carrusel navegable.
- A diferencia del home (que muestra solo una muestra), acá se ve el local completo: mostrador, cámaras, trabajo diario, etc.
- Se puede agregar un lightbox (click en una foto para verla más grande) si se quiere mejorar la experiencia.

### 4. FAB (botón flotante) — Hacer pedido

- Igual que en el resto del sitio: botón flotante fijo abajo a la derecha. Lleva a la [página de pedido](ORDER.md).

### 5. Footer

- Mismo footer del sitio (contacto, dirección, horarios, redes, mapa).

---

## Pendiente de completar

- [ ] Texto extendido de "Quiénes somos" (historia, años en el mercado, forma de trabajo).
- [ ] Confirmar si se arma un lightbox para la galería o alcanza con la grilla simple.
