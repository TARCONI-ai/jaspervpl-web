// Resources: tools people can download and reuse. The skills live in github.com/TARCONI-ai/skills.
import type { Lang } from './i18n';

export const resourcesPath: Record<Lang, string> = {
  en: '/resources/',
  es: '/es/recursos/',
  nl: '/nl/resources/',
};

export const repo = 'https://github.com/TARCONI-ai/skills';

type Section = { title: string; text?: string; items?: { label: string; text: string }[] };

type Resource = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  answer: string;
  forWhom: string;
  sections: Section[];
  download: { zip: string; source: string };
  published: string;
  modified: string;
};

type ResourcesCopy = {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  labels: {
    download: string;
    github: string;
    license: string;
    open: string;
    published: string;
    updated: string;
    author: string;
    dateLocale: string;
  };
  items: Resource[];
};

const skill = {
  slug: 'ai-overviews-writer',
  download: { zip: '/downloads/ai-overviews-writer.zip', source: `${repo}/tree/main/ai-overviews-writer` },
  published: '2026-10-31',
  modified: '2026-10-31',
};

export const resources: Record<Lang, ResourcesCopy> = {
  es: {
    meta: {
      title: 'Recursos · Jasper van Puffelen López',
      description: 'Herramientas de IA que uso en mi trabajo y que puedes descargar y adaptar. Gratuitas y de código abierto.',
    },
    title: 'Recursos',
    intro: 'Herramientas que uso en mi trabajo y que puedes descargar y adaptar. Todas son gratuitas y de código abierto.',
    labels: {
      download: 'Descargar .zip',
      github: 'Ver en GitHub',
      license: 'Licencia MIT: úsala y adáptala como quieras.',
      open: 'Ver recurso',
      published: 'Publicado',
      updated: 'Actualizado',
      author: 'Escrito por',
      dateLocale: 'es-ES',
    },
    items: [
      {
        ...skill,
        name: 'ai-overviews-writer',
        title: 'Redactor para AI Overviews: una skill para escribir artículos que la IA pueda citar',
        summary:
          'Una skill gratuita que te guía para escribir artículos que la gente se crea y que Google AI Overviews, ChatGPT, Perplexity o Claude puedan entender y citar.',
        answer:
          'ai-overviews-writer es una skill gratuita para Claude y otros agentes compatibles con el estándar Agent Skills. Te guía en cinco pasos para escribir un artículo que los buscadores con IA puedan entender y citar. No redacta nada hasta que le das al menos un caso propio.',
        forWhom:
          'Es para ti si escribes artículos o páginas para tu web y quieres aparecer en las respuestas de la IA sin publicar contenido genérico.',
        sections: [
          {
            title: '¿Qué hace?',
            items: [
              { label: 'Briefing', text: 'te pregunta la pregunta principal, quién te lee, qué aportas tú y con qué pruebas.' },
              { label: 'Estructura', text: 'título en forma de pregunta, respuesta directa y secciones que responden en la primera frase.' },
              { label: 'Redacción', text: 'frases concretas y sin los patrones que delatan un texto escrito por una IA.' },
              { label: 'Página', text: 'meta description, fechas, autor y datos estructurados.' },
              { label: 'Chequeo', text: 'una lista que revisas tú antes de publicar.' },
            ],
          },
          {
            title: '¿Por qué la he construido?',
            text: 'En 2025 construí un GPT personalizado que escribía artículos con una estructura fija para AI Overviews. La estructura funcionaba para las máquinas, pero sin experiencia propia ni revisión humana los artículos salían genéricos. Esta skill mantiene la estructura y añade lo que faltaba: un briefing que te pide tu caso y una revisión que haces tú antes de publicar. Además, OpenAI retira los GPT personalizados el 11 de diciembre de 2026, y una skill sigue un estándar abierto que funciona en muchos agentes.',
          },
          {
            title: '¿Cómo la instalo?',
            items: [
              { label: 'Claude Code', text: 'copia la carpeta de la skill en ~/.claude/skills/ (para todos tus proyectos) o en .claude/skills/ dentro de un proyecto.' },
              { label: 'Apps de Claude', text: 'descarga el .zip y súbelo en la sección de Skills de los ajustes.' },
              { label: 'Otros agentes', text: 'cualquier agente compatible con Agent Skills puede cargar la carpeta. Mira en su documentación dónde van las skills.' },
            ],
          },
          {
            title: '¿Qué no hace?',
            text: 'No se inventa tu experiencia ni publica por ti. Si no tienes nada propio que contar, te lo dirá. Es mejor no publicar que añadir otro artículo genérico.',
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Resources · Jasper van Puffelen López',
      description: 'AI tools I use in my work that you can download and adapt. Free and open source.',
    },
    title: 'Resources',
    intro: 'Tools I use in my work that you can download and adapt. All of them are free and open source.',
    labels: {
      download: 'Download .zip',
      github: 'View on GitHub',
      license: 'MIT licence: use it and adapt it as you like.',
      open: 'View resource',
      published: 'Published',
      updated: 'Updated',
      author: 'Written by',
      dateLocale: 'en-GB',
    },
    items: [
      {
        ...skill,
        name: 'ai-overviews-writer',
        title: 'AI Overviews writer: a skill for articles that AI search can cite',
        summary:
          'A free skill that guides you to write articles people trust and that Google AI Overviews, ChatGPT, Perplexity or Claude can understand and cite.',
        answer:
          'ai-overviews-writer is a free skill for Claude and other agents that support the Agent Skills standard. It guides you through five steps to write an article that AI search can understand and cite. It won\'t draft anything until you give it at least one first-hand case.',
        forWhom:
          'It\'s for you if you write articles or pages for your website and want to show up in AI answers without publishing generic content.',
        sections: [
          {
            title: 'What does it do?',
            items: [
              { label: 'Briefing', text: 'asks for the main question, who reads you, what you bring yourself and what evidence you have.' },
              { label: 'Structure', text: 'a title phrased as a question, a direct answer and sections that answer in their first sentence.' },
              { label: 'Writing', text: 'concrete sentences, without the patterns that give away AI-written text.' },
              { label: 'Page', text: 'meta description, dates, author and structured data.' },
              { label: 'Check', text: 'a list you review yourself before publishing.' },
            ],
          },
          {
            title: 'Why did I build it?',
            text: 'In 2025 I built a custom GPT that wrote articles with a fixed structure for AI Overviews. The structure worked for machines, but without first-hand experience and human review the articles came out generic. This skill keeps the structure and adds what was missing: a briefing that asks for your own case, and a review you do before publishing. Also, OpenAI is retiring custom GPTs on 11 December 2026, while a skill follows an open standard that works in many agents.',
          },
          {
            title: 'How do I install it?',
            items: [
              { label: 'Claude Code', text: 'copy the skill folder to ~/.claude/skills/ (for all your projects) or to .claude/skills/ inside a project.' },
              { label: 'Claude apps', text: 'download the .zip and upload it in the Skills section of the settings.' },
              { label: 'Other agents', text: 'any agent that supports Agent Skills can load the folder. Check its documentation for where skills go.' },
            ],
          },
          {
            title: 'What doesn\'t it do?',
            text: 'It won\'t make up your experience or publish for you. If you have nothing of your own to tell, it will say so. Better not to publish than to add another generic article.',
          },
        ],
      },
    ],
  },

  nl: {
    meta: {
      title: 'Resources · Jasper van Puffelen López',
      description: 'AI-tools die ik in mijn werk gebruik en die je kunt downloaden en aanpassen. Gratis en open source.',
    },
    title: 'Resources',
    intro: 'Tools die ik in mijn werk gebruik en die je kunt downloaden en aanpassen. Allemaal gratis en open source.',
    labels: {
      download: 'Download .zip',
      github: 'Bekijk op GitHub',
      license: 'MIT-licentie: gebruik en pas hem aan zoals je wilt.',
      open: 'Bekijk resource',
      published: 'Gepubliceerd',
      updated: 'Bijgewerkt',
      author: 'Geschreven door',
      dateLocale: 'nl-NL',
    },
    items: [
      {
        ...skill,
        name: 'ai-overviews-writer',
        title: 'AI Overviews-schrijver: een skill voor artikelen die AI-zoekmachines kunnen citeren',
        summary:
          'Een gratis skill die je helpt artikelen te schrijven die mensen geloven en die Google AI Overviews, ChatGPT, Perplexity of Claude kunnen begrijpen en citeren.',
        answer:
          'ai-overviews-writer is een gratis skill voor Claude en andere agents die de Agent Skills-standaard ondersteunen. Hij begeleidt je in vijf stappen naar een artikel dat AI-zoekmachines kunnen begrijpen en citeren. Hij schrijft niets zolang je hem geen eigen praktijkvoorbeeld geeft.',
        forWhom:
          'Hij is voor jou als je artikelen of pagina\'s voor je website schrijft en in AI-antwoorden wilt verschijnen zonder generieke content te publiceren.',
        sections: [
          {
            title: 'Wat doet hij?',
            items: [
              { label: 'Briefing', text: 'vraagt naar de hoofdvraag, wie je leest, wat jij zelf inbrengt en met welk bewijs.' },
              { label: 'Structuur', text: 'een titel als vraag, een direct antwoord en secties die in de eerste zin antwoorden.' },
              { label: 'Schrijven', text: 'concrete zinnen, zonder de patronen die verraden dat een AI de tekst schreef.' },
              { label: 'Pagina', text: 'metabeschrijving, datums, auteur en gestructureerde data.' },
              { label: 'Controle', text: 'een lijst die je zelf nakijkt voordat je publiceert.' },
            ],
          },
          {
            title: 'Waarom heb ik hem gebouwd?',
            text: 'In 2025 bouwde ik een custom GPT die artikelen schreef met een vaste structuur voor AI Overviews. De structuur werkte voor machines, maar zonder eigen ervaring en menselijke review werden de artikelen generiek. Deze skill houdt de structuur en voegt toe wat ontbrak: een briefing die om jouw eigen voorbeeld vraagt en een review die jij doet voordat je publiceert. Bovendien stopt OpenAI op 11 december 2026 met custom GPT\'s, terwijl een skill een open standaard volgt die in veel agents werkt.',
          },
          {
            title: 'Hoe installeer ik hem?',
            items: [
              { label: 'Claude Code', text: 'kopieer de map van de skill naar ~/.claude/skills/ (voor al je projecten) of naar .claude/skills/ in een project.' },
              { label: 'Claude-apps', text: 'download de .zip en upload hem in het onderdeel Skills van de instellingen.' },
              { label: 'Andere agents', text: 'elke agent die Agent Skills ondersteunt, kan de map laden. Kijk in de documentatie waar skills horen.' },
            ],
          },
          {
            title: 'Wat doet hij niet?',
            text: 'Hij verzint je ervaring niet en publiceert niet voor je. Heb je niets eigens te vertellen, dan zegt hij dat. Beter niet publiceren dan nog een generiek artikel toevoegen.',
          },
        ],
      },
    ],
  },
};
