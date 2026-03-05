'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CatalogMenu.module.scss';
import { ChevronRight, LayoutGrid, Tag, Loader2 } from 'lucide-react';
import { useProducts } from '@/lib/products/hooks/hooks';
import { productApi } from '@/lib/products/api/useProducts';

export default function Catalog({ onClose }) {
  const router = useRouter();
  const { categories, brands: allBrands, isLoading } = useProducts();
  
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoryBrands, setCategoryBrands] = useState([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(false);

  // Инициализация первой категории при загрузке
  useEffect(() => {
    if (categories?.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  // Загрузка брендов, когда меняется "активная" категория (при наведении)
  useEffect(() => {
    async function fetchBrands() {
      if (!activeCategory) return;
      setIsBrandsLoading(true);
      try {
        const data = await productApi.getByCategory(activeCategory.name);
        const products = data.results || data;
        const brandIds = [...new Set(products.map(p => p.brand))];
        const filtered = allBrands.filter(b => brandIds.includes(b.id));
        setCategoryBrands(filtered);
      } catch (e) {
        console.error(e);
      } finally {
        setIsBrandsLoading(false);
      }
    }
    fetchBrands();
  }, [activeCategory, allBrands]);

  // ГЛАВНОЕ: Клик по категории слева (как в delta.kg)
  const handleCategoryClick = (category) => {
    onClose();
    router.push(`/catalog?category=${encodeURIComponent(category.name)}`);
  };

  // Клик по бренду справа
  const handleBrandClick = (brandId) => {
    onClose();
    router.push(`/catalog?category=${encodeURIComponent(activeCategory.name)}&brand=${brandId}`);
  };

  if (isLoading) return <div className={styles.overlay}><Loader2 className={styles.spinner} /></div>;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={`${styles.catalogContainer} container`}>
        
        {/* ЛЕВАЯ ПАНЕЛЬ: Список категорий */}
        <aside className={styles.sidebar}>
          {categories?.map((category) => (
            <button
              key={category.id}
              className={`${styles.navButton} ${activeCategory?.id === category.id ? styles.active : ''}`}
              // При наведении — просто меняем бренды справа
              onMouseEnter={() => setActiveCategory(category)}
              // ПРИ КЛИКЕ — сразу уходим в каталог (Логика Delta.kg)
              onClick={() => handleCategoryClick(category)}
            >
              <div className={styles.navButton}>
                <LayoutGrid size={18} className={styles.icon} />
                <span className={styles.label}>{category.name}</span>
              </div>
              <ChevronRight size={14} className={styles.chevron} />
            </button>
          ))}
        </aside>

        <main className={styles.content}>

          <div className={styles.brandsGrid}>
            {isBrandsLoading ? (
              <div className={styles.loader}><Loader2 size={20} className={styles.spinner} /></div>
            ) : (
              <div className={styles.linkList} style={{display:'flex'}}>
                {categoryBrands.length > 0 ? (
                  categoryBrands.map((brand) => (
                    <div 
                      key={brand.id} 
                      className={styles.linkItem} 
                      onClick={() => handleBrandClick(brand.id)}
                    >
                      <span>{brand.name}</span>
                    </div>
                  ))
                ) : (
                  <p className={styles.empty}>В этой категории пока нет брендов</p>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}