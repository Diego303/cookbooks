# 📚 Cookbooks Documentation

> **Una experiencia de documentación clara, eficiente y diseñada para desarrolladores.**

Este repositorio contiene el código fuente para **Cookbooks**, un sitio de documentación construido con **Astro**. Nuestro objetivo es ofrecer una lectura fluida, un mantenimiento sencillo y una arquitectura escalable.

---

## ✨ Características Principales

*   **⚡ Rendimiento Extremo:** Construido sobre Astro 5 para una velocidad inigualable.
*   **📖 Lectura Optimizada:** Tipografía y espaciado cuidadosamente seleccionados para largas sesiones de lectura.
*   **📱 Diseño Responsivo:** Perfectamente adaptable a escritorio, tablet y móvil.
*   **🧭 Navegación:** Acceso rápido a todas las secciones sin recargas.
*   **🎨 UI/UX Pragmático:** Diseño limpio enfocado en el contenido técnico.

## 🛠️ Tecnologías

Este proyecto utiliza las siguientes herramientas:

*   [Astro](https://astro.build) - Framework web para contenido.
*   **TypeScript** - Para un código robusto y mantenible.
*   **CSS Moderno** - Estilizado eficiente y modular.

## 🚀 Comenzando

Sigue estos pasos para ejecutar el proyecto localmente:

### 1. Prerrequisitos

Asegúrate de tener instalado Node.js y pnpm.

### 2. Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Diego303/cookbooks.git
cd cookbooks
pnpm install
```

### 3. Desarrollo

Inicia el servidor de desarrollo local:

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`.

### 4. Construcción (Build)

Para generar la versión de producción:

```bash
pnpm build
```

## 📂 Estructura del Proyecto

```text
/
├── public/       # Archivos estáticos
├── src/
│   ├── components/ # Componentes reutilizables (Botones, Cartas, Secciones)
│   ├── layouts/    # Plantillas de diseño (Header, Footer, Meta)
│   └── pages/      # Rutas y páginas del sitio (index.astro)
└── package.json  # Dependencias y scripts
```