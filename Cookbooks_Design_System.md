# Cookbooks Design System (v2.1 - Master Guide)

**Propósito:** Guía exhaustiva de implementación para la SPA "Cookbooks".

**Filosofía Visual:** "Engineering Notebook". Oscuridad profunda, precisión técnica, caos controlado (bocetos) y acentos de alta visibilidad (neón).

---

## 1. Design Tokens (Variables Globales)

Definiciones atómicas para configurar tu `tailwind.config.js` o variables CSS `:root`.

### 1.1. Paleta de Colores Extendida

#### Base (The Void)

| Token Variable | Hex | Descripción |
|----------------|-----|-------------|
| `--bg-void` | `#0f0f11` | Lienzo Infinito. Usar en `<body>`. No es negro puro, tiene un tinte cálido imperceptible. |
| `--bg-surface` | `#18181b` | Papel Oscuro. Para tarjetas, modales y secciones laterales. |
| `--bg-surface-hover` | `#27272a` | Estado hover de superficies interactivas. |
| `--bg-overlay` | `rgba(15, 15, 17, 0.8)` | Backdrop con blur para modales y menús flotantes. |

#### Syntax & Code (Tema "Dracula/Monokai" modificado)

| Token | Hex | Uso en Bloques de Código |
|-------|-----|--------------------------|
| `--code-bg` | `#0a0a0a` | Fondo del editor. |
| `--code-keyword` | `#c678dd` | `import`, `return`, `function` (Violeta). |
| `--code-func` | `#61afef` | Nombres de funciones (Azul). |
| `--code-string` | `#98c379` | Strings (Verde suave). |
| `--code-comment` | `#71717a` | Comentarios (Gris Zinc). Importante: Fuente Patrick Hand. |

#### Neon Accents (Estados)

| Token | Hex | Estado UI | Significado Semántico |
|-------|-----|-----------|----------------------|
| `--accent-yellow` | `#fde047` | Focus / Active | Atención primaria, "Subrayador", Advertencias. |
| `--accent-pink` | `#f472b6` | Hover | Elementos interactivos secundarios, UI decorativa. |
| `--accent-cyan` | `#22d3ee` | Link | Enlaces, Arquitectura, Flujo de datos. |
| `--accent-green` | `#86efac` | Success | Validaciones, Terminal success, "Copiado al portapapeles". |
| `--accent-red` | `#fb7185` | Error | Errores de compilación, alertas críticas. |

### 1.2. Sombras y Profundidad (Hard Shadows)

En este diseño no usamos sombras difusas (blur). Usamos sombras duras para dar sensación de "pegatina" o recorte de papel.

- **Shadow-SM:** `2px 2px 0px 0px #27272a` (Botones pequeños, tags).
- **Shadow-MD:** `4px 4px 0px 0px #27272a` (Tarjetas, botones primarios).
- **Shadow-LG:** `8px 8px 0px 0px #000000` (Modales, ventanas flotantes).
- **Shadow-Neon:** `0px 0px 10px 0px rgba(34, 211, 238, 0.3)` (Solo para elementos "encendidos" o activos en diagramas).

### 1.3. Radios de Borde (Border Radius)

- **radius-sm:** `2px` (Botones técnicos, inputs).
- **radius-md:** `4px` (Tarjetas estándar).
- **radius-sketch:** `2px 255px 3px 25px / 255px 5px 225px 5px` (Efecto mano alzada).

---

## 2. Tipografía Detallada

### Configuración Base

- **Base Size:** 16px.
- **Line Height (Body):** 1.6 (Para lectura cómoda en documentación).

### Escala de Tipos (Type Scale)

| Elemento | Fuente | Tamaño (px/rem) | Peso | Tracking | Notas |
|----------|--------|-----------------|------|----------|-------|
| H1 (Hero) | JetBrains Mono | 48px - 60px | 700 | -0.02em | Estilo técnico impactante. |
| H1 (Doc) | Inter | 36px | 700 | -0.01em | Título de página de documentación. |
| H2 | Inter | 24px | 600 | -0.01em | Secciones principales. Borde inferior opcional. |
| H3 | Inter | 20px | 600 | Normal | Sub-secciones. |
| Body | Inter | 16px | 300/400 | Normal | Color #f4f4f5. |
| Mono Text | JetBrains Mono | 14px | 400 | Normal | Rutas, variables inline. |
| Handwritten | Patrick Hand | 18px-20px | 400 | 0.02em | Notas al margen, tooltips. |
| Label/Tag | JetBrains Mono | 12px | 500 | 0.05em | Uppercase. |

---

## 3. Componentes UI (Specs)

### 3.1. Botones (Buttons)

#### Primary "Terminal" Button

- **Fondo:** `#ffffff` (Texto negro) o `#000000` (Borde blanco).
- **Borde:** `2px solid` (Color contrario al fondo).
- **Fuente:** JetBrains Mono, Bold.
- **Hover:** Desplazamiento de `transform translate(-2px, -2px)` + box-shadow duro.
- **Active:** `translate(0, 0)` + Sombra desaparece (efecto pulsación mecánica).

#### Secondary "Sketch" Button

- **Fondo:** Transparente.
- **Borde:** Clase `.sketch-border`.
- **Hover:** Borde cambia a `accent-yellow` o `accent-pink`. Leve rotación.

### 3.2. Inputs & Search (Ctrl+K)

Elementos críticos para documentación.

- **Fondo:** `#0a0a0a`.
- **Borde:** `1px solid #27272a`.
- **Focus:** Borde cambia a `accent-yellow`. Sin outline nativo.
- **Placeholder:** Fuente Patrick Hand color `#52525b`.
- **Icono:** Lupa a la izquierda, badge "Ctrl+K" a la derecha (estilo tecla física).

### 3.3. Callouts / Admonitions (Notas de Aviso)

No usar los típicos cuadros de colores planos. Usar el concepto de "Cinta Adhesiva" (Tape).

**Estructura HTML Sugerida:**

```html
<div class="relative bg-[#1f1f23] border-l-4 border-yellow-500 p-4 mt-6">
  <!-- Tape Effect (CSS puro o SVG) -->
  <div class="absolute -top-3 left-1/2 w-24 h-6 bg-yellow-500/20 rotate-1 transform skew-x-12"></div>
  
  <div class="flex gap-3">
    <IconAlert />
    <p>Contenido...</p>
  </div>
</div>
```

**Colores por tipo:**

- **Warning:** Amarillo.
- **Info:** Azul Cian.
- **Tip:** Verde.
- **Danger:** Rojo/Rosa.

### 3.4. Tablas (Data Grids)

Estilo minimalista, sin bordes verticales.

- **Header:** Fondo `#18181b`, Texto `text-muted uppercase text-xs`, Fuente Mono. Borde inferior `#27272a`.
- **Filas:** `border-b border-dashed #27272a`.
- **Hover Fila:** Fondo `#18181b` (sutil highlight).
- **Celdas:** Padding `py-3 px-4`. Texto Inter tamaño `sm`.

### 3.5. Code Tabs (Switchers)

Para cambiar entre npm / yarn / pnpm o JS / TS.

- **Contenedor:** Flex row encima del bloque de código.
- **Tab Inactiva:** Texto gris, hover blanco.
- **Tab Activa:** Texto `accent-yellow`, subrayado inferior de 2px color `accent-yellow` (estilo dibujado a mano si es posible).

---

## 4. Layout & Estructura de Documentación

### 4.1. Sidebar de Navegación (Izquierda)

- **Ancho:** Fijo 260px en Desktop. Hidden en Mobile.
- **Posición:** `sticky top-[header-height]`.

**Estilo de Links:**

- **Normal:** `text-muted`, hover `text-white`.
- **Activo:** `text-accent-cyan`, borde izquierdo `2px solid accent-cyan`, fondo con degradado muy sutil `linear-gradient(to right, rgba(34,211,238,0.1), transparent)`.

### 4.2. Table of Contents (Derecha)

- **Ancho:** 240px. Hidden en pantallas menores a xl.
- **Estilo:** Línea vertical gris fina a la izquierda.
- **Marcador:** Pequeño punto o línea de color `accent-pink` que se mueve según el scroll (Intersection Observer).

### 4.3. El Grid de Ingeniería (Background)

Esencial para la atmósfera.

**CSS para aplicar en el body o contenedor principal:**

```css
.bg-grid-pattern {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, #27272a 1px, transparent 1px),
    linear-gradient(to bottom, #27272a 1px, transparent 1px);
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
  opacity: 0.15; /* Muy sutil, apenas perceptible */
}
```

---

## 5. Efectos Especiales "Cookbooks"

### 5.1. El Efecto "Resaltador" (Highlighter)

Para destacar texto inline sin usar negrita estándar.

```css
.highlight-text {
  background: linear-gradient(120deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.2) 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%; /* Solo la parte inferior del texto */
  background-position: 0 88%; /* Posicionado abajo */
}
```
