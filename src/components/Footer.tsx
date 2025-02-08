import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Settings } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#12121a] cyber-border">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0ff] transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0ff] transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0ff] transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
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
