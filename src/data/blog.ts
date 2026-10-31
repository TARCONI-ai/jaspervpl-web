// Blog chrome per language. The posts themselves live in src/content/blog/{en,es,nl}.
import type { Lang } from './i18n';

// Spanish keeps the v1 URLs at /blog/; English is new at /writing/.
export const blogPath: Record<Lang, string> = { en: '/writing/', es: '/blog/', nl: '/nl/blog/' };

type BlogCopy = {
  title: string;
  description: string;
  intro: string;
  dateLocale: string;
  published: string;
  updated: string;
  sections: Record<'ai' | 'reading' | 'archive', { title: string; text: string }>;
  archiveNote: (year: number) => string;
  readingNote: string;
  readingLink: string;
};

export const blog: Record<Lang, BlogCopy> = {
  en: {
    title: 'Writing',
    description:
      'Articles by Jasper van Puffelen López on applied AI, reviews of the books that shaped him and the archive from his marketing years.',
    intro: 'What I write about applied AI, reviews of the books that shaped me and the archive from my marketing years.',
    dateLocale: 'en-GB',
    published: 'Published',
    updated: 'Updated',
    sections: {
      ai: { title: 'Applied AI', text: 'Tools, protocols and what I have built with them.' },
      reading: { title: 'Reading', text: 'Reviews of the books that still shape how I design products.' },
      archive: { title: 'Archive · marketing years', text: 'Articles from 2022 to 2025, when I worked in marketing and SEO. I leave them as I published them.' },
    },
    archiveNote: (year) => `I wrote this article in ${year}, during my marketing years. I leave it as I published it.`,
    readingNote: 'This review is part of my reading list: what the book taught me and what I use from it today.',
    readingLink: 'See Reading',
  },
  es: {
    title: 'Blog',
    description:
      'Artículos de Jasper van Puffelen López sobre IA aplicada, las reseñas de los libros que le formaron y el archivo de su etapa de marketing.',
    intro: 'Lo que escribo sobre IA aplicada, las reseñas de los libros que me formaron y el archivo de mi etapa de marketing.',
    dateLocale: 'es-ES',
    published: 'Publicado',
    updated: 'Actualizado',
    sections: {
      ai: { title: 'IA aplicada', text: 'Herramientas, protocolos y lo que he construido con ellos.' },
      reading: { title: 'Lecturas', text: 'Reseñas de los libros que siguen influyendo en cómo diseño productos.' },
      archive: { title: 'Archivo · etapa de marketing', text: 'Artículos de 2022 a 2025, cuando trabajaba en marketing y SEO. Los dejo como los publiqué.' },
    },
    archiveNote: (year) => `Escribí este artículo en ${year}, en mi etapa de marketing. Lo dejo como lo publiqué.`,
    readingNote: 'Esta reseña forma parte de mis lecturas: lo que me enseñó el libro y lo que uso de él hoy.',
    readingLink: 'Ver Lecturas',
  },
  nl: {
    title: 'Blog',
    description:
      'Artikelen van Jasper van Puffelen López over toegepaste AI, recensies van de boeken die hem vormden en het archief uit zijn marketingtijd.',
    intro: 'Wat ik schrijf over toegepaste AI, recensies van de boeken die me vormden en het archief uit mijn marketingtijd.',
    dateLocale: 'nl-NL',
    published: 'Gepubliceerd',
    updated: 'Bijgewerkt',
    sections: {
      ai: { title: 'Toegepaste AI', text: 'Tools, protocollen en wat ik ermee heb gebouwd.' },
      reading: { title: 'Leeslijst', text: 'Recensies van de boeken die nog steeds bepalen hoe ik producten ontwerp.' },
      archive: { title: 'Archief · marketingtijd', text: 'Artikelen uit 2022 tot 2025, toen ik in marketing en SEO werkte. Ik laat ze staan zoals ik ze publiceerde.' },
    },
    archiveNote: (year) => `Dit artikel schreef ik in ${year}, in mijn marketingtijd. Ik laat het staan zoals ik het publiceerde.`,
    readingNote: 'Deze recensie hoort bij mijn leeslijst: wat het boek me leerde en wat ik er nu mee doe.',
    readingLink: 'Bekijk de leeslijst',
  },
};

// First paragraph of the post as a fallback meta description, cut at a word boundary.
export const excerpt = (body = '', max = 155) => {
  const para =
    body
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p && !/^(#|!\[|<|\||>)/.test(p)) ?? '';
  const text = para.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ');
  return text.length <= max ? text : text.slice(0, text.lastIndexOf(' ', max - 1)) + '…';
};
