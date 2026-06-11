import type { Technology } from "./techStack";
import { techStack, findTech } from "./techStack";

export type ProjectStatus = 'completed' | 'in-development'  | 'coming-soon';
export interface Project {
  id: string;
  name: { es: string; en: string }
  description: { es: string; en: string }
  status?: ProjectStatus
  image?: string;
  githubLink: string;
  liveLink?: string;
  techStack: Technology[];
}

export const projects: Project[] = [
  {
    id: '1',
    name: { es: 'Tacea Music. Rediseño web', en: 'Tacea Music. Website Redesign' },
    description: { 
      es: 'Rediseño completo de una tienda de música local implementando una nueva identidad visual, arquitectura de información mejorada e implementación frontend con JavaScript vanilla.', 
      en: 'Complete redesign of a local music store implementing a new visual identity, improved information architecture and a frontend implemented with vanilla JavaScript.' 
    },
    image: '/images/projects/tacea-music-redesign.webp',
    githubLink: 'https://github.com/axelrdz-lab/tacea-music-redesign',
    liveLink: 'https://axelrdz-lab.github.io/tacea-music-redesign/',
    status: 'completed',
    techStack: [
      findTech('html'),
      findTech('javascript'),
      findTech('css')
    ]
  },
  {
    id: '2',
    name: { es: 'App de gestión de gastos y clientes', en: 'Expense and Client Management App' },
    description: { 
      es: 'Aplicación Android nativa que digitalizó la operación completa de un negocio de servicios técnicos, centralizando inventario, clientes, agenda y finanzas en un solo lugar.', 
      en: 'Native Android application that digitized the entire operation of a technical services business, centralizing inventory, clients, scheduling, and finances in one place.'
    },
    image: '/images/projects/roco-admin.webp',
    githubLink: 'https://github.com/axelrdz-lab/rocoadmin-app',
    /*liveLink*/
    status: 'completed',
    techStack: [
      findTech('kotlin'),
      findTech('compose'),
      findTech('material'),
      findTech('supabase'),
      findTech('postgresql')
    ]
  },
  {
    id: '3',
    name: { es: 'Portafolio Personal', en: 'Personal Portfolio' },
    description: { 
      es: 'Portafolio personal construido con Astro, con soporte para dos idiomas, integración con Last.fm y modo oscuro.', 
      en: 'Personal portfolio built with Astro, featuring bilingual support, Last.fm integration, and dark mode.' 
    },
    /*image*/
    githubLink: 'https://github.com/axelrdz-lab/axels-portfolio',
    /*liveLink*/
    status: 'completed',
    techStack: [
      findTech('astro'),
      findTech('typescript'),
      findTech('tailwind')
    ]
  },
  {
    id: '4',
    name: { es: 'MindLink - Plataforma educativa tipo Classroom', en: 'MindLink - Educational plataform' },
    description: { 
      es: 'Plataforma web para gestión de clases entre alumnos y profesores. Subida de archivos, calificaciones y roles diferenciados por tipo de usuario', 
      en: 'Web platform for class management between students and teachers. File uploads, grades, and differentiated roles by user type.' 
    },
    /*image*/
    githubLink: 'https://github.com/axelrdz-lab/portfolio',
    /*liveLink*/
    status: 'in-development',
    techStack: [
      findTech('react'),
      findTech('tailwind'),
      findTech('css')
    ]
  }
]