'use client';
import { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useInfiniteProducts, useProducts } from '@/lib/products/hooks/hooks';
import styles from './CatalogPage.module.scss';
import { LayoutGrid, List, AlignJustify, ChevronDown, X, Search } from 'lucide-react';
import ProductCard from './ProductCard';

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [categorySearch, setCategorySearch] = useState('');
  const [brandSearch, setBrandSearch] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  
  const searchParams = useSearchParams();
  const router = useRouter();

  const { brands, categories } = useProducts();
  
  // Получаем данные из URL
  const cat = searchParams.get('category');
  const bnd = searchParams.get('brand');

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteProducts({
    category: cat || undefined,
    brand: bnd || undefined,
  });

  const allProducts = data?.pages.flatMap(p => p.results) || [];

  // Фильтрация продуктов по цене (на фронте)
  const products = useMemo(() => {
    let filtered = [...allProducts];

    // Фильтр по минимальной цене
    if (priceRange.min) {
      filtered = filtered.filter(p => p.price >= Number(priceRange.min));
    }

    // Фильтр по максимальной цене
    if (priceRange.max) {
      filtered = filtered.filter(p => p.price <= Number(priceRange.max));
    }

    return filtered;
  }, [allProducts, priceRange]);

  // Фильтрация категорий по поиску
  const filteredCategories = categories?.filter(category =>
    category.name.toLowerCase().includes(categorySearch.toLowerCase())
  ) || [];

  // Фильтрация брендов по поиску
  const filteredBrands = brands?.filter(brand =>
    brand.name.toLowerCase().includes(brandSearch.toLowerCase())
  ) || [];

  // Универсальная функция обновления URL
  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    router.push(`?${params.toString()}`);
  };

  const handleReset = () => {
    setCategorySearch('');
    setBrandSearch('');
    setPriceRange({ min: '', max: '' });
    router.push('/catalog');
  };

  const handleApplyPrice = () => {
    // Цена фильтруется на фронте, поэтому просто обновляем состояние
    // Можно добавить в URL для сохранения состояния при перезагрузке
    const params = new URLSearchParams(searchParams.toString());
    if (priceRange.min) params.set('min_price', priceRange.min);
    else params.delete('min_price');
    if (priceRange.max) params.set('max_price', priceRange.max);
    else params.delete('max_price');
    router.push(`?${params.toString()}`);
  };

  if (isLoading) return <div className={styles.loader}>Загрузка...</div>;

  return (
    <div className={`${styles.catalogPage} container`}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.filterTitle} style={{display:'flex', justifyContent:'space-between'}}>
            Фильтр товаров 
            {(cat || bnd || priceRange.min || priceRange.max) && (
              <X size={14} onClick={handleReset} className={styles.clearIcon}/>
            )}
          </div>
          
          {/* КАТЕГОРИИ */}
          {categories?.length > 0 && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>Категория <ChevronDown size={14}/></div>
              
              {/* Поиск по категориям */}
              <div style={{ position: 'relative', marginTop: '10px', marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder="Поиск категории..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 32px 8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
                <Search 
                  size={16} 
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              <div className={styles.scrollArea}>
                {filteredCategories.length > 0 ? (
                  filteredCategories.map(category => (
                    <label key={category.id} className={styles.checkbox}>
                      <input 
                        type="checkbox" 
                        checked={cat === category.name}
                        onChange={() => updateParams({ 
                          category: cat === category.name ? null : category.name 
                        })}
                      />
                      <span>{category.name}</span>
                    </label>
                  ))
                ) : (
                  <div style={{ padding: '10px 0', color: '#999', fontSize: '13px' }}>
                    Категории не найдены
                  </div>
                )}
              </div>
            </div>
          )}

          {/* БРЕНДЫ */}
          {brands?.length > 0 && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>Бренд <ChevronDown size={14}/></div>
              
              {/* Поиск по брендам */}
              <div style={{ position: 'relative', marginTop: '10px', marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder="Поиск бренда..."
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 32px 8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
                <Search 
                  size={16} 
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              <div className={styles.scrollArea}>
                {filteredBrands.length > 0 ? (
                  filteredBrands.map(brand => (
                    <label key={brand.id} className={styles.checkbox}>
                      <input 
                        type="checkbox" 
                        checked={bnd === String(brand.id)}
                        onChange={() => updateParams({ 
                          brand: bnd === String(brand.id) ? null : brand.id 
                        })}
                      />
                      <span>{brand.name}</span>
                    </label>
                  ))
                ) : (
                  <div style={{ padding: '10px 0', color: '#999', fontSize: '13px' }}>
                    Бренды не найдены
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ЦЕНА (фильтрация на фронте) */}
          <div className={styles.filterSection}>
            <div className={styles.filterGroup}>Цена <ChevronDown size={14}/></div>
            <div className={styles.priceInputs}>
              <input 
                type="number" 
                placeholder="От" 
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleApplyPrice();
                }}
              />
              <input 
                type="number" 
                placeholder="До" 
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleApplyPrice();
                }}
              />
            </div>
          </div>

          <button className={styles.applyBtn} onClick={handleApplyPrice}>
            Показать ({products.length})
          </button>

          {(cat || bnd || priceRange.min || priceRange.max) && (
            <button className={styles.resetBtn} onClick={handleReset}>
              Сбросить фильтры
            </button>
          )}
        </aside>

        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.viewToggle}>
              <LayoutGrid onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? styles.active : ''} />
              <List onClick={() => setViewMode('list')} className={viewMode === 'list' ? styles.active : ''} />
              <AlignJustify onClick={() => setViewMode('full')} className={viewMode === 'full' ? styles.active : ''} />
            </div>
          </div>
          
          <div className={`${styles.grid} ${styles[viewMode]}`}>
            {products.length > 0 ? (
              products.map(p => <ProductCard key={p.id} product={p} viewMode={viewMode} />)
            ) : (
              <div>Товары не найдены</div>
            )}
          </div>

          {hasNextPage && (
            <button onClick={() => fetchNextPage()} className={styles.loadMore}>
              Показать еще
            </button>
          )}
        </main>
      </div>
    </div>
  );
}