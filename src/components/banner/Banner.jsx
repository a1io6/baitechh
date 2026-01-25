"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroBanner.scss';

// Импортируйте ваши изображения
// import banner1 from '../../assets/images/banner1.jpg';
// import banner2 from '../../assets/images/banner2.jpg';
// import banner3 from '../../assets/images/banner3.jpg';

export function Banner() {
  const banners = [
    {
      id: 1,
      // image: banner1,
      title: 'Летняя распродажа',
      subtitle: 'Скидки до 50% на все товары',
      buttonLink: '#'
    },
    {
      id: 2,
      // image: banner2,
      title: 'Новая коллекция',
      subtitle: 'Эксклюзивные товары только у нас',
      buttonLink: '#'
    },
    {
      id: 3,
      // image: banner3,
      title: 'Бесплатная доставка',
      subtitle: 'При заказе от 1000 сом',
      buttonLink: '#'
    },
    {
      id: 4,
      title: 'Специальное предложение',
      subtitle: 'Акция действует ограниченное время',
      buttonLink: '#'
    }
  ];

  return (
    <div className="hero-banner pt-100 mt-[400px]">
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
        loop={true}
        speed={800}
        className="hero-banner__swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="banner-slide">
              <div 
                className="banner-slide__background"
                style={{
                  backgroundImage: banner.image ? `url(${banner.image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              >
                <div className="banner-slide__overlay"></div>
              </div>
              
              <div className="banner-slide__content container">
                <h1 className="banner-slide__title">{banner.title}</h1>
                <p className="banner-slide__subtitle">{banner.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
