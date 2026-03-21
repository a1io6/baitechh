"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { useProducts } from "@/lib/products/hooks/hooks";
import "./CamerCatalog.scss";

const PAGE_SIZE = 8;

const getPaginationItems = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages];
};

const CamerCatalog = () => {
  const router = useRouter();
  const { products, isLoading, deleteProduct, changeAvailability, categories, isInitialLoading } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedCategory]);

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

  const handleStatusChange = (statusText) => {
    if (!selectedProduct) return;

    changeAvailability({
      id: selectedProduct.id,
      is_available: statusText === "В наличии",
    });

    closeStatusModal();
  };

  const handleDeleteProduct = () => {
    if (!selectedProduct) return;

    deleteProduct(selectedProduct.id);
    closeDeleteModal();
    closeActionModal();
  };

  const productsArray = Array.isArray(products) ? products : products?.results || [];

  const filteredProducts = useMemo(
    () =>
      productsArray.filter((product) => {
        const matchesSearch =
          product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.article?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "" || product.category?.toString() === selectedCategory;

        return matchesSearch && matchesCategory;
      }),
    [productsArray, searchTerm, selectedCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginationItems = getPaginationItems(currentPage, totalPages);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, filteredProducts]);

  if (!mounted || isLoading) {
    return <div className="loader" />;
  }

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
            <button className="search-icon" type="button">
              <IoSearch />
            </button>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-dropdown"
          >
            <option value="">Все Товары</option>
            {categories &&
              !isInitialLoading &&
              categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>
        </div>

        <button className="add-product-btn" onClick={() => router.push("/add-product")}>
          Добавить товар +
        </button>
      </div>

      <div className="products-section">
        <h2>{categories?.find((cat) => cat.id === Number(selectedCategory))?.name || "Все категории"}</h2>

        <div className="products-grid">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-header">
                  <div className="product-image">
                    {product.existing_images && product.existing_images.length > 0 ? (
                      <img src={product.existing_images[0]?.image} alt={product.name} />
                    ) : (
                      <div className="placeholder-image">Нет фото</div>
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
                      <div className={`status-badge ${product.is_available ? "in-stock" : "out-of-stock"}`}>
                        {product.is_available ? "В наличии" : "Нет в наличии"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="menu-container">
                  <button className="menu-btn" type="button" onClick={() => openActionModal(product)}>
                    ...
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Товары не найдены</p>
          )}
        </div>

        {filteredProducts.length > PAGE_SIZE && (
          <div className="pagination">
            <button
              className="page-btn arrow"
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            >
              &lt;
            </button>

            {paginationItems.map((item, index) =>
              item === "ellipsis" ? (
                <span key={`dots-${index}`} className="dots">
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  className={`page-btn ${item === currentPage ? "active" : ""}`}
                  type="button"
                  onClick={() => setPage(item)}
                >
                  {item}
                </button>
              )
            )}

            <button
              className="page-btn arrow"
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      {isActionModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeActionModal}>
          <div className="modal-content action-modal" onClick={(e) => e.stopPropagation()}>
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
              <button className="action-btn" onClick={() => router.push(`/edit-product/${selectedProduct.id}`)}>
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

      {isStatusModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeStatusModal}>
          <div className="modal-content status-modal" onClick={(e) => e.stopPropagation()}>
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
                  className={`status-option ${selectedProduct.is_available ? "selected" : ""}`}
                  onClick={() => handleStatusChange("В наличии")}
                >
                  В наличии
                </button>
                <button
                  className={`status-option ${!selectedProduct.is_available ? "selected" : ""}`}
                  onClick={() => handleStatusChange("Не в наличии")}
                >
                  Не в наличии
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeDeleteModal}>
          <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Подтверждение</h3>
              <button className="close-btn" onClick={closeDeleteModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                Вы точно уверены, что хотите удалить товар <strong>"{selectedProduct.name}"?</strong>
              </p>
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
