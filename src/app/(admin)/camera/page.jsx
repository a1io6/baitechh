"use client"; // Обязательно для Next.js App Router

import React, { useState } from 'react';
// Заменяем useNavigate на useRouter
import { useRouter } from 'next/navigation'; 
import './CamerCatalog.scss';
import { IoSearch } from "react-icons/io5";

const CamerCatalog = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
      price: '25000',
      article: '123456',
      category: 'Камеры',
      brand: 'Ductle',
      status: 'В наличии',
      bonus: '',
      description: 'Современная IP-камера для организации системы безопасности на объектах различного типа.',
      specifications: 'Количество: 3 шт.\nВес: 580 г',
      images: [null, null, null, null]
    },
    {
      id: 2,
      name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
      price: '25000',
      article: '789012',
      category: 'Камеры',
      brand: 'Ductle',
      status: 'Не в наличии',
      bonus: '',
      description: '',
      specifications: '',
      images: [null, null, null, null]
    }
  ]);

  const [categories] = useState(['Камеры', 'Мониторы', 'Аксессуары', 'Кабели']);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Используем роутер Next.js
  const router = useRouter();

  const openActionModal = (product) => {
    setSelectedProduct(product);
    setIsActionModalOpen(true);
  };

  const closeActionModal = () => {
    setIsActionModalOpen(false);
    setSelectedProduct(null);
  };

  const openStatusModal = (product) => {
    setSelectedProduct(product);
    setIsStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedProduct(null);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleStatusChange = (newStatus) => {
    if (selectedProduct) {
      setProducts(products.map(p =>
        p.id === selectedProduct.id ? { ...p, status: newStatus } : p
      ));
      closeStatusModal();
    }
  };

  const handleDeleteProduct = () => {
    if (selectedProduct) {
      setProducts(products.filter(p => p.id !== selectedProduct.id));
      closeDeleteModal();
      closeActionModal();
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.article.includes(searchTerm);
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="admin-content">
      <div className="header">
        <div className='search-header'>
          <div className="search-container">
            <input
              type="text"
              placeholder="Поиск"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-icon"><IoSearch /></button>
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-dropdown"
            >
              <option value="">Категории</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Заменяем navigate на router.push */}
        <button className="add-product-btn" onClick={() => router.push("/add-product")}>
          Добавить товар +
        </button>
      </div>

      <div className="products-section">
        <h2>Камеры</h2>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-header">
                <div className="product-image">
                  {product.images[3] ? (
                    <img src={product.images[3]} alt={product.name} />
                  ) : (
                    <div className="placeholder-image"></div>
                  )}
                </div>
              </div>

              <div className="card-content">
                <div className="info-grid">
                  <div className="info-block">
                    <div className="info-label">Название</div>
                    <div className="info-value name-value">{product.name}</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">Артикул</div>
                    <div className="info-value">{product.article}</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">Цена</div>
                    <div className="info-value">{product.price} сом</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">Статус</div>
                    <div className={`status-badge ${product.status === 'В наличии' ? 'in-stock' : 'out-of-stock'}`}>
                      {product.status}
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-container">
                  <button className="menu-btn" onClick={() => openActionModal(product)}>...</button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно выбора действия */}
      {isActionModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeActionModal}>
          <div className="modal-content action-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Действия</h3>
              <button className="close-btn" onClick={closeActionModal}>×</button>
            </div>
            <div className="modal-body">
              <button 
                className="action-btn" 
                onClick={() => {
                  closeActionModal();
                  openStatusModal(selectedProduct);
                }}
              >
                Изменить статус
              </button>
              <button 
                className="action-btn" 
                onClick={() => router.push("/edit-product")}  
              >
                Редактировать
              </button>
              <button 
                className="action-btn delete-btn" 
                onClick={() => {
                  closeActionModal();
                  openDeleteModal(selectedProduct);
                }}
              >
                Удалить публикацию
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно изменения статуса */}
      {isStatusModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeStatusModal}>
          <div className="modal-content status-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Изменить статус</h3>
              <button className="close-btn" onClick={closeStatusModal}>×</button>
            </div>
            <div className="modal-body">
              <p>Выберите новый статус для товара:</p>
              <div className="status-options">
                <button 
                  className={`status-option ${selectedProduct.status === 'В наличии' ? 'selected' : ''}`}
                  onClick={() => handleStatusChange('В наличии')}
                >
                  В наличии
                </button>
                <button 
                  className={`status-option ${selectedProduct.status === 'Не в наличии' ? 'selected' : ''}`}
                  onClick={() => handleStatusChange('Не в наличии')}
                >
                  Не в наличии
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно подтверждения удаления */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeDeleteModal}>
          <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Подтверждение удаления</h3>
              <button className="close-btn" onClick={closeDeleteModal}>×</button>
            </div>
            <div className="modal-body">
              <p>Вы точно уверены удалить товар "{selectedProduct.name}"?</p>
              <div className="delete-actions">
                <button className="cancel-btn" onClick={closeDeleteModal}>
                  Отмена
                </button>
                <button className="confirm-delete-btn" onClick={handleDeleteProduct}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CamerCatalog;