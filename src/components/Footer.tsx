import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Settings } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#12121a] cyber-border">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Sosyal medya linkleri */}
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
          </div>

          {/* Admin linki */}
          <Link
            to="/admin/login"
            className="flex items-center text-gray-400 hover:text-[#0ff] transition-colors duration-200"
          >
            <Settings className="w-4 h-4 mr-1" />
            <span className="text-sm">Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

// Sosyal medya linki bileşeni
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#0ff] transition-colors duration-200"
  >
    {icon}
  </a>
);
