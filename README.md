# ✨ Portfolio profesional UX/UI

Un portafolio moderno, accesible y atractivo, creado con React, TypeScript y CSS Modules. Diseñado para mostrar tus habilidades, tu experiencia y tus proyectos.

## ⚙️ Configuración del Entorno y Scripts

### Requisitos Previos

Asegúrate de contar con Node.js (versión LTS) y pnpm instalados de manera global.

Instalación de Dependencias
Para reconstruir el árbol de dependencias aislado del proyecto, ejecuta:

`pnpm install`

### Scripts Disponibles

- pnpm dev: Inicializa el servidor de desarrollo local en entorno aislado.
- pnpm build: Realiza la verificación de tipos global con el compilador de TypeScript (tsc) y compila los assets optimizados para producción a través de Vite.
- pnpm lint: Ejecuta el análisis estático de código para auditar calidad y adherencia a las reglas definidas.
- pnpm preview: Levanta un servidor local para previsualizar de forma exacta el entregable de producción (dist/).

## 🤖 Automatización y Calidad de Código

El proyecto integra un pipeline de calidad automatizado en el entorno de desarrollo para asegurar un estilo de código consistente, libre de ruido visual e imperfecciones sintácticas:

- Formateo sin puntos y coma (no-semi): Configurado a través de .prettierrc para mantener una sintaxis limpia.
- Validación en Guardado: Mediante la integración de acciones sobre el espacio de trabajo en VS Code, cada guardado (Ctrl + S) ejecuta de forma transparente:
- Formateo estético automático mediante Prettier.
- Corrección instantánea de advertencias lógicas y anti-patrones vía ESLint.
