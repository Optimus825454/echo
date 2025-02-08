import { useState, useEffect } from 'react';
import { Project, BlogPost, Video } from '../../types';
import { FileText, FolderKanban } from 'lucide-react';



// Sample data
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-ticaret Sitesi',
    description: 'React ve Node.js kullanılarak geliştirilmiş modern bir e-ticaret platformu',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500',
    link: 'https://github.com/example/ecommerce',
    date: new Date('2024-01-15').toISOString()
  },
  {
    id: '2',
    title: 'Blog Platformu',
    description: 'Kişisel blog yazıları için geliştirilen modern ve hızlı platform',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500',
    link: 'https://github.com/example/blog',
    date: new Date('2024-02-01').toISOString()
  }
];

const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React Hooks Rehberi',
    content: 'React Hooks, fonksiyonel bileşenlerde state ve yaşam döngüsü özelliklerini kullanmamızı sağlayan özelliklerdir. Bu yazıda en çok kullanılan React Hooks\'ları inceleyeceğiz...',
    date: new Date('2024-02-15').toISOString()
  },
  {
    id: '2',
    title: 'TypeScript ile Daha Güvenli Kod Yazımı',
    content: 'TypeScript, JavaScript\'e statik tip tanımlama özelliği kazandıran bir programlama dilidir. Bu yazıda TypeScript\'in temel özelliklerini ve avantajlarını inceleyeceğiz...',
    date: new Date('2024-03-01').toISOString()
  }
];

const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'React Router Kullanımı',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'React uygulamalarında sayfa yönlendirmelerini nasıl yönetebileceğinizi anlatan detaylı bir video',
    date: new Date('2024-02-20').toISOString()
  },
  {
    id: '2',
    title: 'Tailwind CSS İpuçları',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Tailwind CSS ile daha hızlı ve etkili stil geliştirme tekniklerini anlatan video',
    date: new Date('2024-03-05').toISOString()
  }
];

export function AdminDashboard() {
  const [counts, setCounts] = useState({
    projects: 0,
    posts: 0,
    videos: 0,
  });

  useEffect(() => {
    // Initialize sample data if none exists
    if (!localStorage.getItem('projects')) {
      localStorage.setItem('projects', JSON.stringify(sampleProjects));
    }
    if (!localStorage.getItem('blogPosts')) {
      localStorage.setItem('blogPosts', JSON.stringify(sampleBlogPosts));
    } 
    if (!localStorage.getItem('videos')) {
      localStorage.setItem('videos', JSON.stringify(sampleVideos));
    }

    // Update counts
    const projects = JSON.parse(localStorage.getItem('projects') || '[]') as Project[];
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]') as BlogPost[];
    const videos = JSON.parse(localStorage.getItem('videos') || '[]') as Video[];

    setCounts({
      projects: projects.length,
      posts: posts.length,
      videos: videos.length,
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <FolderKanban className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-700">Projeler</h2>
              <p className="text-3xl font-bold text-gray-900">{counts.projects}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-700">Blog Yazıları</h2>
              <p className="text-3xl font-bold text-gray-900">{counts.posts}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
         
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-700">Videolar</h2>
              <p className="text-3xl font-bold text-gray-900">{counts.videos}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Son Eklenen Projeler</h2>
          <div className="space-y-4">
            {sampleProjects.map(project => (
              <div key={project.id} className="border-b pb-2">
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Son Blog Yazıları</h2>
          <div className="space-y-4">
            {sampleBlogPosts.map(post => (
              <div key={post.id} className="border-b pb-2">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  {post.content.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
