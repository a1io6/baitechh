"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './style.scss'
import { useBanner } from '@/lib/news/hooks/hooks';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Скелетон для загрузки
const NewsSkeleton = () => (
  <div className="bg-white flex flex-col gap-[10px] rounded-[15px] shadow-sm animate-pulse" style={{ padding: '10px' }}>
    <div className="h-[308px] lg:h-[320px] w-full bg-gray-200 rounded-[10px]" />
    <div className="px-2 h-[80px] space-y-2">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  </div>
);

export function News() {
  const { data, isLoading, error } = useBanner();
  const { t } = useTranslation();

  return (
    <section className="pb-16">
      <div className="w-full mx-auto px-6 xl:px-0">
        <h2
          className="sm:text-5xl text-3xl font-bold md:text-center text-start text-[#1e293b]"
          style={{ marginBottom: '50px' }}
        >
          {t('news.news')}
        </h2>

        {error && !isLoading && (
          <div className="text-center py-10">
            <p className="text-red-500">Ошибка загрузки новостей</p>
          </div>
        )}
<Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={1.2}        // ← мобилка: одна + чуть видно следующую
  centeredSlides={false}     // ← убрать центрирование
  loop={true}
  grabCursor={true}
  autoplay={{ delay: 3000, stopOnInteraction: false }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }}
>
          {isLoading
            ? [...Array(3)].map((_, index) => (
                <SwiperSlide key={`skeleton-${index}`}>
                  <NewsSkeleton />
                </SwiperSlide>
              ))
            : (data || []).map((item) => {
                const imageUrl = item.existing_images?.[0]?.image;

                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className="bg-white flex flex-col gap-[10px] rounded-[15px] shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
                      style={{ padding: '10px' }}
                    >
                      <div className="h-[308px] lg:h-[320px] w-full bg-[#bfbfbf] rounded-[10px] shrink-0 overflow-hidden relative">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={item.title || 'Новость'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 rounded-[10px] flex items-center justify-center">
                            <span className="text-gray-400 text-sm">{item.category_display}</span>
                          </div>
                        )}
                      </div>

                      <div className="px-2 h-[80px]">
                        <h3 className="text-[20px] font-semibold text-[#1e293b] mb-2 leading-tight line-clamp-1">
                          {item.title || 'Без названия'}
                        </h3>
                        <p className="text-[#64748b] text-[16px] line-clamp-2">
                          {item.description || 'Описание отсутствует'}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>

        {!isLoading && !error && (!data || data.length === 0) && (
          <div className="text-center py-10">
            <p className="text-gray-500">Новостей пока нет</p>
          </div>
        )}
      </div>
    </section>
  );
}