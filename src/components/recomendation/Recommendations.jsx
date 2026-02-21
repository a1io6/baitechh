"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './recommendations.scss';
import Card from '../ui/card/Card';
import { useProducts } from '@/lib/products/hooks/hooks';
import { useTranslation } from 'react-i18next';

// Скелетон для загрузки
const CardSkeleton = () => (
  <div className="card-skeleton animate-pulse">
    <div className="bg-gray-200 h-48 rounded-lg mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

export function Recommendations() {
  const { t } = useTranslation();
  const { products, isLoading, isError } = useProducts();

  const recommendedProducts = products.slice(0, 10);

  if (isError) {
    return (
      <div className='recommendations'>
        <h2 className="recommendations__title">{t('recommendations.title')}</h2>
        <div className="recommendations__error">
          <p className="text-center text-red-500 py-8">
            {t('recommendations.error')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='recommendations'>
      <h2 className="recommendations__title">{t('recommendations.title')}</h2>
      <div className="recommendations-carousel">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          pagination={false}
          loop={false}
          grabCursor={true}
          breakpoints={{
            380: {
              slidesPerView: 2.2,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 18
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          className="recommendationsSwiper" 
        >
          {isLoading ? (
            // Скелетоны во время загрузки
            [...Array(6)].map((_, index) => (
              <SwiperSlide key={`skeleton-${index}`}>
                <CardSkeleton />
              </SwiperSlide>
            ))
          ) : recommendedProducts.length === 0 ? (
            // Если нет продуктов
            <div className="w-full text-center py-8 text-gray-500">
              Нет доступных рекомендаций
            </div>
          ) : (
            // Отображаем продукты
            recommendedProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Card product={product} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}