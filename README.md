# jaspervpl.com — Astro + GitHub Pages

Migración de WordPress (Ionos) a sitio estático con Astro, manteniendo las URLs exactas del sitio original (verificadas contra los sitemaps de WordPress).

## Qué incluye

- **30 artículos** (21 ES + 9 NL) en `src/content/blog/`, limpios de shortcodes Divi, con sus imágenes.
- **23 páginas** (servicios, contacto, legales… en ambos idiomas) en `src/content/pages/`.
- **URLs idénticas a WordPress**: `/blog/{categoria}/{slug}/`, `/nl/blog/{categorie}/{slug}/`, páginas en raíz y bajo `/nl/`, archivos de categoría en `/blog/category/{cat}/`. Verificadas las 65 URLs del sitemap.
- **SEO técnico**: canonical, hreflang ES↔NL automático (vía `translationKey`), Open Graph, JSON-LD Article, sitemap XML, RSS (ES y NL), robots.txt, llms.txt.
- **Despliegue automático**: GitHub Actions publica en GitHub Pages con cada push a `main`.

## Cómo publicar (una sola vez)

1. Crea un repositorio en GitHub (p. ej. `jaspervpl-web`).
2. En la Terminal, dentro de esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Migración inicial desde WordPress"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/jaspervpl-web.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Espera a que termine el workflow (pestaña Actions). El sitio quedará en `https://TU_USUARIO.github.io/jaspervpl-web/` temporalmente.
5. En **Settings → Pages → Custom domain** escribe `www.jaspervpl.com` (el fichero `public/CNAME` ya lo declara).
6. En el panel DNS de Ionos (sin tocar la renovación del dominio):
   - `CNAME` de `www` → `TU_USUARIO.github.io`
   - Registros `A` del dominio raíz (`jaspervpl.com`) → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
7. Cuando GitHub valide el dominio, activa **Enforce HTTPS**.

## Trabajo en local

```bash
npm install      # solo la primera vez
npm run dev      # servidor local en http://localhost:4321
npm run build    # compilación de producción en dist/
```

## Cómo escribir un artículo nuevo

1. Crea una carpeta en `src/content/blog/es/mi-nuevo-articulo/` con un `index.md`:
   ```yaml
   ---
   title: "Título del artículo"
   date: 2026-06-15
   lang: es
   slug: "mi-nuevo-articulo"
   categories: ["noticias"]
   translationKey: "mi-nuevo-articulo"
   permalink: "/blog/noticias/mi-nuevo-articulo/"
   cover: "./images/portada.png"
   description: "Meta descripción para buscadores y para IA."
   draft: false
   ---

   Contenido en Markdown…
   ```
2. Las imágenes van en una subcarpeta `images/`.
3. Para la traducción NL: misma estructura en `src/content/blog/nl/`, mismo `translationKey`, permalink bajo `/nl/blog/...`. El hreflang se genera solo.
4. `git add . && git commit -m "Nuevo artículo" && git push` — y se publica solo.

## Pendiente / notas

- El campo `description` (meta descripción) está vacío en los artículos migrados: WordPress no lo exporta en el XML. Conviene añadirlo artículo a artículo (importante para AIO/GEO).
- La página `/opogenius/` no se migró automáticamente (HTML custom de la landing). Portarla a mano cuando toque.
- Las páginas de servicios y las homes llevan un diseño provisional: son el objetivo del rediseño.
- `public/llms.txt` es una versión básica: ampliar con el esquema AIO propio.
- No canceles el hosting de Ionos hasta verificar en Search Console que el sitio nuevo indexa bien (2–4 semanas) y hasta confirmar qué pasa con el correo asociado al hosting.
