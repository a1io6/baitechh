"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { useProducts } from "@/lib/products/hooks/hooks"; // Проверьте правильность пути
import "./CamerCatalog.scss";

const CamerCatalog = () => {
  const router = useRouter();
  // Достаем новую мутацию из вашего хука
  const {
    products,
    isLoading,
    deleteProduct,
    changeAvailability,
    categories,
    isInitialLoading,
  } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Обработчики модалок ---
  const openActionModal = (p) => {
    setSelectedProduct(p);
    setIsActionModalOpen(true);
  };
  const closeActionModal = () => {
    setIsActionModalOpen(false);
    setSelectedProduct(null);
  };
  const openStatusModal = (p) => {
    setSelectedProduct(p);
    setIsStatusModalOpen(true);
  };
  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedProduct(null);
  };
  const openDeleteModal = (p) => {
    setSelectedProduct(p);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  // --- Логика изменения статуса (Мутация) ---
  const handleStatusChange = (statusText) => {
    if (selectedProduct) {
      // Преобразуем текст в boolean для API
      const isAvailable = statusText === "В наличии";

      changeAvailability({
        id: selectedProduct.id,
        is_available: isAvailable,
      });

      closeStatusModal();
    }
  };

  const handleDeleteProduct = () => {
    if (selectedProduct) {
      deleteProduct(selectedProduct.id);
      closeDeleteModal();
      closeActionModal();
    }
  };

  const productsArray = Array.isArray(products)
    ? products
    : products?.results || [];

  const filteredProducts = productsArray.filter((product) => {
    if( selectedCategory === "") {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }else if (product.category && product.category.toString() === selectedCategory) {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });  

  if (!mounted || isLoading)
    return (
     <div className="loader"/>
    );

  return (
    <div className="admin-content">
      <div className="header">
        <div className="search-header">
          <div className="search-container">
            <input
              type="text"
              placeholder="Поиск по названию или артикулу"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-icon">
              <IoSearch />
            </button>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-dropdown"
          >
            <option value="">Все категории</option>
            {categories &&
              !isInitialLoading &&
              categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>
        </div>

        <button
          className="add-product-btn"
          onClick={() => router.push("/add-product")}
        >
          Добавить товар +
        </button>
      </div>

      <div className="products-section">
        <h2>{
          categories?.find(cat => cat.id === Number(selectedCategory))?.name || "Все категории"
          }</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-header">
                  <div className="product-image">
                  
                    {product.existing_images &&
                    product.existing_images.length > 0 ? (
                      <img
                        src={product.existing_images[0]?.image}
                        alt={product.name}
                      />
                    ) : (
                      <div className="placeholder-image">Нет фото</div>
                    )}
                  </div>
                </div>

                <div className="card-content">
                  <div className="info-grid">
                    <div className="info-block">
                      <div className="info-label">Название</div>
                      <div className="info-value name-value">
                        {product.name}
                      </div>
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
                      <div
                        className={`status-badge ${
                          product.is_available ? "in-stock" : "out-of-stock"
                        }`}
                      >
                        {product.is_available ? "В наличии" : "Нет в наличии"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-container">
                  <button
                    className="menu-btn"
                    onClick={() => {openActionModal(product); console.log('====================================');
                    console.log("hello");
                    console.log('====================================');}}
                  >
                    ...
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Товары не найдены</p>
          )}
        </div>
      </div>

      {/* Модальное окно выбора действия */}
      {isActionModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeActionModal}>
          <div
            className="modal-content action-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Действия</h3>
              <button className="close-btn" onClick={closeActionModal}>
                ×
              </button>
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
                onClick={() =>
                  router.push(`/edit-product/${selectedProduct.id}`)
                }
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
          <div
            className="modal-content status-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Изменить статус</h3>
              <button className="close-btn" onClick={closeStatusModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                Новый статус для: <strong>{selectedProduct.name}</strong>
              </p>
              <div className="status-options">
                <button
                  className={`status-option ${selectedProduct.status === "В наличии" ? "selected" : ""}`}
                  onClick={() => handleStatusChange("В наличии")}
                >
                  В наличии
                </button>
                <button
                  className={`status-option ${selectedProduct.status === "Не в наличии" ? "selected" : ""}`}
                  onClick={() => handleStatusChange("Не в наличии")}
                >
                  Не в наличии
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно удаления */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeDeleteModal}>
          <div
            className="modal-content delete-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Подтверждение</h3>
              <button className="close-btn" onClick={closeDeleteModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                Вы точно уверены, что хотите удалить товар <strong>"
                {selectedProduct.name}"?</strong>
              </p>
              <div className="delete-actions">
                <button className="cancel-btn" onClick={closeDeleteModal}>
                  Отмена
                </button>
                <button
                  className="confirm-delete-btn"
                  onClick={handleDeleteProduct}
                >
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
