// English copy. es.ts and nl.ts must have the same shape (the Copy type enforces it).
export const en = {
  meta: {
    title: 'Jasper van Puffelen López · AI engineer',
    description:
      'Jasper van Puffelen López is an AI engineer at NOBRAINERS. He takes AI to production with a method: spec first, human review always.',
  },
  role: 'AI engineer',
  tagline: 'Taking AI to production, with a method.',
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
  },
  nav: { projects: 'Projects', method: 'How I work', about: 'About', writing: 'Writing', contact: 'Contact', resources: 'Resources', reading: 'Reading' },
  writeMe: 'Email me',

  hero: {
    titleLine1: 'I take AI to production',
    titleLine2: 'with a method.',
    lead: "I'm Jasper, AI engineer at NOBRAINERS. I start with the user, write the spec before the prompt and review what the AI delivers. I have a background in marketing and work in Dutch, Spanish and English.",
    thesis: 'AI writes the code. A spec up front and human review make it reliable.',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Email me',
    seal: 'AI ENGINEER · WITH A METHOD · JASPERVPL.COM ·',
    cardLeft: { label: 'Order', title: 'User first.', text: 'Then the platform, and the model last.' },
    cardRight: { label: 'Background', title: 'Background in marketing.', text: 'That is why I start with the user.' },
    ring: {
      user: { title: 'User', sub: 'comes first' },
      spec: { title: 'Spec', sub: 'before the prompt' },
      review: { title: 'Review', sub: 'human, always' },
      verify: { title: 'Verify', sub: 'compiling is not enough' },
      nfc: { title: 'NFC-huis', sub: 'for my grandparents' },
      opo: { title: 'OpoGenius', sub: 'on the App Store' },
      silbo: { title: 'Silbo', sub: 'local AI' },
      skills: { title: 'Skills', sub: 'open source' },
    },
    noteLeft: ['I live in the Netherlands.', 'I work in three languages.'],
    noteRight: ['Compiling isn’t validating.', 'So I verify.'],
  },

  work: {
    eyebrow: 'Projects',
    title: 'What I have ',
    titleEm: 'built.',
    readMore: 'See the project',
    all: 'All projects',
  },

  method: {
    eyebrow: 'Method',
    title: 'How I ',
    titleEm: 'work.',
    steps: [
      { title: 'User', text: "Who I'm solving what for. Then I choose the platform, and the model last." },
      { title: 'Spec', text: "What it must do, what it must never do and how I'll know it works. I write it before the first prompt." },
      { title: 'Review', text: 'AI writes much of the code. I decide what to ask for and review what comes back.' },
      { title: 'Verification', text: "Compiling isn't validating. In NFC-huis, 37 tests cover the app's logic." },
    ],
  },

  stack: {
    eyebrow: 'Stack',
    title: 'What I work ',
    titleEm: 'with.',
    groups: { languages: 'Languages', build: 'What I build with', local: 'Local AI', setup: 'My setup' },
    setup: 'MacBook Pro with M5 Pro and 24 GB of memory. I bought it in early 2026 to work with local models. I built Silbo on it, which uses a 7.7 GB model running on my own Mac.',
  },

  about: {
    eyebrow: 'About',
    title: 'Who ',
    titleEm: 'I am.',
    text: "I'm from the Canary Islands and live in the Netherlands. I spent four years in marketing and SEO, which is why I start with the user. Today I'm an AI engineer at NOBRAINERS. Here I share how I work and what goes wrong along the way.",
  },

  writing: {
    eyebrow: 'Writing',
    title: 'Latest ',
    titleEm: 'articles.',
    all: 'All articles',
    readMore: 'Read article',
    dateLocale: 'en-GB',
  },

  contact: {
    label: 'Contact',
    title: "If you're taking AI to production, ",
    titleEm: "I'd like to hear how you do it.",
    text: 'Email me or find me on LinkedIn.',
  },

  footer: {
    site: 'Site',
    elsewhere: 'Elsewhere',
    email: 'Email',
    colophon: 'JasperVPL brand v2 · Set in Fraunces and IBM Plex · Built with Astro',
  },
};

export type Copy = typeof en;
