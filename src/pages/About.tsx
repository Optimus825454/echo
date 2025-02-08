import { PageIntro } from '../components/PageIntro';

export function About() {
  const categories = [
    'Veteriner Hekim 🔬',
    'Full Stack Developer 💻',
    'AI & ML Enthusiast 🤖',
    'Music Producer 🎵',
    'Astrology Explorer ⭐'
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageIntro
          title="Hakkımda"
          description="Veteriner hekimlik mesleğim, müzik tutkum ve teknoloji merakım ile çok yönlü bir yaşam sürdürüyorum. Sistematik düşünce yapım ve analitik yaklaşımım, hem mesleğimde hem de Full Stack Developer olarak geliştirdiğim projelerde bana güç veriyor. Yapay zeka ve bilgisayarlı görü sistemlerini yakından takip ediyor, müzik prodüksiyonu ve astroloji ile hayatıma renk katıyorum. Her biri ayrı bir tutku olan bu alanların kesişiminde, sürekli öğrenmeye ve kendimi geliştirmeye devam ediyorum."
          categories={categories}
        />

        <div className="cyber-glass-light p-8 rounded-xl space-y-8">
          <div className="flex gap-8 items-start">
            <img 
              src="/images/erkanerdem.png"
              alt="Erkan Erdem"
              className="w-48 h-48 rounded-lg object-cover shadow-neon"
            />
            <div className="space-y-4">
              <h2 className="cyber-heading text-2xl text-[#0ff]">Çok Yönlü Yaşam</h2>
              <p className="text-gray-300 leading-relaxed">
                Veteriner hekimlik mesleğimi icra ederken, teknoloji ve yazılım dünyasında Full Stack Developer olarak projeler geliştiriyor, boş zamanlarımda ise müzik prodüksiyonu ve astroloji ile ilgileniyorum. Her bir alan, hayatıma farklı bir değer katıyor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card hover:scale-[1.02] transition-transform">
              <h3 className="cyber-heading text-xl mb-3 text-[#ff2b9d]">Meslek & Teknoloji</h3>
              <p className="text-gray-300 leading-relaxed">
                Veteriner hekimlik mesleğimi teknoloji ile birleştirerek, hem klasik tedavi yöntemlerini uygularken hem de modern teknolojik çözümler geliştiriyorum. Her iki alandaki deneyimim birbirini tamamlıyor.
              </p>
            </div>

            <div className="cyber-card hover:scale-[1.02] transition-transform">
              <h3 className="cyber-heading text-xl mb-3 text-[#0ff]">Yazılım & Yapay Zeka</h3>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Developer olarak modern web teknolojilerini kullanırken, yapay zeka ve makine öğrenmesi alanlarındaki gelişmeleri yakından takip ediyor ve projelerime entegre ediyorum.
              </p>
            </div>

            <div className="cyber-card hover:scale-[1.02] transition-transform">
              <h3 className="cyber-heading text-xl mb-3 text-[#ff2b9d]">Hobiler & Tutkular</h3>
              <p className="text-gray-300 leading-relaxed">
                Elektronik müzik prodüksiyonu ve astroloji, hayatıma farklı perspektifler katarken yaratıcılığımı besliyor. Bu hobiler, teknoloji ve meslek hayatımdaki yoğunluğu dengeliyor.
              </p>
            </div>
          </div>

          <div className="cyber-card hover:scale-[1.02] transition-transform">
            <h3 className="cyber-heading text-xl mb-3 text-[#0ff]">Yaklaşımım</h3>
            <p className="text-gray-300 leading-relaxed">
              Veteriner hekimlik eğitimimden gelen analitik düşünce yapısını, teknoloji tutkumla birleştirerek özgün çözümler üretiyorum. Yapay zeka ve bilgisayarlı görü teknolojilerinin geleceğini şekillendirmeye katkıda bulunmayı hedefliyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card hover:scale-[1.02] transition-transform">
              <h3 className="cyber-heading text-xl mb-3 text-[#ff2b9d]">Teknolojiler</h3>
              <ul className="space-y-2 text-gray-300">
                <li>⚡ Full Stack Web Development</li>
                <li>🤖 AI & Machine Learning</li>
                <li>👁️ Computer Vision</li>
                <li>🎵 Digital Audio & Music Production</li>
                <li>🔧 Problem Solving & Innovation</li>
              </ul>
            </div>

            <div className="cyber-card hover:scale-[1.02] transition-transform">
              <h3 className="cyber-heading text-xl mb-3 text-[#0ff]">İlgi Alanları</h3>
              <ul className="space-y-2 text-gray-300">
                <li>🎓 Sürekli Öğrenme</li>
                <li>🎶 Müzik Prodüksiyonu</li>
                <li>🔬 Veteriner Hekimlik</li>
                <li>💻 Modern Teknolojiler</li>
                <li>🌟 Yenilikçi Projeler</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
