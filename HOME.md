# Home — Frigorífico "La Trinidad"

Este documento describe cómo va a ser la página de inicio (landing/home) del sitio. Es una **página única**, pensada para gente que llega desde:

- El pin de **Google Maps** del local.
- Un **QR impreso** con la dirección del local (mostrador, cartel, remito, etc).

Es decir: el visitante ya sabe (más o menos) dónde está el local o lo está buscando en el momento. El objetivo del home no es "vender la marca" desde cero, sino **mostrar rápido qué vendemos, transmitir confianza (quiénes somos / a quién le vendemos) y facilitar el pedido**.

Estilo visual: paleta celeste `#87D3F8` / blanco `#FFFFFF` / marrón oscuro `#3A1A15` (ver [README.md](README.md#paleta-de-colores)), en línea con el fondo bandera argentina que ya tienen las fotos de producto y el isologo.

---

## Estructura de la página (de arriba hacia abajo)

### 1. Header

- Fijo (sticky) arriba, fondo celeste.
- Logo `assets/logos/logosinfondo.png` (fondo transparente, así se apoya bien sobre el celeste del header).
- Sin menú de navegación complejo — es una sola página, con scroll. A lo sumo, un botón directo de "Hacer pedido" (mismo destino que el FAB, ver punto 6).

### 2. Carrusel grande de productos (hero)

Lo primero fuerte que ve el visitante al entrar.

- Carrusel a todo el ancho, autoplay, que va mostrando las fotos de [assets/products/](assets/products/) una por una (o de a 2-3 en desktop).
- Cada slide: la foto del producto (ya vienen con el fondo celeste/blanco + logo, quedan prolijas solas) y el nombre del corte abajo o al costado.
- Flechas / dots para navegar manualmente.
- Sirve como "vidriera" del catálogo sin necesidad de un catálogo completo todavía.

### 3. Quiénes somos

- Texto corto (2-3 párrafos) contando qué es Frigorífico "La Trinidad": rubro (venta de cortes y chacinados de cerdo), forma de trabajo, años en el mercado, etc. **Esto lo van completando ustedes con la info real.**
- Acompañado del isologo (`assets/logos/logoisobandera.png` o `logofondoblacno.png`) al costado del texto.
- Mencionar explícitamente que **no es solo venta en el local**: también hacen **envíos** (a definir zona/alcance con info real). Esto es importante para el visitante que llega por Maps/QR y capaz no puede pasar a retirar en persona.

### 4. A quién le vendemos / dónde atendemos

Sección que da confianza mostrando la escala del negocio (venta mayorista/B2B, no solo al público).

- Arriba: unos pocos **clientes destacados** a modo de muestra (tarjetas con foto/logo del cliente, nombre y categoría — datos en `data/clients/`, ver [README.md](README.md#clientes)). No se listan todos acá, solo 3-4 para dar el pantallazo.
- Botón **"Ver más"** al final de esta sección: lleva a la página interna de clientes (ver [CLIENTS.md](CLIENTS.md)), donde sí está el listado completo con reseñas.
- Abajo: lista **genérica** de rubros a los que atienden, como chips o íconos, por ejemplo:
  - Supermercados
  - Carnicerías
  - Restaurantes
  - Geriátricos
  - Salones de eventos
  - Cocinas de catering
  - (dejar lugar para sumar más rubros a futuro)

### 5. Fotos del local

- Grilla o mini-carrusel con una **muestra** de las fotos de [assets/store/](assets/store/) (unas 4-6, no las 18).
- Objetivo: mostrar el local real, la carnicería/frigorífico funcionando — refuerza confianza en alguien que llegó por Maps/QR y quiere confirmar que es el lugar correcto.
- Botón **"Ver más"** al final de esta sección: lleva a la página interna del local (ver [STORE.md](STORE.md)), donde están las 18 fotos completas junto con la descripción de quiénes somos.

### 6. FAB (botón flotante) — Hacer pedido

- Botón circular flotante, fijo en la esquina inferior derecha, visible en todo momento mientras se scrollea.
- No abre WhatsApp directamente: lleva a la **página de pedido** (ver [ORDER.md](ORDER.md)), donde está el listado de productos por categoría y desde ahí sí se deriva a WhatsApp.
- Color celeste o marrón de marca, con buen contraste.

### 7. Footer

Toda la información de contacto y del local, para que quede accesible sin tener que scrollear para arriba:

- Logo (versión fondo blanco o transparente según el color del footer).
- Dirección completa del local.
- Teléfono / WhatsApp.
- Horarios de atención.
- Redes sociales (si tienen Instagram/Facebook).
- Mapa embebido de Google Maps (opcional, si se quiere reforzar la ubicación).
- Legales mínimos si corresponde (razón social, etc.).

---

## Pendiente de completar (info real del negocio)

- [ ] Texto de "Quiénes somos".
- [ ] Detalle de envíos (zona de cobertura, costo, mínimo de compra si aplica).
- [ ] Nombres de locales/clientes a destacar en "dónde atendemos".
- [ ] Dirección, teléfono/WhatsApp, horarios para el footer.
- [ ] Número de WhatsApp para el botón de contacto en la página de pedido.
- [ ] Redes sociales.
