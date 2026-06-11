import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', (p) => p.data.lang === 'nl' && !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'jaspervpl.com (NL)',
    description: 'SEO, kunstmatige intelligentie en digitale marketing',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      link: p.data.permalink,
    })),
  });
}
