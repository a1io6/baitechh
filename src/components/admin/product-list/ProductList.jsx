"use client";

import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import './ProductList.scss';

const ProductCard = ({ product, onToggle, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      {/* Checkbox */}
      <label className="product-card__checkbox">
        <input
          type="checkbox"
          checked={product.active}
          onChange={() => onToggle(product.id)}
        />
        <span className="product-card__checkmark"></span>
      </label>

      {/* Фото */}
      <div className="product-card__image">
        {product.image ? (
          <img src={product.image} alt={product.title} />
        ) : (
          <div className="product-card__image-placeholder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
              <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        )}
      </div>

      {/* Заголовок */}
      <div className="product-card__field">
        <input
          type="text"
          value={product.title}
          placeholder="текст текст текст"
          readOnly
        />
      </div>

      {/* Описание */}
      <div className="product-card__field">
        <input
          type="text"
          value={product.description}
          placeholder="текст текст текст"
          readOnly
        />
      </div>

      {/* Действия */}
      <div className="product-card__actions">
        <button
          className="product-card__action-btn product-card__action-btn--edit"
          onClick={() => onEdit(product.id)}
        >
          <Edit2 size={20} />
        </button>
        <button
          className="product-card__action-btn product-card__action-btn--delete"
          onClick={() => onDelete(product.id)}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default function ProductList({ products, setProducts }) {


  const handleToggle = (id) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  const handleEdit = (id) => {
    console.log('Edit product:', id);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="product-list">
      <div className="product-list__container">
        {/* Заголовки колонок */}
        <div className="product-list__header">
          <div className="product-list__header-checkbox"></div>
          <div className="product-list__header-item">Фото</div>
          <div className="product-list__header-item product-list__header-item--large">Заголовок</div>
          <div className="product-list__header-item product-list__header-item--large">Описание</div>
          <div className="product-list__header-item">Действия</div>
        </div>

        {/* Список продуктов */}
        <div className="product-list__items">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onToggle={handleToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

    </div>
  );
}