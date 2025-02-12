export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  date: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface Video {
  id: string;
  title: string;
  embedUrl: string;
  description: string;
  date: string;
  thumbnail?: string;
  duration?: string;
  category?: string;
  views?: number;
  likes?: number;
}
