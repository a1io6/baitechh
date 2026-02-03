// hooks/useBanners.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { bannerService } from '../api/api';

// Получить список баннеров
export const useBanners = (category) => {
  return useQuery({
    queryKey: ['banners', category],
    queryFn: () => bannerService.getBanners(category),
    select: (data) => data.results || [],
    staleTime: 30000, // 30 секунд
  });
};

// Получить один баннер
export const useBanner = (id) => {
  return useQuery({
    queryKey: ['banners', id],
    queryFn: () => bannerService.getBanner(id),
    enabled: !!id,
  });
};

// Создать баннер
export const useCreateBanner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['createBanner'],
    mutationFn: (bannerData) => bannerService.createBanner(bannerData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      toast.success('Баннер успешно добавлен!');
      console.log(bannerData);
    },
    onError: (error) => {
      console.error('Create banner error:', error);
      
      const errorData = error.response?.data;
      let message = 'Ошибка создания баннера';
      
      if (errorData?.title) {
        message = Array.isArray(errorData.title) ? errorData.title[0] : errorData.title;
      } else if (errorData?.images) {
        message = Array.isArray(errorData.images) ? errorData.images[0] : errorData.images;
      } else if (errorData?.message) {
        message = errorData.message;
      } else if (errorData?.detail) {
        message = errorData.detail;
      }
      
      toast.error(message);
    }
  });
};

// Обновить баннер
export const useUpdateBanner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['updateBanner'],
    mutationFn: ({ id, bannerData }) => bannerService.updateBanner(id, bannerData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      toast.success('Баннер обновлен!');
    },
    onError: (error) => {
      console.error('Update banner error:', error);
      
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Ошибка обновления баннера';
      toast.error(message);
    }
  });
};

// Частичное обновление баннера
export const usePartialUpdateBanner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['partialUpdateBanner'],
    mutationFn: ({ id, updates }) => bannerService.partialUpdateBanner(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      toast.success('Баннер обновлен!');
    },
    onError: (error) => {
      console.error('Partial update banner error:', error);
      toast.error('Ошибка обновления баннера');
    }
  });
};

// Удалить баннер
export const useDeleteBanner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['deleteBanner'],
    mutationFn: (id) => bannerService.deleteBanner(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      toast.success('Баннер удален!');
    },
    onError: (error) => {
      console.error('Delete banner error:', error);
      
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Ошибка удаления баннера';
      toast.error(message);
    }
  });
};