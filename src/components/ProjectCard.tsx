import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="cyber-panel rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="cyber-heading text-lg font-semibold mb-2 text-[#0ff]">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{project.date}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ff] hover:text-[#ff2b9d] flex items-center gap-1 transition-colors duration-200"
            >
              <ExternalLink size={16} />
              Projeyi Gör
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
