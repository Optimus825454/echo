import { config } from '../config/config';
import { Project, BlogPost, Video } from '../types';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API error occurred');
  }
  return response.json();
};

// Projects API
export const projectsApi = {
  getAll: async (): Promise<Project[]> => {
    const response = await fetch(`${config.apiUrl}/projects`);
    return handleResponse(response);
  },

  create: async (project: Omit<Project, 'id' | 'date'>): Promise<Project> => {
    const response = await fetch(`${config.apiUrl}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    });
    return handleResponse(response);
  },

  update: async (id: string, project: Omit<Project, 'id' | 'date'>): Promise<Project> => {
    const response = await fetch(`${config.apiUrl}/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    });
    return handleResponse(response);
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${config.apiUrl}/projects/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },
};

// Blog Posts API
export const blogApi = {
  getAll: async (): Promise<BlogPost[]> => {
    const response = await fetch(`${config.apiUrl}/blog`);
    return handleResponse(response);
  },

  create: async (post: Omit<BlogPost, 'id' | 'date'>): Promise<BlogPost> => {
    const response = await fetch(`${config.apiUrl}/blog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    return handleResponse(response);
  },

  update: async (id: string, post: Omit<BlogPost, 'id' | 'date'>): Promise<BlogPost> => {
    const response = await fetch(`${config.apiUrl}/blog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    return handleResponse(response);
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${config.apiUrl}/blog/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },
};

// Videos API
export const videosApi = {
  getAll: async (): Promise<Video[]> => {
    const response = await fetch(`${config.apiUrl}/videos`);
    return handleResponse(response);
  },

  create: async (video: Omit<Video, 'id' | 'date'>): Promise<Video> => {
    const response = await fetch(`${config.apiUrl}/videos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(video),
    });
    return handleResponse(response);
  },

  update: async (id: string, video: Omit<Video, 'id' | 'date'>): Promise<Video> => {
    const response = await fetch(`${config.apiUrl}/videos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(video),
    });
    return handleResponse(response);
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${config.apiUrl}/videos/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },
};

// Auth API
export const authApi = {
  login: async (password: string): Promise<{ token: string }> => {
    const response = await fetch(`${config.apiUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    return handleResponse(response);
  },
};
