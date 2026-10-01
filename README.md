# Portafolio — Andrés Sampayo

Sitio de una sola página construido con HTML + CSS + JavaScript puro (sin frameworks), publicado con GitHub Pages.

## Estructura

```
portafolio/
├── index.html
├── style.css
├── script.js
├── favicon.svg
└── assets/
    ├── foto-perfil.jpg
    └── cv-andres-sampayo.pdf   ← opcional (ver abajo)
```

## Añadir el CV

Guarda tu hoja de vida como `assets/cv-andres-sampayo.pdf`. El botón **Descargar CV** del inicio aparece solo cuando el archivo existe, así que no hay enlaces rotos mientras no lo subas.

> Antes de subirlo, quita del PDF datos sensibles (documento de identidad, dirección, fecha de nacimiento).

## Editar proyectos

En `index.html`, sección `<section id="proyectos">`. Cada proyecto es un `<article class="project-card">` con título, descripción, etiquetas (`project-tags`) y un enlace opcional (`project-link`).

## Personalizar colores

Los colores son variables CSS al inicio de `style.css`, en `:root` (modo oscuro) y `[data-theme="light"]` (modo claro). Cambia `--accent` y `--accent-2` para probar otra paleta.

## Vista previa al compartir

El `<head>` incluye etiquetas Open Graph y Twitter. Si cambias la URL de publicación, actualiza `og:url`, `og:image`, `twitter:image`, `canonical` y el bloque JSON-LD en `index.html`.

## Notas

- El tema (oscuro/claro) se recuerda con `localStorage`.
- Es responsivo: en pantallas pequeñas la barra lateral pasa a menú desplegable.
- Respeta `prefers-reduced-motion` e incluye enlace "Saltar al contenido".
- No se publican fecha de nacimiento, documento ni dirección de residencia.
