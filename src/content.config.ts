import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts carried over from v1. Each keeps its old permalink so no URL changes at launch.
const blog = defineCollection({
  loader: glob({ pattern: '*/*/index.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      lang: z.enum(['es', 'nl']),
      slug: z.string(),
      categories: z.array(z.string()),
      translationKey: z.string(),
      permalink: z.string(),
      // ai: current AI writing · archive: marketing years, left as written · reading: book reviews behind /lecturas/
      section: z.enum(['ai', 'archive', 'reading']),
      cover: image().optional(),
      coverAiGenerated: z.boolean().default(false),
      description: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
