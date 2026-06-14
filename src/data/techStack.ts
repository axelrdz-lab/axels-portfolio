
export interface Technology {
  id: string;
  icon: string;
  name: string;
}

export const findTech = (id: string) => techStack.find(t => t.id === id)!

export const techStack = [
  {
    id: 'html',
    icon: 'Html',
    name: 'HTML'
  },
  {
    id: 'astro',
    icon: 'AstroIcon',
    name: 'Astro'
  },
  {
    id: 'react',
    icon: 'React',
    name: 'React'
  },
  {
    id: 'javascript',
    icon: 'Javascript',
    name: 'Javascript',
  },
  {
    id: 'typescript',
    icon: 'Typescript',
    name: 'Typescript',
  },
  {
    id: 'css',
    icon: 'Css',
    name: 'CSS',
  },
  {
    id: 'laravel',
    icon: 'Laravel',
    name: 'Laravel',
  },
  {
    id: 'kotlin',
    icon: 'Kotlin',
    name: 'Kotlin',
  },
  {
    id: 'compose',
    icon: 'Compose',
    name: 'Jetpack Compose',
  },
  {
    id: 'material',
    icon: 'MaterialDesign',
    name: 'Material Design'
  },
  {
    id: 'supabase',
    icon: 'Supabase',
    name: 'Supabase',
  },
  {
    id: 'firebase',
    icon: 'Firebase',
    name: 'Firebase',
  },
  {
    id: 'postgresql',
    icon: 'Postgre',
    name: 'PostgreSQL',
  },
  {
    id: 'mysql',
    icon: 'Mysql',
    name: 'MySQL'
  },
  {
    id: 'node',
    icon: 'Nodejs',
    name: 'Node.js'
  }, 
  {
    id: 'express',
    icon: 'Express',
    name: 'Express.js'
  },
  {
    id: 'git',
    icon: 'Git',
    name: 'Git',
  },
  {
    id: 'tailwind',
    icon: 'Tailwind',
    name: 'Tailwind CSS',
  },
  {
    id: 'bootstrap',
    icon: 'Bootstrap',
    name: 'Bootstrap',
  },
  {
    id: 'figma',
    icon: 'Figma',
    name: 'Figma',
  }
]