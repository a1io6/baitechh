'use client';
import styles from './Cart.module.scss';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../cartItem/CartItem';
import Link from 'next/link';
import { useCart, useClearCart } from '@/lib/cart/hooks/hooks';


export default function Cart() {
  const { data: items = [], isLoading } = useCart();
  const { mutate: clearCart, isPending } = useClearCart();
  console.log(items);
  const isEmpty = items.length === 0;

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className={`${styles.cartWrapper} container`}>
      <h2 className={styles.title}>Заказ ({items.length})</h2>

      {isEmpty ? (
        <div className={styles.emptyCart}>
          <ShoppingCart size={64} strokeWidth={1} />
          <h3>В корзине пока нет товаров</h3>
          <p>Найдите то, что вам нужно в каталоге или через поиск</p>
          <Link href="/">
            <button className={styles.btnPrimary}>Перейти в каталог</button>
          </Link>
        </div>
        
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.itemsList}>
            {items?.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className={styles.summary}>
            <button className={styles.btnPrimary}>
              Оформить заказ
            </button>

            <button
              className={styles.btnOutline}
              onClick={() => clearCart()}
              disabled={isPending}
            >
              Удалить всё 🗑️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
