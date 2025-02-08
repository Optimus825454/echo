import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-[#12121a] backdrop-blur-sm bg-opacity-90 z-50 cyber-border">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="cyber-heading text-xl font-bold neon-text">
            Erkan ERDEM
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/projeler"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/projeler')
                  ? 'bg-[#1a1a2e] text-[#0ff] shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                  : 'text-gray-300 hover:text-[#0ff] hover:bg-[#1a1a2e]'
              }`}
            >
              Projeler
            </Link>
            <Link
              to="/yazilar"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/yazilar')
                  ? 'bg-[#1a1a2e] text-[#0ff] shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                  : 'text-gray-300 hover:text-[#0ff] hover:bg-[#1a1a2e]'
              }`}
            >
              Yazılar
            </Link>
            <Link
              to="/videolar"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/videolar')
                  ? 'bg-[#1a1a2e] text-[#0ff] shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                  : 'text-gray-300 hover:text-[#0ff] hover:bg-[#1a1a2e]'
              }`}
            >
              Videolar
            </Link>
            <Link
              to="/hakkimda"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/hakkimda')
                  ? 'bg-[#1a1a2e] text-[#0ff] shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                  : 'text-gray-300 hover:text-[#0ff] hover:bg-[#1a1a2e]'
              }`}
            >
              Hakkımda
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
