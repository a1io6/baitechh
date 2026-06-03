import { useState, useCallback, useEffect } from "react";
import { X, Camera, Trash2, Plus } from "lucide-react";
import Dropzone from "react-dropzone";

const CATEGORIES = [
  { id: 'main', label: 'Главный баннер' },
  { id: 'event', label: 'Мероприятие' },
  { id: 'certificates_and_licenses', label: 'Сертификаты и лицензии' },
];

// Названия категорий товаров для фильтрации баннеров
const BANNER_TITLES = [
  { id: '', label: 'Без категории (обычный)' },
  { id: 'Комплектующие ПК', label: 'Комплектующие ПК' },
  { id: 'Видеонаблюдение', label: 'Видеонаблюдение' },
];

const MAX_SOLUTION_IMAGES = 5;

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
  const [bannerTitle, setBannerTitle] = useState(""); // для фильтрации по категории товара
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category || "main");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [multiImages, setMultiImages] = useState([]);

  const isSolution = selectedCategory === "solution";
  const isEditing = Boolean(initialData);

  useEffect(() => {
    if (initialData && isOpen) {
      setDescription(initialData.description || "");
      const cat = initialData.category || category || "main";
      setSelectedCategory(cat);
      setZoom(initialData.zoom || 50);

      // Определяем bannerTitle из title
      const existingTitle = initialData.title || "";
      const matchedTitle = BANNER_TITLES.find(
        (t) => t.id && t.id.toLowerCase() === existingTitle.toLowerCase()
      );
      if (matchedTitle) {
        setBannerTitle(matchedTitle.id);
        setTitle("");
      } else {
        setBannerTitle("");
        setTitle(existingTitle);
      }

      if (cat === "solution") {
        if (initialData.existing_images?.length) {
          setMultiImages(
            initialData.existing_images.map((img) => ({
              file: null,
              previewUrl: img.image,
              existingId: img.id,
            }))
          );
        }
      } else {
        const imgUrl = initialData.existing_images?.[0]?.image || initialData.image_url || initialData.image;
        if (imgUrl) {
          setPreviewUrl(imgUrl);
          setSelectedImage(true); // уже есть фото
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
    setBannerTitle("");
    setDescription("");
    setZoom(50);
    setIsOpen(false);
  };

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file?.type.startsWith('image/')) {
      setSelectedImage(file);
      if (previewUrl?.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, [previewUrl]);

  const removeImage = () => {
    if (previewUrl?.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    setSelectedImage(null);
    setPreviewUrl(null);
  };

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

  const handleSave = async () => {
    // Итоговый title — если выбрана категория товара, берём её, иначе обычный title
    const finalTitle = bannerTitle || title.trim();

    if (isSolution) {
      if (multiImages.length === 0) {
        alert('Пожалуйста, добавьте хотя бы одно изображение');
        return;
      }
      const newFiles = multiImages.filter((img) => img.file instanceof File).map((img) => img.file);
      const keepIds = multiImages.filter((img) => img.existingId).map((img) => img.existingId);
      await onSave({
        title: finalTitle,
        description: description.trim(),
        category: selectedCategory,
        images: newFiles.length > 0 ? newFiles : undefined,
        keep_image_ids: keepIds,
        zoom,
      });
      handleClose();
    } else {
      if (!selectedImage && !isEditing) {
        alert('Пожалуйста, выберите изображение');
        return;
      }
      await onSave({
        title: finalTitle,
        description: description.trim(),
        category: selectedCategory,
        images: selectedImage instanceof File ? [selectedImage] : undefined,
        zoom,
      });
      handleClose();
    }
  };

  // При редактировании сразу показываем форму
  const showForm = isSolution || isEditing || (isOpen && selectedImage && previewUrl);
  const showSingleDropzone = !isSolution && !isEditing && !selectedImage;

  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full max-w-[1024px] mx-auto">
      {showSingleDropzone && (
        <div className="w-full max-w-2xl p-[20px] bg-white rounded-2xl shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Загрузите изображение</h2>
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
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden p-[20px]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                {isEditing ? 'Редактирование баннера' : 'Настройка баннера'}
              </h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>

            <div className="px-6 py-4 space-y-4 max-h-[65vh] overflow-y-auto">
              {/* Категория баннера */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Категория баннера *</label>
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

              {/* Категория товара (для фильтрации на главной) */}
              {selectedCategory === 'main' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Показывать при выборе категории товара
                  </label>
                  <select
                    value={bannerTitle}
                    onChange={(e) => setBannerTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                  >
                    {BANNER_TITLES.map((t) => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-400 mt-1">
                    Выберите категорию чтобы баннер показывался при нажатии на неё в навбаре
                  </p>
                </div>
              )}

              {/* Обычное название (если не выбрана категория товара) */}
              {!bannerTitle && (
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
              )}

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

              {/* Solution мульти-изображения */}
              {isSolution && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Изображения ({multiImages.length}/{MAX_SOLUTION_IMAGES})
                    </label>
                  </div>
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
                  {multiImages.length < MAX_SOLUTION_IMAGES && (
                    <Dropzone onDrop={handleMultiDrop} multiple accept={{ 'image/*': [] }} maxFiles={MAX_SOLUTION_IMAGES - multiImages.length}>
                      {({ getRootProps, getInputProps, isDragActive }) => (
                        <div
                          {...getRootProps()}
                          className={`w-full border-2 border-dashed cursor-pointer rounded-xl transition-all p-4 flex items-center flex-col gap-2 text-center justify-center h-[120px] bg-gray-50
                            ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                        >
                          <input {...getInputProps()} />
                          <Plus className="text-gray-400" size={28} />
                          <p className="text-sm text-gray-500">{multiImages.length === 0 ? 'Добавьте до 5 изображений' : 'Добавить ещё'}</p>
                        </div>
                      )}
                    </Dropzone>
                  )}
                </div>
              )}

              {/* Одиночный режим: текущее фото + возможность заменить */}
              {!isSolution && (
                <div>
                  {previewUrl && (
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Текущее фото</label>
                      <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden">
                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                        {selectedImage instanceof File && (
                          <button onClick={removeImage} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1">
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Дропзон для замены фото */}
                  <Dropzone onDrop={handleDrop} multiple={false} accept={{ 'image/*': [] }}>
                    {({ getRootProps, getInputProps, isDragActive }) => (
                      <div
                        {...getRootProps()}
                        className={`w-full border-2 border-dashed cursor-pointer rounded-xl transition-all p-3 flex items-center gap-3 justify-center h-[60px] bg-gray-50
                          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                      >
                        <input {...getInputProps()} />
                        <Camera className="text-gray-400" size={20} />
                        <p className="text-sm text-gray-500">{previewUrl ? 'Заменить фото' : 'Выбрать фото'}</p>
                      </div>
                    )}
                  </Dropzone>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
              <button onClick={handleClose} className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Отмена</button>
              <button
                onClick={handleSave}
                className="px-6 py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium disabled:opacity-50"
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