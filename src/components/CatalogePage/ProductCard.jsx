'use client';
import Link from 'next/link';
import styles from './ProductCard.module.scss';
import { IoCartOutline, IoCart } from 'react-icons/io5';
import { useCart, useCreateCartItem, useDeleteCartItem } from '@/lib/cart/hooks/hooks';

export default function ProductCard({ product, viewMode }) {
  const imageUrl = product.existing_images?.[0]?.image || '/placeholder.png';

  const { data: cartItems } = useCart();
  const { mutate: addToCart, isPending: isAdding } = useCreateCartItem();
  const { mutate: deleteFromCart, isPending: isDeleting } = useDeleteCartItem();

  const cartItem = cartItems?.find(item => item.product?.id === product?.id || item.product_id === product?.id);
  const isInCart = !!cartItem;

  const handleCartClick = (e) => {
    e.preventDefault(); // чтобы Link не срабатывал
    if (!product?.id) return;
    if (isInCart) {
      deleteFromCart(cartItem.id);
    } else {
      addToCart({ product_id: product.id, quantity: 1 });
    }
  };

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
          </div>

          <div className={styles.purchaseSection}>
            <div className={styles.bonus}>{product.bonus} бонусов</div>
            <div className={styles.priceRow}>
              <span className={styles.price}>{Number(product.price).toLocaleString()} сом</span>
              <button
                className={styles.cartBtn}
                onClick={handleCartClick}
                disabled={isAdding || isDeleting}
                style={{ backgroundColor: isInCart ? '#0E2E5B' : '', color: isInCart ? 'white' : '', borderColor: isInCart ? '#0E2E5B' : '' }}
              >
                {isInCart ? <IoCart size={20} /> : <IoCartOutline size={20} />}
                {viewMode !== 'grid' && <span>Корзина</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}