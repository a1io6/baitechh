'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CatalogMenu.module.scss';
import { ChevronRight, Loader2 } from 'lucide-react';
import { useProducts } from '@/lib/products/hooks/hooks';
import { productApi } from '@/lib/products/api/useProducts';
import { CATEGORY_ICONS, DEFAULT_CATEGORY_ICON } from './Categoryicons';

export default function Catalog({ onClose }) {
  const router = useRouter();
  const { categories, brands: allBrands, isLoading } = useProducts();

  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSub, setHoveredSub] = useState(null);
  const [subBrands, setSubBrands] = useState([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(false);
  const [popupTop, setPopupTop] = useState(0);

  const hideTimer = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (categories?.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  const fetchBrandsForSub = useCallback(async (sub, btnEl) => {
    // Считаем top относительно .content
    const btnRect = btnEl.getBoundingClientRect();
    const contentRect = contentRef.current?.getBoundingClientRect();
    setPopupTop((btnRect.top - (contentRect?.top ?? 0)));

    setHoveredSub(sub);
    setSubBrands([]);
    setIsBrandsLoading(true);

    try {
      const data = await productApi.getByCategory(sub.name);
      const products = data.results || data;
      const brandIds = [...new Set(products.map((p) => p.brand))];
      const filtered = (allBrands || []).filter((b) => brandIds.includes(b.id));
      setSubBrands(filtered);
    } catch (e) {
      console.error(e);
      setSubBrands([]);
    } finally {
      setIsBrandsLoading(false);
    }
  }, [allBrands]);

  const handleSubMouseEnter = (sub, e) => {
    clearTimeout(hideTimer.current);
    fetchBrandsForSub(sub, e.currentTarget);
  };

  const handleSubMouseLeave = () => {
    hideTimer.current = setTimeout(() => {
      setHoveredSub(null);
      setSubBrands([]);
    }, 150);
  };

  const handlePopupMouseEnter = () => clearTimeout(hideTimer.current);

  const handlePopupMouseLeave = () => {
    hideTimer.current = setTimeout(() => {
      setHoveredSub(null);
      setSubBrands([]);
    }, 150);
  };

  const handleCategoryClick = (category) => {
    onClose();
    router.push(`/catalog?category=${encodeURIComponent(category.name)}`);
  };

  const handleSubcategoryClick = (subcategory) => {
    onClose();
    router.push(`/catalog?category=${encodeURIComponent(subcategory.name)}`);
  };

  const handleBrandClick = (sub, brandId) => {
    onClose();
    router.push(`/catalog?category=${encodeURIComponent(sub.name)}&brand=${brandId}`);
  };

  if (isLoading) {
    return (
      <div className={styles.overlay}>
        <Loader2 className={styles.spinner} />
      </div>
    );
  }

  const subcategories = activeCategory?.subcategories || [];
  const half = Math.ceil(subcategories.length / 2);
  const col1 = subcategories.slice(0, half);
  const col2 = subcategories.slice(half);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.catalogContainer} container`}
      >
        {/* КОЛОНКА 1: Категории */}
        <aside className={styles.sidebar}>
          {categories?.map((category) => (
            <button
              key={category.id}
              className={`${styles.navButton} ${activeCategory?.id === category.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveCategory(category)}
              onClick={() => handleCategoryClick(category)}
            >
              <div className={styles.navLeft}>
                <span className={styles.icon}>
                  {CATEGORY_ICONS[category.id] ?? DEFAULT_CATEGORY_ICON}
                </span>
                <span className={styles.label}>{category.name}</span>
              </div>
              <ChevronRight size={14} className={styles.chevron} />
            </button>
          ))}
        </aside>

        {/* КОЛОНКИ 2 и 3: Подкатегории + попап брендов */}
        {activeCategory && (
          <main className={styles.content} ref={contentRef}>
            {subcategories.length > 0 ? (
              <div className={styles.columnsWrap}>
                {[col1, col2].map((col, colIdx) => (
                  <div key={colIdx} className={styles.subColumn}>
                    {col.map((sub) => (
                      <div key={sub.id} className={styles.subGroup}>
                        <button
                          className={`${styles.subTitle} ${hoveredSub?.id === sub.id ? styles.subTitleActive : ''}`}
                          onMouseEnter={(e) => handleSubMouseEnter(sub, e)}
                          onMouseLeave={handleSubMouseLeave}
                          onClick={() => handleSubcategoryClick(sub)}
                        >
                          {sub.name}
                          <ChevronRight size={13} className={styles.subChevron} />

                          {/* Попап внутри кнопки */}
                          {hoveredSub?.id === sub.id && (
                            <div
                              className={styles.brandsPopup}
                              onMouseEnter={handlePopupMouseEnter}
                              onMouseLeave={handlePopupMouseLeave}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {isBrandsLoading ? (
                                <div className={styles.popupLoader}>
                                  <Loader2 size={16} className={styles.spinner} />
                                </div>
                              ) : subBrands.length > 0 ? (
                                <ul className={styles.brandsList}>
                                  {subBrands.map((brand) => (
                                    <li key={brand.id}>
                                      <button
                                        className={styles.brandItem}
                                        onClick={() => handleBrandClick(hoveredSub, brand.id)}
                                      >
                                        {brand.name}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className={styles.popupEmpty}>Нет брендов</p>
                              )}
                            </div>
                          )}
                        </button>

                        {sub.subcategories?.length > 0 && (
                          <ul className={styles.subList}>
                            {sub.subcategories.map((child) => (
                              <li key={child.id}>
                                <button
                                  className={styles.subItem}
                                  onClick={() => handleSubcategoryClick(child)}
                                >
                                  {child.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.empty}>Нет подкатегорий</p>
            )}


          </main>
        )}
      </div>
    </div>
  );
}