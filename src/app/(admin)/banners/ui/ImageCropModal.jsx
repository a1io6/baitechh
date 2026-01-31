import { useState, useCallback } from "react";
import { X, Camera, Trash2 } from "lucide-react";
import Dropzone from "react-dropzone";

// Добавляем список категорий для выбора
const CATEGORIES = [
  { id: 'main', label: 'Главный баннер' },
  { id: 'event', label: 'Мероприятие' },
  { id: 'courses', label: 'Курсы' },
  { id: 'solution', label: 'Решение' },
  { id: 'certificates_and_licenses', label: 'Сертификаты и лицензии' },
  { id: 'company', label: 'О компании' },
];

const ImageCropModal = ({ isOpen, setIsOpen, onSave, category, isUploading }) => {
  const [zoom, setZoom] = useState(50);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Создаем стейт для выбранной категории
  const [selectedCategory, setSelectedCategory] = useState(category || "main");

  const handleClose = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
    setTitle("");
    setDescription("");
    setZoom(50);
    setIsOpen(false);
  };

  const handleSave = async () => {
    if (!selectedImage) {
      alert('Пожалуйста, выберите изображение');
      return;
    }

    if (!title.trim()) {
      alert('Пожалуйста, введите название баннера');
      return;
    }

    const bannerData = {
      title: title.trim(),
      description: description.trim(),
      category: selectedCategory, // Используем выбранную из списка категорию
      images: [selectedImage],
      zoom: zoom 
    };

    await onSave(bannerData);

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
    setTitle("");
    setDescription("");
    setZoom(50);
  };

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setIsOpen(true);
    } else {
      alert('Пожалуйста, выберите изображение');
    }
  }, [setIsOpen]);

  const removeImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
    setTitle("");
    setDescription("");
    setZoom(50);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full max-w-[1024px] mx-auto ">
      {!selectedImage && (
        <div className="w-full max-w-2xl p-[20px] bg-white rounded-2xl shadow-2xl ">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Загрузите изображение
          </h2>
          <Dropzone onDrop={handleDrop} multiple={false} accept={{ 'image/*': [] }}>
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div
                className={`w-full border-2 border-dashed cursor-pointer hover:border-blue-500 rounded-3xl transition-all p-2 flex items-center flex-col gap-3 text-center justify-center h-[400px] bg-gray-50
                  ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                `}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Camera className="text-gray-400 mb-2" size={64} />
                {isDragActive ? (
                  <p className="text-blue-600 font-medium">Отпустите изображение здесь...</p>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-2">
                      Перетащите изображение сюда или
                    </p>
                    <span className="text-blue-600 font-semibold">Выберите файл</span>
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        </div>
      )}

      {isOpen && previewUrl && (
        <div className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden p-[20px]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">обрезать изображение</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                disabled={isUploading}
              >
                <X size={24} />
              </button>
            </div>

            <div className="px-6 py-4 space-y-4 border-b border-gray-200">
              {/* ПОЛЕ ВЫБОРА КАТЕГОРИИ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Категория <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  disabled={isUploading}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название баннера <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isUploading}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Описание (необязательно)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание баннера"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  disabled={isUploading}
                />
              </div>
            </div>

            <div className="p-6 bg-gray-50">
              <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={previewUrl}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div 
                    className="border-2 border-white rounded-xl shadow-2xl bg-white/5"
                    style={{
                      width: `${60 + zoom * 0.4}%`,
                      height: `${60 + zoom * 0.4}%`,
                    }}
                  >
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/40 pointer-events-none" style={{ 
                  clipPath: `polygon(
                    0% 0%, 
                    0% 100%, 
                    ${20 - zoom * 0.2}% 100%, 
                    ${20 - zoom * 0.2}% ${20 - zoom * 0.2}%, 
                    ${80 + zoom * 0.2}% ${20 - zoom * 0.2}%, 
                    ${80 + zoom * 0.2}% ${80 + zoom * 0.2}%, 
                    ${20 - zoom * 0.2}% ${80 + zoom * 0.2}%, 
                    ${20 - zoom * 0.2}% 100%, 
                    100% 100%, 
                    100% 0%
                  )`
                }}></div>
              </div>

              <div className="flex items-center gap-4 mt-6 px-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600 flex-shrink-0">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${zoom}%, #d1d5db ${zoom}%, #d1d5db 100%)`
                  }}
                  disabled={isUploading}
                />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600 flex-shrink-0">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {selectedImage && (
                <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 truncate">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {selectedImage.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {Math.round(selectedImage.size / 1024)} KB
                      </p>
                    </div>
                    <button
                      onClick={removeImage}
                      className="ml-3 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                      disabled={isUploading}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 bg-white border-t border-gray-200">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium disabled:opacity-50"
                disabled={isUploading}
              >
                отменить
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isUploading || !title.trim()}
              >
                {isUploading ? 'Загрузка...' : 'сохранить'}
              </button>
            </div>
          </div>

          <style>{`
            .slider::-webkit-slider-thumb {
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #1e40af;
              cursor: pointer;
              border: 3px solid white;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            .slider::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #1e40af;
              cursor: pointer;
              border: 3px solid white;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default ImageCropModal;