// ============================================================
// ДАННЫЕ ДЛЯ СТРАНИЦ ПОДРАЗДЕЛОВ (/solution/[id]/[subId])
// Ключ объекта = item.id из solutionsData (см. src/lib/solution/data.js)
// Каждый id содержит { ru: {...}, kg: {...}, en: {...} }
// Поля внутри языка: heroBullets, advantagesHeading, advantages, textBlocks,
//       standardsHeading, standards, productsHeading, products,
//       softwareHeading, softwareSubheading, software,
//       ctaTitle, ctaDesc
// Все image: null — заменяешь на реальные пути к фото/иконкам/схемам
// Номера ГОСТ/СП/приказов не переводятся ни на одном языке (нормативные реквизиты)
// ============================================================

export const subsectionExtras = {
  // ─── 1. ПРОМЫШЛЕННАЯ СВЯЗЬ И ОПОВЕЩЕНИЕ ──────────────────────────────────

  'promyshlennaya-svyaz': {
    ru: {
      heroBullets: [
        'Обеспечивает мгновенную прямую связь для управления технологическим процессом и персоналом',
        'Позволяет реализовать сразу несколько систем на базе одного оборудования',
      ],
      advantagesHeading: 'Система Armtel устойчива к жёстким промышленным условиям',
      advantages: [
        { icon: null, text: 'Взрывозащищённое исполнение для зон 1 и 2' },
        { icon: null, text: 'Корпуса, устойчивые к химии и абразивам' },
        { icon: null, text: 'Высокая степень защиты оболочки' },
        { icon: null, text: 'Активное и пассивное шумоподавление' },
      ],
      textBlocks: [
        {
          heading: 'Диспетчерская связь',
          subheading: 'Обеспечивает мгновенный обмен информацией между сотрудниками и руководством',
          bullets: [
            { title: 'Любые масштабы', text: 'от цеха до производственных комплексов' },
            { title: 'Форматы связи под разные задачи', text: 'конференция, селектор, циркуляр' },
            { title: 'Многофункциональные пульты', text: 'дополнительные модули, программируемые клавиши, приоритетные вызовы' },
            { title: 'Интеграция с внешними системами связи', text: 'телефония, радиосвязь, оповещение' },
          ],
          image: null,
        },
        {
          heading: 'Оперативно-технологическая связь',
          subheading: 'Обеспечивает непрерывность и безопасность работы в сложных условиях',
          bullets: [
            { title: 'Гарантированное соединение абонентов', text: 'система на основе коммутаторов с неблокируемым коммутационным полем' },
            { title: 'Устойчивость к сложным условиям', text: 'переговорные устройства и громкоговорители в специальном исполнении' },
            { title: 'Бесшовная интеграция', text: 'громкоговорящая связь и оповещение в едином интерфейсе' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Полностью управляем жизненным циклом систем',
      products: [
        { name: 'Устройство переговорное взрывозащищённое DWEx', image: null, specs: [
          { title: 'Подходит для зон', text: '1 и 2' },
          { title: 'Стойкость к суровым условиям', text: 'от -60°С до +70°С' },
        ]},
        { name: 'Громкоговоритель рупорный взрывозащищённый AR-25Ex', image: null, specs: [
          { title: 'Зоны применения', text: '1 и 2, 20, 21, 22' },
          { title: 'Климат', text: 'УХЛ1' },
        ]},
      ],
      softwareHeading: 'Программное обеспечение для корректной настройки и эксплуатации',
      softwareSubheading: 'Все компоненты работают в единой защищённой среде',
      software: [
        { title: 'Единая Система Мониторинга и Конфигурирования', image: null },
        { title: 'Программное средство центрального коммутатора ARMTELICS', image: null },
        { title: 'Программное обеспечение «Армтел Инфо»', image: null },
      ],
      ctaTitle: 'Переходите от разрозненных устройств к единой экосистеме связи',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Технологиялык процессти жана персоналды башкаруу үчүн дароо түз байланышты камсыздайт',
        'Бир эле жабдуунун негизинде бир нече системаны ишке ашырууга мүмкүндүк берет',
      ],
      advantagesHeading: 'Armtel системасы катаал өнөр жай шарттарына туруктуу',
      advantages: [
        { icon: null, text: '1 жана 2 зоналар үчүн жарылуудан коргой турган аткарылыш' },
        { icon: null, text: 'Химияга жана абразивдерге туруктуу корпустар' },
        { icon: null, text: 'Корпустун коргоо даражасынын жогорулугу' },
        { icon: null, text: 'Активдүү жана пассивдүү шумду басуу' },
      ],
      textBlocks: [
        {
          heading: 'Диспетчердик байланыш',
          subheading: 'Кызматкерлер менен жетекчиликтин ортосунда маалымат менен дароо алмашууну камсыздайт',
          bullets: [
            { title: 'Каалаган масштаб', text: 'цехтен өндүрүштүк комплекстерге чейин' },
            { title: 'Ар кандай маселелер үчүн байланыш форматтары', text: 'конференция, селектор, циркуляр' },
            { title: 'Көп функциялуу пульттар', text: 'кошумча модулдар, программалануучу баскычтар, артыкчылыктуу чалуулар' },
            { title: 'Тышкы байланыш системалары менен интеграция', text: 'телефония, радиобайланыш, эскертүү' },
          ],
          image: null,
        },
        {
          heading: 'Оперативдик-технологиялык байланыш',
          subheading: 'Татаал шарттарда үзгүлтүксүздүктү жана коопсуздукту камсыздайт',
          bullets: [
            { title: 'Абоненттердин кепилдиктүү туташуусу', text: 'бөгөттөлбөгөн коммутациялык талаасы бар коммутаторлордун негизиндеги система' },
            { title: 'Татаал шарттарга туруктуулук', text: 'атайын аткарылыштагы сүйлөшүү түзмөктөрү жана үнкүчөйткүчтөр' },
            { title: 'Тигиссиз интеграция', text: 'үн күчөтүүчү байланыш жана эскертүү бирдиктүү интерфейсте' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Системалардын жашоо циклин толугу менен башкарабыз',
      products: [
        { name: 'Жарылуудан корголгон сүйлөшүү түзмөгү DWEx', image: null, specs: [
          { title: 'Туура келген зоналар', text: '1 жана 2' },
          { title: 'Катаал шарттарга туруктуулук', text: '-60°С чейин +70°С' },
        ]},
        { name: 'Жарылуудан корголгон мүйүз сымал үнкүчөйткүч AR-25Ex', image: null, specs: [
          { title: 'Колдонуу зоналары', text: '1 жана 2, 20, 21, 22' },
          { title: 'Климат', text: 'УХЛ1' },
        ]},
      ],
      softwareHeading: 'Туура жөндөө жана эксплуатациялоо үчүн программалык камсыздоо',
      softwareSubheading: 'Бардык компоненттер бирдиктүү корголгон чөйрөдө иштейт',
      software: [
        { title: 'Бирдиктүү мониторинг жана конфигурациялоо системасы', image: null },
        { title: 'ARMTELICS борбордук коммутаторунун программалык каражаты', image: null },
        { title: '«Армтел Инфо» программалык камсыздоосу', image: null },
      ],
      ctaTitle: 'Бытыранды түзмөктөрдөн байланыштын бирдиктүү экосистемасына өтүңүз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        'Provides instant direct communication for managing the production process and personnel',
        'Allows several systems to be implemented on the basis of a single set of equipment',
      ],
      advantagesHeading: 'The Armtel system withstands harsh industrial conditions',
      advantages: [
        { icon: null, text: 'Explosion-proof design for zones 1 and 2' },
        { icon: null, text: 'Enclosures resistant to chemicals and abrasives' },
        { icon: null, text: 'High degree of enclosure protection' },
        { icon: null, text: 'Active and passive noise suppression' },
      ],
      textBlocks: [
        {
          heading: 'Dispatcher communication',
          subheading: 'Provides instant information exchange between staff and management',
          bullets: [
            { title: 'Any scale', text: 'from a single workshop to entire production complexes' },
            { title: 'Communication formats for different tasks', text: 'conference, selector, broadcast' },
            { title: 'Multifunctional consoles', text: 'extra modules, programmable keys, priority calls' },
            { title: 'Integration with external communication systems', text: 'telephony, radio communication, notification' },
          ],
          image: null,
        },
        {
          heading: 'Operational and process communication',
          subheading: 'Ensures continuity and safety of operations in demanding conditions',
          bullets: [
            { title: 'Guaranteed connection between subscribers', text: 'system based on switches with a non-blocking switching matrix' },
            { title: 'Resilience in harsh conditions', text: 'intercom units and loudspeakers in special enclosures' },
            { title: 'Seamless integration', text: 'public address and notification in a single interface' },
          ],
          image: null,
        },
      ],
      productsHeading: 'We manage the full lifecycle of the systems',
      products: [
        { name: 'DWEx explosion-proof intercom unit', image: null, specs: [
          { title: 'Suitable for zones', text: '1 and 2' },
          { title: 'Resistance to harsh conditions', text: '-60°C to +70°C' },
        ]},
        { name: 'AR-25Ex explosion-proof horn loudspeaker', image: null, specs: [
          { title: 'Application zones', text: '1 and 2, 20, 21, 22' },
          { title: 'Climate rating', text: 'UHL1' },
        ]},
      ],
      softwareHeading: 'Software for correct configuration and operation',
      softwareSubheading: 'All components run in a single secure environment',
      software: [
        { title: 'Unified Monitoring and Configuration System', image: null },
        { title: 'ARMTELICS central switch software', image: null },
        { title: '"Armtel Info" software', image: null },
      ],
      ctaTitle: 'Move from disconnected devices to a single communication ecosystem',
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  opoveshchenie: {
    ru: {
      heroBullets: [
        'Обеспечивает мгновенную прямую связь для управления технологическим процессом и персоналом',
        'Позволяет реализовать сразу несколько систем на базе одного оборудования',
      ],
      advantagesHeading: 'Система Armtel устойчива к жёстким промышленным условиям',
      advantages: [
        { icon: null, text: 'Взрывозащищённое исполнение для зон 1 и 2' },
        { icon: null, text: 'Корпуса, устойчивые к химии и абразивам' },
        { icon: null, text: 'Высокая степень защиты оболочки' },
        { icon: null, text: 'Активное и пассивное шумоподавление' },
      ],
      textBlocks: [
        {
          heading: 'Локальная система оповещения',
          subheading: 'Обеспечивает оповещение при возможных и реальных ЧС',
          bullets: [
            { title: 'Любые масштабы', text: 'от цеха до производственных комплексов' },
            { title: 'Мониторинг работоспособности', text: 'контроль фидерных линий' },
            { title: 'Многофункциональность', text: 'доведение речевой и звуковой информации до сотрудников на территории предприятия и внутри зданий' },
            { title: 'Интеграция по требованиям законодательства', text: 'система ГО и ЧС для локальной системы оповещения, система АПС для системы оповещения и управления эвакуацией' },
          ],
          image: null,
        },
        {
          heading: 'Армтел-Инфо',
          subheading: 'Программное обеспечение для построения единой системы оповещения и мониторинга на предприятии',
          bullets: [
            { title: 'Контроль и мониторинг нескольких систем в одном интерфейсе', text: 'оперативная, громкоговорящая, аварийная связь и аварийное оповещение' },
            { title: 'Прогнозирование и моделирование аварийных ситуаций', text: 'расчёт зоны поражения АХОВ' },
            { title: 'Повышение скорости реакции при потенциальных и реальных ЧС', text: 'поддержка принятия решений' },
            { title: 'Приём команд от вышестоящих систем оповещения', text: 'РАСЦО, МАСЦО' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Армтел-Инфо соответствует всем необходимым требованиям регуляторов',
      standards: [
        { icon: null, text: 'ГОСТ Р 22.7.05-2022 Безопасность в чрезвычайных ситуациях. Локальные системы оповещения в районах размещения потенциально опасных объектов. Общие требования' },
        { icon: null, text: 'ГОСТ Р 42.3.01-2021 Гражданская оборона. Технические средства оповещения населения. Классификация. Общие технические требования' },
        { icon: null, text: 'Приказ МЧС России и Минцифры от 01.07.2020 №518/365 «Об утверждении положения о системах оповещения населения»' },
      ],
      productsHeading: 'Полностью управляем жизненным циклом систем',
      products: [
        { name: 'Устройство переговорное взрывозащищённое DWEx', image: null, specs: [
          { title: 'Подходит для зон', text: '1 и 2' },
          { title: 'Стойкость к суровым условиям', text: 'от -60°С до +70°С' },
        ]},
        { name: 'Громкоговоритель рупорный взрывозащищённый AR-25Ex', image: null, specs: [
          { title: 'Зоны применения', text: '1 и 2, 20, 21, 22' },
          { title: 'Климат', text: 'УХЛ1' },
        ]},
      ],
      ctaTitle: 'Переходите от разрозненных устройств к единой экосистеме оповещения',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Технологиялык процессти жана персоналды башкаруу үчүн дароо түз байланышты камсыздайт',
        'Бир эле жабдуунун негизинде бир нече системаны ишке ашырууга мүмкүндүк берет',
      ],
      advantagesHeading: 'Armtel системасы катаал өнөр жай шарттарына туруктуу',
      advantages: [
        { icon: null, text: '1 жана 2 зоналар үчүн жарылуудан коргой турган аткарылыш' },
        { icon: null, text: 'Химияга жана абразивдерге туруктуу корпустар' },
        { icon: null, text: 'Корпустун коргоо даражасынын жогорулугу' },
        { icon: null, text: 'Активдүү жана пассивдүү шумду басуу' },
      ],
      textBlocks: [
        {
          heading: 'Жергиликтүү эскертүү системасы',
          subheading: 'Мүмкүн болуучу жана чыныгы ТЖКда эскертүүнү камсыздайт',
          bullets: [
            { title: 'Каалаган масштаб', text: 'цехтен өндүрүштүк комплекстерге чейин' },
            { title: 'Иштин жөндөмдүүлүгүн мониторинг кылуу', text: 'фидердик линиялардын контролу' },
            { title: 'Көп функциялуулук', text: 'ишкананын аймагында жана имараттардын ичинде кызматкерлерге үн жана сүйлөө маалыматын жеткирүү' },
            { title: 'Мыйзамдын талаптары боюнча интеграция', text: 'жергиликтүү эскертүү системасы үчүн ФЖ жана ТЖК системасы, эвакуацияны эскертүү жана башкаруу системасы үчүн АПС системасы' },
          ],
          image: null,
        },
        {
          heading: 'Армтел-Инфо',
          subheading: 'Ишканада бирдиктүү эскертүү жана мониторинг системасын түзүү үчүн программалык камсыздоо',
          bullets: [
            { title: 'Бир интерфейсте бир нече системаны контролдоо жана мониторинг кылуу', text: 'оперативдик, үн күчөтүүчү, авариялык байланыш жана авариялык эскертүү' },
            { title: 'Авариялык кырдаалдарды божомолдоо жана моделдештирүү', text: 'ХАЖ (АХОВ) жабыркоо зонасын эсептөө' },
            { title: 'Мүмкүн болуучу жана чыныгы ТЖКда реакция ылдамдыгын жогорулатуу', text: 'чечим кабыл алууну колдоо' },
            { title: 'Жогорку турган эскертүү системаларынан буйруктарды кабыл алуу', text: 'РАСЦО, МАСЦО' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Армтел-Инфо жөнгө салуучу органдардын бардык талаптарына дал келет',
      standards: [
        { icon: null, text: 'ГОСТ Р 22.7.05-2022 Өзгөчө кырдаалдардагы коопсуздук. Потенциалдуу коркунучтуу объекттер жайгашкан райондордогу жергиликтүү эскертүү системалары. Жалпы талаптар' },
        { icon: null, text: 'ГОСТ Р 42.3.01-2021 Жарандык коргонуу. Калкты эскертүүнүн техникалык каражаттары. Классификация. Жалпы техникалык талаптар' },
        { icon: null, text: 'РФ ӨКМнин жана Санариптештирүү министрлигинин 01.07.2020-жылдагы №518/365 буйругу «Калкты эскертүү системалары жөнүндө жобону бекитүү тууралуу»' },
      ],
      productsHeading: 'Системалардын жашоо циклин толугу менен башкарабыз',
      products: [
        { name: 'Жарылуудан корголгон сүйлөшүү түзмөгү DWEx', image: null, specs: [
          { title: 'Туура келген зоналар', text: '1 жана 2' },
          { title: 'Катаал шарттарга туруктуулук', text: '-60°С чейин +70°С' },
        ]},
        { name: 'Жарылуудан корголгон мүйүз сымал үнкүчөйткүч AR-25Ex', image: null, specs: [
          { title: 'Колдонуу зоналары', text: '1 жана 2, 20, 21, 22' },
          { title: 'Климат', text: 'УХЛ1' },
        ]},
      ],
      ctaTitle: 'Бытыранды түзмөктөрдөн эскертүүнүн бирдиктүү экосистемасына өтүңүз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        'Provides instant direct communication for managing the production process and personnel',
        'Allows several systems to be implemented on the basis of a single set of equipment',
      ],
      advantagesHeading: 'The Armtel system withstands harsh industrial conditions',
      advantages: [
        { icon: null, text: 'Explosion-proof design for zones 1 and 2' },
        { icon: null, text: 'Enclosures resistant to chemicals and abrasives' },
        { icon: null, text: 'High degree of enclosure protection' },
        { icon: null, text: 'Active and passive noise suppression' },
      ],
      textBlocks: [
        {
          heading: 'Local notification system',
          subheading: 'Provides notification in case of potential and actual emergencies',
          bullets: [
            { title: 'Any scale', text: 'from a single workshop to entire production complexes' },
            { title: 'Operability monitoring', text: 'control of feeder lines' },
            { title: 'Multifunctionality', text: 'delivering voice and sound information to staff across the site and inside buildings' },
            { title: 'Integration as required by law', text: 'civil defense and emergencies system for the local notification system, fire alarm system for the notification and evacuation control system' },
          ],
          image: null,
        },
        {
          heading: 'Armtel-Info',
          subheading: 'Software for building a unified notification and monitoring system at the enterprise',
          bullets: [
            { title: 'Control and monitoring of several systems in one interface', text: 'operational, public address, emergency communication and emergency notification' },
            { title: 'Forecasting and modeling of emergency situations', text: 'calculation of the hazardous chemical contamination zone' },
            { title: 'Faster response in potential and actual emergencies', text: 'decision-support functionality' },
            { title: 'Receiving commands from higher-level notification systems', text: 'RASTSO, MASTSO (regional/municipal automated notification systems)' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Armtel-Info complies with all required regulatory requirements',
      standards: [
        { icon: null, text: 'GOST R 22.7.05-2022 Safety in emergency situations. Local warning systems in areas where potentially hazardous facilities are located. General requirements' },
        { icon: null, text: 'GOST R 42.3.01-2021 Civil defense. Technical means of public warning. Classification. General technical requirements' },
        { icon: null, text: 'Order of the Russian Ministry of Emergency Situations and the Ministry of Digital Development No. 518/365 dated 01.07.2020 "On approval of the regulation on public warning systems"' },
      ],
      productsHeading: 'We manage the full lifecycle of the systems',
      products: [
        { name: 'DWEx explosion-proof intercom unit', image: null, specs: [
          { title: 'Suitable for zones', text: '1 and 2' },
          { title: 'Resistance to harsh conditions', text: '-60°C to +70°C' },
        ]},
        { name: 'AR-25Ex explosion-proof horn loudspeaker', image: null, specs: [
          { title: 'Application zones', text: '1 and 2, 20, 21, 22' },
          { title: 'Climate rating', text: 'UHL1' },
        ]},
      ],
      ctaTitle: 'Move from disconnected devices to a single notification ecosystem',
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'telefonnaya-svyaz': {
    ru: {
      heroBullets: [
        'Объединяет городскую, внутреннюю и междугороднюю связь предприятия в единую сеть',
        'Поддерживает работу с цифровыми и аналоговыми абонентами одновременно',
      ],
      advantagesHeading: 'Решение устойчиво к нагрузке промышленного предприятия',
      advantages: [
        { icon: null, text: 'Высокая емкость и масштабируемость станции' },
        { icon: null, text: 'Резервирование каналов связи' },
        { icon: null, text: 'Совместимость с действующей IP-инфраструктурой' },
        { icon: null, text: 'Защищённость от перегрузок и сбоев' },
      ],
      textBlocks: [
        {
          heading: 'Корпоративная телефонная сеть',
          subheading: 'Обеспечивает единое пространство связи для всех сотрудников предприятия',
          bullets: [
            { title: 'Гибкая нумерация', text: 'единый план для всех площадок компании' },
            { title: 'Запись и архивирование звонков', text: 'для контроля качества и расследования инцидентов' },
            { title: 'Интеграция с диспетчерской и оперативной связью', text: 'единый интерфейс управления вызовами' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Оборудование для телефонной связи',
      products: [
        { name: 'IP-АТС для промышленных предприятий', image: null, specs: [
          { title: 'Емкость', text: 'от 50 до 10 000 абонентов' },
          { title: 'Резервирование', text: 'горячее и холодное' },
        ]},
        { name: 'Телефонный аппарат промышленного исполнения', image: null, specs: [
          { title: 'Защита корпуса', text: 'IP65' },
          { title: 'Диапазон температур', text: 'от -40°С до +60°С' },
        ]},
      ],
      ctaTitle: 'Объединим телефонию предприятия в единую систему',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Ишкананын шаар ичиндеги, ички жана шаарлар аралык байланышын бирдиктүү тармакка бириктирет',
        'Санариптик жана аналогдук абоненттер менен бир эле учурда иштөөнү колдойт',
      ],
      advantagesHeading: 'Чечим өнөр жай ишканасынын жүгүнө туруктуу',
      advantages: [
        { icon: null, text: 'Станциянын жогорку сыйымдуулугу жана масштабдалуучулугу' },
        { icon: null, text: 'Байланыш каналдарын резервдөө' },
        { icon: null, text: 'Колдонуудагы IP-инфраструктура менен шайкештик' },
        { icon: null, text: 'Жүктөмдөн ашуудан жана бузулуудан корголгондук' },
      ],
      textBlocks: [
        {
          heading: 'Корпоративдик телефон тармагы',
          subheading: 'Ишкананын бардык кызматкерлери үчүн бирдиктүү байланыш мейкиндигин камсыздайт',
          bullets: [
            { title: 'Ийкемдүү номерлөө', text: 'компаниянын бардык объекттери үчүн бирдиктүү план' },
            { title: 'Чалууларды жаздыруу жана архивдөө', text: 'сапатты контролдоо жана инциденттерди иликтөө үчүн' },
            { title: 'Диспетчердик жана оперативдик байланыш менен интеграция', text: 'чалууларды башкаруунун бирдиктүү интерфейси' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Телефон байланышы үчүн жабдуулар',
      products: [
        { name: 'Өнөр жай ишканалары үчүн IP-АТС', image: null, specs: [
          { title: 'Сыйымдуулук', text: '50дөн 10 000 абонентке чейин' },
          { title: 'Резервдөө', text: 'ысык жана муздак' },
        ]},
        { name: 'Өнөр жай аткарылышындагы телефон аппараты', image: null, specs: [
          { title: 'Корпустун коргоосу', text: 'IP65' },
          { title: 'Температура диапазону', text: '-40°С чейин +60°С' },
        ]},
      ],
      ctaTitle: 'Ишкананын телефониясын бирдиктүү системага бириктиребиз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        "Combines the company's city, internal and long-distance communication into a single network",
        'Supports digital and analog subscribers at the same time',
      ],
      advantagesHeading: 'The solution withstands the load of an industrial enterprise',
      advantages: [
        { icon: null, text: 'High capacity and scalability of the exchange' },
        { icon: null, text: 'Redundant communication channels' },
        { icon: null, text: 'Compatibility with the existing IP infrastructure' },
        { icon: null, text: 'Protection against overloads and failures' },
      ],
      textBlocks: [
        {
          heading: 'Corporate telephone network',
          subheading: 'Provides a single communication space for all employees of the enterprise',
          bullets: [
            { title: 'Flexible numbering', text: 'a single dial plan for all company sites' },
            { title: 'Call recording and archiving', text: 'for quality control and incident investigation' },
            { title: 'Integration with dispatcher and operational communication', text: 'a single call-management interface' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Telephone communication equipment',
      products: [
        { name: 'IP-PBX for industrial enterprises', image: null, specs: [
          { title: 'Capacity', text: '50 to 10,000 subscribers' },
          { title: 'Redundancy', text: 'hot and cold' },
        ]},
        { name: 'Industrial-grade telephone set', image: null, specs: [
          { title: 'Enclosure protection', text: 'IP65' },
          { title: 'Temperature range', text: '-40°C to +60°C' },
        ]},
      ],
      ctaTitle: 'We will unify enterprise telephony into a single system',
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'besprovodnye-sistemy': {
    ru: {
      heroBullets: [
        'Обеспечивает мобильность персонала на территории предприятия без потери связи',
        'Снижает затраты на прокладку кабельных линий на труднодоступных участках',
      ],
      advantagesHeading: 'Беспроводные системы устойчивы к промышленным помехам',
      advantages: [
        { icon: null, text: 'Помехозащищённые радиоканалы' },
        { icon: null, text: 'Покрытие протяжённых и сложных объектов' },
        { icon: null, text: 'Поддержка групповых и индивидуальных вызовов' },
        { icon: null, text: 'Интеграция с проводными системами связи' },
      ],
      textBlocks: [
        {
          heading: 'Транкинговая и радиосвязь',
          subheading: 'Обеспечивает оперативную связь на территории предприятия и за его пределами',
          bullets: [
            { title: 'Зоны покрытия любой сложности', text: 'открытые площадки, цеха, подземные сооружения' },
            { title: 'Приоритетные и аварийные вызовы', text: 'для критических ситуаций' },
            { title: 'Совместимость с диспетчерскими пультами', text: 'единый интерфейс управления связью' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Оборудование беспроводной связи',
      products: [
        { name: 'Радиостанция промышленного исполнения', image: null, specs: [
          { title: 'Защита корпуса', text: 'IP67' },
          { title: 'Время работы', text: 'до 16 часов' },
        ]},
        { name: 'Базовая станция транкинговой связи', image: null, specs: [
          { title: 'Радиус действия', text: 'до 25 км' },
          { title: 'Количество каналов', text: 'до 16' },
        ]},
      ],
      ctaTitle: 'Обеспечим связь без потерь на любой территории предприятия',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Ишкананын аймагында байланышты жоготпостон персоналдын мобилдүүлүгүн камсыздайт',
        'Жетүүгө кыйын участоктордо кабель линияларын тартуу чыгымдарын азайтат',
      ],
      advantagesHeading: 'Зымсыз системалар өнөр жай тоскоолдуктарына туруктуу',
      advantages: [
        { icon: null, text: 'Тоскоолдуктан корголгон радиоканалдар' },
        { icon: null, text: 'Узун жана татаал объекттерди камтуу' },
        { icon: null, text: 'Топтук жана жеке чалууларды колдоо' },
        { icon: null, text: 'Зымдуу байланыш системалары менен интеграция' },
      ],
      textBlocks: [
        {
          heading: 'Транкингдик жана радиобайланыш',
          subheading: 'Ишкананын аймагында жана анын чегинен тышкары оперативдик байланышты камсыздайт',
          bullets: [
            { title: 'Каалаган татаалдыктагы камтуу зоналары', text: 'ачык аянттар, цехтер, жер астындагы курулмалар' },
            { title: 'Артыкчылыктуу жана авариялык чалуулар', text: 'критикалык кырдаалдар үчүн' },
            { title: 'Диспетчердик пульттар менен шайкештик', text: 'байланышты башкаруунун бирдиктүү интерфейси' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Зымсыз байланыш жабдуулары',
      products: [
        { name: 'Өнөр жай аткарылышындагы радиостанция', image: null, specs: [
          { title: 'Корпустун коргоосу', text: 'IP67' },
          { title: 'Иштөө убактысы', text: '16 саатка чейин' },
        ]},
        { name: 'Транкингдик байланыштын базалык станциясы', image: null, specs: [
          { title: 'Аракет радиусу', text: '25 кмге чейин' },
          { title: 'Каналдардын саны', text: '16га чейин' },
        ]},
      ],
      ctaTitle: 'Ишкананын каалаган аймагында жоготуусуз байланышты камсыздайбыз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        'Provides staff mobility across the site without losing communication',
        'Reduces the cost of laying cable lines in hard-to-reach areas',
      ],
      advantagesHeading: 'Wireless systems are resistant to industrial interference',
      advantages: [
        { icon: null, text: 'Interference-resistant radio channels' },
        { icon: null, text: 'Coverage of large and complex sites' },
        { icon: null, text: 'Support for group and individual calls' },
        { icon: null, text: 'Integration with wired communication systems' },
      ],
      textBlocks: [
        {
          heading: 'Trunking and radio communication',
          subheading: 'Provides operational communication on the site and beyond its boundaries',
          bullets: [
            { title: 'Coverage zones of any complexity', text: 'open areas, workshops, underground structures' },
            { title: 'Priority and emergency calls', text: 'for critical situations' },
            { title: 'Compatibility with dispatcher consoles', text: 'a single interface for managing communication' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Wireless communication equipment',
      products: [
        { name: 'Industrial-grade radio set', image: null, specs: [
          { title: 'Enclosure protection', text: 'IP67' },
          { title: 'Operating time', text: 'up to 16 hours' },
        ]},
        { name: 'Trunking base station', image: null, specs: [
          { title: 'Range', text: 'up to 25 km' },
          { title: 'Number of channels', text: 'up to 16' },
        ]},
      ],
      ctaTitle: 'We provide loss-free communication across any part of the enterprise',
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  // ─── 2. КОМПЛЕКСНЫЕ СИСТЕМЫ БЕЗОПАСНОСТИ ─────────────────────────────────

  'opoveshchenie-evakuatsiya': {
    ru: {
      heroBullets: [
        'Обеспечивает своевременное информирование людей об угрозе и порядке действий',
        'Управляет эвакуацией по заранее заданным сценариям в автоматическом режиме',
      ],
      advantagesHeading: 'Система соответствует требованиям пожарной безопасности',
      advantages: [
        { icon: null, text: 'Автоматический запуск по сигналу пожарной сигнализации' },
        { icon: null, text: 'Зонированное оповещение по участкам объекта' },
        { icon: null, text: 'Резервное питание и контроль линий' },
        { icon: null, text: 'Интеграция со СКУД для управления проходом' },
      ],
      textBlocks: [
        {
          heading: 'Система оповещения и управления эвакуацией (СОУЭ)',
          subheading: 'Обеспечивает безопасную и быструю эвакуацию людей при ЧС',
          bullets: [
            { title: 'Речевое и звуковое оповещение', text: 'по зонам и этажам здания' },
            { title: 'Световые указатели направления движения', text: 'динамическое изменение маршрутов эвакуации' },
            { title: 'Автоматизированное управление', text: 'по сценариям в зависимости от типа угрозы' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Соответствует требованиям нормативной документации',
      standards: [
        { icon: null, text: 'СП 3.13130.2009 Системы противопожарной защиты. Система оповещения и управления эвакуацией людей при пожаре' },
        { icon: null, text: 'ГОСТ Р 53325-2012 Техника пожарная. Технические средства пожарной автоматики' },
      ],
      productsHeading: 'Оборудование СОУЭ',
      products: [
        { name: 'Прибор управления оповещением', image: null, specs: [
          { title: 'Количество зон', text: 'до 32' },
          { title: 'Резервное питание', text: 'до 24 часов' },
        ]},
        { name: 'Громкоговоритель потолочный/настенный', image: null, specs: [
          { title: 'Мощность', text: 'от 3 до 20 Вт' },
          { title: 'Класс защиты', text: 'IP54' },
        ]},
      ],
      ctaTitle: 'Обеспечим безопасную эвакуацию людей на вашем объекте',
      ctaDesc: 'Рассчитаем стоимость проекта и подготовим технико-экономическое обоснование',
    },
    kg: {
      heroBullets: [
        'Адамдарды коркунуч жана аракеттер тартиби жөнүндө өз убагында кабарландырууну камсыздайт',
        'Алдын ала берилген сценарийлер боюнча эвакуацияны автоматтык режимде башкарат',
      ],
      advantagesHeading: 'Система өрт коопсуздугунун талаптарына дал келет',
      advantages: [
        { icon: null, text: 'Өрт сигнализациясынын сигналы боюнча автоматтык иштетүү' },
        { icon: null, text: 'Объекттин участоктору боюнча зоналаштырылган эскертүү' },
        { icon: null, text: 'Запастык электр менен жабдуу жана линияларды контролдоо' },
        { icon: null, text: 'Өтүүнү башкаруу үчүн СКУД менен интеграция' },
      ],
      textBlocks: [
        {
          heading: 'Эскертүү жана эвакуацияны башкаруу системасы (СОУЭ)',
          subheading: 'ТЖКда адамдардын коопсуз жана тез эвакуациясын камсыздайт',
          bullets: [
            { title: 'Сүйлөө жана үн менен эскертүү', text: 'имараттын зоналары жана кабаттары боюнча' },
            { title: 'Кыймылдын багытын көрсөтүүчү жарык көрсөткүчтөр', text: 'эвакуация маршруттарын динамикалык өзгөртүү' },
            { title: 'Автоматташтырылган башкаруу', text: 'коркунучтун түрүнө жараша сценарийлер боюнча' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Ченемдик документтердин талаптарына дал келет',
      standards: [
        { icon: null, text: 'СП 3.13130.2009 Өрткө каршы коргоо системалары. Өрт учурунда адамдарды эскертүү жана эвакуацияны башкаруу системасы' },
        { icon: null, text: 'ГОСТ Р 53325-2012 Өрт техникасы. Өрт автоматикасынын техникалык каражаттары' },
      ],
      productsHeading: 'СОУЭ жабдуулары',
      products: [
        { name: 'Эскертүүнү башкаруу приборy', image: null, specs: [
          { title: 'Зоналардын саны', text: '32ге чейин' },
          { title: 'Запастык электр менен жабдуу', text: '24 саатка чейин' },
        ]},
        { name: 'Шыпка/дубалга орнотулуучу үнкүчөйткүч', image: null, specs: [
          { title: 'Кубаттуулук', text: '3төн 20 Вт чейин' },
          { title: 'Коргоо классы', text: 'IP54' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңизде адамдардын коопсуз эвакуациясын камсыздайбыз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана техникалык-экономикалык негиздемени даярдайбыз',
    },
    en: {
      heroBullets: [
        'Provides timely information to people about a threat and the required course of action',
        'Controls evacuation according to pre-defined scenarios in automatic mode',
      ],
      advantagesHeading: 'The system complies with fire safety requirements',
      advantages: [
        { icon: null, text: 'Automatic activation on a fire alarm signal' },
        { icon: null, text: 'Zoned notification across site areas' },
        { icon: null, text: 'Backup power and line monitoring' },
        { icon: null, text: 'Integration with access control for managing passage' },
      ],
      textBlocks: [
        {
          heading: 'Notification and Evacuation Control System (NECS)',
          subheading: 'Ensures safe and rapid evacuation of people in an emergency',
          bullets: [
            { title: 'Voice and audible notification', text: 'by zones and floors of the building' },
            { title: 'Illuminated directional signs', text: 'dynamic changes to evacuation routes' },
            { title: 'Automated control', text: 'scenario-based, depending on the type of threat' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Complies with regulatory documentation requirements',
      standards: [
        { icon: null, text: 'SP 3.13130.2009 Fire protection systems. Warning and evacuation control system for people in case of fire' },
        { icon: null, text: 'GOST R 53325-2012 Fire equipment. Technical means of fire automatics' },
      ],
      productsHeading: 'NECS equipment',
      products: [
        { name: 'Notification control panel', image: null, specs: [
          { title: 'Number of zones', text: 'up to 32' },
          { title: 'Backup power', text: 'up to 24 hours' },
        ]},
        { name: 'Ceiling/wall-mounted loudspeaker', image: null, specs: [
          { title: 'Power', text: '3 to 20 W' },
          { title: 'Protection class', text: 'IP54' },
        ]},
      ],
      ctaTitle: 'We will ensure safe evacuation of people at your facility',
      ctaDesc: 'We will calculate the project cost and prepare a feasibility study',
    },
  },

  videonablyudenie: {
    ru: {
      heroBullets: [
        'Обеспечивает непрерывный визуальный контроль территории, периметра и помещений объекта',
        'Поддерживает интеллектуальную аналитику видео для раннего обнаружения угроз',
      ],
      advantagesHeading: 'Система устойчива к сложным условиям эксплуатации',
      advantages: [
        { icon: null, text: 'Антивандальное и термокожуховое исполнение камер' },
        { icon: null, text: 'Работа при низкой освещённости и в темноте' },
        { icon: null, text: 'Устойчивость к перепадам температур и осадкам' },
        { icon: null, text: 'Резервирование хранения и каналов передачи видео' },
      ],
      textBlocks: [
        {
          heading: 'Система видеонаблюдения',
          subheading: 'Обеспечивает контроль обстановки на объекте в режиме реального времени',
          bullets: [
            { title: 'Видеоаналитика', text: 'распознавание лиц, номеров, детекция движения и оставленных предметов' },
            { title: 'Архивирование записей', text: 'хранение видеоархива с заданной глубиной и резервированием' },
            { title: 'Интеграция с другими системами безопасности', text: 'СКУД, охранная сигнализация, оповещение' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Соответствует требованиям нормативной документации',
      standards: [
        { icon: null, text: 'ГОСТ Р 51558-2014 Средства и системы охранные телевизионные. Классификация. Общие технические требования' },
        { icon: null, text: 'Приказ Минтранса/МВД по требованиям к системам видеонаблюдения объектов транспортной инфраструктуры (при применимости)' },
      ],
      productsHeading: 'Оборудование видеонаблюдения',
      products: [
        { name: 'IP-камера уличная антивандальная', image: null, specs: [
          { title: 'Разрешение', text: 'до 8 Мп' },
          { title: 'Класс защиты', text: 'IP67, IK10' },
        ]},
        { name: 'Видеорегистратор сетевой (NVR)', image: null, specs: [
          { title: 'Каналов записи', text: 'до 64' },
          { title: 'Резервирование RAID', text: 'поддерживается' },
        ]},
      ],
      ctaTitle: 'Обеспечим полный визуальный контроль вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подготовим технико-экономическое обоснование',
    },
    kg: {
      heroBullets: [
        'Объекттин аймагын, периметрин жана жайларын үзгүлтүксүз визуалдык контролдоону камсыздайт',
        'Коркунучтарды эрте аныктоо үчүн интеллектуалдык видео аналитиканы колдойт',
      ],
      advantagesHeading: 'Система эксплуатациянын татаал шарттарына туруктуу',
      advantages: [
        { icon: null, text: 'Камералардын вандализмге каршы жана термокожухтуу аткарылышы' },
        { icon: null, text: 'Төмөн жарыктыкта жана караңгыда иштөө' },
        { icon: null, text: 'Температуранын өзгөрүүсүнө жана жаан-чачынга туруктуулук' },
        { icon: null, text: 'Видео сактоо жана берүү каналдарын резервдөө' },
      ],
      textBlocks: [
        {
          heading: 'Видеобайкоо системасы',
          subheading: 'Объекттеги кырдаалды реалдуу убакыт режиминде контролдоону камсыздайт',
          bullets: [
            { title: 'Видео аналитика', text: 'жүздөрдү, номерлерди таануу, кыймылды жана калтырылган буюмдарды аныктоо' },
            { title: 'Жаздырууларды архивдөө', text: 'берилген тереңдикте жана резервдөө менен видео архивди сактоо' },
            { title: 'Башка коопсуздук системалары менен интеграция', text: 'СКУД, күзөт сигнализациясы, эскертүү' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Ченемдик документтердин талаптарына дал келет',
      standards: [
        { icon: null, text: 'ГОСТ Р 51558-2014 Күзөт телевизиялык каражаттары жана системалары. Классификация. Жалпы техникалык талаптар' },
        { icon: null, text: 'Транспорт инфраструктурасынын объекттеринин видеобайкоо системаларына болгон талаптар боюнча Транспорт министрлигинин/ИИМдин буйругу (колдонулушуна жараша)' },
      ],
      productsHeading: 'Видеобайкоо жабдуулары',
      products: [
        { name: 'Вандализмге каршы көчө IP-камерасы', image: null, specs: [
          { title: 'Чечилиш', text: '8 Мпге чейин' },
          { title: 'Коргоо классы', text: 'IP67, IK10' },
        ]},
        { name: 'Тармактык видеорегистратор (NVR)', image: null, specs: [
          { title: 'Жаздыруу каналдары', text: '64кө чейин' },
          { title: 'RAID резервдөө', text: 'колдоого алынат' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин толук визуалдык контролун камсыздайбыз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана техникалык-экономикалык негиздемени даярдайбыз',
    },
    en: {
      heroBullets: [
        'Provides continuous visual monitoring of the site, perimeter and premises',
        'Supports intelligent video analytics for early threat detection',
      ],
      advantagesHeading: 'The system withstands demanding operating conditions',
      advantages: [
        { icon: null, text: 'Vandal-resistant, thermal-enclosure camera design' },
        { icon: null, text: 'Operation in low light and darkness' },
        { icon: null, text: 'Resistance to temperature fluctuations and precipitation' },
        { icon: null, text: 'Redundant storage and video transmission channels' },
      ],
      textBlocks: [
        {
          heading: 'Video surveillance system',
          subheading: 'Provides real-time monitoring of the situation at the facility',
          bullets: [
            { title: 'Video analytics', text: 'face and license-plate recognition, motion and left-object detection' },
            { title: 'Archiving of recordings', text: 'video archive storage with a set retention depth and redundancy' },
            { title: 'Integration with other security systems', text: 'access control, security alarm, notification' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Complies with regulatory documentation requirements',
      standards: [
        { icon: null, text: 'GOST R 51558-2014 Security television means and systems. Classification. General technical requirements' },
        { icon: null, text: 'Order of the Ministry of Transport/Ministry of Internal Affairs on requirements for video surveillance systems at transport infrastructure facilities (where applicable)' },
      ],
      productsHeading: 'Video surveillance equipment',
      products: [
        { name: 'Vandal-resistant outdoor IP camera', image: null, specs: [
          { title: 'Resolution', text: 'up to 8 MP' },
          { title: 'Protection class', text: 'IP67, IK10' },
        ]},
        { name: 'Network video recorder (NVR)', image: null, specs: [
          { title: 'Recording channels', text: 'up to 64' },
          { title: 'RAID redundancy', text: 'supported' },
        ]},
      ],
      ctaTitle: 'We will provide complete visual control of your facility',
      ctaDesc: 'We will calculate the project cost and prepare a feasibility study',
    },
  },

  'okhrannaya-signalizatsiya': {
    ru: {
      heroBullets: [
        'Обеспечивает обнаружение проникновения на охраняемую территорию или в помещения',
        'Мгновенно передаёт сигнал тревоги на пульт охраны или дежурному персоналу',
      ],
      advantagesHeading: 'Система минимизирует ложные срабатывания',
      advantages: [
        { icon: null, text: 'Многофакторная детекция (объём, периметр, точка доступа)' },
        { icon: null, text: 'Устойчивость к помехам и вибрации' },
        { icon: null, text: 'Контроль целостности шлейфов сигнализации' },
        { icon: null, text: 'Резервное питание оборудования' },
      ],
      textBlocks: [
        {
          heading: 'Охранная сигнализация',
          subheading: 'Обеспечивает защиту периметра, помещений и отдельных точек объекта',
          bullets: [
            { title: 'Периметральная защита', text: 'извещатели для открытых территорий и ограждений' },
            { title: 'Объёмная и точечная защита помещений', text: 'датчики движения, разбития стекла, открытия дверей' },
            { title: 'Передача тревог', text: 'на пульт централизованного наблюдения и мобильные устройства персонала' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Соответствует требованиям нормативной документации',
      standards: [
        { icon: null, text: 'ГОСТ Р 52435-2015 Технические средства охранной сигнализации. Классификация. Общие технические требования и методы испытаний' },
        { icon: null, text: 'РД 78.36.003-2002 Инженерно-техническая укреплённость. Технические средства охраны' },
      ],
      productsHeading: 'Оборудование охранной сигнализации',
      products: [
        { name: 'Извещатель охранный объёмный', image: null, specs: [
          { title: 'Зона обнаружения', text: 'до 15 м' },
          { title: 'Класс защиты', text: 'IP65' },
        ]},
        { name: 'Приёмно-контрольный прибор', image: null, specs: [
          { title: 'Количество шлейфов', text: 'до 256' },
          { title: 'Резервное питание', text: 'до 24 часов' },
        ]},
      ],
      ctaTitle: 'Защитим периметр и помещения вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подготовим технико-экономическое обоснование',
    },
    kg: {
      heroBullets: [
        'Корголуучу аймакка же жайга кирип кетүүнү аныктоону камсыздайт',
        'Тревога сигналын дароо күзөт пультуна же кезметтеги персоналга өткөрөт',
      ],
      advantagesHeading: 'Система жалган иштеп кетүүлөрдү минималдаштырат',
      advantages: [
        { icon: null, text: 'Көп факторлуу детекция (көлөм, периметр, кирүү чекити)' },
        { icon: null, text: 'Тоскоолдуктарга жана дирилдөөгө туруктуулук' },
        { icon: null, text: 'Сигнализация шлейфтеринин бүтүндүгүн контролдоо' },
        { icon: null, text: 'Жабдуунун запастык электр менен жабдуусу' },
      ],
      textBlocks: [
        {
          heading: 'Күзөт сигнализациясы',
          subheading: 'Объекттин периметрин, жайларын жана өзүнчө чекиттерин коргоону камсыздайт',
          bullets: [
            { title: 'Периметралдык коргоо', text: 'ачык аймактар жана тосмолор үчүн извещателдер' },
            { title: 'Жайлардын көлөмдүк жана чекиттик коргоосу', text: 'кыймыл, айнек сынуу, эшик ачылуу сенсорлору' },
            { title: 'Тревогаларды берүү', text: 'борборлоштурулган байкоо пультуна жана персоналдын мобилдик түзмөктөрүнө' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Ченемдик документтердин талаптарына дал келет',
      standards: [
        { icon: null, text: 'ГОСТ Р 52435-2015 Күзөт сигнализациясынын техникалык каражаттары. Классификация. Жалпы техникалык талаптар жана сыноо ыкмалары' },
        { icon: null, text: 'РД 78.36.003-2002 Инженердик-техникалык чыңдоо. Күзөттүн техникалык каражаттары' },
      ],
      productsHeading: 'Күзөт сигнализациясынын жабдуулары',
      products: [
        { name: 'Көлөмдүк күзөт извещатели', image: null, specs: [
          { title: 'Аныктоо зонасы', text: '15 мге чейин' },
          { title: 'Коргоо классы', text: 'IP65' },
        ]},
        { name: 'Кабыл алуу-контролдоо приборy', image: null, specs: [
          { title: 'Шлейфтердин саны', text: '256га чейин' },
          { title: 'Запастык электр менен жабдуу', text: '24 саатка чейин' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин периметрин жана жайларын коргойбуз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана техникалык-экономикалык негиздемени даярдайбыз',
    },
    en: {
      heroBullets: [
        'Detects intrusion into a protected area or premises',
        'Instantly transmits an alarm signal to the security console or duty personnel',
      ],
      advantagesHeading: 'The system minimizes false alarms',
      advantages: [
        { icon: null, text: 'Multi-factor detection (volume, perimeter, access point)' },
        { icon: null, text: 'Resistance to interference and vibration' },
        { icon: null, text: 'Integrity monitoring of alarm loops' },
        { icon: null, text: 'Backup power for the equipment' },
      ],
      textBlocks: [
        {
          heading: 'Security alarm system',
          subheading: 'Protects the perimeter, premises and individual points of the facility',
          bullets: [
            { title: 'Perimeter protection', text: 'detectors for open areas and fencing' },
            { title: 'Volumetric and point protection of premises', text: 'motion, glass-break and door-opening sensors' },
            { title: 'Alarm transmission', text: 'to the central monitoring station and staff mobile devices' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Complies with regulatory documentation requirements',
      standards: [
        { icon: null, text: 'GOST R 52435-2015 Technical means of security alarm systems. Classification. General technical requirements and test methods' },
        { icon: null, text: 'RD 78.36.003-2002 Engineering and technical fortification. Technical means of security' },
      ],
      productsHeading: 'Security alarm equipment',
      products: [
        { name: 'Volumetric security detector', image: null, specs: [
          { title: 'Detection zone', text: 'up to 15 m' },
          { title: 'Protection class', text: 'IP65' },
        ]},
        { name: 'Control and monitoring panel', image: null, specs: [
          { title: 'Number of loops', text: 'up to 256' },
          { title: 'Backup power', text: 'up to 24 hours' },
        ]},
      ],
      ctaTitle: 'We will protect the perimeter and premises of your facility',
      ctaDesc: 'We will calculate the project cost and prepare a feasibility study',
    },
  },

  skud: {
    ru: {
      heroBullets: [
        'Контролирует и ограничивает доступ людей и транспорта на территорию объекта',
        'Ведёт полный учёт перемещений сотрудников и посетителей по объекту',
      ],
      advantagesHeading: 'Система обеспечивает гибкое управление доступом',
      advantages: [
        { icon: null, text: 'Поддержка разных идентификаторов (карта, биометрия, код)' },
        { icon: null, text: 'Гибкие уровни доступа и временные графики' },
        { icon: null, text: 'Интеграция с видеонаблюдением и сигнализацией' },
        { icon: null, text: 'Работа в офлайн-режиме при сбоях сети' },
      ],
      textBlocks: [
        {
          heading: 'Система контроля и управления доступом',
          subheading: 'Обеспечивает разграничение доступа на объекте по уровням и зонам',
          bullets: [
            { title: 'Точки прохода любой сложности', text: 'турникеты, шлюзовые кабины, шлагбаумы, ворота' },
            { title: 'Учёт рабочего времени', text: 'интеграция с системами кадрового учёта' },
            { title: 'Антипассбэк и контроль двойного прохода', text: 'предотвращение передачи карт между сотрудниками' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Соответствует требованиям нормативной документации',
      standards: [
        { icon: null, text: 'ГОСТ Р 51241-2008 Средства и системы контроля и управления доступом. Классификация. Общие технические требования' },
      ],
      productsHeading: 'Оборудование СКУД',
      products: [
        { name: 'Турникет-триподы', image: null, specs: [
          { title: 'Пропускная способность', text: 'до 30 чел/мин' },
          { title: 'Климатическое исполнение', text: 'УХЛ1' },
        ]},
        { name: 'Контроллер доступа', image: null, specs: [
          { title: 'Точек доступа', text: 'до 4 на контроллер' },
          { title: 'Память событий', text: 'до 100 000 записей' },
        ]},
      ],
      ctaTitle: 'Настроим контроль доступа под структуру вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подготовим технико-экономическое обоснование',
    },
    kg: {
      heroBullets: [
        'Объекттин аймагына адамдардын жана транспорттун кирүүсүн контролдойт жана чектейт',
        'Объект боюнча кызматкерлердин жана конокторлордун жылышын толук эсепке алат',
      ],
      advantagesHeading: 'Система кирүүнү ийкемдүү башкарууну камсыздайт',
      advantages: [
        { icon: null, text: 'Ар кандай идентификаторлорду колдоо (карта, биометрия, код)' },
        { icon: null, text: 'Ийкемдүү кирүү деңгээлдери жана убакыт графиктери' },
        { icon: null, text: 'Видеобайкоо жана сигнализация менен интеграция' },
        { icon: null, text: 'Тармак бузулганда офлайн режиминде иштөө' },
      ],
      textBlocks: [
        {
          heading: 'Кирүүнү башкаруу жана контролдоо системасы',
          subheading: 'Объектте деңгээлдер жана зоналар боюнча кирүүнү чектөөнү камсыздайт',
          bullets: [
            { title: 'Каалаган татаалдыктагы өтүү чекиттери', text: 'турникеттер, шлюз кабиналары, шлагбаумдар, дарбазалар' },
            { title: 'Жумуш убактысын эсепке алуу', text: 'кадр эсебинин системалары менен интеграция' },
            { title: 'Антипассбэк жана кош өтүүнү контролдоо', text: 'карталарды кызматкерлердин ортосунда берүүнү алдын алуу' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Ченемдик документтердин талаптарына дал келет',
      standards: [
        { icon: null, text: 'ГОСТ Р 51241-2008 Кирүүнү контролдоо жана башкаруу каражаттары жана системалары. Классификация. Жалпы техникалык талаптар' },
      ],
      productsHeading: 'СКУД жабдуулары',
      products: [
        { name: 'Турникет-триподдор', image: null, specs: [
          { title: 'Өткөрүү жөндөмдүүлүгү', text: '30 адам/мүнөткө чейин' },
          { title: 'Климаттык аткарылыш', text: 'УХЛ1' },
        ]},
        { name: 'Кирүү контроллери', image: null, specs: [
          { title: 'Кирүү чекиттери', text: 'контроллерге 4кө чейин' },
          { title: 'Окуялар эстутуму', text: '100 000 жазууга чейин' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин түзүмүнө ылайык кирүү контролун жөндөйбүз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана техникалык-экономикалык негиздемени даярдайбыз',
    },
    en: {
      heroBullets: [
        'Controls and restricts access of people and vehicles to the facility',
        'Keeps a complete log of staff and visitor movement across the facility',
      ],
      advantagesHeading: 'The system provides flexible access management',
      advantages: [
        { icon: null, text: 'Support for different identifiers (card, biometrics, code)' },
        { icon: null, text: 'Flexible access levels and time schedules' },
        { icon: null, text: 'Integration with video surveillance and alarm systems' },
        { icon: null, text: 'Offline operation during network outages' },
      ],
      textBlocks: [
        {
          heading: 'Access control and management system',
          subheading: 'Differentiates access at the facility by levels and zones',
          bullets: [
            { title: 'Passage points of any complexity', text: 'turnstiles, security booths, barriers, gates' },
            { title: 'Time and attendance tracking', text: 'integration with HR record systems' },
            { title: 'Anti-passback and double-entry control', text: 'preventing card sharing between employees' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Complies with regulatory documentation requirements',
      standards: [
        { icon: null, text: 'GOST R 51241-2008 Access control and management means and systems. Classification. General technical requirements' },
      ],
      productsHeading: 'Access control equipment',
      products: [
        { name: 'Tripod turnstiles', image: null, specs: [
          { title: 'Throughput', text: 'up to 30 people/min' },
          { title: 'Climate design', text: 'UHL1' },
        ]},
        { name: 'Access controller', image: null, specs: [
          { title: 'Access points', text: 'up to 4 per controller' },
          { title: 'Event memory', text: 'up to 100,000 records' },
        ]},
      ],
      ctaTitle: "We will configure access control to match your facility's structure",
      ctaDesc: 'We will calculate the project cost and prepare a feasibility study',
    },
  },

  'so-pri-usta': {
    ru: {
      heroBullets: [
        'Обеспечивает оперативное информирование персонала и посетителей об угрозе теракта',
        'Активирует заранее подготовленные сценарии реагирования и эвакуации',
      ],
      advantagesHeading: 'Система обеспечивает быстрое и точное реагирование',
      advantages: [
        { icon: null, text: 'Многоканальное оповещение (звук, свет, СМС, экраны)' },
        { icon: null, text: 'Интеграция с системами видеонаблюдения и СКУД' },
        { icon: null, text: 'Дистанционное и автоматическое управление сценариями' },
        { icon: null, text: 'Резервирование каналов связи и питания' },
      ],
      textBlocks: [
        {
          heading: 'Система оповещения при угрозе теракта',
          subheading: 'Обеспечивает соответствие требованиям антитеррористической защищённости объекта',
          bullets: [
            { title: 'Заранее подготовленные сценарии оповещения', text: 'для разных уровней угрозы' },
            { title: 'Информирование ответственных служб', text: 'автоматическая передача сигнала в дежурные части' },
            { title: 'Документирование событий', text: 'для последующего расследования и отчётности перед регуляторами' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Соответствует требованиям нормативной документации',
      standards: [
        { icon: null, text: 'Постановления Правительства РФ об антитеррористической защищённости объектов (по категории объекта)' },
        { icon: null, text: 'ГОСТ Р 22.7.05-2022 в части локальных систем оповещения' },
      ],
      productsHeading: 'Оборудование систем оповещения при УСТА',
      products: [
        { name: 'Прибор управления оповещением при угрозе теракта', image: null, specs: [
          { title: 'Количество сценариев', text: 'до 16' },
          { title: 'Резервное питание', text: 'до 24 часов' },
        ]},
        { name: 'Табло светодиодное информационное', image: null, specs: [
          { title: 'Видимость', text: 'до 50 м' },
          { title: 'Класс защиты', text: 'IP54' },
        ]},
      ],
      ctaTitle: 'Обеспечим антитеррористическую защищённость вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подготовим технико-экономическое обоснование',
    },
    kg: {
      heroBullets: [
        'Террористтик акт коркунучу жөнүндө персоналды жана конокторду оперативдүү кабарландырууну камсыздайт',
        'Алдын ала даярдалган реакция жана эвакуация сценарийлерин иштетет',
      ],
      advantagesHeading: 'Система тез жана так реакцияны камсыздайт',
      advantages: [
        { icon: null, text: 'Көп каналдуу эскертүү (үн, жарык, СМС, экрандар)' },
        { icon: null, text: 'Видеобайкоо жана СКУД системалары менен интеграция' },
        { icon: null, text: 'Сценарийлерди алыстан жана автоматтык башкаруу' },
        { icon: null, text: 'Байланыш жана электр менен жабдуу каналдарын резервдөө' },
      ],
      textBlocks: [
        {
          heading: 'Террористтик акт коркунучунда эскертүү системасы',
          subheading: 'Объекттин террорго каршы корголуу талаптарына дал келүүсүн камсыздайт',
          bullets: [
            { title: 'Алдын ала даярдалган эскертүү сценарийлери', text: 'ар кандай коркунуч деңгээли үчүн' },
            { title: 'Жооптуу кызматтарды кабарландыруу', text: 'кезметтеги бөлүктөргө сигналды автоматтык берүү' },
            { title: 'Окуяларды документтештирүү', text: 'кийинки иликтөө жана жөнгө салуучу органдар алдында отчеттуулук үчүн' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Ченемдик документтердин талаптарына дал келет',
      standards: [
        { icon: null, text: 'Объекттердин террорго каршы корголушу жөнүндө РФ Өкмөтүнүн токтомдору (объекттин категориясы боюнча)' },
        { icon: null, text: 'ГОСТ Р 22.7.05-2022 жергиликтүү эскертүү системалары бөлүгүндө' },
      ],
      productsHeading: 'УСТА учурундагы эскертүү системаларынын жабдуулары',
      products: [
        { name: 'Террористтик акт коркунучунда эскертүүнү башкаруу приборy', image: null, specs: [
          { title: 'Сценарийлердин саны', text: '16га чейин' },
          { title: 'Запастык электр менен жабдуу', text: '24 саатка чейин' },
        ]},
        { name: 'Светодиоддук маалымат тактасы', image: null, specs: [
          { title: 'Көрүнүүчүлүк', text: '50 мге чейин' },
          { title: 'Коргоо классы', text: 'IP54' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин террорго каршы корголушун камсыздайбыз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана техникалык-экономикалык негиздемени даярдайбыз',
    },
    en: {
      heroBullets: [
        'Provides prompt information to staff and visitors about a terrorist threat',
        'Activates pre-prepared response and evacuation scenarios',
      ],
      advantagesHeading: 'The system provides fast and accurate response',
      advantages: [
        { icon: null, text: 'Multi-channel notification (sound, light, SMS, screens)' },
        { icon: null, text: 'Integration with video surveillance and access control systems' },
        { icon: null, text: 'Remote and automatic scenario control' },
        { icon: null, text: 'Redundant communication and power channels' },
      ],
      textBlocks: [
        {
          heading: 'Notification system for terrorist threat',
          subheading: "Ensures compliance with the facility's anti-terrorism security requirements",
          bullets: [
            { title: 'Pre-prepared notification scenarios', text: 'for different threat levels' },
            { title: 'Notifying responsible services', text: 'automatic signal transmission to duty units' },
            { title: 'Event documentation', text: 'for subsequent investigation and reporting to regulators' },
          ],
          image: null,
        },
      ],
      standardsHeading: 'Complies with regulatory documentation requirements',
      standards: [
        { icon: null, text: 'Russian Government resolutions on anti-terrorism security of facilities (by facility category)' },
        { icon: null, text: 'GOST R 22.7.05-2022, in the part relating to local notification systems' },
      ],
      productsHeading: 'Equipment for terrorist-threat notification systems',
      products: [
        { name: 'Terrorist-threat notification control panel', image: null, specs: [
          { title: 'Number of scenarios', text: 'up to 16' },
          { title: 'Backup power', text: 'up to 24 hours' },
        ]},
        { name: 'LED information display', image: null, specs: [
          { title: 'Visibility', text: 'up to 50 m' },
          { title: 'Protection class', text: 'IP54' },
        ]},
      ],
      ctaTitle: 'We will ensure anti-terrorism security at your facility',
      ctaDesc: 'We will calculate the project cost and prepare a feasibility study',
    },
  },

  // ─── 3. ЭЛЕКТРООБОРУДОВАНИЕ ──────────────────────────────────────────────

  'kabelnesushchie-sistemy': {
    ru: {
      heroBullets: [
        'Обеспечивает надёжное и упорядоченное размещение кабельных линий на объекте',
        'Защищает кабели от механических повреждений и внешних воздействий',
      ],
      advantagesHeading: 'Системы устойчивы к промышленным условиям эксплуатации',
      advantages: [
        { icon: null, text: 'Коррозионностойкие материалы и покрытия' },
        { icon: null, text: 'Огнестойкое исполнение для путей эвакуации' },
        { icon: null, text: 'Широкий диапазон несущей способности' },
        { icon: null, text: 'Совместимость с разными типами кабеля' },
      ],
      textBlocks: [
        {
          heading: 'Лотки, короба и кабельные конструкции',
          subheading: 'Обеспечивают организацию кабельных трасс на объекте любой сложности',
          bullets: [
            { title: 'Разные типы исполнения', text: 'перфорированные, сплошные, лестничные лотки' },
            { title: 'Полный комплект соединительных элементов', text: 'углы, тройники, переходники, крепёж' },
            { title: 'Адаптация под условия эксплуатации', text: 'агрессивная среда, перепады температур, пожароопасные зоны' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Кабеленесущие конструкции',
      products: [
        { name: 'Лоток кабельный перфорированный', image: null, specs: [
          { title: 'Материал', text: 'сталь с покрытием / нержавеющая сталь' },
          { title: 'Ширина', text: 'от 50 до 600 мм' },
        ]},
        { name: 'Короб кабельный огнестойкий', image: null, specs: [
          { title: 'Огнестойкость', text: 'до 180 минут' },
          { title: 'Применение', text: 'пути эвакуации, системы безопасности' },
        ]},
      ],
      ctaTitle: 'Спроектируем кабельную инфраструктуру вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Объектте кабель линияларынын ишенимдүү жана тартиптүү жайгашуусун камсыздайт',
        'Кабелдерди механикалык бузулуудан жана тышкы таасирлерден коргойт',
      ],
      advantagesHeading: 'Системалар өнөр жай эксплуатация шарттарына туруктуу',
      advantages: [
        { icon: null, text: 'Коррозияга туруктуу материалдар жана каптамалар' },
        { icon: null, text: 'Эвакуация жолдору үчүн отко туруктуу аткарылыш' },
        { icon: null, text: 'Көтөрүү жөндөмдүүлүгүнүн кеңири диапазону' },
        { icon: null, text: 'Кабелдин ар кандай түрлөрү менен шайкештик' },
      ],
      textBlocks: [
        {
          heading: 'Лотоктор, коробкалар жана кабель конструкциялары',
          subheading: 'Каалаган татаалдыктагы объектте кабель трассаларын уюштурууну камсыздайт',
          bullets: [
            { title: 'Ар кандай аткарылыш түрлөрү', text: 'тешиктүү, тутумдуу, тепкичтүү лотоктор' },
            { title: 'Туташтыруучу элементтердин толук комплекти', text: 'бурчтар, үч тарамдар, өткөргүчтөр, бекитүүчү буюмдар' },
            { title: 'Эксплуатация шарттарына ылайыкташтыруу', text: 'агрессивдүү чөйрө, температуранын өзгөрүүсү, өрт коркунучтуу зоналар' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Кабель алып жүрүүчү конструкциялар',
      products: [
        { name: 'Тешиктүү кабель лотогу', image: null, specs: [
          { title: 'Материал', text: 'каптамалуу болот / болот тот баспас' },
          { title: 'Туурасы', text: '50ден 600 ммге чейин' },
        ]},
        { name: 'Отко туруктуу кабель коробкасы', image: null, specs: [
          { title: 'Отко туруктуулук', text: '180 мүнөткө чейин' },
          { title: 'Колдонулушу', text: 'эвакуация жолдору, коопсуздук системалары' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин кабель инфраструктурасын долбоорлойбуз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        'Provides reliable and organized routing of cable lines at the facility',
        'Protects cables from mechanical damage and external impact',
      ],
      advantagesHeading: 'Systems withstand industrial operating conditions',
      advantages: [
        { icon: null, text: 'Corrosion-resistant materials and coatings' },
        { icon: null, text: 'Fire-resistant design for evacuation routes' },
        { icon: null, text: 'Wide range of load-bearing capacity' },
        { icon: null, text: 'Compatibility with different cable types' },
      ],
      textBlocks: [
        {
          heading: 'Trays, ducts and cable support structures',
          subheading: 'Organize cable routes at facilities of any complexity',
          bullets: [
            { title: 'Different design types', text: 'perforated, solid-bottom and ladder-type trays' },
            { title: 'A full set of connecting elements', text: 'corners, tees, adapters, fixings' },
            { title: 'Adapted to operating conditions', text: 'aggressive environments, temperature fluctuations, fire-hazard zones' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Cable support structures',
      products: [
        { name: 'Perforated cable tray', image: null, specs: [
          { title: 'Material', text: 'coated steel / stainless steel' },
          { title: 'Width', text: '50 to 600 mm' },
        ]},
        { name: 'Fire-resistant cable duct', image: null, specs: [
          { title: 'Fire resistance', text: 'up to 180 minutes' },
          { title: 'Application', text: 'evacuation routes, security systems' },
        ]},
      ],
      ctaTitle: "We will design your facility's cable infrastructure",
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'sistemy-elektropitaniya': {
    ru: {
      heroBullets: [
        'Обеспечивает стабильное и бесперебойное электропитание оборудования объекта',
        'Защищает критически важные системы от перепадов напряжения и отключений сети',
      ],
      advantagesHeading: 'Системы электропитания обеспечивают непрерывность работы',
      advantages: [
        { icon: null, text: 'Резервирование по схеме N+1 и выше' },
        { icon: null, text: 'Автоматическое переключение на резервный источник' },
        { icon: null, text: 'Мониторинг состояния батарей и нагрузки' },
        { icon: null, text: 'Совместимость с генераторными установками' },
      ],
      textBlocks: [
        {
          heading: 'Источники бесперебойного питания и щитовое оборудование',
          subheading: 'Обеспечивают надёжное электроснабжение систем связи и безопасности',
          bullets: [
            { title: 'ИБП разной мощности', text: 'для локальных узлов и центральных систем' },
            { title: 'Распределительные щиты', text: 'учёт, защита и распределение нагрузки' },
            { title: 'Контроль и мониторинг', text: 'дистанционный контроль состояния системы электропитания' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Оборудование электропитания',
      products: [
        { name: 'Источник бесперебойного питания (ИБП)', image: null, specs: [
          { title: 'Мощность', text: 'от 1 до 60 кВА' },
          { title: 'Время автономной работы', text: 'от 30 минут до нескольких часов' },
        ]},
        { name: 'Щит распределительный', image: null, specs: [
          { title: 'Класс защиты', text: 'IP54/IP65' },
          { title: 'Количество групп', text: 'настраивается под проект' },
        ]},
      ],
      ctaTitle: 'Обеспечим надёжное электропитание вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Объект жабдуусунун туруктуу жана үзгүлтүксүз электр менен жабдылышын камсыздайт',
        'Маанилүү системаларды чыңалуунун өзгөрүшүнөн жана тармактын өчүшүнөн коргойт',
      ],
      advantagesHeading: 'Электр менен жабдуу системалары иштин үзгүлтүксүздүгүн камсыздайт',
      advantages: [
        { icon: null, text: 'N+1 жана андан жогору схема боюнча резервдөө' },
        { icon: null, text: 'Запастык булакка автоматтык которулуу' },
        { icon: null, text: 'Батареялардын жана жүктөмдүн абалын мониторинг кылуу' },
        { icon: null, text: 'Генератор орнотмолору менен шайкештик' },
      ],
      textBlocks: [
        {
          heading: 'Үзгүлтүксүз электр менен жабдуу булактары жана щит жабдуулары',
          subheading: 'Байланыш жана коопсуздук системаларынын ишенимдүү электр менен жабдылышын камсыздайт',
          bullets: [
            { title: 'Ар кандай кубаттуулуктагы ИБП', text: 'жергиликтүү түйүндөр жана борбордук системалар үчүн' },
            { title: 'Бөлүштүрүүчү щиттер', text: 'жүктөмдү эсепке алуу, коргоо жана бөлүштүрүү' },
            { title: 'Контроль жана мониторинг', text: 'электр менен жабдуу системасынын абалын алыстан контролдоо' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Электр менен жабдуу жабдуулары',
      products: [
        { name: 'Үзгүлтүксүз электр менен жабдуу булагы (ИБП)', image: null, specs: [
          { title: 'Кубаттуулук', text: '1ден 60 кВАга чейин' },
          { title: 'Автономдуу иштөө убактысы', text: '30 мүнөттөн бир нече саатка чейин' },
        ]},
        { name: 'Бөлүштүрүүчү щит', image: null, specs: [
          { title: 'Коргоо классы', text: 'IP54/IP65' },
          { title: 'Топтордун саны', text: 'долбоорго жараша жөндөлөт' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин ишенимдүү электр менен жабдылышын камсыздайбыз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        "Provides stable, uninterrupted power supply to the facility's equipment",
        'Protects mission-critical systems from voltage fluctuations and power outages',
      ],
      advantagesHeading: 'Power supply systems ensure continuity of operation',
      advantages: [
        { icon: null, text: 'N+1 and higher redundancy schemes' },
        { icon: null, text: 'Automatic switchover to a backup source' },
        { icon: null, text: 'Monitoring of battery status and load' },
        { icon: null, text: 'Compatibility with generator sets' },
      ],
      textBlocks: [
        {
          heading: 'Uninterruptible power supplies and switchgear',
          subheading: 'Provide reliable power for communication and security systems',
          bullets: [
            { title: 'UPS units of various capacities', text: 'for local nodes and central systems' },
            { title: 'Distribution panels', text: 'metering, protection and load distribution' },
            { title: 'Control and monitoring', text: 'remote monitoring of power supply system status' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Power supply equipment',
      products: [
        { name: 'Uninterruptible power supply (UPS)', image: null, specs: [
          { title: 'Power', text: '1 to 60 kVA' },
          { title: 'Battery runtime', text: '30 minutes to several hours' },
        ]},
        { name: 'Distribution panel', image: null, specs: [
          { title: 'Protection class', text: 'IP54/IP65' },
          { title: 'Number of groups', text: 'configured per project' },
        ]},
      ],
      ctaTitle: 'We will ensure a reliable power supply for your facility',
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'promyshlennoe-osveshchenie': {
    ru: {
      heroBullets: [
        'Обеспечивает безопасные условия труда и видимость на производственных объектах',
        'Снижает энергопотребление за счёт современных энергоэффективных решений',
      ],
      advantagesHeading: 'Освещение адаптировано под промышленные условия',
      advantages: [
        { icon: null, text: 'Взрывозащищённое исполнение для опасных зон' },
        { icon: null, text: 'Устойчивость к вибрации и ударным нагрузкам' },
        { icon: null, text: 'Высокий класс защиты от пыли и влаги' },
        { icon: null, text: 'Длительный срок службы светильников' },
      ],
      textBlocks: [
        {
          heading: 'Светотехническое оборудование для промышленных объектов',
          subheading: 'Обеспечивает нормативный уровень освещённости рабочих зон',
          bullets: [
            { title: 'Светильники для разных зон', text: 'цеха, склады, открытые площадки, опасные зоны' },
            { title: 'Аварийное и эвакуационное освещение', text: 'автономный режим работы при отключении электроэнергии' },
            { title: 'Системы управления освещением', text: 'диммирование, датчики движения и освещённости' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Светотехническое оборудование',
      products: [
        { name: 'Светильник промышленный взрывозащищённый', image: null, specs: [
          { title: 'Зоны применения', text: '1 и 2, 21 и 22' },
          { title: 'Класс защиты', text: 'IP66' },
        ]},
        { name: 'Светильник аварийного освещения', image: null, specs: [
          { title: 'Время автономной работы', text: 'до 3 часов' },
          { title: 'Класс защиты', text: 'IP65' },
        ]},
      ],
      ctaTitle: 'Спроектируем систему освещения вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Өндүрүштүк объекттерде эмгектин коопсуз шарттарын жана көрүнүүчүлүктү камсыздайт',
        'Заманбап энергиялык натыйжалуу чечимдердин эсебинен энергия керектөөнү азайтат',
      ],
      advantagesHeading: 'Жарыктандыруу өнөр жай шарттарына ылайыкташтырылган',
      advantages: [
        { icon: null, text: 'Коркунучтуу зоналар үчүн жарылуудан коргой турган аткарылыш' },
        { icon: null, text: 'Дирилдөөгө жана сокку жүктөмдөргө туруктуулук' },
        { icon: null, text: 'Чаңдан жана нымдан коргоонун жогорку классы' },
        { icon: null, text: 'Шамдардын узак кызмат мөөнөтү' },
      ],
      textBlocks: [
        {
          heading: 'Өндүрүштүк объекттер үчүн жарык техникасы жабдуулары',
          subheading: 'Жумуш зоналарынын жарыктандыруусунун ченемдик деңгээлин камсыздайт',
          bullets: [
            { title: 'Ар кандай зоналар үчүн шамдар', text: 'цехтер, складдар, ачык аянттар, коркунучтуу зоналар' },
            { title: 'Авариялык жана эвакуациялык жарыктандыруу', text: 'электр энергиясы өчкөндө автономдуу режимде иштөө' },
            { title: 'Жарыктандырууну башкаруу системалары', text: 'диммирлөө, кыймыл жана жарыктык сенсорлору' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Жарык техникасы жабдуулары',
      products: [
        { name: 'Жарылуудан корголгон өнөр жай шамы', image: null, specs: [
          { title: 'Колдонуу зоналары', text: '1 жана 2, 21 жана 22' },
          { title: 'Коргоо классы', text: 'IP66' },
        ]},
        { name: 'Авариялык жарыктандыруу шамы', image: null, specs: [
          { title: 'Автономдуу иштөө убактысы', text: '3 саатка чейин' },
          { title: 'Коргоо классы', text: 'IP65' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин жарыктандыруу системасын долбоорлойбуз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        'Provides safe working conditions and visibility at production facilities',
        'Reduces power consumption through modern energy-efficient solutions',
      ],
      advantagesHeading: 'Lighting adapted for industrial conditions',
      advantages: [
        { icon: null, text: 'Explosion-proof design for hazardous zones' },
        { icon: null, text: 'Resistance to vibration and impact loads' },
        { icon: null, text: 'High protection rating against dust and moisture' },
        { icon: null, text: 'Long service life of luminaires' },
      ],
      textBlocks: [
        {
          heading: 'Lighting equipment for industrial facilities',
          subheading: 'Ensures the required illumination level in work areas',
          bullets: [
            { title: 'Luminaires for different zones', text: 'workshops, warehouses, open areas, hazardous zones' },
            { title: 'Emergency and evacuation lighting', text: 'autonomous operation during a power outage' },
            { title: 'Lighting control systems', text: 'dimming, motion and daylight sensors' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Lighting equipment',
      products: [
        { name: 'Explosion-proof industrial luminaire', image: null, specs: [
          { title: 'Application zones', text: '1 and 2, 21 and 22' },
          { title: 'Protection class', text: 'IP66' },
        ]},
        { name: 'Emergency lighting luminaire', image: null, specs: [
          { title: 'Battery runtime', text: 'up to 3 hours' },
          { title: 'Protection class', text: 'IP65' },
        ]},
      ],
      ctaTitle: "We will design your facility's lighting system",
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'monitoring-i-kontrol': {
    ru: {
      heroBullets: [
        'Обеспечивает удалённый контроль состояния инженерных систем объекта в реальном времени',
        'Позволяет прогнозировать сбои и планировать обслуживание оборудования заранее',
      ],
      advantagesHeading: 'Система обеспечивает полную прозрачность процессов',
      advantages: [
        { icon: null, text: 'Единый интерфейс для всех инженерных систем' },
        { icon: null, text: 'Уведомления о неисправностях в реальном времени' },
        { icon: null, text: 'Архивирование и анализ исторических данных' },
        { icon: null, text: 'Удалённый доступ с любого устройства' },
      ],
      textBlocks: [
        {
          heading: 'Системы диспетчеризации и мониторинга',
          subheading: 'Обеспечивают контроль и управление инженерной инфраструктурой объекта',
          bullets: [
            { title: 'Сбор данных с разных систем', text: 'электропитание, освещение, климат, связь и безопасность' },
            { title: 'Визуализация на единой панели', text: 'мнемосхемы, графики, отчёты' },
            { title: 'Автоматизация реагирования', text: 'настраиваемые сценарии при выходе параметров за норму' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Оборудование и ПО для мониторинга',
      products: [
        { name: 'Контроллер диспетчеризации', image: null, specs: [
          { title: 'Поддержка протоколов', text: 'Modbus, BACnet, OPC' },
          { title: 'Количество точек контроля', text: 'до нескольких тысяч' },
        ]},
        { name: 'Программный комплекс мониторинга', image: null, specs: [
          { title: 'Тип развёртывания', text: 'локально или в облаке' },
          { title: 'Уровни доступа', text: 'настраиваемая ролевая модель' },
        ]},
      ],
      ctaTitle: 'Объединим инженерные системы вашего объекта в единую панель контроля',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Объекттин инженердик системаларынын абалын реалдуу убакыт режиминде алыстан контролдоону камсыздайт',
        'Бузулууларды алдын ала божомолдоого жана жабдууну тейлөөнү алдын ала пландаштырууга мүмкүндүк берет',
      ],
      advantagesHeading: 'Система процесстердин толук ачыктыгын камсыздайт',
      advantages: [
        { icon: null, text: 'Бардык инженердик системалар үчүн бирдиктүү интерфейс' },
        { icon: null, text: 'Бузулуулар жөнүндө реалдуу убакытта эскертүүлөр' },
        { icon: null, text: 'Тарыхый маалыматтарды архивдөө жана талдоо' },
        { icon: null, text: 'Каалаган түзмөктөн алыстан кирүү' },
      ],
      textBlocks: [
        {
          heading: 'Диспетчерлештирүү жана мониторинг системалары',
          subheading: 'Объекттин инженердик инфраструктурасын контролдоону жана башкарууну камсыздайт',
          bullets: [
            { title: 'Ар кандай системалардан маалымат чогултуу', text: 'электр менен жабдуу, жарыктандыруу, климат, байланыш жана коопсуздук' },
            { title: 'Бирдиктүү панелде визуализация', text: 'мнемосхемалар, графиктер, отчеттор' },
            { title: 'Реакцияны автоматташтыруу', text: 'параметрлер нормадан четтегенде жөндөлүүчү сценарийлер' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Мониторинг үчүн жабдуулар жана ПО',
      products: [
        { name: 'Диспетчерлештирүү контроллери', image: null, specs: [
          { title: 'Протоколдорду колдоо', text: 'Modbus, BACnet, OPC' },
          { title: 'Контролдоо чекиттеринин саны', text: 'бир нече миңге чейин' },
        ]},
        { name: 'Мониторинг программалык комплекси', image: null, specs: [
          { title: 'Жайылтуу түрү', text: 'жергиликтүү же булутта' },
          { title: 'Кирүү деңгээлдери', text: 'жөндөлүүчү роль модели' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин инженердик системаларын бирдиктүү контрол панелине бириктиребиз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        "Provides real-time remote monitoring of the facility's engineering systems",
        'Allows failures to be predicted and equipment maintenance to be planned in advance',
      ],
      advantagesHeading: 'The system provides full process transparency',
      advantages: [
        { icon: null, text: 'A single interface for all engineering systems' },
        { icon: null, text: 'Real-time fault notifications' },
        { icon: null, text: 'Archiving and analysis of historical data' },
        { icon: null, text: 'Remote access from any device' },
      ],
      textBlocks: [
        {
          heading: 'Dispatching and monitoring systems',
          subheading: "Control and manage the facility's engineering infrastructure",
          bullets: [
            { title: 'Data collection from different systems', text: 'power supply, lighting, climate, communication and security' },
            { title: 'Visualization on a single panel', text: 'mimic diagrams, graphs, reports' },
            { title: 'Automated response', text: 'configurable scenarios when parameters go out of range' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Monitoring equipment and software',
      products: [
        { name: 'Dispatching controller', image: null, specs: [
          { title: 'Protocol support', text: 'Modbus, BACnet, OPC' },
          { title: 'Number of control points', text: 'up to several thousand' },
        ]},
        { name: 'Monitoring software suite', image: null, specs: [
          { title: 'Deployment type', text: 'on-premise or cloud' },
          { title: 'Access levels', text: 'configurable role model' },
        ]},
      ],
      ctaTitle: "We will unify your facility's engineering systems into a single control panel",
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  // ─── 4. ИНФРАСТРУКТУРА ───────────────────────────────────────────────────

  'seti-peredachi-dannyh': {
    ru: {
      heroBullets: [
        'Обеспечивает высокоскоростную и надёжную передачу данных между всеми узлами объекта',
        'Создаёт масштабируемую основу для роста ИТ-инфраструктуры предприятия',
      ],
      advantagesHeading: 'Сети спроектированы с учётом требований надёжности',
      advantages: [
        { icon: null, text: 'Резервирование каналов и сетевого оборудования' },
        { icon: null, text: 'Сегментация сети для повышения безопасности' },
        { icon: null, text: 'Поддержка приоритизации трафика (QoS)' },
        { icon: null, text: 'Масштабируемость под рост числа устройств' },
      ],
      textBlocks: [
        {
          heading: 'Структурированные кабельные сети и активное оборудование',
          subheading: 'Обеспечивают передачу данных между всеми системами объекта',
          bullets: [
            { title: 'СКС любой сложности', text: 'медные и оптические линии связи' },
            { title: 'Коммутация и маршрутизация', text: 'управляемые коммутаторы, маршрутизаторы промышленного класса' },
            { title: 'Мониторинг сети', text: 'контроль состояния каналов и оборудования в реальном времени' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Сетевое оборудование',
      products: [
        { name: 'Коммутатор промышленного исполнения', image: null, specs: [
          { title: 'Количество портов', text: 'от 8 до 48' },
          { title: 'Диапазон температур', text: 'от -40°С до +75°С' },
        ]},
        { name: 'Оптический кросс', image: null, specs: [
          { title: 'Емкость', text: 'до 144 волокон' },
          { title: 'Класс защиты', text: 'IP65' },
        ]},
      ],
      ctaTitle: 'Спроектируем сеть передачи данных вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Объекттин бардык түйүндөрүнүн ортосунда жогорку ылдамдыктагы жана ишенимдүү маалымат берүүнү камсыздайт',
        'Ишкананын ИТ-инфраструктурасынын өсүшү үчүн масштабдалуучу негиз түзөт',
      ],
      advantagesHeading: 'Тармактар ишенимдүүлүк талаптарын эске алуу менен долбоорлонгон',
      advantages: [
        { icon: null, text: 'Каналдарды жана тармактык жабдууну резервдөө' },
        { icon: null, text: 'Коопсуздукту жогорулатуу үчүн тармакты сегменттөө' },
        { icon: null, text: 'Трафикти артыкчылыктоону колдоо (QoS)' },
        { icon: null, text: 'Түзмөктөрдүн санынын өсүшүнө масштабдалуучулук' },
      ],
      textBlocks: [
        {
          heading: 'Структураланган кабель тармактары жана активдүү жабдуу',
          subheading: 'Объекттин бардык системаларынын ортосунда маалымат берүүнү камсыздайт',
          bullets: [
            { title: 'Каалаган татаалдыктагы СКС', text: 'жез жана оптикалык байланыш линиялары' },
            { title: 'Коммутация жана маршруттоо', text: 'башкарылуучу коммутаторлор, өнөр жай класстагы маршрутизаторлор' },
            { title: 'Тармакты мониторинг кылуу', text: 'каналдардын жана жабдуунун абалын реалдуу убакытта контролдоо' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Тармактык жабдуу',
      products: [
        { name: 'Өнөр жай аткарылышындагы коммутатор', image: null, specs: [
          { title: 'Порттордун саны', text: '8ден 48ге чейин' },
          { title: 'Температура диапазону', text: '-40°С чейин +75°С' },
        ]},
        { name: 'Оптикалык кросс', image: null, specs: [
          { title: 'Сыйымдуулук', text: '144 талчыкка чейин' },
          { title: 'Коргоо классы', text: 'IP65' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин маалымат берүү тармагын долбоорлойбуз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        'Provides high-speed, reliable data transmission between all nodes of the facility',
        "Creates a scalable foundation for the growth of the enterprise's IT infrastructure",
      ],
      advantagesHeading: 'Networks are designed with reliability requirements in mind',
      advantages: [
        { icon: null, text: 'Redundant channels and network equipment' },
        { icon: null, text: 'Network segmentation for improved security' },
        { icon: null, text: 'Support for traffic prioritization (QoS)' },
        { icon: null, text: 'Scalability for a growing number of devices' },
      ],
      textBlocks: [
        {
          heading: 'Structured cabling networks and active equipment',
          subheading: "Enable data transmission between all of the facility's systems",
          bullets: [
            { title: 'Structured cabling of any complexity', text: 'copper and fiber-optic communication lines' },
            { title: 'Switching and routing', text: 'managed switches, industrial-grade routers' },
            { title: 'Network monitoring', text: 'real-time monitoring of channel and equipment status' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Network equipment',
      products: [
        { name: 'Industrial-grade switch', image: null, specs: [
          { title: 'Number of ports', text: '8 to 48' },
          { title: 'Temperature range', text: '-40°C to +75°C' },
        ]},
        { name: 'Fiber optic distribution frame', image: null, specs: [
          { title: 'Capacity', text: 'up to 144 fibers' },
          { title: 'Protection class', text: 'IP65' },
        ]},
      ],
      ctaTitle: "We will design your facility's data transmission network",
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'bshpd-i-rrl': {
    ru: {
      heroBullets: [
        'Обеспечивает широкополосный доступ в труднодоступных и удалённых местах объекта',
        'Заменяет прокладку кабеля там, где это технически сложно или экономически нецелесообразно',
      ],
      advantagesHeading: 'Решения устойчивы к погодным и эксплуатационным условиям',
      advantages: [
        { icon: null, text: 'Устойчивость к ветровым и погодным нагрузкам' },
        { icon: null, text: 'Высокая помехозащищённость каналов' },
        { icon: null, text: 'Резервирование радиорелейных линий' },
        { icon: null, text: 'Дальность связи до десятков километров' },
      ],
      textBlocks: [
        {
          heading: 'Радиорелейные линии и беспроводной широкополосный доступ',
          subheading: 'Обеспечивают связь между удалёнными объектами без прокладки кабеля',
          bullets: [
            { title: 'Высокая пропускная способность', text: 'передача данных, видео и голоса по радиоканалу' },
            { title: 'Быстрое развёртывание', text: 'минимальные сроки монтажа по сравнению с кабельными линиями' },
            { title: 'Совместимость с действующей сетью', text: 'интеграция в существующую сетевую инфраструктуру предприятия' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Оборудование РРЛ и БШПД',
      products: [
        { name: 'Радиорелейная станция', image: null, specs: [
          { title: 'Дальность связи', text: 'до 50 км' },
          { title: 'Пропускная способность', text: 'до 1 Гбит/с' },
        ]},
        { name: 'Антенно-мачтовое сооружение', image: null, specs: [
          { title: 'Высота', text: 'от 6 до 72 м' },
          { title: 'Ветровая нагрузка', text: 'до III ветрового района' },
        ]},
      ],
      ctaTitle: 'Свяжем удалённые объекты вашего предприятия без прокладки кабеля',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Объекттин жетүүгө кыйын жана алыскы жерлеринде кеңжолактуу мүмкүнчүлүктү камсыздайт',
        'Техникалык жактан татаал же экономикалык жактан тийимсиз болгон жерлерде кабель тартууну алмаштырат',
      ],
      advantagesHeading: 'Чечимдер аба-ырайы жана эксплуатация шарттарына туруктуу',
      advantages: [
        { icon: null, text: 'Шамал жана аба-ырайы жүктөмдөрүнө туруктуулук' },
        { icon: null, text: 'Каналдардын тоскоолдуктан жогорку корголгондугу' },
        { icon: null, text: 'Радиорелейдик линияларды резервдөө' },
        { icon: null, text: 'Байланыш аралыгы ондогон километрге чейин' },
      ],
      textBlocks: [
        {
          heading: 'Радиорелейдик линиялар жана зымсыз кеңжолактуу мүмкүнчүлүк',
          subheading: 'Кабель тартпастан алыскы объекттердин ортосунда байланышты камсыздайт',
          bullets: [
            { title: 'Жогорку өткөрүү жөндөмдүүлүгү', text: 'радиоканал боюнча маалымат, видео жана үн берүү' },
            { title: 'Тез жайылтуу', text: 'кабель линияларына салыштырмалуу минималдуу орнотуу мөөнөттөрү' },
            { title: 'Колдонуудагы тармак менен шайкештик', text: 'ишкананын учурдагы тармактык инфраструктурасына интеграция' },
          ],
          image: null,
        },
      ],
      productsHeading: 'РРЛ жана БШПД жабдуулары',
      products: [
        { name: 'Радиорелейдик станция', image: null, specs: [
          { title: 'Байланыш аралыгы', text: '50 кмге чейин' },
          { title: 'Өткөрүү жөндөмдүүлүгү', text: '1 Гбит/с чейин' },
        ]},
        { name: 'Антенна-мунара курулушу', image: null, specs: [
          { title: 'Бийиктиги', text: '6дан 72 мге чейин' },
          { title: 'Шамал жүктөмү', text: 'III шамал районуна чейин' },
        ]},
      ],
      ctaTitle: 'Сиздин ишкананыздын алыскы объекттерин кабель тартпастан байланыштырабыз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        "Provides broadband access in hard-to-reach and remote parts of the facility",
        'Replaces cable installation where it is technically complex or not economically viable',
      ],
      advantagesHeading: 'Solutions withstand weather and operating conditions',
      advantages: [
        { icon: null, text: 'Resistance to wind and weather loads' },
        { icon: null, text: 'High interference resistance of channels' },
        { icon: null, text: 'Redundant radio relay links' },
        { icon: null, text: 'Communication range of up to tens of kilometers' },
      ],
      textBlocks: [
        {
          heading: 'Radio relay links and wireless broadband access',
          subheading: 'Provide communication between remote sites without laying cable',
          bullets: [
            { title: 'High throughput', text: 'data, video and voice transmission over a radio channel' },
            { title: 'Fast deployment', text: 'minimal installation time compared to cable lines' },
            { title: 'Compatibility with the existing network', text: "integration into the enterprise's existing network infrastructure" },
          ],
          image: null,
        },
      ],
      productsHeading: 'Radio relay and wireless broadband equipment',
      products: [
        { name: 'Radio relay station', image: null, specs: [
          { title: 'Range', text: 'up to 50 km' },
          { title: 'Throughput', text: 'up to 1 Gbit/s' },
        ]},
        { name: 'Antenna mast structure', image: null, specs: [
          { title: 'Height', text: '6 to 72 m' },
          { title: 'Wind load', text: 'up to wind region III' },
        ]},
      ],
      ctaTitle: "We will connect your enterprise's remote sites without laying cable",
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'sistemy-obrabotki-i-hraneniya-dannyh': {
    ru: {
      heroBullets: [
        'Обеспечивает надёжное хранение и быструю обработку данных всех систем объекта',
        'Защищает данные от потери при сбоях оборудования и нештатных ситуациях',
      ],
      advantagesHeading: 'Системы хранения данных обеспечивают отказоустойчивость',
      advantages: [
        { icon: null, text: 'Резервирование на уровне дисков и серверов' },
        { icon: null, text: 'Автоматическое резервное копирование' },
        { icon: null, text: 'Масштабируемость объёма хранения' },
        { icon: null, text: 'Контроль доступа к данным' },
      ],
      textBlocks: [
        {
          heading: 'Серверная и СХД-инфраструктура',
          subheading: 'Обеспечивает хранение и обработку данных систем безопасности, связи и мониторинга',
          bullets: [
            { title: 'Серверное оборудование', text: 'для размещения программных комплексов и баз данных' },
            { title: 'Системы хранения данных (СХД)', text: 'для архивов видеонаблюдения и журналов событий' },
            { title: 'Резервное копирование и репликация', text: 'защита от потери данных при сбоях' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Серверное оборудование и СХД',
      products: [
        { name: 'Серверная стойка промышленного исполнения', image: null, specs: [
          { title: 'Класс защиты', text: 'IP54' },
          { title: 'Емкость', text: 'настраивается под проект' },
        ]},
        { name: 'Система хранения данных (СХД)', image: null, specs: [
          { title: 'Объём хранения', text: 'от нескольких ТБ до сотен ТБ' },
          { title: 'Уровень RAID', text: 'настраиваемый' },
        ]},
      ],
      ctaTitle: 'Спроектируем надёжную систему хранения данных вашего объекта',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Объекттин бардык системаларынын маалыматтарын ишенимдүү сактоону жана тез иштетүүнү камсыздайт',
        'Жабдуунун бузулушунда жана штаттан тыш кырдаалдарда маалыматтарды жоготуудан коргойт',
      ],
      advantagesHeading: 'Маалымат сактоо системалары иштен чыгууга туруктуулукту камсыздайт',
      advantages: [
        { icon: null, text: 'Диск жана сервер деңгээлинде резервдөө' },
        { icon: null, text: 'Автоматтык запастык көчүрмөлөө' },
        { icon: null, text: 'Сактоо көлөмүнүн масштабдалуучулугу' },
        { icon: null, text: 'Маалыматка кирүүнү контролдоо' },
      ],
      textBlocks: [
        {
          heading: 'Сервердик жана СХД-инфраструктура',
          subheading: 'Коопсуздук, байланыш жана мониторинг системаларынын маалыматтарын сактоону жана иштетүүнү камсыздайт',
          bullets: [
            { title: 'Сервердик жабдуу', text: 'программалык комплекстерди жана маалымат базаларын жайгаштыруу үчүн' },
            { title: 'Маалымат сактоо системалары (СХД)', text: 'видеобайкоо архивдери жана окуялар журналдары үчүн' },
            { title: 'Запастык көчүрмөлөө жана репликация', text: 'бузулууларда маалыматтын жоголушунан коргоо' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Сервердик жабдуу жана СХД',
      products: [
        { name: 'Өнөр жай аткарылышындагы сервер шкафы', image: null, specs: [
          { title: 'Коргоо классы', text: 'IP54' },
          { title: 'Сыйымдуулук', text: 'долбоорго жараша жөндөлөт' },
        ]},
        { name: 'Маалымат сактоо системасы (СХД)', image: null, specs: [
          { title: 'Сактоо көлөмү', text: 'бир нече ТБден жүздөгөн ТБге чейин' },
          { title: 'RAID деңгээли', text: 'жөндөлүүчү' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин ишенимдүү маалымат сактоо системасын долбоорлойбуз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        "Provides reliable storage and fast processing of data from all of the facility's systems",
        'Protects data from loss in the event of equipment failures and abnormal situations',
      ],
      advantagesHeading: 'Storage systems ensure fault tolerance',
      advantages: [
        { icon: null, text: 'Redundancy at the disk and server level' },
        { icon: null, text: 'Automatic backup' },
        { icon: null, text: 'Scalable storage capacity' },
        { icon: null, text: 'Data access control' },
      ],
      textBlocks: [
        {
          heading: 'Server and storage infrastructure',
          subheading: 'Provides storage and processing of data from security, communication and monitoring systems',
          bullets: [
            { title: 'Server equipment', text: 'for hosting software suites and databases' },
            { title: 'Storage systems', text: 'for video surveillance archives and event logs' },
            { title: 'Backup and replication', text: 'protection against data loss during failures' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Server and storage equipment',
      products: [
        { name: 'Industrial-grade server rack', image: null, specs: [
          { title: 'Protection class', text: 'IP54' },
          { title: 'Capacity', text: 'configured per project' },
        ]},
        { name: 'Storage system', image: null, specs: [
          { title: 'Storage capacity', text: 'from several TB to hundreds of TB' },
          { title: 'RAID level', text: 'configurable' },
        ]},
      ],
      ctaTitle: "We will design a reliable storage system for your facility",
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },

  'sistemy-chasofikatsii': {
    ru: {
      heroBullets: [
        'Обеспечивает единое точное время для всех систем и процессов на объекте',
        'Синхронизирует работу систем безопасности, связи и автоматизации между собой',
      ],
      advantagesHeading: 'Система обеспечивает высокую точность синхронизации',
      advantages: [
        { icon: null, text: 'Синхронизация по сигналам ГЛОНАСС/GPS' },
        { icon: null, text: 'Резервирование источника точного времени' },
        { icon: null, text: 'Поддержка протоколов NTP/PTP' },
        { icon: null, text: 'Совместимость с системами видеонаблюдения и СКУД' },
      ],
      textBlocks: [
        {
          heading: 'Системы единого времени',
          subheading: 'Обеспечивают синхронизацию всех систем объекта по единому источнику точного времени',
          bullets: [
            { title: 'Центральный сервер времени', text: 'приём сигналов точного времени и распределение по сети' },
            { title: 'Вторичные часы и табло', text: 'отображение единого времени на объекте' },
            { title: 'Интеграция с журналами событий', text: 'точная привязка событий безопасности и связи ко времени' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Оборудование часофикации',
      products: [
        { name: 'Сервер единого времени', image: null, specs: [
          { title: 'Источник синхронизации', text: 'ГЛОНАСС/GPS' },
          { title: 'Точность', text: 'до 1 мкс' },
        ]},
        { name: 'Вторичные часы (табло)', image: null, specs: [
          { title: 'Протокол синхронизации', text: 'NTP/PTP' },
          { title: 'Размер индикации', text: 'настраивается под проект' },
        ]},
      ],
      ctaTitle: 'Синхронизируем все системы вашего объекта по единому времени',
      ctaDesc: 'Рассчитаем стоимость проекта и подключимся на любом этапе реализации',
    },
    kg: {
      heroBullets: [
        'Объекттеги бардык системалар жана процесстер үчүн бирдиктүү так убакытты камсыздайт',
        'Коопсуздук, байланыш жана автоматташтыруу системаларынын ишин бири-бири менен синхрондоштурат',
      ],
      advantagesHeading: 'Система синхрондоштуруунун жогорку тактыгын камсыздайт',
      advantages: [
        { icon: null, text: 'ГЛОНАСС/GPS сигналдары боюнча синхрондоштуруу' },
        { icon: null, text: 'Так убакыт булагын резервдөө' },
        { icon: null, text: 'NTP/PTP протоколдорун колдоо' },
        { icon: null, text: 'Видеобайкоо жана СКУД системалары менен шайкештик' },
      ],
      textBlocks: [
        {
          heading: 'Бирдиктүү убакыт системалары',
          subheading: 'Объекттин бардык системаларын так убакыттын бирдиктүү булагы боюнча синхрондоштурууну камсыздайт',
          bullets: [
            { title: 'Борбордук убакыт сервери', text: 'так убакыт сигналдарын кабыл алуу жана тармак боюнча бөлүштүрүү' },
            { title: 'Экинчилик саат жана тактар', text: 'объектте бирдиктүү убакытты көрсөтүү' },
            { title: 'Окуялар журналдары менен интеграция', text: 'коопсуздук жана байланыш окуяларын убакытка так байлоо' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Убакыт синхрондоштуруу жабдуулары',
      products: [
        { name: 'Бирдиктүү убакыт сервери', image: null, specs: [
          { title: 'Синхрондоштуруу булагы', text: 'ГЛОНАСС/GPS' },
          { title: 'Тактык', text: '1 мкс чейин' },
        ]},
        { name: 'Экинчилик саат (такта)', image: null, specs: [
          { title: 'Синхрондоштуруу протоколу', text: 'NTP/PTP' },
          { title: 'Индикация өлчөмү', text: 'долбоорго жараша жөндөлөт' },
        ]},
      ],
      ctaTitle: 'Сиздин объектиңиздин бардык системаларын бирдиктүү убакыт боюнча синхрондоштурабыз',
      ctaDesc: 'Долбоордун наркын эсептеп беребиз жана ишке ашыруунун каалаган этабында кошулабыз',
    },
    en: {
      heroBullets: [
        'Provides a single, accurate time reference for all systems and processes at the facility',
        'Synchronizes the operation of security, communication and automation systems with each other',
      ],
      advantagesHeading: 'The system provides high synchronization accuracy',
      advantages: [
        { icon: null, text: 'Synchronization via GLONASS/GPS signals' },
        { icon: null, text: 'Redundant precision time source' },
        { icon: null, text: 'Support for NTP/PTP protocols' },
        { icon: null, text: 'Compatibility with video surveillance and access control systems' },
      ],
      textBlocks: [
        {
          heading: 'Unified time systems',
          subheading: "Synchronize all of the facility's systems to a single precision time source",
          bullets: [
            { title: 'Central time server', text: 'receives precision time signals and distributes them over the network' },
            { title: 'Secondary clocks and displays', text: 'show a unified time across the facility' },
            { title: 'Integration with event logs', text: 'precise time-stamping of security and communication events' },
          ],
          image: null,
        },
      ],
      productsHeading: 'Time synchronization equipment',
      products: [
        { name: 'Unified time server', image: null, specs: [
          { title: 'Synchronization source', text: 'GLONASS/GPS' },
          { title: 'Accuracy', text: 'up to 1 µs' },
        ]},
        { name: 'Secondary clock (display)', image: null, specs: [
          { title: 'Synchronization protocol', text: 'NTP/PTP' },
          { title: 'Display size', text: 'configured per project' },
        ]},
      ],
      ctaTitle: "We will synchronize all of your facility's systems to a single time reference",
      ctaDesc: 'We will calculate the project cost and join at any stage of implementation',
    },
  },
}