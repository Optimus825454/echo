import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Videos } from './pages/Videos';
import { About } from './pages/About';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminProjects } from './pages/admin/AdminProjects';
import { AdminBlog } from './pages/admin/AdminBlog';
import { AdminVideos } from './pages/admin/AdminVideos';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminLogin } from './pages/admin/AdminLogin';
import './index.css';

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="bg-image"></div>
        <Routes>
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="videos" element={<AdminVideos />} />
          </Route>

          {/* Public routes */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projeler" element={<Projects />} />
                    <Route path="/yazilar" element={<Blog />} />
                    <Route path="/videolar" element={<Videos />} />
                    <Route path="/hakkimda" element={<About />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
