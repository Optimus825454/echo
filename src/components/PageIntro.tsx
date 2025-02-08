import { useState, useEffect } from 'react';

interface PageIntroProps {
  title: string;
  description: string;
  categories: string[];
}

export function PageIntro({ title, description, categories }: PageIntroProps) {
  const [showDescription, setShowDescription] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);

  useEffect(() => {
    // Başlık görünür olduktan sonra description yazılmaya başlasın
    setTimeout(() => setShowDescription(true), 500);

    // Typewriter efekti
    let currentText = '';
    let currentIndex = 0;

    if (showDescription) {
      const interval = setInterval(() => {
        if (currentIndex < description.length) {
          currentText += description[currentIndex];
          setTypedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
          // Description tamamlandıktan sonra kategoriler belirmeye başlasın
          setShowCategories(true);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [description, showDescription]);

  // Kategorileri sırayla göster
  useEffect(() => {
    if (showCategories) {
      categories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCategories(prev => [...prev, categories[index]]);
        }, index * 200);
      });
    }
  }, [showCategories, categories]);

  return (
    <div className="mb-16 text-center cyber-glass p-8 rounded-xl">
      <h1 className={`cyber-heading text-4xl font-bold mb-8 transition-all duration-1000 
        ${showDescription ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
      >
        {title}
      </h1>

      <p className={`max-w-2xl mx-auto text-gray-300 mb-12 min-h-[3rem] transition-all duration-1000
        ${showDescription ? 'opacity-100' : 'opacity-0'}`}
      >
        {typedText}
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category, index) => (
          <div
            key={category}
            className={`px-4 py-2 rounded-lg bg-[#1a1a2e] transition-all duration-500
              ${visibleCategories.includes(category) 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-4'}`}
            style={{
              color: index % 2 === 0 ? 'var(--neon-blue)' : 'var(--neon-pink)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
