import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string().optional(),
    // Post original, cuando el artículo nace de un carrusel de Instagram
    instagram: z.url().optional(),
    // Imagen en public/; por defecto el formato 4:5 de los posts de Instagram
    cover: z
      .object({
        src: z.string().startsWith('/'),
        alt: z.string(),
        width: z.number().default(1080),
        height: z.number().default(1350),
      })
      .optional(),
  }),
});

export const collections = { blog };
