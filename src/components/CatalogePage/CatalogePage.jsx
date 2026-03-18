'use client';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useInfiniteProducts, useProducts } from '@/lib/products/hooks/hooks';
import { productApi } from '@/lib/products/api/useProducts';
import styles from './CatalogPage.module.scss';
import { LayoutGrid, List, AlignJustify, ChevronDown, X, Search, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import Card from '../ui/card/Card';
import Under from '../ui/under/Under';
import Link from 'next/link';

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [categorySearch, setCategorySearch] = useState('');
  const [brandSearch, setBrandSearch] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();

  const { brands: allBrands, categories } = useProducts();

  const cat = searchParams.get('category');
  const bnd = searchParams.get('brand');

  const [priceRange, setPriceRange] = useState({
    min: searchParams.get('min_price') || '',
    max: searchParams.get('max_price') || '',
  });

  // Бренды для выбранной категории
  const [categoryBrands, setCategoryBrands] = useState([]);
  const [brandsLoading, setBrandsLoading] = useState(false);

  useEffect(() => {
    if (!cat) {
      setCategoryBrands(allBrands || []);
      return;
    }
    setBrandsLoading(true);
    productApi.getByCategory(cat)
      .then((data) => {
        const products = data.results || data;
        const brandIds = [...new Set(products.map((p) => p.brand))];
        const filtered = (allBrands || []).filter((b) => brandIds.includes(b.id));
        setCategoryBrands(filtered);
      })
      .catch(() => setCategoryBrands([]))
      .finally(() => setBrandsLoading(false));
  }, [cat, allBrands]);

  // Найти объект активной категории (родительской)
  const activeCategory = useMemo(() => {
    if (!cat) return null;
    return categories?.find((c) => c.parent === null && c.name === cat) || null;
  }, [cat, categories]);

  // Найти активную подкатегорию
  const activeSubcategory = useMemo(() => {
    if (!cat || !categories) return null;
    for (const parent of categories) {
      const sub = parent.subcategories?.find((s) => s.name === cat);
      if (sub) return { parent, sub };
      for (const s of parent.subcategories || []) {
        const child = s.subcategories?.find((c) => c.name === cat);
        if (child) return { parent, sub: s, child };
      }
    }
    return null;
  }, [cat, categories]);

  // Подкатегории для сайдбара
  const subcategories = useMemo(() => {
    if (activeCategory) return activeCategory.subcategories || [];
    if (activeSubcategory) return activeSubcategory.sub?.subcategories || [];
    return [];
  }, [activeCategory, activeSubcategory]);

  // Хлебные крошки
  const breadcrumbs = useMemo(() => {
    const crumbs = [{ label: 'Главная', href: '/' }, { label: 'Каталог', href: '/catalog' }];
    if (activeCategory) {
      crumbs.push({ label: activeCategory.name, href: null });
    } else if (activeSubcategory) {
      const { parent, sub, child } = activeSubcategory;
      crumbs.push({
        label: parent.name,
        href: `/catalog?category=${encodeURIComponent(parent.name)}`,
      });
      if (child) {
        crumbs.push({
          label: sub.name,
          href: `/catalog?category=${encodeURIComponent(sub.name)}`,
        });
        crumbs.push({ label: child.name, href: null });
      } else {
        crumbs.push({ label: sub.name, href: null });
      }
    }
    return crumbs;
  }, [activeCategory, activeSubcategory]);

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteProducts({
    category: cat || undefined,
    brand: bnd || undefined,
    min_price: searchParams.get('min_price') || undefined,
    max_price: searchParams.get('max_price') || undefined,
  });

  const products = data?.pages.flatMap((p) => p.results) || [];

  // Только родительские категории в фильтре
  const filteredCategories = useMemo(() =>
    categories?.filter(
      (c) => c.parent === null &&
        c.name.toLowerCase().includes(categorySearch.toLowerCase())
    ) || [],
    [categories, categorySearch]
  );

  const filteredBrands = useMemo(() =>
    categoryBrands.filter((b) =>
      b.name.toLowerCase().includes(brandSearch.toLowerCase())
    ),
    [categoryBrands, brandSearch]
  );

  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    router.push(`?${params.toString()}`);
  };

  const handleApplyPrice = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (priceRange.min) params.set('min_price', priceRange.min);
    else params.delete('min_price');
    if (priceRange.max) params.set('max_price', priceRange.max);
    else params.delete('max_price');
    router.push(`?${params.toString()}`);
  };

  const handleReset = () => {
    setCategorySearch('');
    setBrandSearch('');
    setPriceRange({ min: '', max: '' });
    router.push('/catalog');
  };

  const hasActiveFilters = cat || bnd || priceRange.min || priceRange.max;

  if (isLoading) return <div className={styles.loader}>Загрузка...</div>;

  return (
    <div className={`${styles.catalogPage} container`}>

      {/* Хлебные крошки */}
      <nav className={styles.breadcrumbs}>
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className={styles.breadcrumbItem}>
            {i > 0 && <ChevronRight size={14} className={styles.breadcrumbSep} />}
            {crumb.href ? (
              <Link href={crumb.href} className={styles.breadcrumbLink}>
                {crumb.label}
              </Link>
            ) : (
              <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.filterTitle} style={{ display: 'flex', justifyContent: 'space-between' }}>
            Фильтр товаров
            {hasActiveFilters && (
              <X size={14} onClick={handleReset} className={styles.clearIcon} />
            )}
          </div>

          {/* ПОДКАТЕГОРИИ — если выбрана категория */}
          {subcategories.length > 0 && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>
                Подкатегории <ChevronDown size={14} />
              </div>
              <div className={styles.subcategoryList}>
                {subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    className={`${styles.subcategoryItem} ${cat === sub.name ? styles.subcategoryActive : ''}`}
                    onClick={() => updateParams({ category: sub.name, brand: null })}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* КАТЕГОРИИ */}
          {filteredCategories.length > 0 && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>
                Категория <ChevronDown size={14} />
              </div>

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
                    outline: 'none',
                  }}
                />
                <Search size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999', pointerEvents: 'none' }} />
              </div>

              <div className={styles.scrollArea}>
                {filteredCategories.map((category) => (
                  <label key={category.id} className={styles.checkbox}>
                    <input
                      type="radio"
                      name="category"
                      checked={cat === category.name}
                      onChange={() =>
                        updateParams({
                          category: cat === category.name ? null : category.name,
                          brand: null,
                        })
                      }
                    />
                    <span>{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* БРЕНДЫ — только для выбранной категории */}
          {filteredBrands.length > 0 && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>
                Бренд <ChevronDown size={14} />
              </div>

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
                    outline: 'none',
                  }}
                />
                <Search size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999', pointerEvents: 'none' }} />
              </div>

              <div className={styles.scrollArea}>
                {brandsLoading ? (
                  <div style={{ padding: '10px 0', color: '#999', fontSize: '13px' }}>Загрузка...</div>
                ) : filteredBrands.map((brand) => (
                  <label key={brand.id} className={styles.checkbox}>
                    <input
                      type="radio"
                      name="brand"
                      checked={bnd === String(brand.id)}
                      onChange={() =>
                        updateParams({
                          brand: bnd === String(brand.id) ? null : brand.id,
                        })
                      }
                    />
                    <span>{brand.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ЦЕНА */}
          <div className={styles.filterSection}>
            <div className={styles.filterGroup}>
              Цена <ChevronDown size={14} />
            </div>
            <div className={styles.priceInputs}>
              <input
                type="number"
                placeholder="От"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                onKeyDown={(e) => { if (e.key === 'Enter') handleApplyPrice(); }}
              />
              <input
                type="number"
                placeholder="До"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                onKeyDown={(e) => { if (e.key === 'Enter') handleApplyPrice(); }}
              />
            </div>
          </div>

          <button className={styles.applyBtn} onClick={handleApplyPrice}>
            Показать ({products.length})
          </button>

          {hasActiveFilters && (
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
              products.map((p) =>
                viewMode === 'grid'
                  ? <Card key={p.id} product={p} />
                  : <ProductCard key={p.id} product={p} viewMode={viewMode} />
              )
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