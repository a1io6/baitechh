import { useState, useCallback, useEffect } from "react";
import { X, Camera, Trash2 } from "lucide-react";
import Dropzone from "react-dropzone";

const CATEGORIES = [
  { id: 'main', label: 'Главный баннер' },
  { id: 'event', label: 'Мероприятие' },
  { id: 'courses', label: 'Курсы' },
  { id: 'solution', label: 'Решение' },
  { id: 'certificates_and_licenses', label: 'Сертификаты и лицензии' },
  { id: 'company', label: 'О компании' },
];

const ImageCropModal = ({ isOpen, setIsOpen, onSave, category, isUploading, initialData }) => {
  const [zoom, setZoom] = useState(50);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category || "main");

  // Эффект для инициализации данных при редактировании
  useEffect(() => {
    if (initialData && isOpen) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setSelectedCategory(initialData.category || category || "main");
      setZoom(initialData.zoom || 50);
      if (initialData.image_url || initialData.image) {
        setPreviewUrl(initialData.image_url || initialData.image);
        setSelectedImage(true); 
      }
    }
  }, [initialData, isOpen, category]);

  const handleClose = () => {
    // Чистим только если это был локально созданный Blob URL
    if (previewUrl && previewUrl.startsWith('blob:')) {
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



    const bannerData = {
      title: title.trim(),
      description: description.trim(),
      category: selectedCategory,
      // Если выбрали новый файл, отправляем его. Если нет - поле останется пустым или старым
      images: selectedImage instanceof File ? [selectedImage] : undefined,
      zoom: zoom 
    };

    await onSave(bannerData);
    handleClose();
  };

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, []);

  const removeImage = () => {
    if (previewUrl && previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full max-w-[1024px] mx-auto ">
      {/* Кнопка загрузки показывается, если изображение еще не выбрано */}
      {!selectedImage && (
        <div className="w-full max-w-2xl p-[20px] bg-white rounded-2xl shadow-2xl ">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {initialData ? 'Изменить изображение' : 'Загрузите изображение'}
          </h2>
          <Dropzone onDrop={handleDrop} multiple={false} accept={{ 'image/*': [] }}>
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div
                {...getRootProps()}
                className={`w-full border-2 border-dashed cursor-pointer hover:border-blue-500 rounded-3xl transition-all p-2 flex items-center flex-col gap-3 text-center justify-center h-[400px] bg-gray-50
                  ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                `}
              >
                <input {...getInputProps()} />
                <Camera className="text-gray-400 mb-2" size={64} />
                <p className="text-gray-600">Перетащите фото сюда или нажмите для выбора</p>
              </div>
            )}
          </Dropzone>
          {initialData && (
            <button onClick={() => setIsOpen(false)} className="mt-4 w-full text-gray-500 text-sm">Отмена</button>
          )}
        </div>
      )}

      {/* Форма редактирования данных */}
      {isOpen && selectedImage && previewUrl && (
        <div className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden p-[20px]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                {initialData ? 'Редактирование баннера' : 'Настройка баннера'}
              </h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>

            <div className="px-6 py-4 space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Категория *</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название баннера (необязательно) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Введите название"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isUploading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
                  rows={2}
                />
              </div>

              {/* Превью и Кроп */}
              <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden">
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div 
                    className="border-2 border-white rounded-xl shadow-2xl bg-white/5"
                    style={{
                      width: `${60 + zoom * 0.4}%`,
                      height: `${60 + zoom * 0.4}%`,
                    }}
                  />
                </div>
              </div>

              {/* Зум */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">Zoom</span>
                <input
                  type="range" min="0" max="100" value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Инфо о файле (только если загружен новый) */}
              {selectedImage instanceof File && (
                <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                  <span className="text-xs truncate flex-1">{selectedImage.name}</span>
                  <button onClick={removeImage} className="text-red-500 ml-2"><Trash2 size={16}/></button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
              <button onClick={handleClose} className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Отмена</button>
              <button 
                onClick={handleSave}
                className="px-6 py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isUploading}
              >
                {isUploading ? 'Сохранение...' : 'Сохранить'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCropModal;