'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FullProductCard.module.scss';
import { IoCartOutline, IoCart } from 'react-icons/io5';
import { useCart, useCreateCartItem, useDeleteCartItem } from '@/lib/cart/hooks/hooks';
import { useTranslation } from 'react-i18next';

export default function FullProductCard({ product }) {
  const { t } = useTranslation();
  const imageUrl = product.existing_images?.[0]?.image || '/placeholder.png';

  const { data: cartItems } = useCart();
  const { mutate: addToCart, isPending: isAdding } = useCreateCartItem();
  const { mutate: deleteFromCart, isPending: isDeleting } = useDeleteCartItem();

  const cartItem = cartItems?.find(
    (item) => item.product?.id === product?.id || item.product_id === product?.id
  );
  const isInCart = !!cartItem;

  const handleCartClick = (e) => {
    e.preventDefault();
    if (!product?.id) return;

    if (isInCart) {
      deleteFromCart(cartItem.id);
    } else {
      addToCart({ product_id: product.id, quantity: 1 });
    }
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.badge} ${product.is_available ? styles.available : styles.waiting}`}>
        {product.is_available ? t('card.inStock') : t('card.outOfStock')}
      </div>

      <Link href={`/productdetail/${product.id}`} className={styles.wrapper}>
        <div className={styles.imageSection}>
          <Image
            src={imageUrl}
            alt={product.name}
            width={280}
            height={240}
            className={styles.image}
            sizes="(max-width: 900px) 80vw, 280px"
          />
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.article}>
              {t('card.article')}: {product.article}
            </span>
            <h3 className={styles.title} title={product.name}>
              {product.name}
            </h3>
          </div>

          <p className={styles.description} title={product.description}>
            {product.description?.slice(0, 420) || t('description.notAvailable')}
          </p>

          <div className={styles.footer}>
            <div className={styles.meta}>
              <div className={styles.bonus}>
                {product.bonus || 0} {t('card.bonuses')}
              </div>
              <div className={styles.price}>
                {Number(product.price).toLocaleString()} {t('card.currency')}
              </div>
            </div>

            <button
              className={styles.cartBtn}
              onClick={handleCartClick}
              disabled={isAdding || isDeleting}
              style={{
                backgroundColor: isInCart ? '#0E2E5B' : '',
                color: isInCart ? '#fff' : '',
                borderColor: isInCart ? '#0E2E5B' : '',
              }}
            >
              {isInCart ? <IoCart size={20} /> : <IoCartOutline size={20} />}
              <span>{t('productCard.addToCart')}</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
