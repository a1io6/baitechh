
import { $api } from "../../../../API/api";

export const bannerService = {
  getBanners: async (category) => {
    const params = category ? { category } : {};
    const { data } = await $api.get('/banners/banners/', { params });
    return data;
  },

  // Создать баннер
  createBanner: async (bannerData) => {
    const formData = new FormData();
    formData.append('title', bannerData.title);
    formData.append('description', bannerData.description || '');
    formData.append('category', bannerData.category);
    
    // Добавляем все изображения
    bannerData.images.forEach((image) => {
      formData.append('images', image);
    });

    const { data } = await $api.post('/banners/banners/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  },

  // Получить один баннер
  getBanner: async (id) => {
    const { data } = await $api.get(`/banners/banners/${id}/`);
    return data;
  },

  // Обновить баннер (полностью)
  updateBanner: async (id, bannerData) => {
    const formData = new FormData();
    formData.append('title', bannerData.title);
    formData.append('description', bannerData.description || '');
    formData.append('category', bannerData.category);
    
    // Если есть новые изображения
    if (bannerData.images && bannerData.images.length > 0) {
      bannerData.images.forEach((image) => {
        if (image instanceof File) {
          formData.append('images', image);
        }
      });
    }

    const { data } = await $api.put(`/banners/banners/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  },

  // Частичное обновление баннера
  partialUpdateBanner: async (id, updates) => {
    const formData = new FormData();
    
    Object.keys(updates).forEach(key => {
      if (key === 'images' && Array.isArray(updates[key])) {
        updates[key].forEach((image) => {
          if (image instanceof File) {
            formData.append('images', image);
          }
        });
      } else if (updates[key] !== undefined && updates[key] !== null) {
        formData.append(key, updates[key]);
      }
    });

    const { data } = await $api.patch(`/banners/banners/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  },

  // Удалить баннер
  deleteBanner: async (id) => {
    await $api.delete(`/banners/banners/${id}/`);
    return id;
  }
};