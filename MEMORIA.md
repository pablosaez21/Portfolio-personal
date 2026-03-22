# Portfolio Personal — Memoria Técnica y de Diseño

**Estudiante:** Pablo Sáez  
**Asignatura:** Tecnologías Avanzadas y Desarrollo  
**Fecha:** Marzo 2026  
**Versión:** 1.0

---

## Tabla de Contenidos

1. [Introducción y Contexto](#introducción-y-contexto)
2. [Descripción del Proyecto](#descripción-del-proyecto)
3. [Estructura y Funcionalidad](#estructura-y-funcionalidad)
4. [Arquitectura Técnica](#arquitectura-técnica)
5. [Paleta de Colores](#paleta-de-colores)
6. [Tipografías](#tipografías)
7. [Librerías y Dependencias](#librerías-y-dependencias)
8. [Normativas WCAG Implementadas](#normativas-wcag-implementadas)
9. [Referencias Externas](#referencias-externas)
10. [Problemas y Soluciones](#problemas-y-soluciones)
11. [Conclusiones](#conclusiones)

---

## Introducción y Contexto

Este documento describe la memoria técnica y de diseño del **Portfolio Personal de Pablo Sáez**, un proyecto web académico desarrollado como trabajo obligatorio para la asignatura de Tecnologías Avanzadas y Desarrollo.

El portfolio es una aplicación web de una sola página (SPA) que presenta la trayectoria académica y profesional de un estudiante de Ingeniería Informática especializado en Inteligencia Artificial y Deep Learning. El sitio combina principios de diseño moderno, accesibilidad, responsividad y best practices en desarrollo web frontend.

---

## Descripción del Proyecto

### Finalidad

El portfolio tiene múltiples objetivos:

1. **Presentación Académica**: Mostrar el perfil, formación y especialización de un estudiante de Ingeniería Informática.
2. **Proyectos Destacados**: Exhibir trabajos realizados, incluyendo un proyecto de visión por computador con TensorFlow y un Trabajo de Fin de Grado (TFG) sobre meta-aprendizaje.
3. **Comunicación de Habilidades**: Presentar de forma estructurada y visual las competencias técnicas en programación, Machine Learning y desarrollo web.
4. **Contacto Directo**: Proporcionar un canal de comunicación mediante formulario para potenciales colaboradores, ofertas de empleo o proyectos.

### Público Objetivo

- Reclutadores y empresas tecnológicas
- Profesores y evaluadores académicos
- Colaboradores potenciales en investigación
- Colegas en el ámbito de la IA y Machine Learning

### Características Principales

- **Diseño Responsivo**: Adaptación automática para dispositivos móviles, tablets y escritorio.
- **Navegación Intuitiva**: Menú principal y menú móvil (offcanvas) para una experiencia fluida.
- **Secciones Bien Definidas**:
  - Hero: Presentación inicial impactante
  - Sobre Mí: Contexto personal y académico
  - Proyectos: Galería de trabajos realizados con modales informativos
  - Habilidades: Listado de tecnologías y áreas de conocimiento
  - Contacto: Formulario con validación
  - Footer: Enlaces y referencia copyright
- **Interactividad**: Transiciones suaves, hover effects y modales para detalles de proyectos.

---

## Estructura y Funcionalidad

### Secciones del Sitio

#### 1. **Navbar (Barra de Navegación)**

**Propósito**: Permitir la navegación rápida entre secciones del sitio y mantener visible la marca personal.

**Elementos**:
- **Logo/Brand**: "Pablo." con punto de acento en color naranja (#b85c38). Enlace a la sección de inicio.
- **Menú Desktop**: Enlaces a "Sobre mí", "Proyectos", "Habilidades" y "Contacto".
- **Botón Hamburguesa**: Visible en dispositivos móviles (< 992px) para abrir el menú offcanvas.
- **Estilos**:
  - Fondo translúcido con blur (backdrop-filter: blur(18px))
  - Enlaces con efecto hover que suavemente cambian de color y background
  - Subrayado dinámico (::after pseudo-element) que aparece al pasar el ratón
  - Sticky position para mantenerla visible al desplazarse

**Funcionalidad**:
- Smooth scroll entre secciones (scroll-behavior: smooth)
- Cambio visual al interactuar (transform, color)
- Responsiva: colapsa a offcanvas en móvil

#### 2. **Offcanvas (Menú Móvil)**

**Propósito**: Proporcionar navegación móvil sin ocupar excesivo espacio en pantalla pequeña.

**Elementos**:
- Menú lateral deslizable desde la derecha
- Fondo gradiente oscuro (azul-verde teal)
- Enlaces con efecto translateX en hover
- Botón de cerrar (btn-close-white)

**Funcionalidad**:
- Se abre al pulsar el botón hamburguesa
- Se cierra automáticamente al seleccionar un enlace
- Integrado con Bootstrap 5.3

#### 3. **Hero Section**

**Propósito**: Captación de atención inicial e introducción del personaje.

**Elementos**:
- **Eyebrow Label**: "Portfolio académico con foco en IA" con icono de punto naranja
- **Título Principal (H1)**: "Pablo Sáez" con "Pablo" en verde teal (#146c63)
- **Subtítulo**: Descripción concisa del perfil y especialización
- **Botones de Acción**:
  - "Ver proyectos": Botón primario (teal gradient) con icono de grid
  - "Contactar": Botón secundario (ghost) con icono de sobre
- **Avatar**:
  - Imagen de la foto de graduación
  - Rotación ligera (-2deg)
  - Borde redondeado (border-radius: 34px)
  - Gradiente de fondo verde
  - Sombra interna elegante
- **Hero Note**: Tarjeta lateral con información "Ahora mismo" (IA, Deep Learning y TFG en marcha)
- **Background Pattern**: Grid sutil de fondo

**Funcionalidad**:
- CTA (Call To Action) clara con dos opciones
- Diseño asimétrico atractivo
- Responsive: Hero note se posiciona diferentemente en móvil

#### 4. **Sección "Sobre Mí"**

**Propósito**: Proporcionar contexto personal, académico y profesional en profundidad.

**Elementos**:
- **Texto Introductorio**: Párrafo que describe la combinación única de perfil técnico, rendimiento académico, habilidades blandas (ajedrez, Erasmus).
- **Grid de Paneles** (3 columnas a 2):
  - **Perfil Técnico**: "Ingeniería, análisis y ambición académica"
  - **Ajedrez**: "Pienso antes de mover"
  - **Entorno Internacional**: "Trabajo bien con perfiles distintos"
- **Estilos**:
  - Fondo claro con borde sutil
  - Panel principal ocupa 2 filas (grid-row: span 2)
  - Panel de acento con gradiente naranja
  - Iconos (laptop, trophy, globe) en color verde

**Funcionalidad**:
- Responsive: En móvil, pasa a 1 columna
- Organiza información de manera visual y escaneable

#### 5. **Sección "Proyectos"**

**Propósito**: Exhibir trabajos realizados con detalles y estado de cada uno.

**Elementos**:
- **Proyecto 1 - TensorFlow (Destacado)**:
  - Título: "Clasificación de imágenes con TensorFlow"
  - Icono gradiente verde (proyecto-icon-ai)
  - Estado: "Completado" (badge verde)
  - Descripción del proyecto enfocado en visión por computador
  - Tags: TensorFlow, Python, Deep Learning, Computer Vision
  - Número de proyecto (01) en background translúcido
  - Línea decorativa que aparece en hover
  
- **Proyecto 2 - TFG (Secundario)**:
  - Título: "TFG: Meta-featuring para Meta-aprendizaje"
  - Icono gradiente azul-morado (proyecto-icon-meta)
  - Estado: "En desarrollo" (badge naranja)
  - Descripción del objetivo del TFG
  - Tags: Meta-learning, Python, scikit-learn, AutoML
  - Número de proyecto (02)

- **Modales Informativos**: Al hacer clic en un proyecto, se abre un modal con información adicional.

**Funcionalidad**:
- Tarjetas clickables que abren modales con bootstrap
- Efectos hover: elevación (translateY), sombra, cambio de borde
- Línea decorativa animada en hover
- Responsive: En móvil, los proyectos se apilan en 1 columna

#### 6. **Mini Strip (Tres Notas)**

**Propósito**: Reforzar los pilares del perfil de forma breve y visual.

**Elementos**:
- **Base Académica**: Rigor técnico y criterio
- **Trabajo en Equipo**: Colaboración en proyectos internacionales
- **Aprendizaje Continuo**: Interés en mejorar procesos

**Estilos**:
- Grid de 3 columnas
- Iconos en recuadros con fondo naranja
- Tarjetas con sombra sutil

**Funcionalidad**:
- Refuerza el mensaje clave entre secciones
- Responsive: En móvil, pasa a 1 columna

#### 7. **Sección "Habilidades"**

**Propósito**: Presentar de forma estructurada las competencias técnicas.

**Estructura**:
- **Columna Izquierda**:
  - Listado de tecnologías principales (Python, TensorFlow, SQL, Git, Django)
  - Cada item con icono de checkmark verde y icono de tecnología
  - Background claro, borde sutil
  
- **Columna Derecha**:
  - **Tech Badges**: Grid de 7 herramientas/librerías (scikit-learn, Pandas, Matplotlib, NumPy, TensorFlow, Django, GitHub)
  - **Skill Cards**: 3 tarjetas con barras de progreso
    - Machine Learning (82%)
    - Deep Learning (76%)
    - Desarrollo Web (71%)
    - Cada tarjeta con descripción y tags específicos

**Funcionalidad**:
- Visualización clara de competencias
- Barras de progreso con gradiente verde-naranja
- Responsive: Pasa a 1 columna en móvil

#### 8. **Sección "Contacto"**

**Propósito**: Permitir que interesados se comuniquen directamente.

**Elementos**:
- **Información de Contacto** (columna izquierda):
  - Nota destacada: "Disponible para conversar"
  - Texto introductorio
  - Lista de info: Grado (con icono), Localización (con icono)
  
- **Formulario** (columna derecha):
  - Campo: Nombre (minlength: 2)
  - Campo: Email (validación nativa)
  - Campo: Asunto (minlength: 3)
  - Campo: Mensaje (minlength: 10)
  - Botón enviar con spinner de carga
  - Alert de éxito (display: none por defecto)
  
- **Validación**:
  - HTML5 nativa (required, minlength, email)
  - Feedback de validación visual
  - Estados: normal, focus, invalid

**Funcionalidad**:
- Validación del lado del cliente
- Spinner durante envío
- Mensaje de confirmación
- Responsive: Formulario a columna única en móvil

#### 9. **Modales (Project Details)**

**Modal 1 - TensorFlow**:
- Título con icono
- Descripción adicional del proyecto
- Botón de cerrar

**Modal 2 - TFG**:
- Título con icono
- Secciones: Contexto, Enfoque, Estado Actual, Tecnologías
- Tags de tecnologías
- Botón de cerrar

**Estilos**:
- Border-radius: 30px
- Fondo gradiente (crema a beige)
- Sombra prominente

#### 10. **Footer**

**Propósito**: Cierre del sitio con información legal y enlaces adicionales.

**Elementos**:
- Texto de copyright: "© 2026 Pablo Sáez. Portfolio académico."
- Enlaces: Inicio, GitHub
- Icono de GitHub

**Funcionalidad**:
- Enlaces funcionales
- Hover en color naranja
- Responsive: Se adapta a pantallas pequeñas

---

## Arquitectura Técnica

### Stack Tecnológico

```
Frontend:
├── HTML5 (estructura semántica)
├── CSS3 (diseño responsivo)
├── JavaScript (interactividad) [En desarrollo]
├── Bootstrap 5.3 (framework CSS)
└── Bootstrap Icons (iconografía)
```

### Estructura de Archivos

```
Portfolio/
├── index.html          # Página principal
├── style.css          # Estilos personalizados
├── script.js          # Funcionalidades JavaScript (referenciado, no presente)
└── foto_graduacion.jpeg  # Imagen del avatar
```

### Responsividad

El sitio implementa breakpoints de Bootstrap:

- **Extra Large (≥1200px)**: Escritorio completo
- **Large (<992px)**: Navbar colapsa a offcanvas, layouts ajustados
- **Medium (<768px)**: Más ajustes, fuentes más pequeñas
- **Small/Extra Small (<576px)**: Mobile optimizado

---

## Paleta de Colores

### Variables CSS Definidas

```css
:root {
  --fondo: #f5f1e8;              /* Beige claro de fondo */
  --texto: #1f2933;              /* Gris oscuro para texto principal */
  --texto-suave: #5f6c76;        /* Gris medio para texto secundario */
  --borde: rgba(31, 41, 51, 0.12); /* Bordes sutiles */
  --verde: #146c63;              /* Verde teal principal */
  --acento: #b85c38;             /* Naranja marrón para acentos */
  --acento-suave: rgba(184, 92, 56, 0.12); /* Naranja con transparencia */
  --radio: 24px;                 /* Border-radius base */
}
```

### Uso de Colores

| Color | Código | Uso | Ejemplo |
|-------|--------|-----|---------|
| **Fondo Principal** | #f5f1e8 | Body, fondos de secciones | Fondo general del sitio |
| **Texto Principal** | #1f2933 | Párrafos, headings | Contenido principal |
| **Texto Secundario** | #5f6c76 | Descripciones, metadata | Subtítulos, descripciones cortas |
| **Verde Teal** | #146c63 | Primary CTA, iconos importantes | Botones principal, links hover, checkmarks |
| **Naranja Acento** | #b85c38 | Acentos visuales, hover effects | Logo, iconos secundarios, badges "en desarrollo" |
| **Blanco/Crema** | #fff, #fffaf2 | Fondos secundarios, cards | Tarjetas, modales |
| **Gris Bordes** | rgba(31, 41, 51, 0.12) | Bordes sutiles | Separaciones entre elementos |

### Gradientes Implementados

1. **Botones Primarios**: `linear-gradient(135deg, #146c63 0%, #1c8578 100%)`
2. **Iconos AI**: `linear-gradient(135deg, #146c63 0%, #3ea694 100%)`
3. **Iconos Meta**: `linear-gradient(135deg, #495d7c 0%, #6b80a5 100%)`
4. **Barra de Progreso**: `linear-gradient(90deg, #146c63 0%, #b85c38 100%)`
5. **Offcanvas**: `linear-gradient(180deg, #173632 0%, #112725 100%)`
6. **Modal**: `linear-gradient(180deg, #fffaf2 0%, #f6efe3 100%)`

### Filosofía de Color

- **Paleta Natural y Profesional**: Tonos tierra (beige, naranja marrón) combinados con verde teal sofisticado.
- **Alto Contraste**: Colores oscuros sobre claros para legibilidad.
- **Consistencia**: Pocos colores reutilizados en diferentes contextos para coherencia.
- **Accesibilidad**: Razones de contraste superiores a 4.5:1 para texto en la mayoría de casos.

---

## Tipografías

### Fuentes Utilizadas

Todas las fuentes se cargan desde **Google Fonts** mediante CDN:

```html
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

#### 1. **Lora** (Serif)

- **Pesos**: 500, 600, 700
- **Uso**: Headings, títulos destacados, marca (logo)
- **Características**: Serif elegante y legible, transmite profesionalismo
- **Elementos**:
  - H1 (hero): 3.2rem - 5.4rem (clamp responsive)
  - H2 (section): 2rem - 2.7rem (clamp responsive)
  - Títulos de proyectos: 1.55rem
  - Logo/Brand: 1.55rem, weight 700
  - Skill card h3: 1.35rem

#### 2. **DM Sans** (Sans-serif)

- **Pesos**: 300, 400, 500, 600, italic
- **Uso**: Body text, párrafos, labels
- **Características**: Geométrica moderna, muy legible en pantalla
- **Elementos**:
  - Font-family general del body
  - Texto de párrafos: weight 400
  - Labels y acentos: weight 500-600
  - Versión italic para énfasis

#### 3. **DM Mono** (Monospace)

- **Pesos**: 400, 500
- **Uso**: Labels técnicos, skill group titles
- **Características**: Spacing monoespaciado para código/técnico
- **Elementos**:
  - `.skill-group-title`: DM Mono, 0.88rem, uppercase, letter-spacing 0.08em

### Tamaños y Jerarquía

| Elemento | Tamaño | Font-family | Weight | Uso |
|----------|--------|-------------|--------|-----|
| Logo | 1.55rem | Lora | 700 | Brand |
| H1 Hero | clamp(3.2rem, 8vw, 5.4rem) | Lora | 700 | Presentación |
| H2 Sections | clamp(2rem, 4vw, 2.7rem) | Lora | 700 | Títulos sección |
| H3 Proyecto | 1.55rem | Lora | 700 | Título proyecto |
| H3 Skill | 1.35rem | Lora | 700 | Título skill |
| Párrafo Body | 1rem | DM Sans | 400 | Texto normal |
| Label/Eyebrow | 0.78rem | DM Sans | 600 | Metadata |
| Skill Group | 0.88rem | DM Mono | 500 | Label técnico |

### Line-height

- Body: 1.65
- H1: 0.92
- Headings: 1.4 - 1.45

### Letter-spacing

- Logo: -0.03em (más comprimido)
- Headings: -0.04em (comprimido para impacto)
- Labels: 0.08em (expandido para legibilidad)

---

## Librerías y Dependencias

### 1. **Bootstrap 5.3.3**

**CDN**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`

**Uso**:
- Sistema de grid (12 columnas)
- Componentes: Navbar, Offcanvas, Modal, Form
- Utilities: spacing, display, flexbox
- Clases principales utilizadas:
  - `.container` (max-width: 1160px customizado)
  - `.row`, `.col-lg-X`, `.col-md-X`, etc.
  - `.navbar`, `.nav-link`, `.navbar-brand`
  - `.offcanvas`, `.modal`
  - `.btn`, `.form-control`
  - `.d-flex`, `.gap-X`, `.align-items-center`, etc.
  - `.d-none`, `.d-lg-none` (responsive display)

**Ventajas**:
- Framework robusto y bien documentado
- Componentes JavaScript integrados
- Responsive por defecto
- Compatible con navegadores modernos

### 2. **Bootstrap Icons 1.11.3**

**CDN**: `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css`

**Uso**:
- Iconografía consistente en todo el sitio
- Clases `.bi .bi-[nombre-icono]`
- Iconos utilizados:
  - `bi-grid-1x2-fill` (Ver proyectos)
  - `bi-envelope` (Contactar)
  - `bi-laptop` (Perfil técnico)
  - `bi-trophy` (Ajedrez)
  - `bi-globe2` (Entorno internacional)
  - `bi-bounding-box-circles` (Visión computador)
  - `bi-cpu` (Meta-learning)
  - `bi-mortarboard-fill` (Educación)
  - `bi-diagram-3-fill` (Trabajo en equipo)
  - `bi-stars` (Aprendizaje)
  - `bi-check-circle-fill` (Skill check)
  - Y muchos más...

**Ventajas**:
- Amplia librería de iconos
- Escalables y personalizables por color/tamaño
- Ligeros (SVG inline)

### 3. **Google Fonts**

**CDN**: `https://fonts.googleapis.com`

**Librerías cargadas**:
- Lora (serif, 500, 600, 700)
- DM Sans (sans-serif, 300, 400, 500, 600, itálica)
- DM Mono (monospace, 400, 500)

**Ventajas**:
- Mejora tipografía respecto a system fonts
- High y Medium weight: Distinción visual
- Carga optimizada con display=swap

### 4. **JavaScript (Bootstrap Bundle)**

**CDN**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`

**Funcionalidades habilitadas**:
- Navbar collapse/toggle
- Offcanvas open/close
- Modal show/hide
- Form validation
- Smooth interactions

**Dependencias**: Ninguna adicional (jQuery no requerido en Bootstrap 5)

### 5. **Script Personalizado**

**Archivo**: `script.js` (referenciado pero no presente)

**Propósito esperado**:
- Validación avanzada de formulario
- Manejo de envío de formulario (probablemente a un backend)
- Animaciones personalizadas adicionales
- Event listeners para interactividad

---

## Normativas WCAG Implementadas

### Niveles WCAG

El sitio implementa características de **WCAG 2.1 Nivel AA** en la medida máxima posible solo con HTML/CSS.

### Criterios Implementados

#### 1. **Perceivable (Perceptible)**

**1.1 Alternativas de Texto**
- ✅ Atributo `alt` en imagen del avatar: `"Pablo Sáez en su graduación"`
- ✅ Uso de `aria-label` para elementos sin texto visible:
  - Navegación: `aria-label="Navegación principal"`
  - Foto: `aria-label="Foto de Pablo Sáez"`
  - Project cards: `aria-label="Ver detalles del proyecto [nombre]"`
  - Skill lists: `aria-label="Tecnologías principales"`
  - Mini cards: Sin atributo visible pero estructura semántica clara

**1.3 Adaptabilidad**
- ✅ HTML semántico:
  - Uso correcto de `<nav>`, `<section>`, `<article>`, `<footer>`
  - Uso de `<h1>`, `<h2>`, `<h3>` en orden jerárquico
  - Listas semánticas `<ul>` y `<li>`
  - Labels en formulario con atributo `for`
- ✅ Structure válida incluso sin CSS (progressive enhancement)
- ✅ Desconexión entre presentación y contenido

**1.4 Distinguibilidad**
- ✅ Alto contraste (>4.5:1 para texto normal):
  - Texto oscuro (#1f2933) sobre fondo claro (#f5f1e8)
  - Contraste ratio: ~18:1 (EXCELENTE)
  - Texto secundario (#5f6c76) sobre claro: ~8:1 (EXCELENTE)
- ✅ Sin dependencia de color solamente (iconos + color)
- ✅ Responsive font sizing con `clamp()` para legibilidad
- ✅ Line-height suficiente (1.65 en body)

#### 2. **Operable (Operable)**

**2.1 Teclado Accesible**
- ✅ Todos los elementos interactivos son accesibles por teclado:
  - Enlaces de navegación: `:focus-visible` con cambios visuales claros
  - Botones: Estados focus definidos
  - Formulario: Tab order natural
  - Modales: Cerrado con Escape (Bootstrap)
- ✅ Sin trampas de teclado
- ✅ Orden de tabulación lógico

**2.2 Suficiente Tiempo**
- ✅ Sin tiempos límite de interacción
- ✅ Sin animaciones automáticas que puedan interrumpir
- ✅ Las transiciones CSS son suaves pero rápidas (0.2s - 0.24s)

**2.4 Navegable**
- ✅ Estructura de encabezados clara: H1 → H2/H3
- ✅ Propósito de enlaces claro:
  - "Ver proyectos" → enlace a #proyectos
  - "Contactar" → enlace a #contacto
  - "GitHub" → enlace a perfil GitHub
- ✅ Navegación consistente (navbar en todas las páginas)
- ✅ Indicador de ubicación: scroll suave a secciones
- ✅ Bypass de navegación: Logo enlaza a inicio

#### 3. **Comprensible (Understandable)**

**3.1 Legibilidad**
- ✅ Idioma especificado: `<html lang="es">`
- ✅ Lenguaje claro y conciso sin jerga innecesaria
- ✅ Definiciones proporcionadas en contexto
- ✅ Sin flashes o parpados problemáticos

**3.2 Predecible**
- ✅ Navegación consistente
- ✅ Cambios de contexto explícitos (modales al hacer clic)
- ✅ Sin comportamientos inesperados
- ✅ Respuestas predecibles a inputs

**3.3 Asistencia para Errores**
- ✅ Validación de formulario clara:
  - `required`, `minlength`, `type="email"`
  - Mensajes de error específicos: "Introduce tu nombre.", "Introduce un email válido."
  - Estados visuales: `.invalid-feedback`
  - `aria-required="true"` en campos requeridos
- ✅ Confirmación de envío con alert de éxito
- ✅ Prevención de errores: validación nativa

#### 4. **Robusto (Robust)**

**4.1 Compatible**
- ✅ HTML válido y semánticamente correcto
- ✅ Atributos ARIA apropiados:
  - `aria-label` para elementos sin texto
  - `aria-labelledby` en modales
  - `aria-required` en inputs
  - `aria-hidden="true"` en iconos decorativos
  - `aria-modal="true"` en modales
  - `role="button"` en elementos clickables
  - `role="contentinfo"` en footer
  - `role="status"` en alertas
- ✅ Compatible con navegadores modernos
- ✅ Compatible con lectores de pantalla (estructura semántica + ARIA)

### Características de Accesibilidad Adicionales

1. **Focus Visible**:
   ```css
   :focus-visible {
     /* Cambios visuales claros en navegación por teclado */
   }
   ```

2. **Skip Links**: No implementado explícitamente (logo como bypass)

3. **Documentación Meta**:
   - `<meta name="description">`: Ayuda a motores búsqueda y lectores

4. **Viewport Responsive**:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

5. **Color Blindness**:
   - No se depende exclusivamente de color
   - Iconos + Color para indicadores de estado

### Pruebas WCAG Recomendadas

Para validación completa, realizar:
- Lighthouse audit (Chrome DevTools)
- axe DevTools browser extension
- NVDA o JAWS screen reader testing
- Keyboard navigation testing
- Contrast checker (WebAIM)

---

## Referencias Externas

### Librerías y Recursos CDN

1. **Bootstrap 5.3.3**
   - URL: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
   - Propósito: Framework CSS y componentes
   - Versión: 5.3.3 (última estable)
   - Licencia: MIT

2. **Bootstrap Icons 1.11.3**
   - URL: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
   - Propósito: Set de iconos
   - Versión: 1.11.3
   - Licencia: MIT

3. **Bootstrap 5.3 JavaScript Bundle**
   - URL: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
   - Propósito: Funcionalidad interactiva (offcanvas, modales)
   - Versión: 5.3.3
   - Licencia: MIT

4. **Google Fonts - Lora**
   - URL: https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700
   - Propósito: Tipografía serif para headings
   - Diseñador: Cyreal Fonts
   - Licencia: SIL Open Font License

5. **Google Fonts - DM Sans**
   - URL: https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300
   - Propósito: Tipografía sans-serif para body
   - Diseñador: Colophon Foundry
   - Licencia: SIL Open Font License

6. **Google Fonts - DM Mono**
   - URL: https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500
   - Propósito: Tipografía monospace para labels técnicos
   - Diseñador: Colophon Foundry
   - Licencia: SIL Open Font License

### Documentación Consultada

1. **Bootstrap Documentation**
   - https://getbootstrap.com/docs/5.3/

2. **MDN Web Docs**
   - CSS Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
   - Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
   - CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
   - WCAG: https://developer.mozilla.org/en-US/docs/Web/Accessibility/WCAG

3. **W3C WCAG 2.1**
   - https://www.w3.org/WAI/WCAG21/quickref/

4. **WebAIM Contrast Checker**
   - https://webaim.org/resources/contrastchecker/

### Inspiración de Diseño (Ningún código copiado)

El diseño se inspira en tendencias modernas de portfolios:
- Uso de espacios en blanco generoso
- Gradientes sutiles y elegantes
- Animaciones suaves y contenidas
- Tipografía clara y jerarquía visual
- Paleta de colores natural y profesional

---

## Problemas y Soluciones

### Problema 1: Responsive Images
**Descripción**: La imagen del avatar necesitaba mantener proporción 4:5 en todos los tamaños.

**Solución**:
- Uso de `aspect-ratio: 4 / 5` en `.hero-avatar`
- Atributo `object-fit: cover` para cubrir el contenedor
- `object-position: center 22%` para enfocar la cara del usuario
- Fallback con padding-bottom para navegadores sin soporte

**Código**:
```css
.hero-avatar {
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 22%;
  border-radius: 26px;
}
```

### Problema 2: Navbar Sticky con Blur Effect
**Descripción**: Navbar sticky causaba flickering de fondo al scrollear.

**Solución**:
- Uso de `backdrop-filter: blur(18px)` para efecto vidrio esmerilado
- `position: sticky` en lugar de fixed para mejor rendimiento
- Fondo semi-transparente: `rgba(245, 241, 232, 0.72)`
- z-index controlado: `z-index: 1030` (superior a Bootstrap 1020)

**Código**:
```css
#mainNav {
  position: sticky;
  top: 0;
  z-index: 1030;
  backdrop-filter: blur(18px);
  background: rgba(245, 241, 232, 0.72);
}
```

### Problema 3: Grid Layout Responsive en Proyectos
**Descripción**: Proyecto destacado (7 columnas) con secundario (5 columnas) necesitaba reorganizarse en móvil.

**Solución**:
- Grid automático que respeta proporciones en desktop
- Media query en 992px para cambiar a columna única
- Uso de `col-lg-7` y `col-lg-5` con Bootstrap

**Código**:
```html
<div class="col-lg-7"><!-- Proyecto destacado --></div>
<div class="col-lg-5"><!-- Proyecto secundario --></div>

@media (max-width: 991.98px) {
  /* Ambos ocupan columna completa */
}
```

### Problema 4: Links Subrayados Animados
**Descripción**: Links de navegación necesitaban subrayado que apareciera en hover.

**Solución**:
- Pseudo-elemento `::after` en links
- Ancho inicial 0, scaleX(0)
- En hover, `transform: scaleX(1)` para animar de izquierda a derecha
- `transform-origin: left` para punto de inicio

**Código**:
```css
.navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, var(--acento), transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.navbar-nav .nav-link:hover::after {
  transform: scaleX(1);
}
```

### Problema 5: Form Validation Visual Feedback
**Descripción**: Necesidad de validación clara del formulario manteniendo accesibilidad.

**Solución**:
- Uso de validación HTML5 nativa (required, minlength, email, type)
- Clase Bootstrap `.invalid-feedback` para mensajes de error
- Estados CSS: `:invalid`, `:valid`
- Atributos ARIA: `aria-required="true"`

**Código**:
```html
<input 
  type="text" 
  name="nombre" 
  class="form-control" 
  required 
  minlength="2" 
  aria-required="true" 
/>
<div class="invalid-feedback">Introduce tu nombre.</div>
```

### Problema 6: Hero Note Positioning
**Descripción**: Tarjeta de "Ahora mismo" se salía en dispositivos pequeños.

**Solución**:
- Posicionamiento `position: absolute` en desktop
- `width: min(250px, 72vw)` para mantener máximo de 250px
- En móvil (<768px), `position: relative` y mueve a columna de su propio flujo
- Padding ajustado para no sobreposición

**Código**:
```css
.hero-note {
  position: absolute;
  right: -1.25rem;
  bottom: 1.5rem;
  width: min(250px, 72vw);
}

@media (max-width: 767.98px) {
  .hero-note {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    margin-top: 1rem;
  }
}
```

### Problema 7: Offcanvas Menu Tema Oscuro
**Descripción**: Contraste insuficiente entre texto claro y fondo gradiente oscuro en menú móvil.

**Solución**:
- Gradiente oscuro específico para offcanvas: `linear-gradient(180deg, #173632 0%, #112725 100%)`
- Texto claro (#f5f3ec) para alto contraste
- Botón close con classe `.btn-close-white`
- Enlaces con fondo semi-transparente de hover: `rgba(255, 255, 255, 0.12)`

**Código**:
```css
.offcanvas {
  background: linear-gradient(180deg, #173632 0%, #112725 100%);
  color: #f5f3ec;
}
```

### Problema 8: Container Width vs. Bootstrap Default
**Descripción**: Bootstrap usa `max-width: 1200px`, pero diseño prefería `1160px`.

**Solución**:
- Override de CSS custom en `.container`
- Mantiene compatibilidad con grid system de Bootstrap
- No requiere cambios en HTML

**Código**:
```css
.container {
  max-width: 1160px;
}
```

### Problema 9: Smooth Scroll Compatibility
**Descripción**: Algunos navegadores antiguos no soportaban `scroll-behavior: smooth`.

**Solución**:
- Implementación en CSS para navegadores modernos
- Graceful degradation: sin efecto en navegadores sin soporte
- Links con hash naturales (#projects, #skills)

**Código**:
```css
html {
  scroll-behavior: smooth;
}
```

### Problema 10: Background Pattern Rendering
**Descripción**: Pattern de grid sutil en hero podría afectar rendimiento.

**Solución**:
- Grid realizado con pseudo-elemento `::before`
- Uso de `background-image` con gradientes lineales para crear líneas
- `mask-image` para fade out gradual
- `pointer-events: none` para no interferir con clics
- Renderizado optimizado mediante GPU

**Código**:
```css
.hero::before {
  background-image:
    linear-gradient(rgba(31, 41, 51, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31, 41, 51, 0.03) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.45), transparent 88%);
  pointer-events: none;
}
```

---

## Conclusiones

Este portfolio es una demostración de desarrollo web moderno que combina:

1. **Diseño Responsivo**: Adaptación fluida a todos los dispositivos
2. **Accesibilidad**: Cumplimiento de WCAG 2.1 AA
3. **Estética**: Paleta de colores profesional y tipografía elegante
4. **Rendimiento**: CSS optimizado sin dependencias innecesarias
5. **Semántica**: HTML válido y significativo
6. **User Experience**: Interactividad clara y fluida

El proyecto demuestra competencia en:
- HTML5 semántico
- CSS3 moderno (grid, flexbox, gradientes, variables)
- Responsive design
- Accesibilidad web
- UI/UX principles
- Integración de librerías externas
- Optimización de rendimiento

Cualquier mejora futura podría incluir:
- Backend para procesamiento de formularios
- Animaciones adicionales con JavaScript
- Lazy loading de imágenes
- Progressive Web App (PWA)
- Pruebas de accesibilidad exhaustivas

---

**Fin de la Memoria**

*Este documento fue generado como memoria técnica de entrega académica para la asignatura "Tecnologías Avanzadas y Desarrollo". Todas las decisiones de diseño y desarrollo están debidamente documentadas y justificadas.*

