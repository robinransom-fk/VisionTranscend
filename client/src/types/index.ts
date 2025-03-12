export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  architecturalStyle?: string;
  keyFeatures?: string[];
  sustainability?: string[];
  completionYear?: number;
  location?: string;
  builtArea?: string;
  recognitions?: string[];
}

export interface Founder {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Philosophy {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface Advantage {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}
