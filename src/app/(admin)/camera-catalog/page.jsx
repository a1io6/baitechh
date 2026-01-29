"use client";
import React, { useState } from "react";
import { Search, ChevronDown, MoreVertical, X } from "lucide-react";
import "./styles.scss";

export default function CameraCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [cameras, setCameras] = useState([
    {
      id: 1,
      name: "Электровелосипед Duotts E29 750 ватт, 27,5 колеса, батарея 13.5 ач. Двухподвес.",
      price: "25000 сом",
      status: "В наличии",
      inStock: true,
    },
    {
      id: 2,
      name: "Электровелосипед Duotts E29 750 ватт, 27,5 колеса, батарея 13.5 ач. Двухподвес.",
      price: "25000 сом",
      status: "Не в наличии",
      inStock: false,
    },
    {
      id: 3,
      name: "Электровелосипед Duotts E29 750 ватт, 27,5 колеса, батарея 13.5 ач. Двухподвес.",
      price: "25000 сом",
      status: "В наличии",
      inStock: true,
    },
  ]);

  const handleMenuClick = (cameraId) => {
    setActiveMenu(activeMenu === cameraId ? null : cameraId);
  };

  const handleEdit = (camera) => {
    setSelectedCamera(camera);
    setShowEditModal(true);
    setActiveMenu(null);
  };

  const handleDelete = (camera) => {
    setSelectedCamera(camera);
    setShowDeleteModal(true);
    setActiveMenu(null);
  };

  const handleStatusChange = (inStock) => {
    setCameras(
      cameras.map((cam) =>
        cam.id === selectedCamera.id
          ? { ...cam, inStock, status: inStock ? "В наличии" : "Не в наличии" }
          : cam
      )
    );
    setShowEditModal(false);
    setSelectedCamera(null);
  };

  const confirmDelete = () => {
    setCameras(cameras.filter((cam) => cam.id !== selectedCamera.id));
    setShowDeleteModal(false);
    setSelectedCamera(null);
  };

  return (
    <div className="catalog-admin">
      <div className="catalog__container">
        {/* Header */}
        <div className="catalog-admin__header">
          {/* Search */}
          <div className="catalog-admin__search">
            <div className="search">
              <input
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search__input"
              />
              <Search className="search__icon" size={20} />
            </div>

            {/* Categories */}
            <button className="categories-btn">
              <span>Категории</span>
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Add Product Button */} 
          <button className="add-btn">Добавить товар +</button>
        </div>

        {/* Title */} 
        <h1 className="catalog__title">Камеры</h1>

        {/* Product List */}
        <div className="product-list">
          {cameras.map((camera) => (
            <div key={camera.id} className="product-card">
              <div className="product-card__content">
                {/* Image Placeholder */}
                <div className="product-card__image"></div>

                {/* Product Info */}
                <div className="product-card__info">
                  {/* Name */}
                  <div className="product-card__section">
                    <h3 className="product-card__label">Название</h3>
                    <p className="product-card__text">{camera.name}</p>
                  </div>

                  {/* Price */}
                  <div className="product-card__section">
                    <h3 className="product-card__label">Цена</h3>
                    <p className="product-card__text">{camera.price}</p>
                  </div>

                  {/* Status */}
                  <div className="product-card__section product-card__section--status">
                    <div>
                      <h3 className="product-card__label">Статус :</h3>
                      <p
                        className={`product-card__status ${
                          !camera.inStock ? "product-card__status--out" : ""
                        }`}
                      >
                        {camera.status}
                      </p>
                    </div>
                    <div className="menu-wrapper">
                      <button
                        className="product-card__menu"
                        onClick={() => handleMenuClick(camera.id)}
                      >
                        <MoreVertical size={24} />
                      </button>

                      {activeMenu === camera.id && (
                        <div className="dropdown-menu">
                          <button
                            className="dropdown-menu__item"
                            onClick={() => handleEdit(camera)}
                          >
                            Редактировать
                          </button>
                          <button
                            className="dropdown-menu__item dropdown-menu__item--danger"
                            onClick={() => handleDelete(camera)}
                          >
                            Удалить публикацию
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h2 className="modal__title">Редактировать статус</h2>
              <button
                className="modal__close"
                onClick={() => setShowEditModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="modal__body">
              <p className="modal__text">Выберите статус товара:</p>
              <div className="modal__buttons">
                <button
                  className="modal__btn modal__btn--primary"
                  onClick={() => handleStatusChange(true)}
                >
                  В наличии
                </button>
                <button
                  className="modal__btn modal__btn--secondary"
                  onClick={() => handleStatusChange(false)}
                >
                  Не в наличии
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowDeleteModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h2 className="modal__title">Удаление публикации</h2>
              <button
                className="modal__close"
                onClick={() => setShowDeleteModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="modal__body">
              <p className="modal__text">
                Вы уверены, что хотите удалить публикацию?
              </p>
              <div className="modal__buttons">
                <button
                  className="modal__btn modal__btn--danger"
                  onClick={confirmDelete}
                >
                  Удалить
                </button>
                <button
                  className="modal__btn modal__btn--secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Отмена
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
