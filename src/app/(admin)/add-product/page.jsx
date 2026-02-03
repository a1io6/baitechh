"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/lib/products/hooks/hooks";
import "./AddProduct.scss";

const AddProduct = () => {
  const router = useRouter();
  const { 
    categories, 
    brands, 
    isInitialLoading, 
    addProduct, 
    addCategory, 
    addBrand 
  } = useProducts();

  // Основное состояние формы товара
  const [formData, setFormData] = useState({
    name: "",
    article: "",
    price: "",
    category: "",
    brand: "",
    bonus: "",
    description: "",
    characteristics: "",
    images: [null, null, null, null], // Массив для объектов File
  });

  // Состояния для модальных окон (Категории/Бренды)
  const [modalType, setModalType] = useState(null); // 'category' | 'brand' | null
  const [modalData, setModalData] = useState({ name: "", description: "" });
  const [isSubmittingModal, setIsSubmittingModal] = useState(false);

  // Обработка текстовых полей
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "bonus") {
      const num = Number(value);
      if (num > 9999 || num < 0) return;
      setFormData((prev) => ({ ...prev, bonus: num }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Обработка загрузки файлов
  const handleImageUpload = (e, index) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImages = [...formData.images];
      newImages[index] = file;
      setFormData((prev) => ({ ...prev, images: newImages }));
    }
  };

  // Удаление выбранного фото
  const removeImage = (index) => {
    const newImages = [...formData.images];
    newImages[index] = null;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  // Сохранение нового бренда или категории
  const handleAddQuickInfo = async () => {
    if (!modalData.name.trim()) return alert("Название обязательно");
    
    setIsSubmittingModal(true);
    try {
      if (modalType === 'category') {
        await addCategory({ 
          name: modalData.name, 
          description: modalData.description, 
          root: null 
        });
      } else if (modalType === 'brand') {
        await addBrand({ 
          name: modalData.name, 
          description: modalData.description 
        });
      }
      setModalType(null);
      setModalData({ name: "", description: "" });
    } catch (error) {
      console.error("Ошибка при создании:", error);
    } finally {
      setIsSubmittingModal(false);
    }
  };

  // Финальная отправка товара
  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("article", formData.article);
    payload.append("price", formData.price);
    payload.append("category", formData.category);
    payload.append("brand", formData.brand);
    payload.append("bonus", formData.bonus);
    payload.append("description", formData.description);
    payload.append("characteristics", formData.characteristics);
    payload.append("is_available", "true");

    formData.images.forEach((file) => {
      if (file) payload.append("images", file);
    });

    try {
      await addProduct(payload);
      router.push("/admin/products"); // Или ваш путь к списку
    } catch (err) {
      console.error("Ошибка публикации:", err);
    }
  };

  if (isInitialLoading) return <div className="loader"/>;

  return (
    <div className="add-product-page">
      {/* --- МОДАЛЬНОЕ ОКНО (Category/Brand) --- */}
      {modalType && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Добавить {modalType === 'category' ? 'категорию' : 'бренд'}</h3>
            <div className="modal-fields">
              <label>Название *</label>
              <input
                type="text"
                value={modalData.name}
                onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                placeholder="Введите название..."
              />
              <label>Описание</label>
              <textarea
                value={modalData.description}
                onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                placeholder="Необязательное описание..."
              />
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setModalType(null)}>Отмена</button>
              <button 
                className="confirm-btn" 
                onClick={handleAddQuickInfo}
                disabled={isSubmittingModal}
              >
                {isSubmittingModal ? "..." : "Добавить"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- ШАПКА --- */}
      <div className="page-header">
        <button className="back-btn" onClick={() => router.back()}>
          ← Назад
        </button>
        <h2>Добавление товара</h2>
      </div>

      <div className="form-container">
        {/* СЕКЦИЯ ИЗОБРАЖЕНИЙ */}
        <div className="image-upload-section">
          <div className="thumbnail-grid">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="thumbnail-slot">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, idx)}
                  id={`thumb-${idx}`}
                  style={{ display: "none" }}
                />
                <label htmlFor={`thumb-${idx}`}>
                  {formData.images[idx] ? (
                    <div className="preview-container">
                      <img src={URL.createObjectURL(formData.images[idx])} alt="Превью" />
                      <div className="remove-overlay" onClick={(e) => { e.preventDefault(); removeImage(idx); }}>✕</div>
                    </div>
                  ) : (
                    <div className="upload-placeholder">📷</div>
                  )}
                </label>
              </div>
            ))}
          </div>

          <div className="main-image-slot">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 3)}
              id="main-image"
              style={{ display: "none" }}
            />
            <label htmlFor="main-image">
              {formData.images[3] ? (
                <div className="preview-container main">
                  <img src={URL.createObjectURL(formData.images[3])} alt="Главное фото" />
                  <div className="remove-overlay" onClick={(e) => { e.preventDefault(); removeImage(3); }}>✕</div>
                </div>
              ) : (
                <div className="upload-placeholder-main">Загрузить главное фото</div>
              )}
            </label>
          </div>
        </div>

        {/* ОСНОВНЫЕ ПОЛЯ */}
        <div className="form-grid">
          <div className="form-group">
            <label>Название</label>
            <input name="name" type="text" value={formData.name} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Артикул</label>
            <input name="article" type="text" value={formData.article} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Цена (сом)</label>
            <input name="price" type="number" value={formData.price} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Категория</label>
            <div className="select-wrapper">
              <select name="category" value={formData.category} onChange={handleInputChange}>
                <option value="">Выберите категорию</option>
                {categories?.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <button type="button" className="add-small-btn" onClick={() => setModalType('category')}>+</button>
            </div>
          </div>

          <div className="form-group">
            <label>Бренд</label>
            <div className="select-wrapper">
              <select name="brand" value={formData.brand} onChange={handleInputChange}>
                <option value="">Выберите бренд</option>
                {brands?.map((b) => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
              <button type="button" className="add-small-btn" onClick={() => setModalType('brand')}>+</button>
            </div>
          </div>

          <div className="form-group">
            <label>Бонусные баллы (%)</label>
            <input name="bonus" type="number" value={formData.bonus} onChange={handleInputChange} />
          </div>
        </div>

        <div className="full-width-fields">
          <div className="form-group">
            <label>Описание</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Характеристики</label>
            <textarea name="characteristics" value={formData.characteristics} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={() => router.back()}>
            Отмена
          </button>
          <button
            type="button"
            className="submit-btn"
            onClick={handleSubmit}
            disabled={addProduct.isPending}
          >
            {addProduct.isPending ? "Публикация..." : "Опубликовать"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;