'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from '../ui/card/Card';
import { useBanners } from '@/lib/banners/hooks/hooks';
import { useProducts } from '@/lib/products/hooks/hooks';
import styles from './CategoryPage.module.scss';

const CardSkeleton = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonText} />
    <div className={styles.skeletonTextShort} />
  </div>
);

const normalizeText = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/\s+/g, ' ')
    .trim();

const getCategoryMatchers = (categoryName) => {
  const normalized = normalizeText(categoryName);

  if (normalized.includes('видеонаблю') || normalized.includes('камер')) {
    return ['видеонаблю', 'камера', 'camera', 'cctv', 'dahua', 'hikvision', 'ajax'];
  }

  if (normalized.includes('комплект') || normalized.includes('пк')) {
    return ['комплект', 'пк', 'pc', 'computer', 'hardware'];
  }

  return [normalized];
};

export default function CategoryPage({ categoryName, onClose }) {
  const { products = [], brands = [], isLoading } = useProducts({ category: categoryName });
  const { data: banners = [], isLoading: isBannersLoading } = useBanners('main');

  const categoryBanners = useMemo(() => {
    const matchers = getCategoryMatchers(categoryName);

    return banners.filter((banner) => {
      const bannerText = normalizeText(
        `${banner?.title || ''} ${banner?.name || ''} ${banner?.description || ''} ${banner?.category || ''}`
      );
      return matchers.some((matcher) => bannerText.includes(normalizeText(matcher)));
    });
  }, [banners, categoryName]);

  const categoryBrands = useMemo(() => {
    const brandIds = new Set();
    const brandNames = new Set();

    products.forEach((product) => {
      const brand = product?.brand;

      if (typeof brand === 'object' && brand) {
        if (brand.id) brandIds.add(String(brand.id));
        if (brand.name) brandNames.add(normalizeText(brand.name));
      } else if (brand) {
        brandIds.add(String(brand));
      }

      if (product?.brand_name) {
        brandNames.add(normalizeText(product.brand_name));
      }
    });

    const matchedBrands = brands.filter((brand) => {
      const id = String(brand?.id || '');
      const name = normalizeText(brand?.name);
      return brandIds.has(id) || brandNames.has(name);
    });

    return (matchedBrands.length > 0 ? matchedBrands : brands).slice(0, 6);
  }, [brands, products]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container`}>
        {isBannersLoading ? (
          <div className={styles.bannerSkeleton} />
        ) : categoryBanners.length > 0 ? (
          <div className={styles.banner}>
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              loop={categoryBanners.length > 1}
              className={styles.bannerSwiper}
            >
              {categoryBanners.map((banner) => {
                const image = banner?.existing_images?.[0]?.image;

                return (
                  <SwiperSlide key={banner.id}>
                    <Link
                      href={`/catalog?category=${encodeURIComponent(categoryName)}`}
                      className={styles.bannerSlide}
                      onClick={onClose}
                    >
                      {image ? (
                        <Image
                          src={image}
                          alt={banner.title || categoryName}
                          width={1280}
                          height={450}
                          className={styles.bannerImage}
                          sizes="(max-width: 768px) 100vw, 1280px"
                        />
                      ) : (
                        <div className={styles.bannerFallback}>
                          <span>{categoryName}</span>
                        </div>
                      )}
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : null}

        {categoryBrands.length > 0 && (
          <div className={styles.brandStrip}>
            {categoryBrands.map((brand) => {
              const image =
                brand?.logo ||
                brand?.image ||
                brand?.photo ||
                brand?.existing_images?.[0]?.image;

              return (
                <Link
                  key={brand.id || brand.name}
                  href={`/catalog?category=${encodeURIComponent(categoryName)}&brand=${encodeURIComponent(brand.id || brand.name)}`}
                  className={styles.brandCard}
                  onClick={onClose}
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={brand.name}
                      width={220}
                      height={80}
                      className={styles.brandImage}
                      sizes="220px"
                    />
                  ) : (
                    <span className={styles.brandName}>{brand.name}</span>
                  )}
                </Link>
              );
            })}
          </div>
        )}

        <div className={styles.header}>
          <h2 className={styles.title}>{categoryName}</h2>
          <Link
            href={`/catalog?category=${encodeURIComponent(categoryName)}`}
            className={styles.viewAll}
            onClick={onClose}
          >
            Все товары →
          </Link>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.navBtn} ${styles.navBtnPrev}`} aria-label="Назад">
            <IoChevronBackOutline size={22} />
          </button>
          <button className={`${styles.navBtn} ${styles.navBtnNext}`} aria-label="Вперёд">
            <IoChevronForwardOutline size={22} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={2}
            navigation={{
              prevEl: `.${styles.navBtnPrev}`,
              nextEl: `.${styles.navBtnNext}`,
            }}
            loop={!isLoading && products.length > 4}
            grabCursor
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {isLoading
              ? [...Array(6)].map((_, index) => (
                  <SwiperSlide key={`sk-${index}`}>
                    <CardSkeleton />
                  </SwiperSlide>
                ))
              : products.slice(0, 12).map((product) => (
                  <SwiperSlide key={product.id}>
                    <Card product={product} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
