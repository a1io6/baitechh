'use client';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import { LayoutGrid, Monitor, Video, FileText, BookOpen } from 'lucide-react';
import Catalog from '../catalogmenu/Catalog';

export default function NavItem() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Каталог', icon: <LayoutGrid size={18} />, isCatalog: true },
    { label: 'Комплектующий ПК', icon: <Monitor size={18} /> },
    { label: 'Видеонаблюдение', icon: <Video size={18} /> },
    { label: 'Решение', icon: <FileText size={18} /> },
    { label: 'Курсы', icon: <BookOpen size={18} /> },
  ];

  return (
    <>
      <nav className={`${styles.navContainer} container`}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={styles.navItem}
            onClick={() => item.isCatalog && setOpen(true)}
            type="button"
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.icon}>{item.icon}</span>
          </button>
        ))}
      </nav>
  {
    open && (
        <Catalog isOpen={open} onClose={() => setOpen(false)} />
    )
  }
    </>
  );
}