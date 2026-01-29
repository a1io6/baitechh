"use client"; // Обязательно для использования useState и onClick

import { useState } from "react";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";

// Если ImageCropModal использует тяжелые библиотеки типа react-easy-crop, 
// лучше импортировать его динамически, чтобы не нагружать начальный бандл
const ImageCropModal = dynamic(() => import("./ui/ImageCropModal"), { 
  ssr: false 
});

import { AdminItem } from "@/components/admin/item/BannreCard"; // Используем alias @ для путей
import "./AdminBannerPage.scss";

export default function AdminBannerPage() {
  const [activeTab, setActiveTab] = useState("main");
  const [banners, setBanners] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/80x60/4F46E5/FFFFFF?text=Banner",
      active: true,
    },
    { id: 2, image: null, active: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

  const handleToggle = (id) => {
    setBanners(
      banners.map((banner) =>
        banner.id === id ? { ...banner, active: !banner.active } : banner
      )
    );
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="admin-banner">
      <div className="admin-banner__container">
        {/* Табы */}
        <div className="admin-banner__tabs">
          <button
            onClick={() => setActiveTab("main")}
            className={`admin-banner__tab ${
              activeTab === "main" ? "admin-banner__tab--active" : ""
            }`}
          >
            Главный баннер
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`admin-banner__tab ${
              activeTab === "events" ? "admin-banner__tab--active" : ""
            }`}
          >
            Мероприятия
          </button>
        </div>

        {/* Основной контент */}
        <div className="admin-banner__content">
          <div className="admin-banner__header">
            <div className="admin-banner__labels">
              <span className="admin-banner__label">Фото</span>
              <span className="admin-banner__label admin-banner__label--right">
                Действия
              </span>
            </div>
            <button className="admin-banner__add-btn" onClick={handleAdd}>
              <Plus size={16} />
              добавить
            </button>
          </div>

          <div className="admin-banner__list">
            {banners.map((banner) => (
              <AdminItem
                key={banner.id}
                banner={banner}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          className="admin-banner__overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="admin-banner__modal"
          >
            <ImageCropModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
}