const _base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => _base + path;

export const ui = {
  es: {
    blog: 'Blog', services: 'Servicios', resources: 'Recursos', contact: 'Contacto',
    readMore: 'Leer artículo', latest: 'Últimos artículos', allPosts: 'Todos los artículos',
    category: 'Categoría', home: 'Inicio', langName: 'Español',
    footerLegal: 'Aviso legal', footerPrivacy: 'Política de privacidad', footerCookies: 'Política de cookies',
    tagline: 'SEO, IA y marketing digital',
  },
  nl: {
    blog: 'Blog', services: 'Diensten', resources: 'Middelen', contact: 'Contact',
    readMore: 'Artikel lezen', latest: 'Laatste artikelen', allPosts: 'Alle artikelen',
    category: 'Categorie', home: 'Home', langName: 'Nederlands',
    footerLegal: 'Juridische kennisgeving', footerPrivacy: 'Privacybeleid', footerCookies: 'Cookiebeleid',
    tagline: 'SEO, AI en digitale marketing',
  },
} as const;

export const nav = {
  es: [
    { href: url('/'), label: 'Inicio' }, { href: url('/servicios/'), label: 'Servicios' },
    { href: url('/blog/'), label: 'Blog' }, { href: url('/recursos/'), label: 'Recursos' },
    { href: url('/contacto/'), label: 'Contacto' },
  ],
  nl: [
    { href: url('/nl/'), label: 'Home' }, { href: url('/nl/diensten/'), label: 'Diensten' },
    { href: url('/nl/blog-2/'), label: 'Blog' }, { href: url('/nl/middelen/'), label: 'Middelen' },
    { href: url('/nl/contact/'), label: 'Contact' },
  ],
};

export const categoryLabels: Record<string, string> = {
  noticias: 'Noticias', libros: 'Libros', peliculas: 'Películas',
  neuromarketing: 'Neuromarketing', 'gpts-personalizados': 'GPTs personalizados',
  nieuws: 'Nieuws', boeken: 'Boeken', films: 'Films',
  'neuromarketing-nl': 'Neuromarketing', 'aangepaste-gpts': 'Aangepaste GPTs',
};
