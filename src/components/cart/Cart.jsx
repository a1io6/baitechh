'use client';
import { useState } from 'react';
import styles from './Cart.module.scss';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../cartItem/CartItem';
import Link from 'next/link';

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'IP-камера видеонаблюдения 4MP Dahua DH-IPC-HFW2431S-S',
      article: '121232',
      price: 10000,
      bonus: 200,
      image: 'https://avatars.mds.yandex.net/i?id=686a9be56666517d45d63247208696bc1fa73646-5870379-images-thumbs&n=13', // путь к картинке
      count: 2
    }
  ]);

  const isEmpty = items.length === 0;

  return (
    <div className={`${styles.cartWrapper} container`}>
      <h2 className={styles.title}>Заказ({items.length})</h2>
      
      {isEmpty ? (
        <div className={styles.emptyCart}>
          <ShoppingCart size={64} strokeWidth={1} />
          <h3>В корзине пока нет товаров</h3>
          <p>Найдите то, что вам нужно в каталоге или через поиск</p>
         <Link href="/"><button className={styles.btnPrimary}>Перейти в каталог</button></Link> 
        </div>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.itemsList}>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className={styles.summary}>
            <button className={styles.btnPrimary}>Оформить заказ</button>
            <button className={styles.btnOutline} onClick={() => setItems([])}>
              Удалить всё 🗑️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}