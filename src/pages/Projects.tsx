import { useState, useEffect } from 'react';
import { Project } from '../types';
import { projectsApi } from '../services/api';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await projectsApi.getAll();
        setProjects(data);
      } catch (err) {
        setError('Projeler yüklenirken bir hata oluştu');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="min-h-screen pt-16 flex items-center justify-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="min-h-screen pt-16 flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="cyber-heading text-4xl font-bold mb-8 text-center neon-text">
          Projeler
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="cyber-card hover:scale-105 transition-transform">
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="cyber-heading text-xl font-semibold mb-2 text-[#0ff]">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-2 py-1 bg-[#1a1a2e] text-[#0ff] text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
