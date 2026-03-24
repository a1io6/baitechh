'use client';
import { useState, useCallback, useEffect } from 'react';
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
  const [subBrandsMap, setSubBrandsMap] = useState({});

  const toggleCategory = (id) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  const toggleSubBrands = useCallback(async (sub) => {
    const current = subBrandsMap[sub.id];

    if (current?.open) {
      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { ...prev[sub.id], open: false },
      }));
      return;
    }

    if (current?.brands) {
      if (current.brands.length === 0) return;

      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { ...prev[sub.id], open: true },
      }));
      return;
    }

    setSubBrandsMap((prev) => ({
      ...prev,
      [sub.id]: { brands: null, loading: true, open: true },
    }));

    try {
      const data = await productApi.getByCategory(sub.name);
      const products = data.results || data;
      const brandIds = [...new Set(products.map((p) => p.brand))];
      const filtered = (allBrands || []).filter((brand) => brandIds.includes(brand.id));
      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { brands: filtered, loading: false, open: filtered.length > 0 },
      }));
    } catch (error) {
      console.error(error);
      setSubBrandsMap((prev) => ({
        ...prev,
        [sub.id]: { brands: [], loading: false, open: false },
      }));
    }
  }, [allBrands, subBrandsMap]);

  useEffect(() => {
    const preloadBrands = async () => {
      const activeSubcategories =
        categories?.find((category) => category.id === activeCategory)?.subcategories || [];

      const missingSubs = activeSubcategories.filter((sub) => !(sub.id in subBrandsMap));
      if (missingSubs.length === 0) return;

      const loadedEntries = await Promise.all(
        missingSubs.map(async (sub) => {
          try {
            const data = await productApi.getByCategory(sub.name);
            const products = data.results || data;
            const brandIds = [...new Set(products.map((p) => p.brand))];
            const filtered = (allBrands || []).filter((brand) => brandIds.includes(brand.id));
            return [sub.id, { brands: filtered, loading: false, open: false }];
          } catch (error) {
            console.error(error);
            return [sub.id, { brands: [], loading: false, open: false }];
          }
        })
      );

      setSubBrandsMap((prev) => ({
        ...prev,
        ...Object.fromEntries(loadedEntries),
      }));
    };

    if (activeCategory) {
      preloadBrands();
    }
  }, [activeCategory, allBrands, categories, subBrandsMap]);

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

                    {activeCategory === category.id && category.subcategories?.length > 0 && (
                      <div className={styles.subDrawer}>
                        {category.subcategories.map((sub) => {
                          const subState = subBrandsMap[sub.id];
                          const isSubOpen = subState?.open;
                          const hasBrands = (subState?.brands || []).length > 0;

                          return (
                            <div key={sub.id} className={styles.subGroup}>
                              <div className={styles.subRow}>
                                <button
                                  className={styles.subTitle}
                                  onClick={() => handleSubcategoryClick(sub)}
                                >
                                  {sub.name}
                                </button>

                                {hasBrands && (
                                  <button
                                    className={styles.brandToggle}
                                    onClick={() => toggleSubBrands(sub)}
                                  >
                                    <ChevronRight
                                      size={13}
                                      className={`${styles.brandArrow} ${isSubOpen ? styles.brandArrowOpen : ''}`}
                                    />
                                  </button>
                                )}
                              </div>

                              {isSubOpen && hasBrands && (
                                <div className={styles.brandsInline}>
                                  {subState?.loading ? (
                                    <Loader2 size={14} className={styles.spinner} />
                                  ) : (
                                    subState.brands.map((brand) => (
                                      <button
                                        key={brand.id}
                                        className={styles.brandChip}
                                        onClick={() => handleBrandClick(sub, brand.id)}
                                      >
                                        {brand.name}
                                      </button>
                                    ))
                                  )}
                                </div>
                              )}

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
