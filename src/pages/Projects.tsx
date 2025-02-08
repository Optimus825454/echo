export function Projects() {
  const projects = [
    {
      title: 'Proje 1',
      description: 'Açıklama metni gelecek',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      link: '#',
      image: '/images/projects/project1.png'
    },
    // Diğer projeler buraya eklenecek
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="cyber-heading text-4xl font-bold mb-8 text-center neon-text">
          Projeler
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="cyber-card hover:scale-105 transition-transform">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="cyber-heading text-xl font-semibold mb-2 text-[#0ff]">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-[#1a1a2e] text-[#0ff] text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
