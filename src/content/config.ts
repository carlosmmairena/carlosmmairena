// Import the glob loader
import { glob } from "astro/loaders";
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
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

// Define a `loader` and `schema` for each collection
const postCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});


export const collections = {
  projects: projectsCollection,
  posts: postCollection
};
