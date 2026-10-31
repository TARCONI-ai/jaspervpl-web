import type { Copy } from './en';

export const es: Copy = {
  meta: {
    title: 'Jasper van Puffelen López · Ingeniero de IA',
    description:
      'Jasper van Puffelen López es ingeniero de IA: lleva prototipos de LLM a producción, evaluados antes del lanzamiento, observables en uso y asequibles a escala.',
  },
  role: 'Ingeniero de IA',
  tagline: 'Llevando la IA a producción, con método.',
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
    deliverable: 'Entregable: ',
  },
  nav: { work: 'Proyectos', method: 'Método', lab: 'Lab', writing: 'Artículos', contact: 'Contacto', reading: 'Lecturas' },
  bookCall: 'Reservar llamada',

  hero: {
    titleLine1: 'Llevando la IA a producción',
    titleLine2: 'con método.',
    lead: 'Soy Jasper, ingeniero de IA. Convierto prototipos de LLM en sistemas de producción evaluados antes del lanzamiento, observables en uso y asequibles a escala.',
    ctaPrimary: 'Cuéntame tu proyecto',
    ctaSecondary: 'Ver proyectos',
    seal: 'INGENIERO DE IA · CON MÉTODO · JASPERVPL.COM ·',
    cardLeft: {
      label: 'Enfoque',
      title: 'Del prototipo a producción.',
      text: 'Evals, guardrails y monitorización desde el primer commit.',
    },
    cardRight: {
      label: 'Despliegue',
      title: 'Funciona donde tú trabajas.',
      text: 'Tu nube, tus modelos, tus datos. Sin dependencias.',
    },
    ring: {
      evals: { title: 'Evals', sub: 'medir primero' },
      retrieval: { title: 'Recuperación', sub: 'respuestas con fuente' },
      guardrails: { title: 'Guardrails', sub: 'políticas como código' },
      observability: { title: 'Observabilidad', sub: 'trazar cada llamada' },
      trend: 'calidad, v1 → v7',
      bars: 'latencia, línea p95',
      metric: 'respuesta p95',
    },
    noteLeft: ['Un ingeniero, de principio a fin.', 'Del primer eval al runbook.'],
    noteRight: ['Menos hype.', 'Más método.'],
  },

  stack: { title: 'Herramientas con las que trabajo' },

  work: {
    eyebrow: 'Proyectos seleccionados',
    title: 'Casos de estudio, ',
    titleEm: 'medidos.',
    intro:
      'Cada proyecto termina con números que cualquiera puede comprobar: puntuaciones de evaluación, latencia, coste y la parte del trabajo que aún hacen personas.',
    sample: 'Ejemplo',
    sampleTitle: 'Ejemplo ilustrativo. Sustituir por un proyecto real antes del lanzamiento.',
    readMore: 'Leer el caso',
    projects: {
      'support-copilot': {
        title: 'Copiloto de soporte, de la demo al uso diario',
        summary:
          'Un asistente con recuperación aumentada para un equipo de soporte, reconstruido sobre una batería de 400 casos de evaluación antes de ajustar un solo prompt.',
        tags: ['RAG', 'Evals', 'Observabilidad'],
        metrics: ['puntuación de fundamentación', 'tiempo medio de gestión'],
        linkLabel: '',
      },
      'aio-article-gpt': {
        title: 'GPT generador de artículos AIO',
        summary:
          'Un GPT personalizado que redacta artículos estructurados para aparecer en los motores de respuesta de IA, documentado paso a paso en el blog.',
        tags: ['GPT personalizado', 'Diseño de prompts', 'AIO'],
        metrics: [],
        linkLabel: 'Leer el artículo',
      },
      'invoice-extraction': {
        title: 'Extracción de facturas con revisión humana',
        summary:
          'Extracción validada por esquema para facturas de proveedores, con enrutado por confianza para que solo los campos dudosos lleguen a un revisor.',
        tags: ['Salidas estructuradas', 'Revisión humana'],
        metrics: ['precisión por campo', 'enviado a revisión'],
        linkLabel: '',
      },
    },
  },

  method: {
    eyebrow: 'El método',
    title: 'Cuatro pasos. ',
    titleEm: 'Sin atajos.',
    intro:
      'La mayoría de los proyectos de IA se estancan entre la demo y producción. El problema rara vez es el modelo: falta medición. Por eso la medición va primero.',
    steps: [
      {
        title: 'Definir',
        text: 'Definir qué tarea debe hacer el sistema, cómo es un buen resultado y qué no debe hacer nunca.',
        output: 'Métrica de éxito y registro de riesgos',
      },
      {
        title: 'Medir',
        text: 'Construir primero el conjunto de evaluación: casos reales, puntuados automáticamente, con una línea base que superar.',
        output: 'Suite de evaluación y línea base',
      },
      {
        title: 'Construir',
        text: 'Lanzar el sistema más pequeño que pase los filtros. Prompts, recuperación y herramientas se versionan como código.',
        output: 'Pipeline versionado que pasa los filtros',
      },
      {
        title: 'Operar',
        text: 'Trazar cada llamada, alertar ante desviaciones y mantener el coste por respuesta dentro del presupuesto.',
        output: 'Dashboards, alertas y runbook',
      },
    ],
  },

  lab: {
    eyebrow: 'En la práctica',
    titleBefore: 'La evaluación ',
    titleEm: 'antes',
    titleAfter: ' que la ambición.',
    intro:
      'Cada sistema que construyo empieza con una batería de tests que tiene que superar. Los prompts se versionan, las salidas se puntúan en cada cambio y un filtro fallido bloquea el despliegue. Nada se lanza por intuición.',
    points: [
      'Evaluaciones creadas con tus casos reales, no con benchmarks públicos',
      'Guardrails como código, revisados como cualquier otro cambio',
      'Trazabilidad y presupuesto de coste desde el primer día',
    ],
    tabsLabel: 'Ejemplos',
    copy: 'Copiar',
    copied: 'Copiado',
    selectToCopy: 'Selecciona para copiar',
  },

  writing: {
    eyebrow: 'Artículos',
    title: 'Notas desde el ',
    titleEm: 'terreno.',
    intro: 'Explicaciones claras de las herramientas y protocolos que están cambiando la IA aplicada.',
    all: 'Todos los artículos',
    readMore: 'Leer artículo',
    dateLocale: 'es-ES',
    topics: { agents: 'Agentes', protocols: 'Protocolos', gpts: 'GPTs personalizados' },
  },

  contact: {
    label: 'Siguiente paso',
    title: '¿Tienes un prototipo que ',
    titleEm: 'necesita madurar?',
    text: 'Cuéntame en qué punto está: el caso de uso, los datos y qué está frenando el lanzamiento. Te daré una primera valoración directa de lo que hace falta para lanzarlo.',
    cta: 'Cuéntame tu proyecto',
  },

  footer: {
    site: 'Sitio',
    elsewhere: 'En otros sitios',
    email: 'Email',
    colophon: 'Marca JasperVPL v2 · Tipografía Fraunces e IBM Plex · Hecho con Astro',
  },
};
