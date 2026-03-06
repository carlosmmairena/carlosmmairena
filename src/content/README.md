# Content Collections - Proyectos

Este directorio contiene las **Content Collections** de Astro para gestionar los datos de proyectos de manera centralizada y tipada.

## 📁 Estructura

```
src/content/
├── config.ts              # Configuración y esquemas de las collections
├── projects/              # Directorio de proyectos
│   ├── ecommerce-platform.json
│   ├── devops-monitoring-stack.json
│   ├── security-audit-tool.json
│   ├── task-management-app.json
│   ├── network-scanner.json
│   ├── cloud-infrastructure-iac.json
│   ├── realtime-chat-app.json
│   └── api-security-testing-suite.json
```

## 🔧 Esquema de Proyectos

Cada archivo JSON en `/projects/` debe seguir este esquema:

```typescript
{
  title: string;                    // Título del proyecto
  description: string;              // Descripción detallada
  technologies: string[];           // Array de tecnologías usadas
  githubUrl?: string;              // URL del repositorio (opcional)
  demoUrl?: string;                // URL de demo en vivo (opcional)
  projectCategory: "Web Apps" | "Infrastructure Projects" | "Security Tools";
  category: "primary" | "secondary" | "success" | "warning" | "danger";
  image?: string;                  // Ruta de la imagen (opcional)
  featured: boolean;               // Si aparece en página de inicio
  order: number;                   // Orden de visualización
}
```

## 📝 Agregar un Nuevo Proyecto

1. Crear un archivo JSON en `/src/content/projects/` con el nombre del proyecto en kebab-case
2. Seguir el esquema definido arriba
3. Las imágenes deben estar en `/public/projects/`
4. Usar `featured: true` para proyectos destacados en la página de inicio

### Ejemplo:

```json
{
  "title": "Mi Nuevo Proyecto",
  "description": "Descripción detallada del proyecto...",
  "technologies": ["React", "Node.js", "PostgreSQL"],
  "githubUrl": "https://github.com/usuario/proyecto",
  "demoUrl": "https://demo.proyecto.com",
  "projectCategory": "Web Apps",
  "category": "primary",
  "image": "/projects/nuevo-proyecto-preview.jpg",
  "featured": true,
  "order": 9
}
```

## 🛠️ Uso en el Código

### Utilidades Disponibles

```typescript
import { getAllProjects, getFeaturedProjects, getProjectsByCategory, getProjectStats } from '../utils/projects';

// Obtener todos los proyectos
const allProjects = await getAllProjects();

// Obtener solo proyectos destacados
const featuredProjects = await getFeaturedProjects();

// Obtener proyectos por categoría
const webApps = await getProjectsByCategory('Web Apps');

// Obtener estadísticas
const stats = await getProjectStats();
```

### En Páginas Astro

```astro
---
import { getFeaturedProjects } from '../utils/projects';

const projects = await getFeaturedProjects();
---

{projects.map(project => (
  <ProjectCard
    title={project.title}
    description={project.description}
    technologies={project.technologies}
    githubUrl={project.githubUrl}
    demoUrl={project.demoUrl}
    category={project.category}
    projectCategory={project.projectCategory}
  />
))}
```
## 📊 Categorías de Proyectos

- **Web**: Aplicaciones web frontend/fullstack
- **Infrastructure Projects**: Proyectos de DevOps, cloud, infrastructure as code
- **Security Tools**: Herramientas de ciberseguridad, auditoría, pentesting

## 🎨 Categorías de Badge

- **primary**: Azul (proyectos principales)
- **secondary**: Gris (proyectos secundarios)
- **success**: Verde (proyectos exitosos)
- **warning**: Amarillo (proyectos de infraestructura)
- **danger**: Rojo (herramientas de seguridad)
