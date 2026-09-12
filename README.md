# Frigorífico "La Trinidad"

Sitio web para Frigorífico "La Trinidad", venta de cortes y chacinados de cerdo.

## Paleta de colores

Colores extraídos de las imágenes de producto (fondo estilo bandera argentina + logo).

| Color | Hex | Uso |
|---|---|---|
| Celeste | `#87D3F8` | Franjas superior/inferior de fondo, color principal de marca |
| Blanco | `#FFFFFF` | Franja central de fondo, base neutra |
| Marrón oscuro | `#3A1A15` | Logo ("FRIGORIFICO LA TRINIDAD" + triángulo) y texto de marca |

## Logo

Versiones del logo en [assets/logos/](assets/logos/):

- `logosinfondo.png` — fondo transparente (usar sobre cualquier color, ej. header/footer celeste)
- `logofondoblacno.png` — fondo blanco sólido
- `logoisobandera.png` — versión completa con fondo bandera argentina (celeste/blanco), la usada en las fotos de producto

## Local

Fotos del local en [assets/store/](assets/store/), numeradas `1.jpeg` a `18.jpeg`.

## Clientes

Logos/fotos de clientes en [assets/clients/](assets/clients/), organizados por rubro:

- [assets/clients/butchers/](assets/clients/butchers/) — carnicerías (ej. Rolando)
- [assets/clients/restaurants/](assets/clients/restaurants/) — restaurantes (ej. KBBQ, Madero Tango, The Night Market)

La info de cada cliente (nombre, rubro, barrio, reseña y ruta de imagen) vive en `data/clients/`:

- [data/clients/butchers.json](data/clients/butchers.json)
- [data/clients/restaurants.json](data/clients/restaurants.json)

Cada entrada tiene su reseña redactada a partir de fuentes reales (listadas en `sources` dentro de cada JSON). A medida que sumen más clientes, se agregan como nuevas entradas en el JSON correspondiente (o un nuevo JSON dentro de `data/clients/` si es un rubro nuevo).

## Productos

Imágenes de productos en [assets/products/](assets/products/):

- Bondiola de Cerdo
- Carré de Cerdo
- Chorizo Mezcla
- Chorizo Bombón
- Churrasquito de Cerdo
- Huesito
- Jamón de Cerdo
- Matambrito de Cerdo
- Morcilla Bombón
- Morcilla Rosca
- Morcilla Atada
- Ochi
- Paleta de Cerdo
- Patita / Manito de Cerdo
- Pechito de Cerdo
- Puro Cerdo
- Ribs de Cerdo
- Salchicha Fresca
- Solomillo
