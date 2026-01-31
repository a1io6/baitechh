"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/lib/products/hooks/hooks";
import "./AddProduct.scss";

const AddProduct = () => {
  const router = useRouter();
  const { categories, brands, isInitialLoading, addProduct } = useProducts();

  const [formData, setFormData] = useState({
    name: "",
    article: "",
    price: "",
    category: "",
    brand: "",
    bonus: "",
    description: "",
    characteristics: "",
    images: [null, null, null, null], // Здесь теперь будут храниться File объекты
  });


  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // .split(',')[1] удаляет "data:image/jpeg;base64," и оставляет только чистый код
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "bonus") {
      const num = Number(value);
      if (num > 100 || num < 0) return;
      setFormData((prev) => ({ ...prev, bonus: num }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImages = [...formData.images];
      newImages[index] = file; // Сохраняем сам файл
      setFormData((prev) => ({ ...prev, images: newImages }));
    }
  };

const handleSubmit = async () => {
  const formDataPayload = new FormData();
  formDataPayload.append("name", formData.name);
  formDataPayload.append("article", formData.article);
  formDataPayload.append("price", formData.price);
  formDataPayload.append("category", formData.category);
  formDataPayload.append("brand", formData.brand);
  formDataPayload.append("bonus", formData.bonus);
  formDataPayload.append("description", formData.description);
  formDataPayload.append("characteristics", formData.characteristics);
  formDataPayload.append("is_available", "true");

  // Добавляем файлы как объекты File, а не строки
  formData.images.forEach((file) => {
    if (file) formDataPayload.append("images", file);
  });

  await addProduct(formDataPayload);
};

  if (isInitialLoading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="add-product-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => router.back()}>
          ← Назад
        </button>
        <h2>Добавление товара</h2>
      </div>

      <div className="form-container">
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
                    /* Используем URL.createObjectURL только для отображения в браузере */
                    <img
                      src={URL.createObjectURL(formData.images[idx])}
                      alt="Превью"
                    />
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
                <img
                  src={URL.createObjectURL(formData.images[3])}
                  alt="Главное фото"
                />
              ) : (
                <div className="upload-placeholder-main">
                  Загрузить главное фото
                </div>
              )}
            </label>
          </div>
        </div>

        {/* ... Остальные поля (Название, Артикул и т.д. остаются без изменений) ... */}
        <div className="form-group">
          <label>Название</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Артикул</label>
          <input
            name="article"
            type="text"
            value={formData.article}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Цена (сом)</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Категория</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Выберите категорию</option>
            {categories?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Бренд</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
          >
            <option value="">Выберите бренд</option>
            {brands?.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Бонусные баллы</label>
          <input
            name="bonus"
            type="number"
            value={formData.bonus}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group1">
          <label>Описание</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group1">
          <label>Характеристики</label>
          <textarea
            name="characteristics"
            value={formData.characteristics}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => router.back()}
          >
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
