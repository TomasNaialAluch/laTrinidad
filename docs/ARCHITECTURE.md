# Estructura del proyecto (Astro)

Guía de las carpetas del proyecto y para qué sirve cada una. Objetivo: que el código quede **prolijo, escalable y fácil de mantener**. Todos los nombres de carpetas y archivos van en inglés.

Regla general: **cada cosa tiene un solo lugar**. Si hay que cambiar un texto, un precio, un cliente o un color, se sabe de antemano dónde está.

---

## Vista general

```
laTrinidad/
├── docs/                      Documentación de las páginas (planificación)
│   ├── HOME.md
│   ├── CLIENTS.md
│   ├── STORE.md
│   ├── ORDER.md
│   └── ARCHITECTURE.md        (este archivo)
│
├── public/                    Archivos que se publican tal cual (sin procesar)
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── assets/                Imágenes que Astro optimiza (peso, formato, tamaños)
│   │   ├── logos/
│   │   ├── products/
│   │   ├── store/
│   │   └── clients/
│   │       ├── butchers/
│   │       └── restaurants/
│   │
│   ├── data/                  Contenido en JSON (lo que se edita sin tocar código)
│   │   ├── clients/
│   │   │   ├── butchers.json
│   │   │   └── restaurants.json
│   │   ├── products.json
│   │   └── site.json          Dirección, teléfono, horarios, redes, WhatsApp
│   │
│   ├── components/            Piezas reutilizables de interfaz
│   │   ├── layout/            Header, Footer
│   │   ├── ui/                Botones, tarjetas, chips (piezas genéricas)
│   │   └── sections/          Secciones grandes de las páginas
│   │       ├── home/          Hero carousel, About, FeaturedClients, StorePreview
│   │       ├── clients/       ClientsList, JoinBanner
│   │       ├── store/         AboutFull, Gallery
│   │       └── order/         ProductCatalog, ContactButton
│   │
│   ├── layouts/               Plantilla base de todas las páginas
│   │   └── BaseLayout.astro   <head>, Header, Footer, FAB, estilos globales
│   │
│   ├── pages/                 Cada archivo = una URL del sitio
│   │   ├── index.astro        /          (home)
│   │   ├── clients.astro      /clients
│   │   ├── store.astro        /store
│   │   └── order.astro        /order
│   │
│   ├── styles/                Estilos globales
│   │   ├── tokens.css         Colores, tipografías, espacios (la paleta de marca)
│   │   └── global.css         Reset y estilos base
│   │
│   ├── scripts/               JavaScript del lado del cliente (carrusel, etc.)
│   └── utils/                 Funciones auxiliares (armar link de WhatsApp, etc.)
│
├── astro.config.mjs           Configuración de Astro
├── package.json               Dependencias y comandos
├── tsconfig.json              Configuración de TypeScript (viene con Astro)
├── .gitignore
└── README.md                  Resumen del proyecto
```

---

## Qué va en cada carpeta

### `src/pages/`
Cada archivo es una página del sitio: `index.astro` es el home, `clients.astro` es `/clients`, etc. Las páginas son **cortas**: solo arman la página juntando secciones, no tienen el detalle del diseño.

### `src/layouts/`
La plantilla común. `BaseLayout.astro` incluye el `<head>` (título, SEO, favicon), el header, el footer y el botón flotante (FAB) de pedido. Así esas piezas se escriben **una sola vez** y aparecen en las 4 páginas.

### `src/components/`
Se divide en tres niveles, de más chico a más grande:
- **`ui/`**: piezas genéricas sin contenido propio (botón, tarjeta, chip de categoría). Se usan en cualquier lado.
- **`layout/`**: header y footer.
- **`sections/`**: bloques grandes de cada página, agrupados por página (`home/`, `clients/`, `store/`, `order/`). Si mañana la sección de clientes cambia, se toca un solo archivo.

### `src/data/`
Todo el **contenido** en JSON. Regla: **el contenido no se escribe dentro del código**. Para agregar un cliente o un producto se edita el JSON y aparece en el sitio.
- `clients/`: un JSON por rubro (`restaurants.json`, `butchers.json`, y los que se sumen: `supermarkets.json`, `nursing-homes.json`, `event-halls.json`, `catering.json`).
- `products.json`: nombre, categoría, imagen y si tiene precio o es "Consultar".
- `site.json`: datos del negocio que se repiten (dirección, teléfono, número de WhatsApp, horarios, redes). Se cambian en un solo lugar y se actualizan en todo el sitio.

### `src/assets/`
Las imágenes (hoy están en `assets/` en la raíz y se mueven acá). Astro las optimiza solas: las achica, las convierte a formatos livianos y las carga rápido en el celular, algo clave para quien entra desde Maps o el QR. Se mantiene la organización actual: `logos/`, `products/`, `store/`, `clients/`.

### `public/`
Solo para archivos que se publican **sin procesar**: favicon, `robots.txt`. No poner imágenes del sitio acá (esas van en `src/assets/`).

### `src/styles/`
- `tokens.css`: la paleta de marca en variables (celeste `#87D3F8`, blanco `#FFFFFF`, marrón `#3A1A15`), tipografías y espacios. **Los colores se definen solo acá** y el resto usa las variables, así cambiar un color es cambiar una línea.
- `global.css`: reset y estilos base.

### `src/scripts/` y `src/utils/`
- `scripts/`: JavaScript que corre en el navegador (por ejemplo, el carrusel del home).
- `utils/`: funciones chicas reutilizables (por ejemplo, armar el link de WhatsApp con el mensaje predefinido).

### `docs/`
Los documentos de planificación de cada página (los que ya escribimos), para que el repo raíz quede limpio.

---

## Convenciones

- **Nombres en inglés** para carpetas y archivos. Componentes en `PascalCase` (`ClientCard.astro`), el resto en `kebab-case` (`nursing-homes.json`).
- **Una responsabilidad por archivo.** Si un componente crece mucho, se divide.
- **Contenido separado del diseño.** Textos, precios y listas viven en `src/data/`, no dentro de los componentes.
- **Estilos con variables.** Nada de colores escritos a mano en los componentes: siempre las variables de `tokens.css`.
- **Imágenes con nombres simples**, en minúsculas y sin espacios (ej. `pork-shoulder.png`), para evitar problemas en las rutas.

---

## Cómo se agrega algo nuevo

| Quiero... | Qué toco |
|---|---|
| Sumar un cliente | Agregar una entrada en `src/data/clients/<rubro>.json` + su imagen en `src/assets/clients/<rubro>/` |
| Sumar un rubro de clientes nuevo | Crear un JSON nuevo en `src/data/clients/` |
| Sumar o cambiar un producto | `src/data/products.json` + imagen en `src/assets/products/` |
| Cambiar teléfono, dirección u horarios | `src/data/site.json` |
| Cambiar un color de marca | `src/styles/tokens.css` |
| Agregar una página nueva | Crear un archivo en `src/pages/` |
| Cambiar el header o el footer | `src/components/layout/` |

---

## Pasos para pasar de la estructura actual a esta

1. Mover `assets/` → `src/assets/` y `data/` → `src/data/`.
2. Mover los documentos (`HOME.md`, `CLIENTS.md`, `STORE.md`, `ORDER.md`, este archivo) a `docs/`.
3. Inicializar Astro en el proyecto y crear las carpetas vacías de `src/`.
4. Renombrar imágenes con nombres simples (sin espacios ni mayúsculas) y actualizar las rutas en los JSON.
5. Armar `BaseLayout`, header, footer y FAB, y después las páginas una por una, empezando por el home.
