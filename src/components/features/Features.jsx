'use client';
import React from 'react';
import './style.scss';
import { useRouter } from 'next/navigation';
import { useProducts } from '@/lib/products/hooks/hooks';
import Hivideo from '../../../assets/svg/Система безопастности (2) (1).svg';
import Hivideo2 from '../../../assets/svg/Система безопастности (3) (2).svg';
import ajhuaImage from '../../../assets/svg/1.svg';
import ajhuaImage2 from '../../../assets/svg/2.svg';
import LinkFf from '../../../assets/svg/dahua.svg';
import LinkFf2 from '../../../assets/svg/dahua2.svg';
import Hikvision from '../../../assets/svg/hikvision.svg';
import Hikvision2 from '../../../assets/svg/hikvision2.svg';
import ajax from '../../../assets/svg/ajax.svg';
import ajax2 from '../../../assets/svg/ajax2.svg';

const BRAND_META = {
  hivideo: {
    logo: Hivideo2,
    productImage: Hivideo,
    label: 'Системы безопасности',
  },
  dahua: {
    logo: ajhuaImage2,
    productImage: ajhuaImage,
    label: 'Видеонаблюдение',
  },
  linkff: {
    logo: LinkFf2,
    productImage: LinkFf,
    label: 'Сетевое оборудование',
  },
  hikvision: {
    logo: Hikvision,
    productImage: Hikvision2,
    label: 'Системы безопасности',
  },
  ajax: {
    logo: ajax2,
    productImage: ajax,
    label: 'Охранные системы',
  },
};

function Features() {
  const { brands, isInitialLoading } = useProducts();
  const router = useRouter();

  const handleClick = (brand) => {
    router.push(`/catalog/?category=IP%20${encodeURIComponent(brand.name)}`);
  };

  if (isInitialLoading) {
    return (
      <div className="features">
        <div className="features__container container">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="feature-card feature-card--skeleton" />
          ))}
        </div>
      </div>
    );
  }

  // показываем только те бренды, для которых есть картинки в BRAND_META
  const filteredBrands = brands.filter((brand) => {
    const key = brand.name?.toLowerCase().replace(/\s+/g, '');
    return !!BRAND_META[key];
  });

  return (
    <div className="features">
      <div className="features__container ">
        {filteredBrands.map((brand) => {
          const key = brand.name?.toLowerCase().replace(/\s+/g, '');
          const meta = BRAND_META[key];

          return (
            <div
              key={brand.id}
              className="feature-card"
              onClick={() => handleClick(brand)}
            >
              {/* Левая часть: логотип сверху, подпись снизу */}
              <div className="feature-card__left">
                <img
                  className="feature-card__logo"
                  src={meta.logo.src ?? meta.logo}
                  alt={brand.name}
                  draggable={false}
                />
                <span className="feature-card__label">{meta.label}</span>
              </div>

              {/* Правая часть: фото продукта */}
              <div className="feature-card__right">
                <img
                  className="feature-card__product-img"
                  src={meta.productImage.src ?? meta.productImage}
                  alt=""
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;