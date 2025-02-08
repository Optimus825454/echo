import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, FileText, Video, LogOut } from 'lucide-react';

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="flex-1">
          <Link
            to="/admin"
            className={`flex items-center px-4 py-2 text-gray-700 ${
              isActive('/admin') ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link
            to="/admin/projects"
            className={`flex items-center px-4 py-2 text-gray-700 ${
              isActive('/admin/projects') ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <FolderKanban className="w-5 h-5 mr-2" />
            Projeler
          </Link>
          <Link
            to="/admin/blog"
            className={`flex items-center px-4 py-2 text-gray-700 ${
              isActive('/admin/blog') ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5 mr-2" />
            Blog Yazıları
          </Link>
          <Link
            to="/admin/videos"
            className={`flex items-center px-4 py-2 text-gray-700 ${
              isActive('/admin/videos') ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <Video className="w-5 h-5 mr-2" />
            Videolar
          </Link>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Çıkış Yap
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
