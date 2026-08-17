# Reglas e Instrucciones para Agentes AI (AGENTS.md)

Este archivo contiene el contexto y reglas necesarias para cualquier asistente o agente de IA que trabaje en este proyecto.

## Desarrollo Local

Al iniciar el servidor de desarrollo, utiliza el modo en segundo plano para no bloquear la terminal:
```bash
npx pnpm dev
```
(Nota: `pnpm` se utiliza localmente a través de `npx pnpm`).

## Stack Actual del Proyecto
- **Astro**: v7.2+
- **React**: v19.2+
- **Tailwind CSS**: v4.3+ (vía `@tailwindcss/vite`)
- **TypeScript**: v7.0+
- **Node**: `>=24.19.0` (LTS)

**Reglas Críticas:**
1. **NO uses versiones desactualizadas**. Si necesitas instalar algo, verifica que sea compatible con Astro 7 y React 19.
2. **Astro Islands**: Los componentes interactivos de React deben usar la directiva `client:load`, `client:idle`, `client:visible`, etc., según sea apropiado en los archivos `.astro`.
3. **Tailwind v4**: No existe archivo `tailwind.config.js`. Las configuraciones, colores y temas se manejan utilizando directivas CSS `@theme` en `src/styles/global.css`.
4. **Despliegue**: El sitio está diseñado como estático (`output: 'static'`) para **Cloudflare Pages**. No introduzcas adaptadores de servidor (SSR) a menos que se te indique explícitamente.

## Documentación de Referencia

- [Astro Documentation](https://docs.astro.build/)
- [React 19 RC/Docs](https://react.dev/reference/react)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
