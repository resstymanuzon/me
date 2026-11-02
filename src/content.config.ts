import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string(),
    year: z.string(),
    summary: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    tags: z.array(z.string()).default([]),
    color: z.enum(['coral', 'yellow', 'blue', 'green', 'pink']).default('coral'),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Drafts show up in `npm run dev` but are left out of the production build.
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, blog };
