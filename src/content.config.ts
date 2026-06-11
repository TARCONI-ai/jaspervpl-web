import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*/*/index.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['es', 'nl']),
    slug: z.string(),
    categories: z.array(z.string()),
    translationKey: z.string(),
    permalink: z.string(),
    cover: image().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['es', 'nl']),
    slug: z.string(),
    permalink: z.string(),
    translationKey: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, pages };
