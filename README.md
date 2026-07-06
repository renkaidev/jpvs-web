# JPVS - Presencia Digital y Servicios Integrales

![JPVS Cover](public/assets/JPVS.jpg) <!-- Reemplazar o ajustar si es necesario -->

## 📖 Descripción del proyecto
JPVS es una *landing page* profesional diseñada para centralizar la presencia digital de un experto en servicios técnicos (gasfitería, soldadura, electricidad básica y construcción general). El sitio está pensado para convertir visitantes en clientes mediante una interfaz moderna, rápida e intuitiva, destacando la seriedad y calidad del trabajo ofrecido.

## 🎯 Objetivos
- Proveer un catálogo visual claro de los servicios ofrecidos.
- Facilitar el contacto directo (WhatsApp, Llamada, Redes Sociales).
- Establecer confianza mediante transparencia, metodología detallada y exhibición de proyectos "Antes y Después".
- Ofrecer una experiencia de usuario (UX) *premium*, súper responsiva y altamente optimizada.

## 🛠️ Stack tecnológico
- **Framework:** [Astro](https://astro.build/) (Generación estática para máximo rendimiento SEO y velocidad).
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Diseño utilitario con tema global oscuro/vidrio).
- **Animaciones:** [GSAP](https://gsap.com/) & ScrollTrigger (Transiciones suaves, carruseles dinámicos y apariciones on-scroll).
- **Lenguaje:** TypeScript / HTML / CSS.
- **Iconografía:** Google Material Symbols / Lucide Icons.
- **Despliegue:** Cloudflare Pages / GitHub Pages.

## 🧠 Decisiones de diseño
- **Tema:** *Blueprint Precision* (Dark Mode de alto contraste). Utiliza una paleta de azules marinos profundos con degradados para dar un aspecto tecnológico, limpio y altamente profesional.
- **Tipografía:** 
  - *Barlow Condensed* para títulos: Aporta un toque industrial, firme y técnico.
  - *Inter* para el cuerpo: Garantiza legibilidad excepcional en todos los tamaños de pantalla.
- **Microinteracciones:** Efectos de elevación (*hover*), *glassmorphism* (superficies translúcidas) y un carrusel enfocado en "Un valor a la vez" para maximizar la retención de lectura sin saturar visualmente.
- **Navegación:** Un menú fijo superior con *backdrop-blur* y un moderno menú tipo hamburguesa estilo cajón deslizable en dispositivos móviles.

## 🚀 Cómo ejecutar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPO>
   cd jpvs-web
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Levantar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *El sitio estará disponible en `http://localhost:4321`.*

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

## 📁 Estructura de carpetas
```text
/
├── public/                 # Archivos estáticos
│   └── assets/             # Fotografías, favicon, y recursos visuales
├── src/
│   ├── components/         # Componentes UI (Hero, Navbar, Contact, WhyChooseMe, etc.)
│   ├── layouts/            # Plantilla base y metadatos globales (Layout.astro)
│   ├── pages/              # Rutas principales y dinámicas
│   │   ├── servicios/      # Páginas dinámicas para cada especialidad
│   │   └── index.astro     # Landing page principal
│   └── styles/             # CSS global y tokens de Tailwind v4 (@theme)
├── package.json            # Dependencias y scripts
├── astro.config.mjs        # Configuración del core de Astro
└── README.md               # Este archivo de documentación
```

## 📸 Capturas de pantalla
*(Próximamente: Añade capturas del sitio web aquí)*
- Vista de Escritorio
- Vista Móvil
- Carrusel de Valores (GSAP)

## 📈 Optimizaciones (SEO, rendimiento, accesibilidad)
- **Generación Estática (SSG):** Tiempos de carga casi instantáneos sin servidores Node de por medio.
- **Imágenes Optimizadas:** Uso de formato nativo de Astro para garantizar pesos ligeros y cargas asíncronas.
- **SEO On-Page:** Etiquetas meta dinámicas preparadas, semántica HTML estricta (`<header>`, `<section>`, `<main>`), y jerarquía limpia de títulos `h1` al `h4`.
- **Accesibilidad:** Uso de `aria-labels` en menús interactivos móviles, contrastes de color validados (blanco puro sobre azul marino), y control nativo en `<details>` y carruseles.

## 📚 Lecciones aprendidas
- **Interoperabilidad GSAP - CSS:** Se resolvió el clásico conflicto de opacidad entre `gsap.from({opacity: 0})` y `transition-opacity` aislando las animaciones en contenedores `.btn-wrapper`, dejando las transiciones CSS intactas.
- **Tailwind v4 y CSS Nativo:** Se aprovechó la nueva API `@theme` para manejar fuentes, espaciados y tamaños de forma nativa en `global.css` sin necesidad de un complejo `tailwind.config.js`.
- **Modulares:** Transformación del componente de "Por qué elegirme" de un simple grid a un carrusel inteligente con GSAP con controles interactivos, hover state detection, y pausa inteligente.

## 📝 Licencia
Propiedad exclusiva para servicios técnicos JPVS. Todos los derechos reservados.
