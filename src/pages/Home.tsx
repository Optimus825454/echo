import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  
  const titles = [
    'Veteriner Hekim',
    'Music (Re)Mix',
    'Web Teknolojileri',
    'Yazılım Geliştirme',
    'Fullstack Developer',
    'Yapay Zeka',
    'Machine Learning',
    'Astrology'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev % titles.length) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Üst kısım - Animasyonlu başlık */}
        <div className="cyber-panel relative overflow-hidden h-[60px] mb-8 flex items-center justify-center">
          {titles.map((title, index) => (
            <h1 
              key={index}
              className={`cyber-heading absolute transition-all duration-2000 ${
                currentSlide === index + 1
                  ? 'opacity-100 transform-none blur-none'
                  : 'opacity-0 translate-y-8 blur-md'
              }`}
              style={{fontSize: '2rem'}}
            >
              {title}
            </h1>
          ))}
        </div>

        {/* Alt kısım - İki sütunlu layout */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* Sol sütun - Değişen resimler */}
          <div className="w-full md:w-[500px]">
            <div className="cyber-frame relative w-full" style={{ height: '450px' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <img 
                    key={num}
                    src={`/images/H${num}.png`}
                    alt={`Slide ${num}`}
                    className={`transition-all duration-1000 ${
                      currentSlide === num
                        ? 'opacity-100 scale-100 blur-none'
                        : 'opacity-0 scale-95 blur-md'
                    }`}
                  />
                ))}
            </div>
          </div>

          {/* Sağ sütun - Kartlar */}
          <div className="w-full md:w-[500px] space-y-4">
            <Link to="/projeler" className="cyber-card hover:scale-105 transition-transform block">
              <h2 className="cyber-heading text-2xl font-semibold mb-2 text-[#0ff]">
                Projeler
              </h2>
              <p className="text-gray-300">Geliştirdiğim projeler ve çalışmalarım</p>
            </Link>

            <Link to="/yazilar" className="cyber-card hover:scale-105 transition-transform block">
              <h2 className="cyber-heading text-2xl font-semibold mb-2 text-[#ff2b9d]">
                Yazılar
              </h2>
              <p className="text-gray-300">Blog yazılarım ve düşüncelerim</p>
            </Link>

            <Link to="/videolar" className="cyber-card hover:scale-105 transition-transform block">
              <h2 className="cyber-heading text-2xl font-semibold mb-2 text-[#0ff]">
                Videolar
              </h2>
              <p className="text-gray-300">Video içeriklerim ve sunumlarım</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
