# Portafolio — Andrés Sampayo

Sitio de una sola página construido con HTML + CSS + JavaScript puro (sin frameworks), listo para publicar en GitHub Pages.

## Estructura

```
portafolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── foto-perfil.jpg   ← agrega aquí tu foto (ver abajo)
```

## Añadir tu foto

1. Guarda tu foto (idealmente cuadrada, mínimo 300×300px) como `assets/foto-perfil.jpg`.
2. Listo — se recorta automáticamente en círculo. Si no agregas la foto, se muestra un marcador con instrucciones en su lugar, así que el sitio nunca se ve roto.

## Editar tus proyectos

En `index.html`, busca `<section id="proyectos">`. Cada proyecto es una tarjeta `<article class="project-card">`. Para cada uno:

- Cambia el título, la descripción y el enlace `href="#"` por el link real de tu repositorio.
- Ya dejé tarjetas para **ConectaUs**, **Proyecto Scrum** y **SpeakUp** con texto de ejemplo — reemplázalo por la descripción real.
- Para añadir un proyecto nuevo, copia una tarjeta completa y pégala antes de la tarjeta "+ Nuevo proyecto".

## Personalizar colores

Todos los colores están centralizados como variables CSS al inicio de `css/style.css`, en `:root` (modo oscuro) y `[data-theme="light"]` (modo claro). Cambia `--accent` y `--accent-2` para probar otra paleta sin tocar el resto del código.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `portafolio`.
2. Sube estos archivos a la raíz del repositorio:
   ```bash
   git init
   git add .
   git commit -m "Primer commit del portafolio"
   git branch -M main
   git remote add origin https://github.com/Andres2006-dev/portafolio.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**.
4. En "Build and deployment", selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
5. Guarda. En un par de minutos tu sitio estará disponible en:
   `https://andres2006-dev.github.io/portafolio/`

## Notas

- El sitio recuerda el tema (oscuro/claro) que elijas usando `localStorage`.
- No incluí tu fecha de nacimiento, número de documento ni dirección de residencia en el sitio público por seguridad — esos datos quedan bien en tu hoja de vida, pero no conviene exponerlos en una web pública.
- Es completamente responsiva: el menú lateral se convierte en un menú desplegable en pantallas pequeñas.
