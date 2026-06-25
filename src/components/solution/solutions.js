// src/lib/solution/data.js

export const solutionTranslations = {
  ru: {
    heroTitle: 'Решения',
    heroDesc: 'Проектируем информационные и инженерные системы, внедряем и обслуживаем специализированные системы связи и безопасности.',
    breadcrumbHome: 'Главная',
    breadcrumbSolutions: 'Решения',
  },
  kg: {
    heroTitle: 'Чечимдер',
    heroDesc: 'Маалымат жана инженердик системаларды долбоорлойбуз, байланыш жана коопсуздук системаларын орнотобуз.',
    breadcrumbHome: 'Башкы бет',
    breadcrumbSolutions: 'Чечимдер',
  },
  en: {
    heroTitle: 'Solutions',
    heroDesc: 'We design information and engineering systems, implement and maintain specialised communication and security systems.',
    breadcrumbHome: 'Home',
    breadcrumbSolutions: 'Solutions',
  },
}

export const solutionsData = [

  // ─── 1. Электрооборудование ───────────────────────────────────────────────────
  {
    id: 'elektrooborudovanie',
    icon: 'plug',
    href: '/solution/elektrooborudovanie',
    title: {
      ru: 'Электрооборудование',
      kg: 'Электр жабдуулары',
      en: 'Electrical Equipment',
    },
    items: [
      {
        id: 'kabelnesushchie-sistemy',
        icon: 'tools',
        href: '/solution/elektrooborudovanie/kabelnesushchie-sistemy',
        title: {
          ru: 'Кабеленесущие системы',
          kg: 'Кабель алып жүрүүчү системалар',
          en: 'Cable Support Systems',
        },
      },
      {
        id: 'sistemy-elektropitaniya',
        icon: 'plug',
        href: '/solution/elektrooborudovanie/sistemy-elektropitaniya',
        title: {
          ru: 'Системы электропитания',
          kg: 'Электр менен жабдуу системалары',
          en: 'Power Supply Systems',
        },
      },
      {
        id: 'promyshlennoe-osveshchenie',
        icon: 'bulb',
        href: '/solution/elektrooborudovanie/promyshlennoe-osveshchenie',
        title: {
          ru: 'Промышленное освещение',
          kg: 'Өнөр жай жарыктандыруу',
          en: 'Industrial Lighting',
        },
      },
      {
        id: 'monitoring-kontrol',
        icon: 'device-laptop',
        href: '/solution/elektrooborudovanie/monitoring-kontrol',
        title: {
          ru: 'Мониторинг и контроль',
          kg: 'Мониторинг жана контроль',
          en: 'Monitoring & Control',
        },
      },
    ],
  },

  // ─── 2. Комплексные системы безопасности ─────────────────────────────────────
  {
    id: 'sistemy-bezopasnosti',
    icon: 'shield-check',
    href: '/solution/sistemy-bezopasnosti',
    title: {
      ru: 'Комплексные системы безопасности',
      kg: 'Комплекстүү коопсуздук системалары',
      en: 'Integrated Security Systems',
    },
    items: [
      {
        id: 'opoveshchenie-evakuatsiya',
        icon: 'bell',
        href: '/solution/sistemy-bezopasnosti/opoveshchenie-evakuatsiya',
        title: {
          ru: 'Система оповещения и эвакуации',
          kg: 'Эскертүү жана эвакуация системасы',
          en: 'Notification & Evacuation System',
        },
      },
      {
        id: 'videonablyudenie',
        icon: 'camera',
        href: '/solution/sistemy-bezopasnosti/videonablyudenie',
        title: {
          ru: 'Система видео и телевизионного наблюдения',
          kg: 'Видео жана телевизиялык байкоо системасы',
          en: 'Video & TV Surveillance System',
        },
      },
      {
        id: 'okhrannaya-signalizatsiya',
        icon: 'shield-lock',
        href: '/solution/sistemy-bezopasnosti/okhrannaya-signalizatsiya',
        title: {
          ru: 'Система охранной сигнализации',
          kg: 'Күзөт сигнализациясы системасы',
          en: 'Security Alarm System',
        },
      },
      {
        id: 'skud',
        icon: 'door',
        href: '/solution/sistemy-bezopasnosti/skud',
        title: {
          ru: 'Система контроля и управления доступом',
          kg: 'Кирүүнү башкаруу жана контролдоо системасы',
          en: 'Access Control & Management System',
        },
      },
      {
        id: 'so-pri-usta',
        icon: 'user-shield',
        href: '/solution/sistemy-bezopasnosti/so-pri-usta',
        title: {
          ru: 'СО при угрозе совершения или совершении террористического акта',
          kg: 'Террористтик акт коркунучунда эскертүү системасы',
          en: 'Alert System for Terrorist Threat',
        },
      },
    ],
  },

  // ─── 3. Промышленная связь и оповещение ──────────────────────────────────────
  {
    id: 'promyshlennaya-svyaz',
    icon: 'router',
    href: '/solution/promyshlennaya-svyaz',
    title: {
      ru: 'Промышленная связь и оповещение',
      kg: 'Өнөр жай байланышы жана эскертүү',
      en: 'Industrial Communication & Notification',
    },
    items: [
      {
        id: 'prom-svyaz',
        icon: 'topology-star',
        href: '/solution/promyshlennaya-svyaz/promyshlennaya-svyaz',
        title: {
          ru: 'Промышленная связь',
          kg: 'Өнөр жай байланышы',
          en: 'Industrial Communication',
        },
      },
      {
        id: 'opoveshchenie',
        icon: 'bell',
        href: '/solution/promyshlennaya-svyaz/opoveshchenie',
        title: {
          ru: 'Оповещение',
          kg: 'Эскертүү',
          en: 'Notification',
        },
      },
      {
        id: 'telefonnaya-svyaz',
        icon: 'device-tv',
        href: '/solution/promyshlennaya-svyaz/telefonnaya-svyaz',
        title: {
          ru: 'Телефонная связь',
          kg: 'Телефон байланышы',
          en: 'Telephone Communication',
        },
      },
      {
        id: 'besprovodnie-sistemy',
        icon: 'wifi',
        href: '/solution/promyshlennaya-svyaz/besprovodnie-sistemy',
        title: {
          ru: 'Беспроводные системы связи',
          kg: 'Зымсыз байланыш системалары',
          en: 'Wireless Communication Systems',
        },
      },
    ],
  },

  // ─── 4. Инфраструктура ────────────────────────────────────────────────────────
  {
    id: 'infrastruktura',
    icon: 'topology-star',
    href: '/solution/infrastruktura',
    title: {
      ru: 'Инфраструктура',
      kg: 'Инфраструктура',
      en: 'Infrastructure',
    },
    items: [
      {
        id: 'seti-peredachi-dannyh',
        icon: 'router',
        href: '/solution/infrastruktura/seti-peredachi-dannyh',
        title: {
          ru: 'Сети и системы передачи данных',
          kg: 'Маалымат берүү тармактары жана системалары',
          en: 'Data Transmission Networks & Systems',
        },
      },
      {
        id: 'bshpd-rrl',
        icon: 'wifi',
        href: '/solution/infrastruktura/bshpd-rrl',
        title: {
          ru: 'Беспроводной широкополосный доступ и радиорелейная линия',
          kg: 'Зымсыз кеңжолактуу мүмкүнчүлүк жана радиорелейдик линия',
          en: 'Wireless Broadband Access & Radio Relay Line',
        },
      },
      {
        id: 'obrabotka-hranenie-dannyh',
        icon: 'server',
        href: '/solution/infrastruktura/obrabotka-hranenie-dannyh',
        title: {
          ru: 'Системы обработки и хранения данных',
          kg: 'Маалыматтарды иштетүү жана сактоо системалары',
          en: 'Data Processing & Storage Systems',
        },
      },
      {
        id: 'sistemy-chasofikatsii',
        icon: 'device-tv',
        href: '/solution/infrastruktura/sistemy-chasofikatsii',
        title: {
          ru: 'Системы часофикации',
          kg: 'Убакыт синхрондоштуруу системалары',
          en: 'Clock Synchronisation Systems',
        },
      },
    ],
  },
]