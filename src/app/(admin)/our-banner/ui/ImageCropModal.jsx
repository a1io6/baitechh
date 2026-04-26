import { useState, useCallback, useEffect } from "react";
import { X, Camera, Trash2, Plus } from "lucide-react";
import Dropzone from "react-dropzone";

const CATEGORIES = [
  { id: 'main', label: 'Главный баннер' },
  { id: 'event', label: 'Мероприятие' },
  { id: 'courses', label: 'Курсы' },
  { id: 'solution', label: 'Решение' },
  { id: 'certificates_and_licenses', label: 'Сертификаты и лицензии' },
  { id: 'company', label: 'О компании' },
];

const MAX_SOLUTION_IMAGES = 5;

// Компонент для одного превью-изображения
const ImagePreviewItem = ({ previewUrl, file, existingId, onRemove, index }) => (
  <div className="relative group aspect-video bg-gray-900 rounded-xl overflow-hidden">
    <img src={previewUrl} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
      <button
        onClick={() => onRemove(index)}
        className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600"
      >
        <Trash2 size={14} />
      </button>
    </div>
    {file instanceof File && (
      <span className="absolute bottom-1 left-1 text-[10px] bg-black/60 text-white rounded px-1 max-w-[90%] truncate">
        {file.name}
      </span>
    )}
    {existingId && (
      <span className="absolute top-1 left-1 text-[10px] bg-blue-600/80 text-white rounded px-1">
        сохранено
      </span>
    )}
  </div>
);

const ImageCropModal = ({ isOpen, setIsOpen, onSave, category, isUploading, initialData }) => {
  const [zoom, setZoom] = useState(50);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category || "main");

  // Для одиночного режима (не solution)
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Для мульти-режима (solution)
  // Каждый элемент: { file: File | null, previewUrl: string, existingId: number | null }
  const [multiImages, setMultiImages] = useState([]);

  const isSolution = selectedCategory === "solution";

  useEffect(() => {
    if (initialData && isOpen) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      const cat = initialData.category || category || "main";
      setSelectedCategory(cat);
      setZoom(initialData.zoom || 50);

      if (cat === "solution") {
        // Инициализируем мультиизображения из existing_images
        if (initialData.existing_images?.length) {
          setMultiImages(
            initialData.existing_images.map((img) => ({
              file: null,
              previewUrl: img.image,
              existingId: img.id,
            }))
          );
        } else if (initialData.image_url || initialData.image) {
          setMultiImages([{
            file: null,
            previewUrl: initialData.image_url || initialData.image,
            existingId: null,
          }]);
        }
      } else {
        // Одиночный режим
        if (initialData.image_url || initialData.image) {
          setPreviewUrl(initialData.image_url || initialData.image);
          setSelectedImage(true);
        }
      }
    }
  }, [initialData, isOpen, category]);

  const handleClose = () => {
    if (previewUrl?.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    multiImages.forEach((img) => {
      if (img.previewUrl?.startsWith('blob:')) URL.revokeObjectURL(img.previewUrl);
    });
    setSelectedImage(null);
    setPreviewUrl(null);
    setMultiImages([]);
    setTitle("");
    setDescription("");
    setZoom(50);
    setIsOpen(false);
  };

  // --- Одиночный режим ---
  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file?.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, []);

  const removeImage = () => {
    if (previewUrl?.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  // --- Мульти-режим (solution) ---
  const handleMultiDrop = useCallback((acceptedFiles) => {
    setMultiImages((prev) => {
      const remaining = MAX_SOLUTION_IMAGES - prev.length;
      const toAdd = acceptedFiles
        .filter((f) => f.type.startsWith('image/'))
        .slice(0, remaining)
        .map((file) => ({
          file,
          previewUrl: URL.createObjectURL(file),
          existingId: null,
        }));
      return [...prev, ...toAdd];
    });
  }, []);

  const removeMultiImage = (index) => {
    setMultiImages((prev) => {
      const item = prev[index];
      if (item.previewUrl?.startsWith('blob:')) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((_, i) => i !== index);
    });
  };

  // --- Сохранение ---
  const handleSave = async () => {
    if (isSolution) {
      if (multiImages.length === 0) {
        alert('Пожалуйста, добавьте хотя бы одно изображение');
        return;
      }
      const newFiles = multiImages.filter((img) => img.file instanceof File).map((img) => img.file);
      const keepIds = multiImages.filter((img) => img.existingId).map((img) => img.existingId);

      const bannerData = {
        title: title.trim(),
        description: description.trim(),
        category: selectedCategory,
        images: newFiles.length > 0 ? newFiles : undefined,
        keep_image_ids: keepIds,
        zoom,
      };
      await onSave(bannerData);
      handleClose();
    } else {
      if (!selectedImage) {
        alert('Пожалуйста, выберите изображение');
        return;
      }
      const bannerData = {
        title: title.trim(),
        description: description.trim(),
        category: selectedCategory,
        images: selectedImage instanceof File ? [selectedImage] : undefined,
        zoom,
      };
      await onSave(bannerData);
      handleClose();
    }
  };

  // Показываем начальный экран загрузки (одиночный режим)
  const showSingleDropzone = !isSolution && !selectedImage;
  // Для solution — всегда показываем форму (зона добавления внутри)
  const showForm = isSolution ? true : (isOpen && selectedImage && previewUrl);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full max-w-[1024px] mx-auto">
      {/* Одиночный дропзон (не solution) */}
      {showSingleDropzone && (
        <div className="w-full max-w-2xl p-[20px] bg-white rounded-2xl shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {initialData ? 'Изменить изображение' : 'Загрузите изображение'}
          </h2>
          <Dropzone onDrop={handleDrop} multiple={false} accept={{ 'image/*': [] }}>
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div
                {...getRootProps()}
                className={`w-full border-2 border-dashed cursor-pointer hover:border-blue-500 rounded-3xl transition-all p-2 flex items-center flex-col gap-3 text-center justify-center h-[400px] bg-gray-50
                  ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
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

      {/* Форма редактирования */}
      {showForm && (
        <div className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden p-[20px]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                {initialData ? 'Редактирование баннера' : 'Настройка баннера'}
              </h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>

            <div className="px-6 py-4 space-y-4 max-h-[65vh] overflow-y-auto">
              {/* Категория */}
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

              {/* Название */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название баннера (необязательно)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isUploading}
                />
              </div>

              {/* Описание */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
                  rows={2}
                />
              </div>

              {/* ===== SOLUTION: мульти-изображения ===== */}
              {isSolution && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Изображения ({multiImages.length}/{MAX_SOLUTION_IMAGES})
                    </label>
                    {multiImages.length > 0 && multiImages.length < MAX_SOLUTION_IMAGES && (
                      <span className="text-xs text-gray-400">Можно добавить ещё {MAX_SOLUTION_IMAGES - multiImages.length}</span>
                    )}
                  </div>

                  {/* Сетка превью */}
                  {multiImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {multiImages.map((img, index) => (
                        <ImagePreviewItem
                          key={index}
                          index={index}
                          previewUrl={img.previewUrl}
                          file={img.file}
                          existingId={img.existingId}
                          onRemove={removeMultiImage}
                        />
                      ))}
                    </div>
                  )}

                  {/* Дропзон добавления (если лимит не достигнут) */}
                  {multiImages.length < MAX_SOLUTION_IMAGES && (
                    <Dropzone
                      onDrop={handleMultiDrop}
                      multiple={true}
                      accept={{ 'image/*': [] }}
                      maxFiles={MAX_SOLUTION_IMAGES - multiImages.length}
                    >
                      {({ getRootProps, getInputProps, isDragActive }) => (
                        <div
                          {...getRootProps()}
                          className={`w-full border-2 border-dashed cursor-pointer rounded-xl transition-all p-4 flex items-center flex-col gap-2 text-center justify-center h-[120px] bg-gray-50
                            ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                        >
                          <input {...getInputProps()} />
                          <Plus className="text-gray-400" size={28} />
                          <p className="text-sm text-gray-500">
                            {multiImages.length === 0
                              ? 'Добавьте до 5 изображений'
                              : 'Добавить ещё'}
                          </p>
                        </div>
                      )}
                    </Dropzone>
                  )}
                </div>
              )}

              {/* ===== Одиночный режим: превью + зум ===== */}
              {!isSolution && selectedImage && previewUrl && (
                <>
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

                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">Zoom</span>
                    <input
                      type="range" min="0" max="100" value={zoom}
                      onChange={(e) => setZoom(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {selectedImage instanceof File && (
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                      <span className="text-xs truncate flex-1">{selectedImage.name}</span>
                      <button onClick={removeImage} className="text-red-500 ml-2"><Trash2 size={16} /></button>
                    </div>
                  )}
                </>
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