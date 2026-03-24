'use client';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import { LayoutGrid, Monitor, Video, FileText, BookOpen } from 'lucide-react';
import Catalog from '../catalogmenu/Catalog';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useProducts } from '@/lib/products/hooks/hooks';

export default function NavItem() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { categories } = useProducts();

  const menuItems = [
    { label: t('navbar.catalog'), icon: <LayoutGrid size={18} />, isCatalog: true },
    {
      label: t('navbar.pcComponents'),
      link: '/catalog',
      category: t('navbar.pcComponents'),
      icon: <Monitor size={18} />,
    },
    {
      label: t('navbar.videoSurveillance'),
      link: '/catalog',
      category: t('navbar.videoSurveillance'),
      icon: <Video size={18} />,
    },
    { label: t('navbar.solutions'), link: '/solution', icon: <FileText size={18} /> },
    { label: t('navbar.courses'), link: '/course', icon: <BookOpen size={18} /> },
  ];

  const hasNestedCategory = (category, currentCategory) => {
    if (!category || !currentCategory) return false;
    if (category.name === currentCategory) return true;
    return (category.subcategories || []).some((subcategory) =>
      hasNestedCategory(subcategory, currentCategory)
    );
  };

  const normalizePath = (path) => {
    if (!path) return '/';
    return path.length > 1 ? path.replace(/\/+$/, '') : path;
  };

  const isActive = (item) => {
    if (normalizePath(pathname) !== normalizePath(item.link)) return false;
    if (item.category) {
      const currentCategory = searchParams.get('category');
      if (!currentCategory) return false;
      if (currentCategory === item.category) return true;

      const parentCategory = categories?.find((category) => category.name === item.category);
      return hasNestedCategory(parentCategory, currentCategory);
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
