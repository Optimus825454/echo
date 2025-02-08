import { useState } from 'react';
import { PageIntro } from '../components/PageIntro';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = [
    'Tümü',
    'Yazılım Geliştirme',
    'Yapay Zeka',
    'Veteriner Hekimlik',
    'Müzik',
    'Teknoloji'
  ];

  const posts = [
    {
      title: 'Yapay Zeka ve Veteriner Hekimlikte Kullanımı',
      excerpt: 'Veteriner hekimlikte yapay zeka uygulamaları ve gelecek perspektifi...',
      date: '2024-02-20',
      category: 'Yapay Zeka',
      image: '/images/blog/ai-vet.png',
      link: '#'
    },
    {
      title: 'Modern Web Geliştirme Teknikleri',
      excerpt: 'React, TypeScript ve TailwindCSS ile modern web uygulamaları geliştirme...',
      date: '2024-02-18',
      category: 'Yazılım Geliştirme',
      image: '/images/blog/web-dev.png',
      link: '#'
    },
    {
      title: 'Müzik Prodüksiyon Temelleri',
      excerpt: 'Elektronik müzik prodüksiyonuna giriş ve temel kavramlar...',
      date: '2024-02-15',
      category: 'Müzik',
      image: '/images/blog/music-prod.png',
      link: '#'
    }
  ];

  const filteredPosts = selectedCategory === 'Tümü' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageIntro
          title="Blog Yazıları"
          description="Teknoloji, yazılım geliştirme, yapay zeka ve daha birçok konuda deneyimlerimi ve düşüncelerimi paylaştığım blog yazılarıma hoş geldiniz."
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
                    ? 'bg-[#ff2b9d] text-white'
                    : 'bg-[#1a1a2e] text-[#ff2b9d] hover:bg-[#ff2b9d]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <div key={index} className="cyber-card hover:scale-[1.02] transition-transform">
                <div className="flex gap-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="cyber-heading text-2xl font-semibold text-[#ff2b9d]">
                        {post.title}
                      </h2>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <span className="inline-block px-3 py-1 bg-[#1a1a2e] text-[#ff2b9d] text-sm rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
