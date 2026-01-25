'use client';
import { useState } from 'react';
import styles from './CatalogMenu.module.scss';
import { 
  Wifi, Cpu, Monitor, MousePointer, HardDrive, 
  Printer, Speaker, Home, BatteryCharging, Battery 
} from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const catalogData = {
  network: {
    title: "Сетевое оборудование",
    icon: <Wifi size={18} />,
    groups: [
      {
        name: "Беспроводное оборудование",
        links: [
          { name: "Маршрутизаторы (Роутеры)", hasArrow: true },
          { name: "Адаптеры Wi-Fi", hasArrow: false },
          { name: "Точки доступа", hasArrow: false }
        ]
      },
      {
        name: "Проводное оборудование",
        links: [
          { name: "Коммутаторы (Свитчи)", hasArrow: false },
          { name: "Сетевые карты", hasArrow: false }
        ]
      }
    ]
  },
  components: {
    title: "Компьютерные комплектующие",
    icon: <Cpu size={18} />,
    groups: [
      {
        name: "Основные компоненты",
        links: [
          { name: "Процессоры", hasArrow: false },
          { name: "Материнские платы", hasArrow: false },
          { name: "Видеокарты", hasArrow: false },
          { name: "Оперативная память", hasArrow: false }
        ]
      },
      {
        name: "Охлаждение и питание",
        links: [
          { name: "Блоки питания", hasArrow: false },
          { name: "Кулеры для процессоров", hasArrow: false },
          { name: "Корпуса", hasArrow: false }
        ]
      }
    ]
  },
  peripherals: {
    title: "Компьютерная периферия",
    icon: <Monitor size={18} />,
    groups: [
      {
        name: "Устройства ввода",
        links: [
          { name: "Клавиатуры", hasArrow: false },
          { name: "Мыши", hasArrow: false },
          { name: "Коврики для мыши", hasArrow: false }
        ]
      },
      {
        name: "Мониторы",
        links: [
          { name: "Игровые мониторы", hasArrow: false },
          { name: "Кронштейны", hasArrow: false }
        ]
      }
    ]
  },
  accessories: {
    title: "Аксессуары",
    icon: <MousePointer size={18} />,
    groups: [
      {
        name: "Аксессуары для компьютерных устройств",
        links: [
          { name: "Переходники", hasArrow: false },
          { name: "Кабели и шнуры", hasArrow: true },
          { name: "USB HUB", hasArrow: false },
          { name: "Кардридеры", hasArrow: false },
          { name: "Микрофоны", hasArrow: false },
          { name: "Сетевые фильтры", hasArrow: false },
          { name: "Электрические удлинители", hasArrow: false }
        ]
      },
      {
        name: "Аксессуары для ноутбуков и планшетов",
        links: [
          { name: "Блоки питания для ноутбуков", hasArrow: true },
          { name: "Наклейки на клавиатуру", hasArrow: false },
          { name: "Чистящие средства", hasArrow: false },
          { name: "Рюкзаки и сумки", hasArrow: true }
        ]
      }
    ]
  },
  storage: {
    title: "Носители информации",
    icon: <HardDrive size={18} />,
    groups: [
      {
        name: "USB накопители",
        links: [
          { name: "Флеш накопители 16 GB", hasArrow: false },
          { name: "Флеш накопители 32 GB", hasArrow: false },
          { name: "Флеш накопители 64 GB", hasArrow: false },
          { name: "Флеш накопители 128 GB", hasArrow: false }
        ]
      },
      {
        name: "Внешние накопители",
        links: [
          { name: "HDD внешние", hasArrow: false },
          { name: "SSD внешние", hasArrow: false },
          { name: "Кейсы для жестких дисков", hasArrow: false }
        ]
      }
    ]
  },
  office: {
    title: "Оргтехника",
    icon: <Printer size={18} />,
    groups: [
      {
        name: "Печать",
        links: [
          { name: "Принтеры и МФУ", hasArrow: false },
          { name: "Картриджи", hasArrow: false }
        ]
      }
    ]
  },
  audio: {
    title: "Акустические системы/колонки",
    icon: <Speaker size={18} />,
    groups: [
      {
        name: "Звук",
        links: [
          { name: "Колонки для ПК", hasArrow: false },
          { name: "Портативная акустика", hasArrow: false },
          { name: "Саундбары", hasArrow: false }
        ]
      }
    ]
  },
  smartHome: {
    title: "Гаджеты для дома",
    icon: <Home size={18} />,
    groups: [
      {
        name: "Умный дом",
        links: [
          { name: "Умные розетки", hasArrow: false },
          { name: "IP-камеры", hasArrow: false },
          { name: "Датчики", hasArrow: false }
        ]
      }
    ]
  },
  power: {
    title: "Источники питания",
    icon: <BatteryCharging size={18} />,
    groups: [
      {
        name: "Защита питания",
        links: [
          { name: "ИБП (UPS)", hasArrow: false },
          { name: "Стабилизаторы напряжения", hasArrow: false }
        ]
      }
    ]
  },
  batteries: {
    title: "Аккумуляторы",
    icon: <Battery size={18} />,
    groups: [
      {
        name: "Элементы питания",
        links: [
          { name: "Батарейки", hasArrow: false },
          { name: "Зарядные устройства для АКБ", hasArrow: false }
        ]
      }
    ]
  }
};

export default function Catalog({onClose}) {
  const [activeKey, setActiveKey] = useState('accessories');

  return (
    <div className={styles.overlay} onClick={onClose}>
    <div className={`${styles.catalogContainer} container`}>
      {/* Левая панель - Кнопки-фильтры */}
      <aside className={styles.sidebar}>
        {Object.entries(catalogData).map(([key, value]) => (
          <button
            key={key}
            className={`${styles.navButton} ${activeKey === key ? styles.active : ''}`}
            onClick={() => setActiveKey(key)}
          >
            <span className={styles.icon}>{value.icon}</span>
            <span className={styles.label}>{value.title}</span>
          </button>
        ))}
      </aside>

      {/* Правая панель - Контент */}
      <main className={styles.content}>
        <div className={styles.grid}>
          {catalogData[activeKey].groups.map((group, idx) => (
            <div key={idx} className={styles.column}>
              <h3 className={styles.groupTitle}>{group.name}</h3>
              <ul className={styles.linkList}>
                {group.links.map((link) => (
                 <li key={link.name} className={styles.linkItem}>
  {link.name}
  {link.hasArrow && <ChevronRight size={14} className={styles.arrow} />}
</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
}