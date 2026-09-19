const images = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg}', { eager: true });

export function resolveImage(path) {
  const found = images[`/${path}`];
  if (!found) throw new Error(`Image not found: ${path}`);
  return found.default;
}
