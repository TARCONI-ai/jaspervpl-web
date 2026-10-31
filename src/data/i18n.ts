import { en, type Copy } from './copy/en';
import { es } from './copy/es';
import { nl } from './copy/nl';

export const languages = { en: 'English', es: 'Español', nl: 'Nederlands' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const copy: Record<Lang, Copy> = { en, es, nl };

// Astro.currentLocale is undefined outside i18n routes, so fall back to English.
export const getLang = (locale: string | undefined): Lang =>
  locale && locale in languages ? (locale as Lang) : defaultLang;

export const getCopy = (locale: string | undefined): Copy => copy[getLang(locale)];

export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);
