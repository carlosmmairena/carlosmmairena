import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>['data'];

/**
 * Obtiene todos los proyectos ordenados por el campo 'order'
 */
export async function getAllProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects
    .map(project => project.data)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene solo los proyectos destacados (featured: true)
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', (project) => {
    return project.data.featured === true;
  });
  return projects
    .map(project => project.data)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene proyectos por categoría
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const projects = await getCollection('projects', (project) => {
    return project.data.projectCategory === category;
  });
  return projects
    .map(project => project.data)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene estadísticas de proyectos por categoría
 */
export async function getProjectStats() {
  const projects = await getAllProjects();
  
  const stats = {
    total: projects.length,
    webApps: projects.filter(p => p.projectCategory === 'Web Apps').length,
    infrastructure: projects.filter(p => p.projectCategory === 'Infrastructure Projects').length,
    security: projects.filter(p => p.projectCategory === 'Security Tools').length,
  };
  
  return stats;
}
