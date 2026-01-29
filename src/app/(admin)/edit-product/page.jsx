"use client";

import React, { useState, useEffect } from 'react';
// Импортируем из next/navigation вместо react-router-dom
import { useRouter, useParams } from 'next/navigation';
import './EditProduct.scss';

const EditProduct = () => {
  const params = useParams();
  const id = params.id; // Получаем ID из URL
  const router = useRouter();
  
  const [product, setProduct] = useState({
    name: '',
    price: '',
    article: '',
    category: '',
    brand: '',
    bonus: '',
    description: '',
    specifications: '',
    images: [null, null, null, null],
    mainImage: null
  });

  const [categories, setCategories] = useState(['Камеры', 'Мониторы', 'Аксессуары', 'Кабели']);
  const [brands, setBrands] = useState(['Ductle', 'Dahua', 'Hikvision', 'Samsung']);
  const [newCategory, setNewCategory] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Имитация запроса к API
        setProduct({
          id: id,
          name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
          price: '25000',
          article: '123456',
          category: 'Камеры',
          brand: 'Ductle',
          bonus: '10%',
          description: 'Современная IP-камера для организации системы безопасности на объектах различного типа.',
          specifications: 'Количество: 3 шт.\nВес: 580 г',
          images: [null, null, null, null],
          mainImage: null,
        });
      } catch (error) {
        console.error('Ошибка загрузки товара:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories(prev => [...prev, newCategory.trim()]);
      setProduct(prev => ({ ...prev, category: newCategory.trim() }));
      setNewCategory('');
    }
  };

  const handleAddBrand = () => {
    if (newBrand.trim() && !brands.includes(newBrand.trim())) {
      setBrands(prev => [...prev, newBrand.trim()]);
      setProduct(prev => ({ ...prev, brand: newBrand.trim() }));
      setNewBrand('');
    }
  };

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct(prev => ({ ...prev, mainImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThumbnailUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...product.images];
        newImages[index] = reader.result;
        setProduct(prev => ({ ...prev, images: newImages }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...product.images];
    newImages[index] = null;
    setProduct(prev => ({ ...prev, images: newImages }));
  };

  const handleRemoveMainImage = () => {
    setProduct(prev => ({ ...prev, mainImage: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!product.name.trim()) newErrors.name = 'Название товара обязательно';
    if (!product.price.trim()) {
        newErrors.price = 'Цена обязательна';
    } else if (isNaN(Number(product.price.replace(/\s/g, '')))) {
        newErrors.price = 'Цена должна быть числом';
    }
    if (!product.article.trim()) newErrors.article = 'Артикул обязателен';
    if (!product.category) newErrors.category = 'Категория обязательна';
    if (!product.brand) newErrors.brand = 'Бренд обязателен';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setSaving(true);
    try {
      // Имитация сохранения
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Товар успешно обновлен!');
      router.push('/admin/camera-catalog');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      alert('Ошибка при сохранении товара');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (confirm('Вы уверены? Все несохраненные изменения будут потеряны.')) {
      router.push('/admin/camera-catalog');
    }
  };

  return (
    <div className="edit-product-page">
      <div className="page-header">
        <button type="button" className="back-btn" onClick={handleCancel}>
          Назад
        </button>
        <h2>Редактировать товар</h2>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="image-upload-section">
          <div className="thumbnail-grid">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="thumbnail-slot">
                {product.images[index] ? (
                  <div className="uploaded-image">
                    <img src={product.images[index]} alt={`Миниатюра ${index + 1}`} />
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label htmlFor={`thumbnail-${index}`}>
                    <div className="upload-placeholder">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <input
                      id={`thumbnail-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleThumbnailUpload(index, e)}
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>

          <div className="main-image-slot">
            {product.mainImage ? (
              <div className="uploaded-image">
                <img src={product.mainImage} alt="Основное изображение" />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={handleRemoveMainImage}
                >
                  ×
                </button>
              </div>
            ) : (
              <label htmlFor="main-image">
                <div className="upload-placeholder-main">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p>Загрузить основное изображение</p>
                  <p className="upload-hint">Рекомендуемый размер: 800x600px</p>
                </div>
                <input
                  id="main-image"
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>
        </div>

        {/* Поля ввода аналогичны вашим */}
        <div className="form-group">
          <label htmlFor="name">Название товара *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            onChange={handleInputChange}
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Цена (сом) *</label>
          <input
            id="price"
            name="price"
            type="text"
            value={product.price}
            onChange={handleInputChange}
            className={errors.price ? 'error-input' : ''}
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="article">Артикул *</label>
          <input
            id="article"
            name="article"
            type="text"
            value={product.article}
            onChange={handleInputChange}
            className={errors.article ? 'error-input' : ''}
          />
          {errors.article && <span className="error-message">{errors.article}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Категория *</label>
          <select id="category" name="category" value={product.category} onChange={handleInputChange}>
            <option value="">Выберите категорию</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="add-new-item">
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Новая категория" />
            <button type="button" className="add-btn" onClick={handleAddCategory}>Добавить</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="brand">Бренд *</label>
          <select id="brand" name="brand" value={product.brand} onChange={handleInputChange}>
            <option value="">Выберите бренд</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>{brand}</option>
            ))}
          </select>
          <div className="add-new-item">
            <input type="text" value={newBrand} onChange={(e) => setNewBrand(e.target.value)} placeholder="Новый бренд" />
            <button type="button" className="add-btn" onClick={handleAddBrand}>Добавить</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="bonus">Бонус (%)</label>
          <input id="bonus" name="bonus" type="text" value={product.bonus} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание</label>
          <textarea id="description" name="description" value={product.description} onChange={handleInputChange} rows="4" />
        </div>

        <div className="form-group">
          <label htmlFor="specifications">Характеристики</label>
          <textarea id="specifications" name="specifications" value={product.specifications} onChange={handleInputChange} rows="3" />
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={handleCancel} disabled={saving}>Отмена</button>
          <button type="submit" className="submit-btn" disabled={saving}>
            {saving ? 'Сохранение...' : 'Сохранить изменения'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;