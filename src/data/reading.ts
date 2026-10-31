// The reading page: books that shaped how Jasper designs products. Old reviews stay at their /blog/ URLs.
import type { Lang } from './i18n';

export const readingPath: Record<Lang, string> = {
  en: '/reading/',
  es: '/es/lecturas/',
  nl: '/nl/leeslijst/',
};

export const readingDates = { published: '2026-10-31', modified: '2026-10-31' };

type Book = {
  id: string;
  title: string;
  author: string;
  year?: number;
  note?: string;
  learned: string;
  today: string;
  review: { label: string; href: string; lang: Lang };
};

type Reading = {
  meta: { title: string; description: string };
  breadcrumb: string;
  title: string;
  intro: string;
  labels: { learned: string; today: string; now: string; own: string; published: string; updated: string; author: string; buy: string };
  books: Book[];
  now: { title: string; author: string; publisher: string; text: string };
  own: { title: string; text: string; href: string };
  authorBio: string;
};

const blog = '';

export const reading: Record<Lang, Reading> = {
  es: {
    meta: {
      title: 'Lecturas · Jasper van Puffelen López',
      description:
        'Los libros de mi etapa de marketing que siguen influyendo en cómo diseño productos con IA, el que leo ahora sobre AI engineering y uno que escribí yo.',
    },
    breadcrumb: 'Lecturas',
    title: 'Lecturas',
    intro:
      'Antes de escribir código con IA estudié marketing. De esa etapa me quedaron unos cuantos libros que siguen influyendo en cómo diseño productos. Aquí van, con lo que aprendí al leerlos y lo que uso de ellos hoy como AI engineer.',
    labels: {
      learned: 'Lo que me enseñó',
      today: 'Lo que uso hoy',
      now: 'Lo que leo ahora',
      own: 'Y uno que escribí yo',
      published: 'Publicado',
      updated: 'Actualizado',
      author: 'Escrito por',
      buy: 'Ver en Amazon',
    },
    books: [
      {
        id: 'buyology',
        title: 'Buyology',
        author: 'Martin Lindstrom',
        year: 2008,
        learned:
          'Fue mi primera entrada en el comportamiento del consumidor. Lindstrom estudió durante tres años a 2.000 voluntarios y llegó a una conclusión que se me quedó grabada: «los productos se producen en la fábrica, las marcas se producen en nuestras mentes».',
        today:
          'Al usuario le da igual qué modelo hay detrás. Juzga la herramienta por lo que percibe al usarla: si la entiende y si se fía de ella. Por eso dedico tanto tiempo a la experiencia de uso como a elegir el modelo.',
        review: { label: 'Mi reseña de 2022', href: `${blog}/blog/libros/buyology/`, lang: 'es' },
      },
      {
        id: 'apunta-a-las-estrellas',
        title: 'Apunta a las estrellas y llegarás a la luna',
        author: 'Leopoldo Fernández Pujals',
        learned:
          'Me lo recomendó un profesor de Psicología en la universidad y fue mi primer libro de emprendimiento. Es la historia del fundador de Telepizza, desde que salió de Cuba hasta llevar dos empresas al Ibex 35. La idea que me llevé es que el éxito sale de los hábitos, no de un golpe de suerte.',
        today:
          'Trabajo con método porque un buen resultado puntual no me sirve si no lo puedo repetir. Primero la spec, después el código y siempre la revisión.',
        review: { label: 'Mi reseña de 2022', href: `${blog}/blog/libros/apunta-a-las-estrellas-y-llegaras-a-la-luna/`, lang: 'es' },
      },
      {
        id: 'las-trampas-del-deseo',
        title: 'Las trampas del deseo',
        author: 'Dan Ariely',
        year: 2008,
        learned:
          'Es el libro que me hizo dudar de que decidimos de forma racional. En su experimento de los bombones, el 70 % de la gente elige un bombón gratis peor antes que uno premium que cuesta un céntimo.',
        today:
          'Decidimos con la emoción y después lo justificamos con la razón. Por eso nadie cambia de herramienta por una lista de funciones: se queda con lo que ya conoce y le resulta cómodo. Yo parto de lo que mis usuarios ya usan y le añado IA donde les ahorra trabajo, sin obligarles a aprender nada nuevo.',
        review: { label: 'Mi resumen de su entrevista con Eduard Punset (2022)', href: `${blog}/blog/peliculas/las-trampas-del-deseo/`, lang: 'es' },
      },
    ],
    now: {
      title: 'AI Engineering',
      author: 'Chip Huyen',
      publisher: "O'Reilly, 2025",
      text: 'Lo estoy leyendo ahora. Explica cómo construir aplicaciones sobre modelos fundacionales: evaluación, prompts, RAG, agentes, fine-tuning y optimización de la inferencia.',
    },
    own: {
      title: 'Estoy muerto vivo. Una historia del Camino de Santiago',
      text: 'Cinco amigos, los últimos 100 kilómetros de Sarria a Santiago de Compostela y la crónica de cómo llegamos a la meta paso a paso. Lo escribí como quien le cuenta a un amigo lo que ha vivido.',
      href: 'https://www.amazon.es/dp/B0D9TY45QB',
    },
    authorBio: 'AI engineer. Llevo la IA a producción con método.',
  },

  en: {
    meta: {
      title: 'Reading · Jasper van Puffelen López',
      description:
        'The books from my marketing years that still shape how I design AI products, the AI engineering book I am reading now and one I wrote myself.',
    },
    breadcrumb: 'Reading',
    title: 'Reading',
    intro:
      'Before I wrote code with AI, I studied marketing. A few books from that time still shape how I design products. Here they are, with what I learned from them back then and what I use from them today as an AI engineer.',
    labels: {
      learned: 'What it taught me',
      today: 'What I use today',
      now: "What I'm reading now",
      own: 'And one I wrote',
      published: 'Published',
      updated: 'Updated',
      author: 'Written by',
      buy: 'View on Amazon',
    },
    books: [
      {
        id: 'buyology',
        title: 'Buyology',
        author: 'Martin Lindstrom',
        year: 2008,
        learned:
          'It was my first step into consumer behaviour. Lindstrom studied 2,000 volunteers for three years and reached a conclusion that stuck with me: "products are made in the factory, brands are made in our minds".',
        today:
          "Users don't care which model sits behind a tool. They judge it by what they experience when they use it: whether they understand it and whether they trust it. That's why I spend as much time on the user experience as on choosing the model.",
        review: { label: 'My 2022 review (in Spanish)', href: `${blog}/blog/libros/buyology/`, lang: 'es' },
      },
      {
        id: 'apunta-a-las-estrellas',
        title: 'Apunta a las estrellas y llegarás a la luna',
        author: 'Leopoldo Fernández Pujals',
        note: 'Spanish only. The title means "Aim for the stars and you will reach the moon".',
        learned:
          'A psychology lecturer at university recommended it, and it was my first book on entrepreneurship. It tells the story of the founder of Telepizza, from leaving Cuba to taking two companies onto the Ibex 35. The idea I took from it: success comes from habits, not from a lucky break.',
        today:
          "I work with a method because one good result is worth nothing if I can't repeat it. Spec first, then the code, and always a review.",
        review: { label: 'My 2022 review (in Spanish)', href: `${blog}/blog/libros/apunta-a-las-estrellas-y-llegaras-a-la-luna/`, lang: 'es' },
      },
      {
        id: 'las-trampas-del-deseo',
        title: 'Predictably Irrational',
        author: 'Dan Ariely',
        year: 2008,
        learned:
          'This is the book that made me doubt that we decide rationally. In his chocolate experiment, 70% of people pick a worse free chocolate over a premium one that costs one cent.',
        today:
          "We decide with emotion and justify it afterwards with reason. That's why nobody switches tools because of a feature list: people stick with what they know and find comfortable. I start from what my users already use and add AI where it saves them work, without making them learn anything new.",
        review: { label: 'My 2022 summary of his interview with Eduard Punset (in Spanish)', href: `${blog}/blog/peliculas/las-trampas-del-deseo/`, lang: 'es' },
      },
    ],
    now: {
      title: 'AI Engineering',
      author: 'Chip Huyen',
      publisher: "O'Reilly, 2025",
      text: "I'm reading it now. It explains how to build applications on top of foundation models: evaluation, prompts, RAG, agents, fine-tuning and inference optimisation.",
    },
    own: {
      title: 'Estoy muerto vivo. Una historia del Camino de Santiago',
      text: 'In Spanish. Five friends, the last 100 kilometres from Sarria to Santiago de Compostela, and the story of how we reached the finish step by step. I wrote it the way you tell a friend about something you lived through.',
      href: 'https://www.amazon.es/dp/B0D9TY45QB',
    },
    authorBio: 'AI engineer. I bring AI to production, with method.',
  },

  nl: {
    meta: {
      title: 'Leeslijst · Jasper van Puffelen López',
      description:
        'De boeken uit mijn marketingtijd die nog steeds bepalen hoe ik AI-producten ontwerp, het boek over AI engineering dat ik nu lees en één dat ik zelf schreef.',
    },
    breadcrumb: 'Leeslijst',
    title: 'Leeslijst',
    intro:
      'Voordat ik met AI ging programmeren, studeerde ik marketing. Een paar boeken uit die tijd bepalen nog steeds hoe ik producten ontwerp. Hier zijn ze, met wat ik er toen van leerde en wat ik er nu als AI-engineer mee doe.',
    labels: {
      learned: 'Wat het me leerde',
      today: 'Wat ik er nu mee doe',
      now: 'Wat ik nu lees',
      own: 'En één die ik zelf schreef',
      published: 'Gepubliceerd',
      updated: 'Bijgewerkt',
      author: 'Geschreven door',
      buy: 'Bekijk op Amazon',
    },
    books: [
      {
        id: 'buyology',
        title: 'Buyology',
        author: 'Martin Lindstrom',
        year: 2008,
        learned:
          'Dit was mijn eerste kennismaking met consumentengedrag. Lindstrom onderzocht drie jaar lang 2.000 vrijwilligers en kwam tot een conclusie die me is bijgebleven: "producten worden in de fabriek gemaakt, merken in ons hoofd".',
        today:
          'Het maakt gebruikers niet uit welk model erachter zit. Ze beoordelen een tool op wat ze ervaren als ze hem gebruiken: of ze hem begrijpen en of ze hem vertrouwen. Daarom besteed ik net zoveel tijd aan de gebruikerservaring als aan de keuze van het model.',
        review: { label: 'Mijn recensie uit 2022', href: `${blog}/nl/blog/boeken/buyology-2/`, lang: 'nl' },
      },
      {
        id: 'apunta-a-las-estrellas',
        title: 'Apunta a las estrellas y llegarás a la luna',
        author: 'Leopoldo Fernández Pujals',
        note: 'Alleen in het Spaans. De titel betekent "Richt je op de sterren en je bereikt de maan".',
        learned:
          'Een docent psychologie op de universiteit raadde het aan, en het was mijn eerste boek over ondernemerschap. Het vertelt het verhaal van de oprichter van Telepizza, van zijn vertrek uit Cuba tot het moment dat hij twee bedrijven naar de Ibex 35 bracht. Wat ik eruit meenam: succes komt uit gewoontes, niet uit een toevalstreffer.',
        today:
          'Ik werk met een methode, omdat één goed resultaat niets waard is als ik het niet kan herhalen. Eerst de spec, dan de code en altijd een review.',
        review: { label: 'Mijn recensie uit 2022', href: `${blog}/nl/blog/boeken/richt-je-op-de-sterren-en-je-zult-de-maan-bereiken/`, lang: 'nl' },
      },
      {
        id: 'las-trampas-del-deseo',
        title: 'Volkomen irrationeel',
        author: 'Dan Ariely',
        year: 2008,
        learned:
          'Door dit boek ging ik twijfelen aan het idee dat we rationeel beslissen. In zijn experiment met bonbons kiest 70% van de mensen een slechtere gratis bonbon boven een premium bonbon van één cent.',
        today:
          'We beslissen met ons gevoel en rechtvaardigen het achteraf met ons verstand. Daarom stapt niemand over op een tool vanwege een lijst met functies: mensen blijven bij wat ze kennen en wat vertrouwd voelt. Ik begin bij wat mijn gebruikers al gebruiken en voeg AI toe waar het ze werk bespaart, zonder dat ze iets nieuws hoeven te leren.',
        review: { label: 'Mijn samenvatting van zijn interview met Eduard Punset (2022)', href: `${blog}/nl/blog/neuromarketing-nl/de-valstrikken-van-het-verlangen/`, lang: 'nl' },
      },
    ],
    now: {
      title: 'AI Engineering',
      author: 'Chip Huyen',
      publisher: "O'Reilly, 2025",
      text: 'Ik ben het nu aan het lezen. Het legt uit hoe je applicaties bouwt op foundation models: evaluatie, prompts, RAG, agents, fine-tuning en inference-optimalisatie.',
    },
    own: {
      title: 'Estoy muerto vivo. Una historia del Camino de Santiago',
      text: 'In het Spaans. Vijf vrienden, de laatste 100 kilometer van Sarria naar Santiago de Compostela en het verslag van hoe we stap voor stap de finish haalden. Ik schreef het zoals je een vriend vertelt wat je hebt meegemaakt.',
      href: 'https://www.amazon.es/dp/B0D9TY45QB',
    },
    authorBio: 'AI-engineer. Ik breng AI naar productie, met methode.',
  },
};
