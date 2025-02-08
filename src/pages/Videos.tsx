import { useState } from 'react';
import { PageIntro } from '../components/PageIntro';

export function Videos() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = [
    'Tümü',
    'Yazılım Eğitimi',
    'Müzik',
    'Yapay Zeka',
    'Veteriner Hekimlik'
  ];

  const videos = [
    {
      title: 'React ile Modern Web Geliştirme',
      description: 'Temel React kavramları ve modern web uygulamaları geliştirme',
      thumbnail: '/images/videos/react-dev.png',
      category: 'Yazılım Eğitimi',
      duration: '15:34',
      date: '2024-02-20'
    },
    {
      title: 'FL Studio ile Beat Making',
      description: 'Elektronik müzik prodüksiyonu temelleri',
      thumbnail: '/images/videos/music-prod.png',
      category: 'Müzik',
      duration: '22:15',
      date: '2024-02-18'
    },
    {
      title: 'Veteriner Kliniği Otomasyon Sistemi',
      description: 'Veteriner klinikleri için yazılım geliştirme süreci',
      thumbnail: '/images/videos/vet-sys.png',
      category: 'Veteriner Hekimlik',
      duration: '18:45',
      date: '2024-02-15'
    }
  ];

  const filteredVideos = selectedCategory === 'Tümü'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PageIntro
          title="Videolar"
          description="Çeşitli konularda hazırladığım eğitim videoları, teknoloji incelemeleri ve yazılım geliştirme süreçlerine dair içerikler."
          categories={categories}
        />
        <div className="cyber-glass p-8 rounded-xl">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-[#0ff] text-black'
                    : 'bg-[#1a1a2e] text-[#0ff] hover:bg-[#0ff]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div key={index} className="cyber-card hover:scale-105 transition-transform">
                <div className="relative mb-4">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <span className="px-2 py-1 bg-black/70 text-white text-sm rounded">
                      {video.duration}
                    </span>
                    <span className="px-2 py-1 bg-[#0ff]/20 text-[#0ff] text-sm rounded">
                      {video.category}
                    </span>
                  </div>
                </div>
                <h2 className="cyber-heading text-xl font-semibold mb-2 text-[#0ff]">
                  {video.title}
                </h2>
                <p className="text-gray-300 mb-2">{video.description}</p>
                <span className="text-sm text-gray-400">{video.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
