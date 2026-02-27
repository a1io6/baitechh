"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './recommendations.scss';
import Card from '../ui/card/Card';
import { useSimilarProducts } from '@/lib/products/hooks/hooks';

export function PopularCard({ productId }) {
  const { data: similarProducts, isLoading, error } = useSimilarProducts(productId);

  console.log('📦 Похожие товары для продукта', productId, ':', similarProducts);

  // Загрузка - показываем скелетон
  if (isLoading) {
    return (
      <div className='recommendations1'>
        <h2 className="recommendations__title mt-[40px]">Похожие товары</h2>
        <div className="recommendations-carousel mt-[-30px]">
          <div className="flex gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-[280px] h-[400px] bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error('Ошибка загрузки похожих товаров:', error);
    return null;
  }

  // Если нет похожих товаров - не показываем блок
  if (!similarProducts?.results || similarProducts.results.length === 0) {
    return null;
  }

  return (
    <div className='recommendations1'>
      <h2 className="recommendations__title mb-[40px] mt[40px] text-[30px]">Похожие товары</h2>
      <div className="recommendations-carousel ">
        <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1.5}        // ← было 2
      centeredSlides={true}      // ← добавить
      pagination={false}
      loop={true}
      grabCursor={true}
      breakpoints={{
        380: {
          slidesPerView: 1.5,    // ← было 2.2
          spaceBetween: 8,
          centeredSlides: true   // ← добавить
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 10,
          centeredSlides: false  // ← выключить на планшетах
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 18,
          centeredSlides: false
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 20,
          centeredSlides: false
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
          centeredSlides: false
        }
      }}
      className="recommendationsSwiper" 
    >
          {similarProducts.results.map((product) => (
            <SwiperSlide key={product.id}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}