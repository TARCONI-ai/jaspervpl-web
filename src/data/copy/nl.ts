import type { Copy } from './en';

export const nl: Copy = {
  meta: {
    title: 'Jasper van Puffelen López · AI-engineer',
    description:
      'Jasper van Puffelen López is AI-engineer en brengt LLM-prototypes naar productie: geëvalueerd vóór de lancering, observeerbaar in gebruik en betaalbaar op schaal.',
  },
  role: 'AI-engineer',
  tagline: 'AI naar productie brengen, met methode.',
  a11y: {
    skip: 'Naar de inhoud',
    home: 'JasperVPL, home',
    primaryNav: 'Hoofdmenu',
    footerNav: 'Footer',
    language: 'Taal',
    toDark: 'Overschakelen naar donker thema',
    toLight: 'Overschakelen naar licht thema',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    deliverable: 'Oplevering: ',
  },
  nav: { work: 'Werk', method: 'Methode', lab: 'Lab', writing: 'Artikelen', contact: 'Contact', reading: 'Leeslijst' },
  bookCall: 'Plan een gesprek',

  hero: {
    titleLine1: 'AI naar productie brengen',
    titleLine2: 'met methode.',
    lead: 'Ik ben Jasper, AI-engineer. Ik maak van LLM-prototypes productiesystemen die vóór de lancering geëvalueerd zijn, in gebruik observeerbaar blijven en betaalbaar zijn op schaal.',
    ctaPrimary: 'Vertel over je project',
    ctaSecondary: 'Bekijk mijn werk',
    seal: 'AI-ENGINEER · MET METHODE · JASPERVPL.COM ·',
    cardLeft: {
      label: 'Aanpak',
      title: 'Van prototype naar productie.',
      text: 'Evals, guardrails en monitoring vanaf de eerste commit.',
    },
    cardRight: {
      label: 'Deployment',
      title: 'Draait waar jij draait.',
      text: 'Jouw cloud, jouw modellen, jouw data. Geen lock-in.',
    },
    ring: {
      evals: { title: 'Evals', sub: 'eerst meten' },
      retrieval: { title: 'Retrieval', sub: 'onderbouwde antwoorden' },
      guardrails: { title: 'Guardrails', sub: 'beleid als code' },
      observability: { title: 'Observability', sub: 'elke call traceren' },
      trend: 'kwaliteit, v1 → v7',
      bars: 'latency, p95-lijn',
      metric: 'p95-responstijd',
    },
    noteLeft: ['Eén engineer, van begin tot eind.', 'Van eerste eval tot runbook.'],
    noteRight: ['Minder hype.', 'Meer methode.'],
  },

  stack: { title: 'Tools waarmee ik bouw' },

  work: {
    eyebrow: 'Geselecteerd werk',
    title: 'Casestudy’s, ',
    titleEm: 'gemeten.',
    intro:
      'Elk project eindigt met cijfers die iemand kan controleren: evalscores, latency, kosten en het deel van het werk dat nog door mensen wordt gedaan.',
    sample: 'Voorbeeld',
    sampleTitle: 'Illustratief voorbeeld. Vervangen door een echt project vóór de lancering.',
    readMore: 'Lees de casestudy',
    projects: {
      'support-copilot': {
        title: 'Supportcopilot, van demo naar dagelijks gebruik',
        summary:
          'Een retrieval-augmented assistent voor een supportteam, opnieuw opgebouwd rond een evaluatieset van 400 cases voordat er ook maar één prompt werd bijgesteld.',
        tags: ['RAG', 'Evals', 'Observability'],
        metrics: ['groundedness-score', 'mediane afhandeltijd'],
        linkLabel: '',
      },
      'aio-article-gpt': {
        title: 'AIO-artikelgenerator GPT',
        summary:
          'Een custom GPT die artikelen schrijft die zijn gestructureerd voor zichtbaarheid in AI-antwoordmachines, stap voor stap gedocumenteerd op de blog.',
        tags: ['Custom GPT', 'Promptontwerp', 'AIO'],
        metrics: [],
        linkLabel: 'Lees het verslag (ES)',
      },
      'invoice-extraction': {
        title: 'Factuurextractie met een mens in de loop',
        summary:
          'Schema-gevalideerde extractie voor leveranciersfacturen, met routering op zekerheid zodat alleen twijfelachtige velden bij een beoordelaar terechtkomen.',
        tags: ['Gestructureerde output', 'Menselijke review'],
        metrics: ['nauwkeurigheid per veld', 'naar review'],
        linkLabel: '',
      },
    },
  },

  method: {
    eyebrow: 'De methode',
    title: 'Vier stappen. ',
    titleEm: 'Geen shortcuts.',
    intro:
      'De meeste AI-projecten lopen vast tussen demo en productie. Het probleem is zelden het model, maar ontbrekende metingen. Daarom komt meten eerst.',
    steps: [
      {
        title: 'Afbakenen',
        text: 'Bepaal welke taak het systeem moet uitvoeren, hoe een goed resultaat eruitziet en wat het nooit mag doen.',
        output: 'Succesmaatstaf en risicoregister',
      },
      {
        title: 'Meten',
        text: 'Bouw eerst de evaluatieset: echte cases, automatisch gescoord, met een baseline om te verslaan.',
        output: 'Evalsuite en baseline',
      },
      {
        title: 'Bouwen',
        text: 'Lever het kleinste systeem dat door de gates komt. Prompts, retrieval en tools worden geversioneerd als code.',
        output: 'Geversioneerde pipeline die slaagt',
      },
      {
        title: 'Beheren',
        text: 'Traceer elke call, waarschuw bij drift en houd de kosten per antwoord binnen budget.',
        output: 'Dashboards, alerts en runbook',
      },
    ],
  },

  lab: {
    eyebrow: 'In de praktijk',
    titleBefore: 'Evaluatie ',
    titleEm: 'vóór',
    titleAfter: ' ambitie.',
    intro:
      'Elk systeem dat ik bouw begint met een testset die het moet halen. Prompts worden geversioneerd, output wordt bij elke wijziging gescoord en een gefaalde gate blokkeert de deploy. Geen releases op gevoel.',
    points: [
      'Evalsets op basis van jouw echte cases, niet van publieke benchmarks',
      'Guardrails als code, gereviewd zoals elke andere wijziging',
      'Tracing en een kostenbudget vanaf dag één',
    ],
    tabsLabel: 'Voorbeelden',
    copy: 'Kopiëren',
    copied: 'Gekopieerd',
    selectToCopy: 'Selecteer om te kopiëren',
  },

  writing: {
    eyebrow: 'Artikelen',
    title: 'Notities uit de ',
    titleEm: 'praktijk.',
    intro: 'Heldere uitleg over de tools en protocollen die toegepaste AI veranderen. Gepubliceerd in het Spaans.',
    all: 'Alle artikelen',
    readMore: 'Lees in het Spaans',
    dateLocale: 'nl-NL',
    topics: { agents: 'Agents', protocols: 'Protocollen', gpts: 'Custom GPTs' },
  },

  contact: {
    label: 'Volgende stap',
    title: 'Heb je een prototype dat ',
    titleEm: 'volwassen moet worden?',
    text: 'Vertel me waar het nu staat: de use case, de data en wat de lancering tegenhoudt. Je krijgt een eerlijke eerste inschatting van wat er nodig is om live te gaan.',
    cta: 'Vertel over je project',
  },

  footer: {
    site: 'Site',
    elsewhere: 'Elders',
    email: 'E-mail',
    colophon: 'JasperVPL brand v2 · Gezet in Fraunces & IBM Plex · Gebouwd met Astro',
  },
};
