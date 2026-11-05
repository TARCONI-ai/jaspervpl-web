import type { Copy } from './en';

export const nl: Copy = {
  meta: {
    title: 'Jasper van Puffelen López · AI-engineer',
    description:
      'Jasper van Puffelen López is AI-engineer bij NOBRAINERS. Hij brengt AI naar productie met een vaste methode: eerst de spec, altijd menselijke review.',
  },
  role: 'AI-engineer',
  tagline: 'Ik breng AI naar productie met een vaste methode.',
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
  },
  nav: { projects: 'Projecten', method: 'Hoe ik werk', about: 'Over mij', writing: 'Artikelen', contact: 'Contact', resources: 'Resources', reading: 'Leeslijst' },
  writeMe: 'Mail me',

  hero: {
    titleLine1: 'Ik breng AI naar productie',
    titleLine2: 'met een vaste methode.',
    lead: 'Ik ben Jasper, AI-engineer bij NOBRAINERS. Ik begin bij de gebruiker, schrijf de spec vóór de prompt en review wat de AI oplevert. Ik heb een achtergrond in marketing en werk in het Nederlands, Spaans en Engels.',
    thesis: 'AI schrijft de code. De spec vooraf en de menselijke review maken het betrouwbaar.',
    ctaPrimary: 'Bekijk projecten',
    ctaSecondary: 'Mail me',
    seal: 'AI-ENGINEER · VASTE METHODE · JASPERVPL.COM ·',
    cardLeft: { label: 'Volgorde', title: 'Eerst de gebruiker.', text: 'Dan het platform, en pas dan het model.' },
    cardRight: { label: 'Achtergrond', title: 'Achtergrond in marketing.', text: 'Daarom begin ik bij de gebruiker.' },
    ring: {
      user: { title: 'Gebruiker', sub: 'komt eerst' },
      spec: { title: 'Spec', sub: 'vóór de prompt' },
      review: { title: 'Review', sub: 'menselijk, altijd' },
      verify: { title: 'Controle', sub: 'compileren is niet genoeg' },
      nfc: { title: 'NFC-huis', sub: 'voor mijn grootouders' },
      opo: { title: 'OpoGenius', sub: 'in de App Store' },
      silbo: { title: 'Silbo', sub: 'lokale AI' },
      skills: { title: 'Skills', sub: 'open source' },
    },
    noteLeft: ['Ik woon in Nederland.', 'Ik werk in drie talen.'],
    noteRight: ['Compileren is nog geen valideren.', 'Daarom controleer ik.'],
  },

  work: {
    eyebrow: 'Projecten',
    title: 'Wat ik heb ',
    titleEm: 'gebouwd.',
    readMore: 'Bekijk het project',
    all: 'Alle projecten',
  },

  method: {
    eyebrow: 'Methode',
    title: 'Hoe ik ',
    titleEm: 'werk.',
    steps: [
      { title: 'Gebruiker', text: 'Voor wie los ik wat op? Daarna kies ik het platform en pas dan het model.' },
      { title: 'Spec', text: 'Wat het moet doen, wat het nooit mag doen en hoe ik weet dat het werkt. Dat schrijf ik vóór de eerste prompt.' },
      { title: 'Review', text: 'AI schrijft een groot deel van de code. Ik bepaal wat ik vraag en review wat eruit komt.' },
      { title: 'Controle', text: 'Compileren is nog geen valideren. In NFC-huis dekken 37 tests de logica van de app.' },
    ],
  },

  stack: {
    eyebrow: 'Stack',
    title: 'Waar ik mee ',
    titleEm: 'werk.',
    groups: { languages: 'Talen', build: 'Waarmee ik bouw', local: 'Lokale AI', setup: 'Mijn apparatuur' },
    setup: 'MacBook Pro met M5 Pro en 24 GB geheugen. Ik kocht hem begin 2026 om met lokale modellen te kunnen werken. Hierop ontwikkelde ik Silbo, dat een model van 7,7 GB gebruikt dat op mijn eigen Mac draait.',
  },

  about: {
    eyebrow: 'Over mij',
    title: 'Wie ',
    titleEm: 'ik ben.',
    text: 'Ik kom van de Canarische Eilanden en woon in Nederland. Ik werkte vier jaar in marketing en SEO, en daarom begin ik bij de gebruiker. Nu ben ik AI-engineer bij NOBRAINERS. Hier vertel ik hoe ik werk en wat er onderweg misgaat.',
  },

  writing: {
    eyebrow: 'Artikelen',
    title: 'Laatste ',
    titleEm: 'artikelen.',
    all: 'Alle artikelen',
    readMore: 'Lees artikel',
    dateLocale: 'nl-NL',
  },

  contact: {
    label: 'Contact',
    title: 'Breng je AI naar productie? ',
    titleEm: 'Dan hoor ik graag hoe je dat aanpakt.',
    text: 'Mail me of zoek me op via LinkedIn.',
  },

  footer: {
    site: 'Site',
    elsewhere: 'Elders',
    email: 'E-mail',
    colophon: 'JasperVPL brand v2 · Gezet in Fraunces en IBM Plex · Gebouwd met Astro',
  },
};
