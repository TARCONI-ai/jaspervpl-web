// Hand-written RSS feed per language, newest first. Spanish keeps the v1 URL at /rss.xml.
import { getCollection } from 'astro:content';
import { site } from './site';
import { blog, blogPath } from './blog';
import type { Lang } from './i18n';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function rssResponse(lang: Lang) {
  const posts = (await getCollection('blog', (p) => p.data.lang === lang && !p.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  const items = posts
    .map((p) => {
      const url = new URL(p.data.permalink, site.url).href;
      return `<item><title>${esc(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.date.toUTCString()}</pubDate></item>`;
    })
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(`${blog[lang].title} · ${site.name}`)}</title><link>${new URL(blogPath[lang], site.url).href}</link><description>${esc(blog[lang].description)}</description><language>${lang}</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
