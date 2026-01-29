'use client';
import { useState } from 'react';
import { 
  Menu, Wifi, Cpu, Monitor, MousePointer, 
  HardDrive, Printer, Speaker, Home, 
  BatteryCharging, Battery, ChevronDown, ChevronRight 
} from 'lucide-react';
import styles from './CatalogButton.module.scss';

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
          { name: "Видеокарты", hasArrow: false }
        ]
      }
    ]
  },
  accessories: {
    title: "Аксессуары",
    icon: <MousePointer size={18} />,
    groups: [
      {
        name: "Аксессуары для ПК",
        links: [
          { name: "Переходники", hasArrow: false },
          { name: "Кабели и шнуры", hasArrow: true },
          { name: "USB HUB", hasArrow: false }
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

export default function CatalogButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (key) => {
    setActiveCategory(activeCategory === key ? null : key);
  };

  return (
    <div className={styles.catalogWrapper}>
      <button 
        className={styles.catalogButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={18} />
        <span>Каталог</span>
        <ChevronDown 
          size={16} 
          className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} 
        />
      </button>

      {isOpen && (
        <div className={styles.catalogDropdown}>
          <ul className={styles.categoryList}>
            {Object.entries(catalogData).map(([key, item]) => (
              <li key={key} className={styles.categoryWrapper}>
                <div 
                  className={`${styles.categoryItem} ${activeCategory === key ? styles.active : ''}`}
                  onClick={() => toggleCategory(key)}
                >
                  <div className={styles.itemLeft}>
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight size={14} className={styles.subArrow} />
                </div>

                {/* Подменю (Аккордеон) */}
                {activeCategory === key && (
                  <div className={styles.subDrawer}>
                    {item.groups.map((group, gIdx) => (
                      <div key={gIdx} className={styles.subGroup}>
                        <h4 className={styles.groupName}>{group.name}</h4>
                        <ul className={styles.linksList}>
                          {group.links.map((link, lIdx) => (
                            <li key={lIdx} className={styles.linkItem}>
                              {link.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}