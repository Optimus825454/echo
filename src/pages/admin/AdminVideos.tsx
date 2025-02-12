import { useState, useEffect } from 'react';
import { Video } from '../../types';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface FormErrors {
  title?: string;
  embedUrl?: string;
  description?: string;
}

export function AdminVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    embedUrl: '',
    description: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    const storedVideos = localStorage.getItem('videos');
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Başlık zorunludur';
    } else if (formData.title.length < 3) {
      errors.title = 'Başlık en az 3 karakter olmalıdır';
    }

    if (!formData.embedUrl.trim()) {
      errors.embedUrl = 'Video URL zorunludur';
    } else if (!isValidYouTubeUrl(formData.embedUrl)) {
      errors.embedUrl = 'Geçerli bir YouTube embed URL\'si giriniz';
    }

    if (!formData.description.trim()) {
      errors.description = 'Açıklama zorunludur';
    } else if (formData.description.length < 20) {
      errors.description = 'Açıklama en az 20 karakter olmalıdır';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidYouTubeUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname === 'www.youtube.com' && urlObj.pathname.includes('/embed/');
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newVideo: Video = {
      id: editingVideo?.id || Date.now().toString(),
      ...formData,
      date: editingVideo?.date || new Date().toISOString(),
    };

    let updatedVideos;
    if (editingVideo) {
      updatedVideos = videos.map((v) =>
        v.id === editingVideo.id ? newVideo : v
      );
    } else {
      updatedVideos = [...videos, newVideo];
    }

    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
    resetForm();
  };

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      embedUrl: video.embedUrl,
      description: video.description,
    });
  };

  const handleDelete = (id: string) => {
    const updatedVideos = videos.filter((v) => v.id !== id);
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const resetForm = () => {
    setEditingVideo(null);
    setFormData({
      title: '',
      embedUrl: '',
      description: '',
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Video Yönetimi</h1>
      
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
            />
            {formErrors.title && (
              <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Video Embed URL
            </label>
            <input
              type="url"
              value={formData.embedUrl}
              onChange={(e) => setFormData({ ...formData, embedUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="https://www.youtube.com/embed/..."
              required
            />
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
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              {editingVideo ? 'Güncelle' : 'Ekle'}
            </button>
            {editingVideo && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
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
              {videos.map((video) => (
                <tr key={video.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{video.title}</td>
                  <td className="px-6 py-4">{video.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(video.date).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(video)}
                      className="text-blue-600 hover:text-blue-800 mr-2"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(video.id)}
                      className="text-red-600 hover:text-red-800"
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
