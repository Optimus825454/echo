import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-[#12121a] backdrop-blur-sm bg-opacity-90 z-50 cyber-border">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="cyber-heading text-xl font-bold neon-text">
            Erkan ERDEM
          </Link>

          {/* Mobil menü butonu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#0ff]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menü */}
          <div className="hidden md:flex space-x-4">
            <NavLinks isActive={isActive} />
          </div>
        </div>

        {/* Mobil menü */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-2`}>
          <div className="flex flex-col space-y-2">
            <NavLinks isActive={isActive} />
          </div>
        </div>
      </div>
    </nav>
  );
}

// NavLinks bileşeni
const NavLinks = ({ isActive }: { isActive: (path: string) => boolean }) => {
  const links = [
    { path: '/projeler', text: 'Projeler' },
    { path: '/yazilar', text: 'Yazılar' },
    { path: '/videolar', text: 'Videolar' },
    { path: '/hakkimda', text: 'Hakkımda' },
  ];

  return (
    <>
      {links.map(({ path, text }) => (
        <Link
          key={path}
          to={path}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            isActive(path)
              ? 'bg-[#1a1a2e] text-[#0ff] shadow-[0_0_10px_rgba(0,255,255,0.2)]'
              : 'text-gray-300 hover:text-[#0ff] hover:bg-[#1a1a2e]'
          }`}
        >
          {text}
        </Link>
      ))}
    </>
  );
};
