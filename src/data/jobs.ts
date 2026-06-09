export interface Job {
  id: string;
  position: { es: string; en: string };
  company: string;
  description: { es: string; en: string };
  technologies: string[];
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
      es: 'Desarrollé interfaces de usuario responsivas utilizando React y TypeScript, mejorando la experiencia del usuario en un 30%.',
      en: 'Developed responsive user interfaces using React and TypeScript, improving user experience by 30%.'
    },
    technologies: ['react', 'typescript', 'css'],
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
      es: 'Desarrollé interfaces de usuario responsivas utilizando React y TypeScript, mejorando la experiencia del usuario en un 30%.',
      en: 'Developed responsive user interfaces using React and TypeScript, improving user experience by 30%.'
    },
    technologies: ['react', 'typescript', 'css'],
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
      es: 'Desarrollé interfaces de usuario responsivas utilizando React y TypeScript, mejorando la experiencia del usuario en un 30%.',
      en: 'Developed responsive user interfaces using React and TypeScript, improving user experience by 30%.'
    },
    technologies: ['react', 'typescript', 'css'],
    year: '2024',
  }
]