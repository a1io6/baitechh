"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroBanner.scss';
import { useBanners } from '@/lib/banners/hooks/hooks';

export function Banner() {
    const { data: banners = [], isLoading, error } = useBanners('main');

    if (isLoading) return <div className="loader"></div>;
    if (error) return null;

  return (
    <div className="hero-banner container">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: false
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,  
          pauseOnMouseEnter: true
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={banners.length > 1} 
        speed={800}
        className="hero-banner__swiper"
      >
        {banners.map((banner) => {
          const backgroundImage = banner.existing_images?.[0]?.image;

          return (
            <SwiperSlide key={banner.id}>
              <div className="banner-slide">
                <div 
                  className="banner-slide__background"
                  style={{
                    backgroundImage: backgroundImage 
                      ? `url(${backgroundImage})` 
                      : 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
                  }}
                >
                  <div className="banner-slide__overlay"></div>
                </div>
                
                <div className="banner-slide__content container">
                  <h1 className="banner-slide__title">{banner.title}</h1>
                  <p className="banner-slide__subtitle">{banner.description || banner.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}