'use client';
import Link from 'next/link';
import styles from './ProductCard.module.scss';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, viewMode }) {
  const imageUrl = product.existing_images?.[0]?.image || '/placeholder.png';

  return (
    <div className={`${styles.card} ${styles[viewMode]}`}>
      <div className={`${styles.badge} ${product.is_available ? styles.available : styles.waiting}`}>
        {product.is_available ? 'В наличии' : 'Нет в наличии'}
      </div>

      <div className={styles.mainWrapper}>       
              <Link href={`/productdetail/${product.id}`}>
        <div className={styles.imageSection}>
          <img src={imageUrl} alt={product.name} />
          {viewMode === 'grid' && (
            <div className={styles.dots}>
              <span className={styles.active}></span><span></span><span></span><span></span>
            </div>
          )}
        </div>
</Link>
        <div className={styles.infoSection}>
          <div className={styles.topInfo}>
            <span className={styles.article}>Артикул: {product.article}</span>
            <h3 className={styles.title}>{product.name}</h3>
          </div>

          <div className={styles.middleInfo}>
            {(viewMode === 'list' || viewMode === 'full') && (
              <p className={styles.description}>
                {product.description.slice(0, 220)}..
              </p>
            )}
            
            {viewMode === 'full' && (
              <div className={styles.specs}>
                {/* <div>Основные параметры вентилятора:</div>
                <ul>
                  <li>Размер: 120х120х25 мм</li>
                  <li>Тип подшипника: гидродинамический</li>
                  <li>Скорость вращения: 1000-2000 RPM</li>
                </ul> */}
              </div>
            )}
          </div>

          <div className={styles.purchaseSection}>
            <div className={styles.bonus}>{product.bonus} бонусов</div>
            <div className={styles.priceRow}>
              <span className={styles.price}>{Number(product.price).toLocaleString()} сом</span>
              <button className={styles.cartBtn}>
                <ShoppingCart size={20} />
                {viewMode !== 'grid' && <span>Корзина</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}