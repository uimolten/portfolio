export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  client: string;
  projectUrl?: string;
}
