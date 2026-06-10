import { techStack, findTech, type Technology } from "./techStack";

export interface Job {
  id: string;
  position: { es: string; en: string };
  company: string;
  description: { es: string[]; en: string[] };
  techStack: Technology[];
  year: string;
}

export const jobs: Job[] = [
  {
    id: 'job1',
    position: { 
      es: 'Desarrollador Móvil & Diseñador UX/UI',
      en: 'Mobile Developer & UX/UI Designer' 
    },
    company: 'Taller de reparación de refrigeración y línea blanca ROCO',
    description: {
      es: [
        'Diseñé y desarrollé de forma independiente una aplicación Android nativa que digitalizó la operación completa de un negocio de servicios técnicos.',
        'Centralicé la gestión de inventario, finanzas, clientes y agenda de trabajos en una sola plataforma.',
        'Implementé notificaciones push, importación de contactos y consultas financieras filtrables por período.',
      ],
      en: [
        'Independently designed and developed a native Android app that fully digitized a technical services business.',
        'Centralized inventory, finance, client and job scheduling management in a single platform.',
        'Implemented push notifications, contact import and filterable financial reports.',
      ]
    },
    techStack: [
      findTech('kotlin'),
      findTech('compose'),
      findTech('material'),
      findTech('supabase'),
      findTech('postgresql'),
      findTech('figma')
    ],
    year: '2026',
  },

  {
    id: 'job2',
    position: { 
      es: 'Desarrollador Full-Stack & Diseñador UX/UI', 
      en: 'Full-Stack Developer & UX/UI Designer' 
    },
    company: 'Auditoría Superior del Estado de Tamaulipas',
    description: {
      es: [
        'Lideré el rediseño completo de la identidad visual del sitio, uniformando y mejorando su paleta de colores, sistema de componentes y secciones de contenido, obteniendo un puntaje SUS de 77.5 comparado al 22.5 del sistema anterior.',
        'Migré la plataforma de WordPress a Laravel, desarrollando frontend y backend simultáneamente.', 
        'Construí un editor de publicaciones desde cero con soporte para imágenes, titulares y cuadros de texto',
        'Automaticé la gestión y subida de documentos institucionales, reduciendo el tiempo del proceso en un 70%.',
      ],
      en: [
        'Led the complete redesign of the website visual identity, standardizing and improving its color palette, component system, and content sections, achieving a SUS score of 77.5 compared to 22.5 from the previous system.',
        'Migrated the platform from WordPress to Laravel, developing frontend and backend simultaneously', 
        'Built a custom post editor with support for images, headings, text blocks',
        'Automated institutional document management and upload, reducing process time by 70%.',
      ],
    },
    techStack: [
      findTech('laravel'),
      findTech('html'),
      findTech('javascript'),
      findTech('css'),
      findTech('bootstrap'),
      findTech('figma')
    ],
    year: '2025',
  },
  {
    id: 'job3',
    position: { 
      es: 'Diseñador UX/UI', 
      en: 'UX/UI Designer' 
    },
    company: 'Tacea Music',
    description: {
      es: [
        'Rediseñé la identidad visual y arquitectura de información del sitio a través de maquetas en Figma.',
        'Desarrollé un prototipo frontend con filtros y generación dinámica de páginas por producto o blog.',
      ],
      en: [
        'Redesigned the website visual identity and information architecture through Figma mockups.',
        'Developed a frontend prototype with filters and dynamic page generation for product and blog pages.',
      ],
    },
    techStack: [
      findTech('figma'),
      findTech('html'),
      findTech('css'),
      findTech('javascript')
    ],
    year: '2024',
  }
]