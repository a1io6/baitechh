"use client";

import Image from 'next/image';
import styles from './Cart.module.scss';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useDeleteCartItem } from '@/lib/cart/hooks/hooks';

export default function CartItem({ item }) {
  const product = item.product || {};
  const { mutate: deleteItem } = useDeleteCartItem(); // исправлено имя переменной

  const handleDelete = () => {
    if (item.id) {
      deleteItem(item.id); // передаем id корзины, а не продукта
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.indexNumber}>1</div>
      
      <div className={styles.imageBlock}>
        <span className={styles.badge}>
          {product.is_available ? 'В наличии' : 'Нет в наличии'}
        </span>
        {product.existing_images?.[0]?.image && (
          <Image
            src={product.existing_images[0].image}
            alt={product.name}
            width={100}
            height={100}
          />
        )}
      </div>

      <div className={styles.infoBlock}>
        <div className={styles.header}>
          <span className={styles.article}>Артикул: {product.article}</span>
          <button className={styles.deleteBtn} onClick={handleDelete}>
            <Trash2 size={18} />
          </button>
        </div>
        
        <h4 className={styles.itemTitle}>{product.name}</h4>
        <p className={styles.description}>
          {product.description?.slice(0, 85)}
          {product.description?.length > 85 ? '...' : ''}
        </p>
        
        <div className={styles.priceRow}>
          <div className={styles.bonus}>{product.bonus || 0} бонусов</div>
          <div className={styles.price}>
            {Number(item.total_price || product.price || 0).toLocaleString()} сом
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.counter}>
            <button><Minus size={16} /></button>
            <span>{item.quantity}</span>
            <button><Plus size={16} /></button>
          </div>
          <input type="checkbox" className={styles.checkbox} defaultChecked />
        </div>
      </div>
    </div>
  );
}
