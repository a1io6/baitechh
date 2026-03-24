"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import { AdminItem } from "@/components/admin/item/BannreCard";
import {
  useBanners,
  useCreateBanner,
  useDeleteBanner,
  useUpdateBanner,
} from "@/lib/banners/hooks/hooks";
import "./AdminBannerPage.scss";

const ImageCropModal = dynamic(() => import("./ui/ImageCropModal"), {
  ssr: false,
});

export default function AdminBannerPage() {
  const [activeTab, setActiveTab] = useState("main");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);

  const { data: banners = [], isLoading, error } = useBanners(activeTab);
  const createBannerMutation = useCreateBanner();
  const deleteBannerMutation = useDeleteBanner();
  const updateBannerMutation = useUpdateBanner();

  const handleOpenAddModal = () => {
    setEditingBanner(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (banner) => {
    setEditingBanner(banner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingBanner(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот баннер?")) {
      try {
        await deleteBannerMutation.mutateAsync(id);
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  const handleSaveBanner = async (formData) => {
    try {
      if (editingBanner) {
        // ВАЖНО: передаем объект согласно структуре в твоем хуке
        await updateBannerMutation.mutateAsync({
          id: editingBanner.id,
          bannerData: formData,
        });
      } else {
        await createBannerMutation.mutateAsync(formData);
      }
      handleCloseModal();
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  if (error)
    return <div className="p-4 text-red-600">Ошибка: {error.message}</div>;

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
            onClick={() => setActiveTab("event")}
            disabled={isLoading}
            className={`admin-banner__tab ${
              activeTab === "events" ? "admin-banner__tab--active" : ""
            }`}
          >
            Мероприятия
          </button>
          <button
            onClick={() => setActiveTab("certificates_and_licenses")}
            disabled={isLoading}
            className={`admin-banner__tab ${
              activeTab === "certificates_and_licenses" ? "admin-banner__tab--active" : ""
            }`}
          >
            Сертификаты
          </button>
          <button
            onClick={() => setActiveTab("solution")}
            disabled={isLoading}
            className={`admin-banner__tab ${
              activeTab === "solution" ? "admin-banner__tab--active" : ""
            }`}
          >
            Решение
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
              onClick={handleOpenAddModal}
              disabled={isLoading}
            >
              <Plus size={16} /> добавить
            </button>
          </div>

          <div className="admin-banner__list">
            {isLoading ? (
              <p className="text-center py-8">Загрузка...</p>
            ) : (
              banners.map((banner) => (
                <AdminItem
                  key={banner.id}
                  banner={banner}
                  handleDelete={() => handleDelete(banner.id)}
                  handleEdit={() => handleOpenEditModal(banner)}
                  isDeleting={deleteBannerMutation.isPending}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="admin-banner__overlay" onClick={handleCloseModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="admin-banner__modal"
          >
            <ImageCropModal
              isOpen={isModalOpen}
              setIsOpen={handleCloseModal}
              onSave={handleSaveBanner}
              category={activeTab}
              initialData={editingBanner} // Передаем данные для редактирования
            />
          </div>
        </div>
      )}
    </div>
  );
}
