import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    category: z.string(),
    categoryColor: z.enum(['cyan', 'pink', 'yellow', 'green', 'purple', 'orange', 'red']),
    icon: z.string(),
    tags: z.array(z.string()),
    breadcrumb: z.array(z.string()),
    order: z.number(),
    toc: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
      })
    ),
  }),
});

export const collections = { docs };
