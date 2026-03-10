"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useProducts } from "@/lib/products/hooks/hooks";
import "./EditProduct.scss";
import Image from "next/image";

const EditProduct = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const { products, categories, brands, updateProduct, isInitialLoading, isLoading } = useProducts();

  const [formData, setFormData] = useState({
    name: "",
    article: "",
    price: "",
    category: "",
    brand: "",
    bonus: "",
    description: "",
    characteristics: "",
    is_available: true,
  });

  const [imageFiles, setImageFiles] = useState([null, null, null, null]);
  const [previews, setPreviews] = useState([null, null, null, null]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id && products) {
      const found = products.find((p) => String(p.id) === String(id));
      if (found) {
        setFormData({
          name: found.name || "",
          article: found.article || "",
          price: found.price || "",
          category: found.category || "",
          brand: found.brand || "",
          bonus: found.bonus || "",
          description: found.description || "",
          characteristics: found.characteristics || "",
          is_available: found.is_available ?? true,
        });

        if (found.existing_images && found.existing_images.length > 0) {
          const loadedPreviews = [null, null, null, null];
          found.existing_images.forEach((img, idx) => {
            if (idx < 4) loadedPreviews[idx] = img.image;
          });
          setPreviews(loadedPreviews);
        }
      }
    }
  }, [id, products]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files?.[0];
    if (file) {
      const newFiles = [...imageFiles];
      newFiles[index] = file;
      setImageFiles(newFiles);

      const newPreviews = [...previews];
      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formDataPayload = new FormData();
    formDataPayload.append("name", formData.name);
    formDataPayload.append("article", formData.article);
    formDataPayload.append("price", formData.price);
    formDataPayload.append("category", formData.category);
    formDataPayload.append("brand", formData.brand);
    formDataPayload.append("bonus", formData.bonus);
    formDataPayload.append("description", formData.description);
    formDataPayload.append("characteristics", formData.characteristics);
    formDataPayload.append("is_available", String(formData.is_available));

    imageFiles.forEach((file) => {
      if (file) formDataPayload.append("images", file);
    });

    try {
      await updateProduct({ id, payload: formDataPayload });
      router.push("/camera");
    } catch (err) {
      console.error("Ошибка при обновлении:", err);
      alert("Ошибка при сохранении данных.");
    } finally {
      setSaving(false);
    }
  };

  if (isInitialLoading || isLoading) return <div className="loader"/>;

  return (
    <div className="edit-product-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => router.back()}>← Назад</button>
        <h2>Редактирование товара</h2>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="image-upload-section">
          <div className="thumbnail-grid">
            {[0, 1, 2]?.map((idx) => (
              <div key={idx} className="thumbnail-slot">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, idx)}
                  id={`thumb-${idx}`}
                  hidden
                />
                <label htmlFor={`thumb-${idx}`}>
                  {previews[idx] ? (
                    <Image src={previews[idx]} alt="Превью" />
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
              hidden
            />
            <label htmlFor="main-image">
              {previews[3] ? (
                <Image src={previews[3]} alt="Главное фото" />
              ) : (
                <div className="upload-placeholder-main">Загрузить главное фото</div>
              )}
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Название</label>
          <input name="name" type="text" value={formData.name} onChange={handleInputChange} />
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Артикул</label>
            <input name="article" type="text" value={formData.article} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Цена (сом)</label>
            <input name="price" type="number" value={formData.price} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Категория</label>
            <select name="category" value={formData.category} onChange={handleInputChange}>
              <option value="">Выберите категорию</option>
              {categories?.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Бренд</label>
            <select name="brand" value={formData.brand} onChange={handleInputChange}>
              <option value="">Выберите бренд</option>
              {brands?.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Описание</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              name="is_available"
              type="checkbox"
              checked={formData.is_available}
              onChange={handleInputChange}
            />
            <span>В наличии</span>
          </label>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={() => router.back()}>Отмена</button>
          <button type="submit" className="submit-btn" disabled={saving}>
            {saving ? "Сохранение..." : "Сохранить изменения"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;