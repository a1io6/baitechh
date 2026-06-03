"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./style.scss";
import { useBanner } from "@/lib/news/hooks/hooks";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const NewsSkeleton = () => (
  <div
    className="bg-white flex flex-col gap-[10px] rounded-[15px] shadow-sm animate-pulse"
    style={{ padding: "10px" }}
  >
    <div className="h-[250px] lg:h-[320px] w-full bg-gray-200 rounded-[10px]" />
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
  const [expandedItems, setExpandedItems] = useState({});
  const newsItems = data || [];
  const shouldLoop = (isLoading ? 3 : newsItems.length) > 3;

  const canExpand = (title, description) =>
    (title || "").trim().length > 55 || (description || "").trim().length > 120;

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="pb-16 max-w-[1350px] mx-auto xl:px-0">
      <div className="w-full mx-auto px-3 xl:px-0">
        <h2
          className="sm:text-5xl text-3xl font-bold md:text-center text-start text-[#1e293b]"
          style={{ marginBottom: "50px" }}
        >
          {t("news.news")}
        </h2>

        {error && !isLoading && (
          <div className="text-center py-10">
            <p className="text-red-500">Ошибка загрузки новостей</p>
          </div>
        )}

        <Swiper
          className="news-slider"
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          loop={shouldLoop}
          grabCursor={true}
          autoplay={
            shouldLoop ? { delay: 3000, stopOnInteraction: false } : false
          }
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {isLoading
            ? [...Array(3)].map((_, index) => (
                <SwiperSlide key={`skeleton-${index}`}>
                  <NewsSkeleton />
                </SwiperSlide>
              ))
            : newsItems.map((item) => {
                const imageUrl = item.existing_images?.[0]?.image;
                const title = item.title || "Без названия";
                const description = item.description || "Описание отсутствует";
                const isExpanded = !!expandedItems[item.id];
                const showToggle = canExpand(title, description);

                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className="bg-white flex flex-col gap-[10px] rounded-[15px] shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
                      style={{ padding: "10px" }}
                    >
                      <div className="h-[250px] lg:h-[320px] w-full bg-[#bfbfbf] rounded-[10px] shrink-0 overflow-hidden relative">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 rounded-[10px] flex items-center justify-center">
                            <span className="text-gray-400 text-sm">
                              {item.category_display}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className={`px-2 ${isExpanded ? "h-auto" : "h-[80px]"}`}>
                        <h3
                          className={`text-[14px] lg:text-[20px] font-semibold text-[#1e293b] mb-2 leading-tight ${
                            isExpanded ? "line-clamp-none" : "line-clamp-1"
                          } ${showToggle ? "cursor-pointer" : ""}`}
                          onClick={showToggle ? () => toggleExpand(item.id) : undefined}
                        >
                          {title}
                        </h3>
                        <p
                          className={`text-[#64748b] text-[12px] lg:text-[16px] ${
                            isExpanded ? "line-clamp-none" : "line-clamp-2"
                          } ${showToggle ? "cursor-pointer" : ""}`}
                          onClick={showToggle ? () => toggleExpand(item.id) : undefined}
                        >
                          {description}
                        </p>
                        {showToggle && (
                          <button
                            type="button"
                            className="mt-1 text-[12px] lg:text-[14px] font-medium text-[#0E2E5B]"
                            onClick={() => toggleExpand(item.id)}
                          >
                            {isExpanded ? "Скрыть" : "Еще"}
                          </button>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>

        {!isLoading && !error && newsItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">Новостей пока нет</p>
          </div>
        )}
      </div>
    </section>
  );
}
