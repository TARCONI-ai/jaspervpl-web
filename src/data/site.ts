// Language-neutral data: links, tools, project numbers. Translated copy lives in ./copy/{en,es,nl}.ts.
import type { Copy } from './copy/en';
import type { Lang } from './i18n';

export const site = {
  name: 'Jasper van Puffelen López',
  brand: 'JasperVPL',
  domain: 'jaspervpl.com',
  url: 'https://jaspervpl.com',
  email: 'jaspervpl@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jasper-van-puffelen-lopez/',
  github: 'https://github.com/TARCONI-ai',
  contact: 'https://jaspervpl.com/contacto/',
  blog: 'https://jaspervpl.com/blog/',
};

// Section ids; labels come from copy.nav
export const nav = ['work', 'method', 'lab', 'writing'] as const;

// TODO: confirm against the tools Jasper actually uses.
export const stack = [
  'Python',
  'TypeScript',
  'Claude',
  'OpenAI',
  'LangGraph',
  'FastAPI',
  'PostgreSQL + pgvector',
  'OpenTelemetry',
  'Langfuse',
  'Docker',
  'Kubernetes',
  'Google Cloud',
  'Astro',
];

export type Project = {
  slug: keyof Copy['work']['projects'];
  sample: boolean; // true = illustrative placeholder, replace before launch
  featured?: boolean;
  metrics?: string[]; // values; labels come from copy, in the same order
  visual: 'evals' | 'prompt' | 'pipeline';
  href?: string | Record<Lang, string>;
};

export const projects: Project[] = [
  { slug: 'support-copilot', sample: true, featured: true, metrics: ['0.94', '−31%'], visual: 'evals' },
  {
    slug: 'aio-article-gpt',
    sample: false,
    visual: 'prompt',
    href: { en: '/resources/ai-overviews-writer/', es: '/es/recursos/ai-overviews-writer/', nl: '/nl/resources/ai-overviews-writer/' },
  },
  { slug: 'invoice-extraction', sample: true, metrics: ['97.8%', '12%'], visual: 'pipeline' },
];

// Real articles from jaspervpl.com/blog (Spanish).
export const articles: { title: string; topic: keyof Copy['writing']['topics']; date: string; href: string }[] = [
  {
    title: '¿Qué es ChatGPT Agent y en qué se diferencia del Operator?',
    topic: 'agents',
    date: '2025-08-04',
    href: 'https://jaspervpl.com/blog/noticias/que-es-chatgpt-agent-y-en-que-se-diferencia-del-operator/',
  },
  {
    title: '¿Qué es el Model Context Protocol (MCP)?',
    topic: 'protocols',
    date: '2025-07-07',
    href: 'https://jaspervpl.com/blog/noticias/que-es-el-model-context-protocol-mcp/',
  },
  {
    title: 'Cómo crear tu propio GPT personalizado en ChatGPT: guía paso a paso',
    topic: 'gpts',
    date: '2025-06-25',
    href: 'https://jaspervpl.com/blog/noticias/como-crear-tu-propio-gpt-personalizado-en-chatgpt-guia-paso-a-paso-para-mejorar-tu-productividad/',
  },
];
