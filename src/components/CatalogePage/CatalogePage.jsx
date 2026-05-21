'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useProducts } from '@/lib/products/hooks/hooks';
import { productApi } from '@/lib/products/api/useProducts';
import styles from './CatalogPage.module.scss';
import { LayoutGrid, List, AlignJustify, ChevronDown, Search, ChevronRight, ChevronLeft } from 'lucide-react';
import ProductCard from './ProductCard';
import FullProductCard from './FullProductCard';
import Card from '../ui/card/Card';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const CATALOG_TEXTS = {
  ru: {
    home: 'Главная', catalog: 'Каталог', loading: 'Загрузка...', filterTitle: 'Фильтр товаров',
    subcategories: 'Подкатегории', category: 'Категория', categorySearch: 'Поиск категории...',
    brand: 'Бренд', brandSearch: 'Поиск бренда...', price: 'Цена', from: 'От', to: 'До',
    show: 'Показать', reset: 'Сбросить фильтры', notFound: 'Товары не найдены',
    notMatched: 'Ничего не найдено', prev: 'Назад', next: 'Вперед',
  },
  en: {
    home: 'Home', catalog: 'Catalog', loading: 'Loading...', filterTitle: 'Product Filters',
    subcategories: 'Subcategories', category: 'Category', categorySearch: 'Search category...',
    brand: 'Brand', brandSearch: 'Search brand...', price: 'Price', from: 'From', to: 'To',
    show: 'Show', reset: 'Reset filters', notFound: 'No products found',
    notMatched: 'Nothing found', prev: 'Previous', next: 'Next',
  },
  ky: {
    home: 'Башкы бет', catalog: 'Каталог', loading: 'Жүктөлүүдө...', filterTitle: 'Товар фильтрлери',
    subcategories: 'Подкатегориялар', category: 'Категория', categorySearch: 'Категория издөө...',
    brand: 'Бренд', brandSearch: 'Бренд издөө...', price: 'Баа', from: 'Баштап', to: 'Чейин',
    show: 'Көрсөтүү', reset: 'Фильтрлерди тазалоо', notFound: 'Товарлар табылган жок',
    notMatched: 'Эч нерсе табылган жок', prev: 'Артка', next: 'Алга',
  },
};

const sanitizePriceParam = (value, fallback) => {
  if (value === null || value === '') return fallback;
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
};

const clampPrice = (value, min, max) => Math.min(Math.max(value, min), max);

const getPaginationItems = (currentPage, totalPages) => {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  if (currentPage <= 4) return [1, 2, 3, 4, 'ellipsis', totalPages];
  if (currentPage >= totalPages - 3) return [1, 'ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
};

export default function CatalogPage() {
  const ITEMS_PER_PAGE = 20;
  const PRICE_MIN_LIMIT = 0;
  const DEFAULT_PRICE_MAX_LIMIT = 200000;
  const PRICE_STEP = 1000;

  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [categorySearch, setCategorySearch] = useState('');
  const [brandSearch, setBrandSearch] = useState('');
  const [staleProducts, setStaleProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: PRICE_MIN_LIMIT, max: DEFAULT_PRICE_MAX_LIMIT });
  const [categoryBrands, setCategoryBrands] = useState([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const { i18n } = useTranslation();
  const localeKey = (i18n.resolvedLanguage || i18n.language || 'ru').split('-')[0];
  const tr = CATALOG_TEXTS[localeKey] || CATALOG_TEXTS.ru;

  const cat = searchParams.get('category');
  const bnd = searchParams.get('brand');
  const query = searchParams.get('query')?.trim() || '';
  const minParam = searchParams.get('min_price');
  const maxParam = searchParams.get('max_price');

  const { brands: allBrands, categories } = useProducts();

  const { products: allProducts, totalCount, isLoading, isFetching } = useProducts({
    page: currentPage,
    category: cat || "",
    brand: bnd || "",
  });

  // Сброс страницы при смене фильтров
  const prevFiltersRef = useRef({ cat, bnd });
  useEffect(() => {
    const prev = prevFiltersRef.current;
    if (prev.cat !== cat || prev.bnd !== bnd) {
      setCurrentPage(1);
      setStaleProducts([]);
      prevFiltersRef.current = { cat, bnd };
    }
  }, [cat, bnd]);

  // Обновляем stale товары когда загрузка завершена
  useEffect(() => {
    if (!isLoading && !isFetching) {
      setStaleProducts(allProducts);
    }
  }, [isLoading, isFetching, allProducts]);

  const displayProducts = (isLoading || isFetching) ? staleProducts : allProducts;
  const isRefetching = (isLoading || isFetching) && staleProducts.length > 0;
  const isInitialLoading = (isLoading || isFetching) && staleProducts.length === 0;

  const totalPages = Math.max(1, Math.ceil((totalCount ?? 0) / ITEMS_PER_PAGE));

  useEffect(() => {
    if (!cat) return;
    productApi.getByCategory(cat)
      .then((data) => {
        const products = data.results || data;
        const brandIds = [...new Set(products.map((p) => p.brand))];
        const filtered = (allBrands || []).filter((b) => brandIds.includes(b.id));
        setCategoryBrands(filtered);
      })
      .catch(() => setCategoryBrands([]));
  }, [cat, allBrands]);

  const activeCategory = useMemo(() => {
    if (!cat) return null;
    return categories?.find((c) => c.parent === null && c.name === cat) || null;
  }, [cat, categories]);

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

  const subcategories = useMemo(() => {
    if (activeCategory) return activeCategory.subcategories || [];
    if (activeSubcategory) return activeSubcategory.sub?.subcategories || [];
    return [];
  }, [activeCategory, activeSubcategory]);

  const breadcrumbs = useMemo(() => {
    const crumbs = [
      { label: tr.home, href: '/' },
      { label: tr.catalog, href: '/catalog' },
    ];
    if (activeCategory) {
      crumbs.push({ label: activeCategory.name, href: null });
    } else if (activeSubcategory) {
      const { parent, sub, child } = activeSubcategory;
      crumbs.push({ label: parent.name, href: `/catalog?category=${encodeURIComponent(parent.name)}` });
      if (child) {
        crumbs.push({ label: sub.name, href: `/catalog?category=${encodeURIComponent(sub.name)}` });
        crumbs.push({ label: child.name, href: null });
      } else {
        crumbs.push({ label: sub.name, href: null });
      }
    }
    return crumbs;
  }, [activeCategory, activeSubcategory, tr.catalog, tr.home]);

  const minPriceFilter = searchParams.get('min_price');
  const maxPriceFilter = searchParams.get('max_price');

  const sliderMaxPrice = useMemo(() => {
    const prices = displayProducts
      .map((product) => Number(product.price))
      .filter((price) => Number.isFinite(price) && price >= PRICE_MIN_LIMIT);
    if (prices.length === 0) return DEFAULT_PRICE_MAX_LIMIT;
    const maxPrice = Math.max(...prices);
    return Math.max(PRICE_STEP, Math.ceil(maxPrice / PRICE_STEP) * PRICE_STEP);
  }, [displayProducts]);

  useEffect(() => {
    const normalizedMin = clampPrice(sanitizePriceParam(minParam, PRICE_MIN_LIMIT), PRICE_MIN_LIMIT, sliderMaxPrice - PRICE_STEP);
    const normalizedMax = clampPrice(sanitizePriceParam(maxParam, sliderMaxPrice), normalizedMin + PRICE_STEP, sliderMaxPrice);
    setPriceRange({ min: normalizedMin, max: normalizedMax });
  }, [minParam, maxParam, sliderMaxPrice]);

  const visibleProducts = useMemo(() => {
    const min = minPriceFilter === null || minPriceFilter === '' ? null : Number(minPriceFilter);
    const max = maxPriceFilter === null || maxPriceFilter === '' ? null : Number(maxPriceFilter);
    const normalizedQuery = query.toLowerCase();
    return displayProducts.filter((product) => {
      const price = Number(product.price);
      const name = String(product.name || '').toLowerCase();
      const article = String(product.article || '').toLowerCase();
      if (Number.isNaN(price)) return false;
      if (min !== null && !Number.isNaN(min) && price < min) return false;
      if (max !== null && !Number.isNaN(max) && price > max) return false;
      if (normalizedQuery && !name.includes(normalizedQuery) && !article.includes(normalizedQuery)) return false;
      return true;
    });
  }, [query, displayProducts, minPriceFilter, maxPriceFilter]);

  const filteredCategories = useMemo(
    () => categories?.filter((c) => c.parent === null && c.name.toLowerCase().includes(categorySearch.toLowerCase())) || [],
    [categories, categorySearch]
  );

  const brandSource = useMemo(() => (cat ? categoryBrands : allBrands || []), [cat, categoryBrands, allBrands]);

  const filteredBrands = useMemo(
    () => brandSource.filter((b) => b.name.toLowerCase().includes(brandSearch.toLowerCase())),
    [brandSource, brandSearch]
  );

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
    setPriceRange({ min: PRICE_MIN_LIMIT, max: sliderMaxPrice });
    setCurrentPage(1);
    router.push('/catalog');
  };

  const handleMinPriceChange = (event) => {
    const nextMin = Number(event.target.value);
    setPriceRange((prev) => ({ ...prev, min: clampPrice(nextMin, PRICE_MIN_LIMIT, prev.max - PRICE_STEP) }));
  };

  const handleMaxPriceChange = (event) => {
    const nextMax = Number(event.target.value);
    setPriceRange((prev) => ({ ...prev, max: clampPrice(nextMax, prev.min + PRICE_STEP, sliderMaxPrice) }));
  };

  useEffect(() => {
    const nextMinParam = priceRange.min > PRICE_MIN_LIMIT ? String(priceRange.min) : null;
    const nextMaxParam = priceRange.max < sliderMaxPrice ? String(priceRange.max) : null;
    const isSameAsUrl = (nextMinParam ?? null) === (minParam ?? null) && (nextMaxParam ?? null) === (maxParam ?? null);
    if (isSameAsUrl) return;
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (nextMinParam) params.set('min_price', nextMinParam); else params.delete('min_price');
      if (nextMaxParam) params.set('max_price', nextMaxParam); else params.delete('max_price');
      const queryString = params.toString();
      router.replace(queryString ? `?${queryString}` : '/catalog', { scroll: false });
      setCurrentPage(1);
    }, 600);
    return () => clearTimeout(timeoutId);
  }, [priceRange.min, priceRange.max, sliderMaxPrice, minParam, maxParam, searchParams, router]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasActiveFilters = cat || bnd || query || searchParams.get('min_price') || searchParams.get('max_price');
  const priceProgressLeft = ((priceRange.min - PRICE_MIN_LIMIT) / Math.max(1, sliderMaxPrice - PRICE_MIN_LIMIT)) * 100;
  const priceProgressRight = ((priceRange.max - PRICE_MIN_LIMIT) / Math.max(1, sliderMaxPrice - PRICE_MIN_LIMIT)) * 100;

  if (isInitialLoading) {
    return <div className={styles.loader}>{tr.loading}</div>;
  }

  return (
    <div className={`${styles.catalogPage} container`}>
      <nav className={styles.breadcrumbs}>
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className={styles.breadcrumbItem}>
            {i > 0 && <ChevronRight size={14} className={styles.breadcrumbSep} />}
            {crumb.href ? (
              <Link href={crumb.href} className={styles.breadcrumbLink}>{crumb.label}</Link>
            ) : (
              <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.filterTitle} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {tr.filterTitle}
          </div>

          {subcategories.length > 0 && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>{tr.subcategories} <ChevronDown size={14} /></div>
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

          {((categories?.length || 0) > 0 || categorySearch) && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>{tr.category} <ChevronDown size={14} /></div>
              <div style={{ position: 'relative', marginTop: '10px', marginBottom: '10px' }}>
                <input
                  type="text" placeholder={tr.categorySearch} value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  style={{ width: '100%', padding: '8px 32px 8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', outline: 'none' }}
                />
                <Search size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999', pointerEvents: 'none' }} />
              </div>
              <div className={styles.scrollArea}>
                {filteredCategories.length > 0 ? filteredCategories.map((category) => (
                  <label key={category.id} className={styles.checkbox}>
                    <input type="radio" name="category" checked={cat === category.name}
                      onChange={() => updateParams({ category: cat === category.name ? null : category.name, brand: null })} />
                    <span>{category.name}</span>
                  </label>
                )) : <div className={styles.emptySearch}>{tr.notMatched}</div>}
              </div>
            </div>
          )}

          {((brandSource.length || 0) > 0 || brandSearch) && (
            <div className={styles.filterSection}>
              <div className={styles.filterGroup}>{tr.brand} <ChevronDown size={14} /></div>
              <div style={{ position: 'relative', marginTop: '10px', marginBottom: '10px' }}>
                <input
                  type="text" placeholder={tr.brandSearch} value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  style={{ width: '100%', padding: '8px 32px 8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', outline: 'none' }}
                />
                <Search size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999', pointerEvents: 'none' }} />
              </div>
              <div className={styles.scrollArea}>
                {filteredBrands.length > 0 ? filteredBrands.map((brand) => (
                  <label key={brand.id} className={styles.checkbox}>
                    <input type="radio" name="brand" checked={bnd === String(brand.id)}
                      onChange={() => updateParams({ brand: bnd === String(brand.id) ? null : brand.id })} />
                    <span>{brand.name}</span>
                  </label>
                )) : <div className={styles.emptySearch}>{tr.notMatched}</div>}
              </div>
            </div>
          )}

          <div className={styles.filterSection}>
            <div className={styles.filterGroup}>{tr.price} <ChevronDown size={14} /></div>
            <div className={styles.priceRangeValues}>
              <span>{tr.from}: {priceRange.min.toLocaleString()}</span>
              <span>{tr.to}: {priceRange.max.toLocaleString()}</span>
            </div>
            <div className={styles.priceSlider}>
              <div className={styles.priceSliderTrack} />
              <div className={styles.priceSliderRange} style={{ left: `${priceProgressLeft}%`, width: `${priceProgressRight - priceProgressLeft}%` }} />
              <input type="range" min={PRICE_MIN_LIMIT} max={sliderMaxPrice} step={PRICE_STEP} value={priceRange.min}
                onChange={handleMinPriceChange} className={`${styles.priceThumb} ${styles.priceThumbMin}`} aria-label={tr.from} />
              <input type="range" min={PRICE_MIN_LIMIT} max={sliderMaxPrice} step={PRICE_STEP} value={priceRange.max}
                onChange={handleMaxPriceChange} className={`${styles.priceThumb} ${styles.priceThumbMax}`} aria-label={tr.to} />
            </div>
          </div>

          {hasActiveFilters && (
            <button className={styles.resetBtn} onClick={handleReset}>{tr.reset}</button>
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

          <div style={{ position: 'relative' }}>
            {isRefetching && (
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.55)', zIndex: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '60px', backdropFilter: 'blur(1px)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '10px 20px', borderRadius: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.12)', fontSize: '14px', color: '#333', fontWeight: 500 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" style={{ animation: 'catalog-spin 0.8s linear infinite' }}>
                    <style>{`@keyframes catalog-spin { to { transform: rotate(360deg); } }`}</style>
                    <circle cx="9" cy="9" r="7" fill="none" stroke="#e0e0e0" strokeWidth="2.5" />
                    <path d="M9 2 a7 7 0 0 1 7 7" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  {tr.loading}
                </div>
              </div>
            )}

            <div
              className={`${styles.grid} ${styles[viewMode]}`}
              style={{ opacity: isRefetching ? 0.5 : 1, transition: 'opacity 0.2s ease', pointerEvents: isRefetching ? 'none' : 'auto' }}
            >
              {visibleProducts.length > 0 ? (
                visibleProducts.map((p) =>
                  viewMode === 'grid' ? <Card key={p.id} product={p} /> :
                  viewMode === 'list' ? <ProductCard key={p.id} product={p} viewMode={viewMode} /> :
                  <FullProductCard key={p.id} product={p} />
                )
              ) : (
                <div>{tr.notFound}</div>
              )}
            </div>
          </div>

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button type="button" className={`${styles.pageBtn} ${styles.pageNavBtn}`}
                onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} aria-label={tr.prev}>
                <ChevronLeft size={16} />
              </button>

              {getPaginationItems(currentPage, totalPages).map((item, index) =>
                item === 'ellipsis' ? (
                  <span key={`dots-${index}`} className={styles.dots}>...</span>
                ) : (
                  <button key={item} type="button"
                    className={`${styles.pageBtn} ${currentPage === item ? styles.pageBtnActive : ''}`}
                    onClick={() => handlePageChange(item)}>
                    {item}
                  </button>
                )
              )}

              <button type="button" className={`${styles.pageBtn} ${styles.pageNavBtn}`}
                onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label={tr.next}>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}