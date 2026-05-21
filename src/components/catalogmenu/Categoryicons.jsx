// lib/categories/categoryIcons.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Добавляй сюда иконки для новых категорий.
// Ключ = id категории из базы данных.
// Иконки никогда не удаляются — просто добавляй новые строки снизу.
// ─────────────────────────────────────────────────────────────────────────────

import {
  Battery,
  Tag,
  Speaker,
  Camera,
  Home,
  Zap,
  Cpu,
  Monitor,
  HardDrive,
  Printer,
  Wifi,
  LayoutGrid,
  PanelTop,
} from 'lucide-react';

const SIZE = 18;

export const CATEGORY_ICONS = {
  60: <Battery   size={SIZE} />,   // Аккумуляторы
  54: <Tag       size={SIZE} />,   // Аксессуары
  61: <Speaker   size={SIZE} />,   // Акустические системы/колонки
  50: <Camera    size={SIZE} />,   // Видеонаблюдение
  58: <Home      size={SIZE} />,   // Гаджеты для дома
  59: <Zap       size={SIZE} />,   // Источники питания
  49: <Cpu       size={SIZE} />,   // Комплектующие ПК
  55: <Monitor   size={SIZE} />,   // Компьютерная периферия
  56: <HardDrive size={SIZE} />,   // Носители информации
  57: <Printer   size={SIZE} />,   // Оргтехника
  53: <Wifi      size={SIZE} />,   // Сетевое оборудование
  67: <PanelTop  size={SIZE} />,   // Интерактивные панели

  // ── Будущие категории — добавляй сюда новые ──────────────────────────────
  // 62: <Smartphone size={SIZE} />,  // Смартфоны
  // 63: <Tablet     size={SIZE} />,  // Планшеты
  // 64: <Tv         size={SIZE} />,  // Телевизоры
  // 65: <Watch      size={SIZE} />,  // Умные часы
  // 66: <Headphones size={SIZE} />,  // Наушники
  // 68: <Mouse      size={SIZE} />,  // Мышки
  // 69: <Keyboard   size={SIZE} />,  // Клавиатуры
  // 70: <Gamepad2   size={SIZE} />,  // Игровые устройства
  // 71: <Server     size={SIZE} />,  // Серверы
  // 72: <Usb        size={SIZE} />,  // USB / Хабы
  // 73: <Cable      size={SIZE} />,  // Кабели
  // 74: <Plug       size={SIZE} />,  // Зарядки / Адаптеры
};

// Иконка по умолчанию если id не найден
export const DEFAULT_CATEGORY_ICON = <LayoutGrid size={SIZE} />;