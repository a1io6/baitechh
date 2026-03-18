'use client';
import { useState, useCallback } from 'react';
import { Menu, ChevronDown, ChevronRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './CatalogButton.module.scss';
import { useProducts } from '@/lib/products/hooks/hooks';
import { productApi } from '@/lib/products/api/useProducts';
import { CATEGORY_ICONS, DEFAULT_CATEGORY_ICON } from '../catalogmenu/Categoryicons';

export default function CatalogButton() {
  const router = useRouter();
  const { categories, brands: allBrands, isLoading } = useProducts();

  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Бренды: { [subId]: { brands: [], loading: bool, open: bool } }
  const [subBrandsMap, setSubBrandsMap] = useState({});

  const toggleCategory = (id) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  const toggleSubBrands = useCallback(async (sub) => {
    const current = subBrandsMap[sub.id];

    // Если уже открыт — закрываем
    if (current?.open) {
      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { ...prev[sub.id], open: false },
      }));
      return;
    }

    // Если уже загружены — просто открываем
    if (current?.brands) {
      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { ...prev[sub.id], open: true },
      }));
      return;
    }

    // Загружаем бренды
    setSubBrandsMap((prev) => ({
      ...prev,
      [sub.id]: { brands: null, loading: true, open: true },
    }));

    try {
      const data = await productApi.getByCategory(sub.name);
      const products = data.results || data;
      const brandIds = [...new Set(products.map((p) => p.brand))];
      const filtered = (allBrands || []).filter((b) => brandIds.includes(b.id));
      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { brands: filtered, loading: false, open: true },
      }));
    } catch (e) {
      console.error(e);
      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { brands: [], loading: false, open: true },
      }));
    }
  }, [allBrands, subBrandsMap]);

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    router.push(`/catalog?category=${encodeURIComponent(category.name)}`);
  };

  const handleSubcategoryClick = (subcategory) => {
    setIsOpen(false);
    router.push(`/catalog?category=${encodeURIComponent(subcategory.name)}`);
  };

  const handleBrandClick = (sub, brandId) => {
    setIsOpen(false);
    router.push(`/catalog?category=${encodeURIComponent(sub.name)}&brand=${brandId}`);
  };

  return (
    <div className={styles.catalogWrapper}>
      <button
        className={styles.catalogButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Menu size={18} />
        <span>Каталог</span>
        <ChevronDown
          size={16}
          className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />

          <div className={styles.catalogDropdown}>
            {isLoading ? (
              <div className={styles.loader}>Загрузка...</div>
            ) : (
              <ul className={styles.categoryList}>
                {categories?.map((category) => (
                  <li key={category.id} className={styles.categoryWrapper}>

                    {/* Строка категории */}
                    <div className={`${styles.categoryItem} ${activeCategory === category.id ? styles.active : ''}`}>
                      <button
                        className={styles.itemLeft}
                        onClick={() => handleCategoryClick(category)}
                      >
                        <span className={styles.icon}>
                          {CATEGORY_ICONS[category.id] ?? DEFAULT_CATEGORY_ICON}
                        </span>
                        <span className={styles.itemTitle}>{category.name}</span>
                      </button>

                      {category.subcategories?.length > 0 ? (
                        <button
                          className={styles.toggleBtn}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCategory(category.id);
                          }}
                        >
                          <ChevronRight
                            size={15}
                            className={`${styles.subArrow} ${activeCategory === category.id ? styles.subArrowOpen : ''}`}
                          />
                        </button>
                      ) : (
                        <ChevronRight size={15} className={styles.subArrow} />
                      )}
                    </div>

                    {/* Аккордеон подкатегорий */}
                    {activeCategory === category.id && category.subcategories?.length > 0 && (
                      <div className={styles.subDrawer}>
                        {category.subcategories.map((sub) => {
                          const subState = subBrandsMap[sub.id];
                          const isSubOpen = subState?.open;

                          return (
                            <div key={sub.id} className={styles.subGroup}>
                              {/* Подкатегория + кнопка раскрытия брендов */}
                              <div className={styles.subRow}>
                                <button
                                  className={styles.subTitle}
                                  onClick={() => handleSubcategoryClick(sub)}
                                >
                                  {sub.name}
                                </button>

                                <button
                                  className={styles.brandToggle}
                                  onClick={() => toggleSubBrands(sub)}
                                >
                                  <ChevronRight
                                    size={13}
                                    className={`${styles.brandArrow} ${isSubOpen ? styles.brandArrowOpen : ''}`}
                                  />
                                </button>
                              </div>

                              {/* Бренды inline */}
                              {isSubOpen && (
                                <div className={styles.brandsInline}>
                                  {subState?.loading ? (
                                    <Loader2 size={14} className={styles.spinner} />
                                  ) : subState?.brands?.length > 0 ? (
                                    subState.brands.map((brand) => (
                                      <button
                                        key={brand.id}
                                        className={styles.brandChip}
                                        onClick={() => handleBrandClick(sub, brand.id)}
                                      >
                                        {brand.name}
                                      </button>
                                    ))
                                  ) : (
                                    <span className={styles.noBrands}>Нет брендов</span>
                                  )}
                                </div>
                              )}

                              {/* Подкатегории 2-го уровня */}
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
                          );
                        })}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}