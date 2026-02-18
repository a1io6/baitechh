"use client"
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './style.scss'
import { useBanner } from '@/lib/news/hooks/hooks';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Компонент скелетона для загрузки
function NewsSkeleton() {
  return (
    <div className="flex gap-[20px]">
      {[1, 2, 3].map((i) => (
        <div 
          key={i}
          className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)]"
        >
          <div className="bg-white flex flex-col gap-[10px] rounded-[15px] shadow-sm" style={{ padding: '10px' }}>
            {/* Скелетон изображения */}
            <div className="h-[308px] md:h-[308px] lg:h-[320px] w-full bg-gray-200 rounded-[10px] animate-pulse" />
            
            {/* Скелетон текста */}
            <div className="px-2 h-[80px] space-y-2">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function News() {
  const { data, isLoading, error } = useBanner()
  const {t} = useTranslation()
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  console.log('📰 Данные баннеров:', data);

  return (
    <section className="pb-16">
      <div className="w-full mx-auto px-6 xl:px-0">
        <h2 className="sm:text-5xl text-3xl font-bold md:text-center text-start text-[#1e293b]" style={{marginBottom:'50px'}}>
          {t('news.news')}
        </h2>

        {isLoading && (
          <div className="overflow-hidden">
            <NewsSkeleton />
          </div>
        )}

        {error && !isLoading && (
          <div className="text-center py-10">
            <p className="text-red-500">Ошибка загрузки новостей</p>
          </div>
        )}

        {!isLoading && !error && data && data.length > 0 && (
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[20px]">
              {data.map((item) => {
                const imageUrl = item.existing_images?.[0]?.image;
                
                return (
                  <div 
                    key={item.id}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)]"
                  >
                    <div className="
                        bg-white 
                        flex flex-col 
                        gap-[10px] 
                        rounded-[15px] 
                        shadow-sm 
                        transition-all
                        duration-300
                        hover:shadow-lg
                        cursor-pointer
                      " 
                      style={{ padding: '10px' }}
                    >
                      <div className="h-[308px] md:h-[308px] lg:h-[320px] w-full bg-[#bfbfbf] rounded-[10px] shrink-0 overflow-hidden relative">
                        {imageUrl ? (
                          <Image 
                            src={imageUrl} 
                            alt={item.title || 'Новость'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            unoptimized // Добавляем если изображения с внешнего сервера
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
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!isLoading && !error && (!data || data.length === 0) && (
          <div className="text-center py-10">
            <p className="text-gray-500">Новостей пока нет</p>
          </div>
        )}
      </div>
    </section>
  );
}