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
    { href: '/', label: 'Inicio' }, { href: '/servicios/', label: 'Servicios' },
    { href: '/blog/', label: 'Blog' }, { href: '/recursos/', label: 'Recursos' },
    { href: '/contacto/', label: 'Contacto' },
  ],
  nl: [
    { href: '/nl/', label: 'Home' }, { href: '/nl/diensten/', label: 'Diensten' },
    { href: '/nl/blog-2/', label: 'Blog' }, { href: '/nl/middelen/', label: 'Middelen' },
    { href: '/nl/contact/', label: 'Contact' },
  ],
} as const;

export const categoryLabels: Record<string, string> = {
  noticias: 'Noticias', libros: 'Libros', peliculas: 'Películas',
  neuromarketing: 'Neuromarketing', 'gpts-personalizados': 'GPTs personalizados',
  nieuws: 'Nieuws', boeken: 'Boeken', films: 'Films',
  'neuromarketing-nl': 'Neuromarketing', 'aangepaste-gpts': 'Aangepaste GPTs',
};
