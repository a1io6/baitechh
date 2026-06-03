// ============================================================
// ДАННЫЕ РЕШЕНИЙ — редактируй здесь, бэкенд не нужен
// Чтобы добавить новый раздел: скопируй объект в solutionsData
// Чтобы добавить подкатегорию: добавь объект в массив items[]
// ============================================================

export const solutionsData = [
  {
    id: 'video',
    color: 'blue',
    icon: 'camera',
    href: '/solutions/video',
    title: {
      ru: 'Видеонаблюдение',
      kg: 'Видеобайкоо',
      en: 'Video Surveillance',
    },
    items: [
      {
        id: 'v1',
        icon: 'camera',
        href: '/solutions/video/ip',
        title: { ru: 'IP-камеры', kg: 'IP-камералар', en: 'IP Cameras' },
      },
      {
        id: 'v2',
        icon: 'building-store',
        href: '/solutions/video/business',
        title: { ru: 'Видеонаблюдение для бизнеса', kg: 'Бизнес үчүн видеобайкоо', en: 'Business Surveillance' },
      },
      {
        id: 'v3',
        icon: 'home',
        href: '/solutions/video/home',
        title: { ru: 'Домашнее видеонаблюдение', kg: 'Үй видеобайкоо', en: 'Home Surveillance' },
      },
      {
        id: 'v4',
        icon: 'car',
        href: '/solutions/video/outdoor',
        title: { ru: 'Видеонаблюдение на объектах', kg: 'Объекттердеги видеобайкоо', en: 'Outdoor Surveillance' },
      },
    ],
  },
  {
    id: 'security',
    color: 'teal',
    icon: 'shield-lock',
    href: '/solutions/security',
    title: {
      ru: 'Системы безопасности',
      kg: 'Коопсуздук системалары',
      en: 'Security Systems',
    },
    items: [
      {
        id: 's1',
        icon: 'door',
        href: '/solutions/security/access',
        title: { ru: 'Контроль доступа (СКУД)', kg: 'Кирүүнү башкаруу (СКУД)', en: 'Access Control (ACS)' },
      },
      {
        id: 's2',
        icon: 'lock',
        href: '/solutions/security/smart-lock',
        title: { ru: 'Умные замки', kg: 'Акылдуу кулпулар', en: 'Smart Locks' },
      },
      {
        id: 's3',
        icon: 'bell',
        href: '/solutions/security/alarm',
        title: { ru: 'Охранная сигнализация', kg: 'Күзөт сигнализациясы', en: 'Security Alarm' },
      },
      {
        id: 's4',
        icon: 'user-shield',
        href: '/solutions/security/guard',
        title: { ru: 'Пультовая охрана и ГБР', kg: 'Пулттук күзөт жана ТРТ', en: 'Remote Guard & QRF' },
      },
    ],
  },
  {
    id: 'network',
    color: 'coral',
    icon: 'wifi',
    href: '/solutions/network',
    title: {
      ru: 'Сетевое оборудование',
      kg: 'Тармактык жабдуу',
      en: 'Network Equipment',
    },
    items: [
      {
        id: 'n1',
        icon: 'router',
        href: '/solutions/network/routers',
        title: { ru: 'Роутеры и точки доступа', kg: 'Роутерлер жана кирүү чекиттери', en: 'Routers & Access Points' },
      },
      {
        id: 'n2',
        icon: 'topology-star',
        href: '/solutions/network/switches',
        title: { ru: 'Коммутаторы и серверы', kg: 'Которгучтар жана серверлер', en: 'Switches & Servers' },
      },
      {
        id: 'n3',
        icon: 'plug',
        href: '/solutions/network/cable',
        title: { ru: 'Кабельные системы (СКС)', kg: 'Кабелдик системалар (СКС)', en: 'Structured Cabling (SCS)' },
      },
    ],
  },
  {
    id: 'smarthome',
    color: 'amber',
    icon: 'smart-home',
    href: '/solutions/smarthome',
    title: {
      ru: 'Умный дом и автоматизация',
      kg: 'Акылдуу үй жана автоматташтыруу',
      en: 'Smart Home & Automation',
    },
    items: [
      {
        id: 'sh1',
        icon: 'bulb',
        href: '/solutions/smarthome/lighting',
        title: { ru: 'Умное освещение', kg: 'Акылдуу жарыктандыруу', en: 'Smart Lighting' },
      },
      {
        id: 'sh2',
        icon: 'device-tv',
        href: '/solutions/smarthome/climate',
        title: { ru: 'Управление климатом', kg: 'Климатты башкаруу', en: 'Climate Control' },
      },
      {
        id: 'sh3',
        icon: 'tools',
        href: '/solutions/smarthome/turnkey',
        title: { ru: 'Установка под ключ', kg: 'Ачкычка чейин орнотуу', en: 'Turnkey Installation' },
      },
    ],
  },

]

export const solutionTranslations = {
  ru: {
    pageTitle: 'Решения',
    breadcrumbHome: 'Главная',
    breadcrumbSolutions: 'Решения',
    readMore: 'Подробнее',
    heroTitle: 'Решение с Baitech',
    heroDesc: 'Готовые решения для безопасности, сетевой инфраструктуры и автоматизации в едином стиле.',
  },
  kg: {
    pageTitle: 'Чечимдер',
    breadcrumbHome: 'Башкы бет',
    breadcrumbSolutions: 'Чечимдер',
    readMore: 'Толугураак',
    heroTitle: 'Baitech менен чечим',
    heroDesc: 'Коопсуздук, тармактык инфраструктура жана автоматташтыруу үчүн даяр чечимдер.',
  },
  en: {
    pageTitle: 'Solutions',
    breadcrumbHome: 'Home',
    breadcrumbSolutions: 'Solutions',
    readMore: 'Learn more',
    heroTitle: 'Solutions with Baitech',
    heroDesc: 'Ready-made solutions for security, network infrastructure and automation in one unified style.',
  },
}