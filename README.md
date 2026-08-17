# Josué Martínez Moreno - Portafolio Personal

Este es el repositorio de mi portafolio personal, reconstruido y optimizado como una aplicación web estática para garantizar la máxima velocidad, seguridad y un despliegue eficiente en **Cloudflare Pages**.

## Stack Tecnológico 🚀

El proyecto utiliza un stack moderno y enfocado en el rendimiento:
- **[Astro](https://astro.build/) (v7)** - Framework principal para la generación de sitios estáticos (SSG).
- **[React](https://react.dev/) (v19)** - Utilizado mediante *Astro Islands* para los componentes interactivos.
- **[Tailwind CSS](https://tailwindcss.com/) (v4)** - Motor de estilos integrado mediante Vite para un diseño 100% responsivo y temas dinámicos.
- **TypeScript** - Tipado estricto para mayor seguridad en el código.

## Características Principales 🌟

- **Carga Ultra Rápida**: Generación completamente estática, sin *cold-starts*.
- **Soporte Bilingüe (i18n)**: Rutas dinámicas e interconectadas en Español (`/`) e Inglés (`/en/`).
- **SEO Avanzado**: Meta tags (Open Graph, Twitter Cards), `robots.txt` dinámico y marcado de datos estructurados (JSON-LD).
- **Dark Mode**: Soporte nativo para modo oscuro/claro con prevención de parpadeo (Anti-flicker).
- **Responsive Design**: Completamente adaptable a cualquier tamaño de pantalla.

## Instalación y Desarrollo Local 💻

Asegúrate de contar con **Node.js LTS (>=24.19.0)** y **pnpm** instalados.

1. Instala las dependencias:
   ```bash
   pnpm install
   ```
2. Ejecuta el servidor de desarrollo local:
   ```bash
   pnpm dev
   ```
3. Para compilar la versión de producción:
   ```bash
   pnpm build
   ```
El proyecto generado se ubicará en la carpeta `/dist`, listo para ser desplegado.
