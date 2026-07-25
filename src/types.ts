export interface Skill {
  _id: string;
  category: string;
  items: string[];
  icon?: string;
  order?: number;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
  highlight?: boolean;
  order?: number;
}

export interface Experience {
  _id: string;
  role: string;
  company: string;
  location?: string;
  start: string;
  end?: string;
  bullets: string[];
  order?: number;
}
