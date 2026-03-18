'use client';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import { LayoutGrid, Monitor, Video, FileText, BookOpen } from 'lucide-react';
import Catalog from '../catalogmenu/Catalog';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function NavItem() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const menuItems = [
    { label: t('navbar.catalog'), icon: <LayoutGrid size={18} />, isCatalog: true },
    {
      label: t('navbar.pcComponents'),
      link: '/catalog',
      category: 'Комплектующие ПК',
      icon: <Monitor size={18} />,
    },
    {
      label: t('navbar.videoSurveillance'),
      link: '/catalog',
      category: 'Видеонаблюдение',
      icon: <Video size={18} />,
    },
    { label: t('navbar.solutions'), link: '/solution', icon: <FileText size={18} /> },
    { label: t('navbar.courses'), link: '/course', icon: <BookOpen size={18} /> },
  ];

  const isActive = (item) => {
    if (pathname !== item.link) return false;
    if (item.category) {
      return searchParams.get('category') === item.category;
    }
    return true;
  };

  const getHref = (item) => {
    if (item.category) {
      return `${item.link}?category=${encodeURIComponent(item.category)}`;
    }
    return item.link;
  };

  return (
    <>
      <nav className={`${styles.navContainer} container`}>
        {menuItems.map((item, index) =>
          item.isCatalog ? (
            <button
              key={index}
              className={`${styles.navItem} ${open ? styles.navItemActive : ''}`}
              onClick={() => setOpen((prev) => !prev)}
              type="button"
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.icon}>{item.icon}</span>
            </button>
          ) : item.link ? (
            <Link
              key={index}
              href={getHref(item)}
              className={`${styles.navItem} ${isActive(item) ? styles.navItemActive : ''}`}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.icon}>{item.icon}</span>
            </Link>
          ) : (
            <button key={index} className={styles.navItem} type="button">
              <span className={styles.label}>{item.label}</span>
              <span className={styles.icon}>{item.icon}</span>
            </button>
          )
        )}
      </nav>
      {open && <Catalog onClose={() => setOpen(false)} />}
    </>
  );
}