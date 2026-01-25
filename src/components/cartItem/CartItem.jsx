import styles from './Cart.module.scss';
import { Trash2, Minus, Plus } from 'lucide-react';

export default function CartItem({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.indexNumber}>1</div>
      
      <div className={styles.imageBlock}>
        <span className={styles.badge}>В наличии</span>
        <img src={item.image} alt={item.title} />
      </div>

      <div className={styles.infoBlock}>
        <div className={styles.header}>
          <span className={styles.article}>Артикул: {item.article}</span>
          <button className={styles.deleteBtn}><Trash2 size={18} /></button>
        </div>
        
        <h4 className={styles.itemTitle}>{item.title}</h4>
        <p className={styles.description}>Современная IP-камера для внутреннего и наружного видеонаблюдения...</p>
        
        <div className={styles.priceRow}>
          <div className={styles.bonus}>{item.bonus} бонусов</div>
          <div className={styles.price}>{item.price.toLocaleString()} сом</div>
        </div>

        <div className={styles.footer}>
          <div className={styles.counter}>
            <button><Minus size={16} /></button>
            <span>{item.count}</span>
            <button><Plus size={16} /></button>
          </div>
          <input type="checkbox" className={styles.checkbox} defaultChecked />
        </div>
      </div>
    </div>
  );
}