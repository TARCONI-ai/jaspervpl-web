import type { Copy } from './en';

export const es: Copy = {
  meta: {
    title: 'Jasper van Puffelen López · AI engineer',
    description:
      'Jasper van Puffelen López es AI engineer en NOBRAINERS. Lleva la IA a producción con método: spec primero y revisión humana siempre.',
  },
  role: 'AI engineer',
  tagline: 'Llevo la IA a producción con método.',
  a11y: {
    skip: 'Saltar al contenido',
    home: 'JasperVPL, inicio',
    primaryNav: 'Principal',
    footerNav: 'Pie de página',
    language: 'Idioma',
    toDark: 'Cambiar a tema oscuro',
    toLight: 'Cambiar a tema claro',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  nav: { projects: 'Proyectos', method: 'Cómo trabajo', about: 'Sobre mí', writing: 'Artículos', contact: 'Contacto', resources: 'Recursos', reading: 'Lecturas' },
  writeMe: 'Escríbeme',

  hero: {
    titleLine1: 'Llevo la IA a producción',
    titleLine2: 'con método.',
    lead: 'Soy Jasper, AI engineer en NOBRAINERS. Empiezo por el usuario, escribo la spec antes que el prompt y reviso lo que la IA entrega. Tengo background en marketing y trabajo en neerlandés, español e inglés.',
    thesis: 'La IA escribe el código. Lo que lo hace fiable es la spec previa y la revisión humana.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Escríbeme',
    seal: 'AI ENGINEER · CON MÉTODO · JASPERVPL.COM ·',
    cardLeft: { label: 'Orden', title: 'Primero el usuario.', text: 'Luego la plataforma, después el modelo.' },
    cardRight: { label: 'Background', title: 'Background en marketing.', text: 'Por eso empiezo por el usuario.' },
    ring: {
      user: { title: 'Usuario', sub: 'va primero' },
      spec: { title: 'Spec', sub: 'antes que el prompt' },
      review: { title: 'Revisión', sub: 'humana, siempre' },
      verify: { title: 'Comprobar', sub: 'compilar no basta' },
      nfc: { title: 'NFC-huis', sub: 'para mis abuelos' },
      opo: { title: 'OpoGenius', sub: 'en el App Store' },
      silbo: { title: 'Silbo', sub: 'IA en local' },
      skills: { title: 'Skills', sub: 'código abierto' },
    },
    noteLeft: ['Vivo en los Países Bajos.', 'Trabajo en tres idiomas.'],
    noteRight: ['Compilar no es validar.', 'Por eso compruebo.'],
  },

  work: {
    eyebrow: 'Proyectos',
    title: 'Lo que he ',
    titleEm: 'construido.',
    readMore: 'Ver el proyecto',
    all: 'Todos los proyectos',
  },

  method: {
    eyebrow: 'Método',
    title: 'Cómo ',
    titleEm: 'trabajo.',
    steps: [
      { title: 'Usuario', text: 'A quién le resuelvo qué. Después elijo la plataforma y, por último, el modelo.' },
      { title: 'Spec', text: 'Qué debe hacer, qué no debe hacer nunca y cómo sabré que funciona. Se escribe antes del primer prompt.' },
      { title: 'Revisión', text: 'La IA escribe gran parte del código. Yo decido qué se le pide y reviso lo que entrega.' },
      { title: 'Comprobación', text: 'Compilar no es validar. En NFC-huis, 37 tests cubren la lógica de la app.' },
    ],
  },

  stack: {
    eyebrow: 'Stack',
    title: 'Con qué ',
    titleEm: 'trabajo.',
    groups: { languages: 'Lenguajes', build: 'Con lo que construyo', local: 'IA en local', setup: 'Mi equipo' },
    setup: 'MacBook Pro con M5 Pro y 24 GB de memoria. Lo compré a principios de 2026 pensando en poder trabajar con modelos en local. Con él desarrollé Silbo, que usa un modelo de 7,7 GB que corre en mi propio Mac.',
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Quién ',
    titleEm: 'soy.',
    text: 'Soy canario y vivo en los Países Bajos. Pasé cuatro años en marketing y SEO, y por eso empiezo por el usuario. Hoy soy AI engineer en NOBRAINERS. Aquí cuento cómo trabajo y lo que sale mal por el camino.',
  },

  writing: {
    eyebrow: 'Artículos',
    title: 'Últimos ',
    titleEm: 'artículos.',
    all: 'Todos los artículos',
    readMore: 'Leer artículo',
    dateLocale: 'es-ES',
  },

  contact: {
    label: 'Contacto',
    title: 'Si estás llevando IA a producción, ',
    titleEm: 'me interesa saber cómo lo haces.',
    text: 'Escríbeme o búscame en LinkedIn.',
  },

  footer: {
    site: 'Sitio',
    elsewhere: 'En otros sitios',
    email: 'Email',
    colophon: 'Marca JasperVPL v2 · Tipografía Fraunces e IBM Plex · Hecho con Astro',
  },
};
