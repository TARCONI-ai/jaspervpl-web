// English copy. es.ts and nl.ts must have the same shape (the Copy type enforces it).
export const en = {
  meta: {
    title: 'Jasper van Puffelen López · AI Engineer',
    description:
      'Jasper van Puffelen López is an AI engineer who takes LLM prototypes to production: evaluated before launch, observable in use, affordable at scale.',
  },
  role: 'AI Engineer',
  tagline: 'Bringing AI to production, with method.',
  a11y: {
    skip: 'Skip to content',
    home: 'JasperVPL, home',
    primaryNav: 'Primary',
    footerNav: 'Footer',
    language: 'Language',
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    deliverable: 'Deliverable: ',
  },
  nav: { work: 'Work', method: 'Method', lab: 'Lab', writing: 'Writing', contact: 'Contact', reading: 'Reading' },
  bookCall: 'Book a call',

  hero: {
    titleLine1: 'Bringing AI to production',
    titleLine2: 'with method.',
    lead: "I'm Jasper, an AI engineer. I turn LLM prototypes into production systems that are evaluated before launch, observable in use and affordable at scale.",
    ctaPrimary: 'Tell me about your project',
    ctaSecondary: 'See selected work',
    seal: 'AI ENGINEER · WITH METHOD · JASPERVPL.COM ·',
    cardLeft: {
      label: 'Approach',
      title: 'Prototype to production.',
      text: 'Evals, guardrails and monitoring from the first commit.',
    },
    cardRight: {
      label: 'Deployment',
      title: 'Runs where you run.',
      text: 'Your cloud, your models, your data. No lock-in.',
    },
    ring: {
      evals: { title: 'Evals', sub: 'measure first' },
      retrieval: { title: 'Retrieval', sub: 'grounded answers' },
      guardrails: { title: 'Guardrails', sub: 'policy as code' },
      observability: { title: 'Observability', sub: 'trace every call' },
      trend: 'quality, v1 → v7',
      bars: 'latency, p95 line',
      metric: 'p95 response',
    },
    noteLeft: ['One engineer, end to end.', 'From first eval to runbook.'],
    noteRight: ['Less hype.', 'More method.'],
  },

  stack: { title: 'Tools I ship with' },

  work: {
    eyebrow: 'Selected work',
    title: 'Case studies, ',
    titleEm: 'measured.',
    intro:
      'Every project ends with numbers someone can check: eval scores, latency, cost and the share of work still done by people.',
    sample: 'Sample',
    sampleTitle: 'Illustrative placeholder. Replace with a real project before launch.',
    readMore: 'Read the case study',
    projects: {
      'support-copilot': {
        title: 'Support copilot, from demo to daily use',
        summary:
          'A retrieval-augmented assistant for a support team, rebuilt around a 400-case evaluation suite before a single prompt was tuned.',
        tags: ['RAG', 'Evals', 'Observability'],
        metrics: ['groundedness score', 'median handle time'],
        linkLabel: '',
      },
      'aio-article-gpt': {
        title: 'AIO article generator GPT',
        summary:
          'A custom GPT that drafts articles structured for visibility in AI answer engines, documented step by step on the blog.',
        tags: ['Custom GPT', 'Prompt design', 'AIO'],
        metrics: [] as string[],
        linkLabel: 'Read the write-up (ES)',
      },
      'invoice-extraction': {
        title: 'Invoice extraction with a human in the loop',
        summary:
          'Schema-validated extraction for supplier invoices, with confidence routing so only uncertain fields reach a reviewer.',
        tags: ['Structured outputs', 'Human review'],
        metrics: ['field accuracy', 'sent to review'],
        linkLabel: '',
      },
    },
  },

  method: {
    eyebrow: 'The method',
    title: 'Four steps. ',
    titleEm: 'No shortcuts.',
    intro:
      'Most AI projects stall between demo and production. The gap is rarely the model. It is missing measurement, so measurement comes first.',
    steps: [
      {
        title: 'Frame',
        text: 'Define the job the system must do, what good looks like, and what it must never do.',
        output: 'Success metric and risk register',
      },
      {
        title: 'Measure',
        text: 'Build the evaluation set first: real cases, scored automatically, with a baseline to beat.',
        output: 'Eval suite and baseline',
      },
      {
        title: 'Build',
        text: 'Ship the smallest system that passes the gates. Prompts, retrieval and tools are versioned like code.',
        output: 'Versioned pipeline that passes',
      },
      {
        title: 'Operate',
        text: 'Trace every call, alert on drift, and keep the cost per answer inside its budget.',
        output: 'Dashboards, alerts and runbook',
      },
    ],
  },

  lab: {
    eyebrow: 'In practice',
    titleBefore: 'Evaluation ',
    titleEm: 'before',
    titleAfter: ' ambition.',
    intro:
      'Every system I build starts with a test suite it has to pass. Prompts are versioned, outputs are scored on every change, and a failed gate blocks the deploy. No releases on gut feeling.',
    points: [
      'Eval suites built from your real cases, not public benchmarks',
      'Guardrails as code, reviewed like any other change',
      'Tracing and a cost budget from day one',
    ],
    tabsLabel: 'Examples',
    copy: 'Copy',
    copied: 'Copied',
    selectToCopy: 'Select to copy',
  },

  writing: {
    eyebrow: 'Writing',
    title: 'Notes from the ',
    titleEm: 'field.',
    intro: 'Plain explanations of the tools and protocols changing applied AI. Published in Spanish.',
    all: 'All articles',
    readMore: 'Read in Spanish',
    dateLocale: 'en-GB',
    topics: { agents: 'Agents', protocols: 'Protocols', gpts: 'Custom GPTs' },
  },

  contact: {
    label: 'Next step',
    title: 'Have a prototype that ',
    titleEm: 'needs to grow up?',
    text: 'Send me where it stands today: the use case, the data and what is blocking launch. You get a straight first read on what it takes to ship.',
    cta: 'Tell me about your project',
  },

  footer: {
    site: 'Site',
    elsewhere: 'Elsewhere',
    email: 'Email',
    colophon: 'JasperVPL brand v2 · Set in Fraunces & IBM Plex · Built with Astro',
  },
};

export type Copy = typeof en;
