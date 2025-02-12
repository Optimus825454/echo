import { useState, useEffect } from 'react';
import { Project } from '../../types';
import { projectsApi } from '../../services/api';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface FormErrors {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
}

export function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    tags: [] as string[]
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await projectsApi.getAll();
      setProjects(data);
    } catch (err) {
      setError('Projeler yüklenirken bir hata oluştu');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Başlık zorunludur';
    } else if (formData.title.length < 3) {
      errors.title = 'Başlık en az 3 karakter olmalıdır';
    }

    if (!formData.description.trim()) {
      errors.description = 'Açıklama zorunludur';
    } else if (formData.description.length < 10) {
      errors.description = 'Açıklama en az 10 karakter olmalıdır';
    }

    if (formData.image && !isValidUrl(formData.image)) {
      errors.image = 'Geçerli bir URL giriniz';
    }

    if (formData.link && !isValidUrl(formData.link)) {
      errors.link = 'Geçerli bir URL giriniz';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);

    try {
      const projectData = {
        ...formData,
        tags: formData.tags
      };

      if (editingProject) {
        await projectsApi.update(editingProject.id, projectData);
      } else {
        await projectsApi.create(projectData);
      }
      await loadProjects();
      resetForm();
    } catch (err) {
      setError('İşlem sırasında bir hata oluştu');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image || '',
      link: project.link || '',
      tags: project.tags || []
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await projectsApi.delete(id);
      await loadProjects();
    } catch (err) {
      setError('Silme işlemi sırasında bir hata oluştu');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      description: '',
      image: '',
      link: '',
      tags: []
    });
  };

  if (loading && !projects.length) {
    return <div className="text-center py-8">Yükleniyor...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Proje Yönetimi</h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Başlık
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
                setFormErrors({ ...formErrors, title: undefined });
              }}
              className={`w-full px-3 py-2 border rounded-md ${
                formErrors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              required
              disabled={loading}
            />
            {formErrors.title && (
              <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Açıklama
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Görsel URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Proje Link
            </label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Etiketler (virgülle ayırın)
            </label>
            <input
              type="text"
              value={formData.tags.join(', ')}
              onChange={(e) => {
                const tagsArray = e.target.value
                  .split(',')
                  .map(tag => tag.trim())
                  .filter(tag => tag !== '');
                setFormData({ ...formData, tags: tagsArray });
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="React, TypeScript, Tailwind"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              <Plus className="w-4 h-4 mr-2" />
              {editingProject ? 'Güncelle' : 'Ekle'}
            </button>
            {editingProject && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
                disabled={loading}
              >
                İptal
              </button>
            )}
          </div>
        </div>
      </form>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Başlık</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Açıklama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                  <td className="px-6 py-4">{project.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(project.date).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-blue-600 hover:text-blue-800 mr-2 disabled:opacity-50"
                      disabled={loading}
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-red-600 hover:text-red-800 disabled:opacity-50"
                      disabled={loading}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
