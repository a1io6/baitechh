import React, { useState } from 'react';
import { ChevronDown, Grid, List } from 'lucide-react';
import './ProductCatalog.scss';
import Card from '../ui/card/Card';

export default function ProductCatalog() {
  const [viewMode, setViewMode] = useState('grid');
  const [priceFrom, setPriceFrom] = useState('10000');
  const [priceTo, setPriceTo] = useState('150000');
  const [expandedFilters, setExpandedFilters] = useState({
    types: true,
    purpose: false,
    appointment: false,
    permission: false,
    presence: false,
    additional: false,
    price: false,
    color: false
  });

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
      image: 'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 5
    },
    {
      id: 3,
      badge: 'Хит продаж',
      image: 'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
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
      image: 'https://avatars.mds.yandex.net/i?id=686a9be56666517d45d63247208696bc1fa73646-5870379-images-thumbs&n=13',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 5
    },
    {
      id: 6,
      badge: 'Новинка',
      image: 'https://news.store.rambler.ru/img/20e178476af45c859358e80fd4a7190d?img-1-resize=width%3A1280%2Cheight%3A720%2Cfit%3Acover&img-format=auto',
      title: 'IP-камера поворотная 4МР Dahua-IMOU-IPC-A42P-S',
      features: 'Видеонаблюдение в помещение Сверхчеткое изображение 4 МП',
      price: 10000,
      currency: 'сом',
      rating: 4
    }
  ];

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const FilterSection = ({ title, filterKey, children }) => (
    <div className="catalog-filter-section">
      <button
        onClick={() => toggleFilter(filterKey)}
        className="catalog-filter-section__header"
      >
        <span className="catalog-filter-section__title">{title}</span>
        <ChevronDown 
          className={`catalog-filter-section__icon ${
            expandedFilters[filterKey] ? 'catalog-filter-section__icon--rotated' : ''
          }`}
        />
      </button>
      {expandedFilters[filterKey] && (
        <div className="catalog-filter-section__content">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="product-catalog">
      <div className="product-catalog__container">
        <div className="product-catalog__wrapper">
          {/* Sidebar Filters */}
          <div className="product-catalog__sidebar">
            <div className="catalog-filters">
              <h2 className="catalog-filters__title">Фильтр товаров</h2>
              
              <FilterSection title="Тип устройства" filterKey="types">
                <div className="catalog-filter-options">
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">IP-камеры</span>
                  </label>
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">Видеорегистраторы</span>
                  </label>
                </div>
              </FilterSection>

              <FilterSection title="Назначение" filterKey="purpose">
                <div className="catalog-filter-options">
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">Для дома</span>
                  </label>
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">Для офиса</span>
                  </label>
                </div>
              </FilterSection>

              <FilterSection title="Разрешение" filterKey="permission">
                <div className="catalog-filter-options">
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">4MP</span>
                  </label>
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">8MP</span>
                  </label>
                </div>
              </FilterSection>

              <FilterSection title="Наличие" filterKey="presence">
                <div className="catalog-filter-options">
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">В наличии</span>
                  </label>
                  <label className="catalog-filter-option">
                    <input type="checkbox" className="catalog-filter-option__checkbox" />
                    <span className="catalog-filter-option__label">Под заказ</span>
                  </label>
                </div>
              </FilterSection>

              <div className="catalog-filter-section">
                <h3 className="catalog-filter-section__title">Цена</h3>
                <div className="catalog-price-filter">
                  <div className="catalog-price-filter__inputs">
                    <input
                      type="text"
                      value={priceFrom}
                      onChange={(e) => setPriceFrom(e.target.value)}
                      className="catalog-price-filter__input"
                      placeholder="От"
                    />
                    <input
                      type="text"
                      value={priceTo}
                      onChange={(e) => setPriceTo(e.target.value)}
                      className="catalog-price-filter__input"
                      placeholder="До"
                    />
                  </div>
                  <button className="catalog-price-filter__button">
                    Показать (602)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="product-catalog__content">
            <div className="product-catalog__toolbar">
              <div className="product-catalog__controls">
                <select className="product-catalog__select">
                  <option>Сортировать по популярности по убыванию</option>
                  <option>По цене: сначала дешевые</option>
                  <option>По цене: сначала дорогие</option>
                </select>
                <select className="product-catalog__select">
                  <option>На странице 60</option>
                  <option>На странице 30</option>
                  <option>На странице 90</option>
                </select>
              </div>
              <div className="product-catalog__view-modes">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`catalog-view-mode ${viewMode === 'grid' ? 'catalog-view-mode--active' : ''}`}
                >
                  <Grid className="catalog-view-mode__icon" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`catalog-view-mode ${viewMode === 'list' ? 'catalog-view-mode--active' : ''}`}
                >
                  <List className="catalog-view-mode__icon" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="catalog-products-grid">
              {products.map((product) => (
               <Card product={product} key={product.id} />  
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}