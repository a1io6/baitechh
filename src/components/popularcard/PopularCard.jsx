"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './recommendations.scss';
import Card from '../ui/card/Card';


export function PopularCard() {
  const products = [
    {
      id: 1,
      badge: 'Хит продаж',
      image: 'https://avatars.mds.yandex.net/i?id=42dfc155cc47de07e28fe6289b339e3dc9ece450-4902913-images-thumbs&n=13',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 5
    },
    {
      id: 2,
      badge: 'Новинка',
       image: 
        'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 5
    },
    {
      id: 3,
      badge: 'Хит продаж',
       image: 
        'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 4
    },
    {
      id: 4,
      badge: 'Скидка',
       image: 'https://avatars.mds.yandex.net/i?id=686a9be56666517d45d63247208696bc1fa73646-5870379-images-thumbs&n=13',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 5
    },
    {
      id: 5,
      badge: 'Хит продаж',
       image: 
        'https://avatars.mds.yandex.net/i?id=686a9be56666517d45d63247208696bc1fa73646-5870379-images-thumbs&n=13',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 5
    },
    {
      id: 6,
      badge: 'Новинка',
       image:
        'https://news.store.rambler.ru/img/20e178476af45c859358e80fd4a7190d?img-1-resize=width%3A1280%2Cheight%3A720%2Cfit%3Acover&img-format=auto',
        
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 4
    }
  ];

  // const renderStars = (rating) => {
  //   return (
  //     <div className="stars">
  //       {[...Array(5)].map((_, index) => (
  //         <span key={index} className={index < rating ? 'star filled' : 'star'}>
  //           ★
  //         </span>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div className='recommendations'>
      <h2 className="recommendations__title mt-[40px]">Похожие товары</h2>
      <div className="recommendations-carousel mt-[-30px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={false}
          loop={false}
          grabCursor={true}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 18
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          className="recommendationsSwiper" 
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}