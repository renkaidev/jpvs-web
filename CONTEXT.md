# Contexto del Proyecto JPVS para Agentes de IA

Este documento sirve como referencia de contexto para futuras sesiones de desarrollo y asistencia automatizada.

## Estado Actual
El proyecto es una landing page de servicios integrales para "JPVS". Fue inicialmente maquetada con Stitch AI y posteriormente iterada de forma intensiva con Astro, Tailwind CSS (v4) y GSAP. El objetivo principal es ofrecer una conversión rápida mediante contacto por WhatsApp/Llamada.

## Decisiones Técnicas Claves para Agentes
Al trabajar en este proyecto, sigue estas reglas:

1. **Sistema de Tipografía y Escalas:** 
   - Fuentes: `Barlow Condensed` para encabezados (`font-headline-*`) y `Inter` para cuerpos de texto (`font-body-*`).
   - Los tamaños están predefinidos en `src/styles/global.css` mediante tokens CSS (ej. `--text-headline-lg`).
   - **Regla Estricta:** Las etiquetas `<h2>` siempre deben llevar la familia de fuente (`font-headline-lg`) **acompañada** de clases explícitas de tamaño gigante de Tailwind (`text-4xl md:text-5xl lg:text-6xl`) para garantizar un tamaño visual masivo y jerárquico. Los `<h3>` usan `text-3xl`.

2. **Interacciones CSS vs Animaciones GSAP (IMPORTANTE):**
   - **Regla Estricta:** *Nunca* apliques `transition-opacity` o utilidades como `transition-all` al mismo elemento del DOM que GSAP va a animar (especialmente `gsap.from(el, {opacity: 0})`). Las transiciones CSS sobreescriben y rompen los "snaps" o inicializaciones de GSAP.
   - Si necesitas combinar ambas, envuelve el elemento con un contenedor div `.btn-wrapper` u otro, permitiendo que GSAP anime el contenedor padre y CSS gestione el hover state de los hijos.

3. **Arquitectura de Colores y Fondos:**
   - El fondo principal del sitio es un gradiente fijo que reside en el `<body class="bg-gradient-to-br from-[#0B0F19] ...">` en `Layout.astro`.
   - Para que este fondo fluya continuamente por la página, las secciones no deben tener backgrounds sólidos. 
   - Las tarjetas y contenedores usan `bg-surface-container` (transparencias RGBA) que crean un efecto sutil de *glassmorphism*.

4. **Carrusel Interactivo:**
   - El componente de "Por qué elegirme" (`WhyChooseMe.astro`) es un carrusel programado directamente con JavaScript y GSAP. Muestra exactamente **1 tarjeta a la vez** y las tarjetas son full width (`w-full`). No incorpores librerías de terceros (como Swiper), mantén la lógica nativa existente.

5. **Rutas Dinámicas:**
   - El ecosistema incluye la landing y páginas hijas para cada servicio detallado generadas mediante `getStaticPaths` en la ruta `src/pages/servicios/[servicio].astro`.
