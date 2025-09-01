import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    projectCategory: z.enum(['Web Apps', 'Infrastructure Projects', 'Security Tools']),
    category: z.enum(['primary', 'secondary', 'success', 'warning', 'danger']),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects: projectsCollection,
};
