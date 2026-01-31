// AdminBannerPage.jsx
"use client"; 

import { useState } from "react";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";

const ImageCropModal = dynamic(() => import("./ui/ImageCropModal"), { 
  ssr: false 
});

import { AdminItem } from "@/components/admin/item/BannreCard"; 
import "./AdminBannerPage.scss";
import { useBanners, useCreateBanner, useDeleteBanner } from "@/lib/banners/hooks/hooks";

export default function AdminBannerPage() {
  const [activeTab, setActiveTab] = useState("main");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Хуки для работы с API
  const { data: banners = [], isLoading, error } = useBanners(activeTab);
  const createBannerMutation = useCreateBanner();
  const deleteBannerMutation = useDeleteBanner();

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены что хотите удалить этот баннер?')) {
      try {
        await deleteBannerMutation.mutateAsync(id);
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  const handleToggle = (id) => {
    // Если в будущем добавится поле is_active, можно будет реализовать
    console.log('Toggle banner:', id);
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleSaveBanner = async (bannerData) => {
    console.log('Сохранение баннера:', bannerData);

    try {
      await createBannerMutation.mutateAsync(bannerData);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  if (error) {
    return (
      <div className="admin-banner">
        <div className="admin-banner__container">
          <div className="admin-banner__error">
            <p className="text-red-600 text-center p-4">
              Ошибка загрузки баннеров: {error.message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-banner">
      <div className="admin-banner__container">
        <div className="admin-banner__tabs">
          <button
            onClick={() => setActiveTab("main")}
            disabled={isLoading}
            className={`admin-banner__tab ${
              activeTab === "main" ? "admin-banner__tab--active" : ""
            }`}
          >
            Главный баннер
          </button>
          <button
            onClick={() => setActiveTab("events")}
            disabled={isLoading}
            className={`admin-banner__tab ${
              activeTab === "events" ? "admin-banner__tab--active" : ""
            }`}
          >
            Мероприятия
          </button>
        </div>

        <div className="admin-banner__content">
          <div className="admin-banner__header">
            <div className="admin-banner__labels">
              <span className="admin-banner__label">Фото</span>
              <span className="admin-banner__label admin-banner__label--right">
                Действия
              </span>
            </div>
            <button 
              className="admin-banner__add-btn" 
              onClick={handleAdd}
              disabled={createBannerMutation.isPending || isLoading}
            >
              <Plus size={16} />
              {createBannerMutation.isPending ? 'Загрузка...' : 'добавить'}
            </button>
          </div>

          <div className="admin-banner__list">
            {isLoading ? (
              <div className="admin-banner__loading">
                <p className="text-center text-gray-500 py-8">Загрузка баннеров...</p>
              </div>
            ) : banners.length === 0 ? (
              <div className="admin-banner__empty">
                <p className="text-center text-gray-500 py-8">
                  Нет баннеров в категории "{activeTab === 'main' ? 'Главный баннер' : 'Мероприятия'}".
                  <br />
                  Нажмите "добавить" чтобы создать новый баннер.
                </p>
              </div>
            ) : (
              banners.map((banner) => (
                <AdminItem
                  key={banner.id}
                  banner={banner}
                  handleDelete={() => handleDelete(banner.id)}
                  handleToggle={() => handleToggle(banner.id)}
                  isDeleting={deleteBannerMutation.isPending}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="admin-banner__overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="admin-banner__modal"
          >
            <ImageCropModal 
              isOpen={isModalOpen} 
              setIsOpen={setIsModalOpen}
              onSave={handleSaveBanner}
              category={activeTab}
            />
          </div>
        </div>
      )}
    </div>
  );
}