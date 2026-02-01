"use client";
import React, { useState, useEffect, useRef } from "react";
// Заменяем инструменты роутинга
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import "./AdminPanel.scss";

const AdminPanel = () => {
  const pathname = usePathname(); // Аналог location.pathname
  const menuRef = useRef(null);
  const itemRefs = useRef({});

  const [indicatorPosition, setIndicatorPosition] = useState({
    top: 0,
    height: 40,
  });

  // В Next.js инициализация состояния из localStorage должна быть в useEffect,
  // чтобы избежать ошибок гидратации (несоответствия сервера и клиента)
  const [activeIndex, setActiveIndex] = useState(1);

  const menuItems = [
    { id: 0, text: "Товары", path: "/camera" },
    { id: 1, text: "Заказы", path: "/order-table" },
    { id: 2, text: "Баннеры", path: "/banners" },
    { id: 3, text: "Пользователи", path: "/users-table" },
    { id: 4, text: "Настройки сайта", path: "/setting-web" },
    // { id: 5, text: "Решения", path: "/resalts" },
    // { id: 6, text: "Курсы", path: "/courses" },
  ];

  const updateIndicatorPosition = (index) => {
    const itemElement = itemRefs.current[index];
    if (itemElement && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();

      const topPos = itemRect.top - menuRect.top;
      setIndicatorPosition({
        top: topPos,
        height: itemRect.height,
      });

      menuRef.current.style.setProperty("--indicator-top", `${topPos}px`);
    }
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem("adminPanelActiveIndex", index.toString());
  };

  // 1. Восстановление индекса из localStorage при первой загрузке
  useEffect(() => {
    const saved = localStorage.getItem("adminPanelActiveIndex");
    if (saved !== null) {
      setActiveIndex(parseInt(saved));
    }
  }, []);

  // 2. Синхронизация с актуальным путем Next.js
  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => item.path === pathname);
    
    if (currentIndex !== -1 && currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
      localStorage.setItem("adminPanelActiveIndex", currentIndex.toString());
    }
  }, [pathname]);

  // 3. Обновление индикатора
  useEffect(() => {
    // Небольшая задержка, чтобы шрифты или стили успели примениться
    const timer = setTimeout(() => {
      updateIndicatorPosition(activeIndex);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // 4. Обработчик ресайза
  useEffect(() => {
    const handleResize = () => updateIndicatorPosition(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <div className="admin-panel ">
      <h2 className="admin-title">Админ панель</h2>
      <nav className="admin-nav">
        <ul
          className="admin-menu"
          ref={menuRef}
          style={{
            "--indicator-top": `${indicatorPosition.top}px`,
          }}
        >
          {menuItems.map((item, index) => (
            <li key={item.id} className="admin-menu-item">
              <Link
                href={item.path}
                // В Next.js активный класс проверяем вручную через pathname
                className={`admin-menu-link ${pathname === item.path ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
                ref={(el) => (itemRefs.current[index] = el)}
              >
                <div className="checkbox-container">
                  <span className="menu-text">{item.text}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminPanel;