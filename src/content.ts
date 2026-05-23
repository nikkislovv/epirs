export interface SiteContent {
  meta: {
    title: string
    description: string
  }
  logo: string
  nav: Array<{ label: string; id: string }>
  hero: {
    title: string
    subtitle: string
    description: string
    busImage: string
    cta: string
  }
  spheres: Array<{
    id: string
    title: string
    text: string
    mainImage: string
    bgImage: string
    bgOpacity: string
    imageRight: boolean
  }>
  technologies: Array<{
    title: string
    svg: string
  }>
  partners: {
    logos: string[]
    gallery: string[]
  }
  seminars: {
    title: string
    videoIds: string[]
  }
  contacts: {
    phone: string
    email: string
    telegram: string
    telegramUrl: string
    instagram: string
    instagramUrl: string
  }
  web3formsKey: string
}

export const content: SiteContent = {
  meta: {
    title: 'ЭПИРС — производство изделий из стеклопластика',
    description: 'ООО «ЭПИРС» — эксперт в производстве изделий из стеклопластика и композиционных материалов с 2004 года. Транспорт, судостроение, энергетика, медицина.',
  },
  logo: '/customer-docs/layouts/Logo/epirs_logo_no_background.png',
  nav: [
    { label: 'О нас',      id: 'hero' },
    { label: 'Сферы',      id: 'spheres' },
    { label: 'Технологии', id: 'technologies' },
    { label: 'Партнёры',   id: 'partners' },
    { label: 'Семинары',   id: 'seminars' },
    { label: 'Контакты',   id: 'contacts' },
  ],
  hero: {
    title:       'Продукция из стеклопластика задающая стандарты',
    subtitle:    'ООО «ЭПИРС» — эксперт в производстве изделий из композиционных материалов с 2004 года.',
    description: 'Мы специализируемся на выпуске высококачественных изделий из полиэфирных и эпоксидных смол, используя передовые материалы от мировых лидеров, таких как BUFA, AOC, и BASF. Наш многолетний опыт и использование лучших компонентов гарантируют высочайшее качество продукции для различных отраслей — от транспорта до туризма.',
    busImage:    '/customer-docs/layouts/start_bus/bus_frame_no_background.png',
    cta:         'Написать',
  },
  spheres: [
    {
      id:         'shipbuilding',
      title:      'Судостроение',
      text:       'ЭПИРС разрабатывает стеклопластиковые изделия для морской и речной индустрии — от промышленного судостроения до спортивных и персональных проектов.\n\nB2B: корпуса маломерных судов, палубные элементы, надстройки и технические композитные конструкции, устойчивые к воде, нагрузкам и агрессивной среде эксплуатации.\n\nB2C / спорт и туризм: спортивные и туристические байдарки и каноэ, созданные на основе опыта сотрудничества с Plastex — одного из мировых производителей гоночных лодок. Этот опыт сформировал глубокую экспертизу в работе с высокоточным спортивным композитом.\n\nОт инженерных корпусов до гоночных лодок — решения, где критичны вес, жёсткость и геометрическая точность.',
      mainImage:  '/customer-docs/layouts/Areas_Of_Activity/boat_no_background.png',
      bgImage:    '/customer-docs/layouts/Areas_Of_Activity/_.jpeg',
      bgOpacity:  'opacity-50',
      imageRight: true,
    },
    {
      id:         'transport',
      title:      'Транспорт',
      text:       'ЭПИРС разрабатывает и производит изделия из стеклопластика для транспортной отрасли — от городского транспорта до крупногабаритной техники.\n\nТрамваи. Автобусы. Поезда. Автомобилестроение. Спецтехника.\n\nМы создаём внешние и внутренние композитные элементы любой сложности: кузовные детали, маски, панели, корпуса, интерьерные элементы, аэродинамические конструкции, технологические кожухи и нестандартные инженерные изделия.\n\nОт единичных прототипов до серийного производства. Высокая прочность, малый вес, устойчивость к нагрузкам, коррозии и агрессивной среде — стеклопластик открывает новые возможности для современного транспорта.',
      mainImage:  '/customer-docs/layouts/Areas_Of_Activity/truck_no_background_no_logo.png',
      bgImage:    '/customer-docs/layouts/Areas_Of_Activity/image (4).png',
      bgOpacity:  'opacity-[0.32]',
      imageRight: false,
    },
    {
      id:         'energy',
      title:      'Энергетика',
      text:       'ЭПИРС разрабатывает стеклопластиковые изделия для энергетики и инфраструктуры, где важны защита, ресурс и стабильная работа в сложных условиях.\n\nКлючевое направление — корпуса для электрозаправочных станций: композитные оболочки и защитные конструкции, устойчивые к погоде, нагрузкам и городской эксплуатации.\n\nТакже создаём элементы для энергетических систем и технических модулей, требующих лёгких и антикоррозийных решений.\n\nОт зарядных станций до энергетических узлов — стеклопластик работает там, где стандартные материалы ограничены.',
      mainImage:  '/customer-docs/layouts/Areas_Of_Activity/wind_turbines_no_background.png',
      bgImage:    '/customer-docs/layouts/Areas_Of_Activity/image (5).png',
      bgOpacity:  'opacity-[0.32]',
      imageRight: true,
    },
    {
      id:         'medicine',
      title:      'Медицина и отдых',
      text:       'ЭПИРС создаёт стеклопластиковые решения для медицинского и wellness-сектора, где важны эргономика, точность и эстетика.\n\nКорпуса и элементы для массажных кресел, SPA-оборудования и установок индустрии отдыха. А также композитные оболочки для лазерных и высокотехнологичных медицинских систем, требующих стабильности формы и надёжности в эксплуатации.\n\nОт релаксационного оборудования до медицинских установок — стеклопластик объединяет комфорт и технологию.',
      mainImage:  '/customer-docs/layouts/Areas_Of_Activity/massage_chair_no_background.png',
      bgImage:    '/customer-docs/layouts/Areas_Of_Activity/image (6).png',
      bgOpacity:  'opacity-[0.27]',
      imageRight: false,
    },
  ],
  technologies: [
    { title: 'Вакуумная инфузия', svg: '/customer-docs/layouts/technologies/tech_vacuum_infusion (1).svg' },
    { title: 'Гибкое формование', svg: '/customer-docs/layouts/technologies/tech_flex_moulding (1).svg' },
    { title: 'Лёгкий RTM',        svg: '/customer-docs/layouts/technologies/tech_light_rtm (1).svg' },
  ],
  partners: {
    logos: [
      '/customer-docs/layouts/parthners_logo/image (2) (1).png',
      '/customer-docs/layouts/parthners_logo/image (7).png',
      '/customer-docs/layouts/parthners_logo/image (8).png',
      '/customer-docs/layouts/parthners_logo/image (9).png',
      '/customer-docs/layouts/parthners_logo/image (10).png',
      '/customer-docs/layouts/parthners_logo/image (11).png',
      '/customer-docs/layouts/parthners_logo/image (12).png',
      '/customer-docs/layouts/parthners_logo/image (13).png',
      '/customer-docs/layouts/parthners_logo/image (14).png',
      '/customer-docs/layouts/parthners_logo/image (15).png',
      '/customer-docs/layouts/parthners_logo/image (16).png',
      '/customer-docs/layouts/parthners_logo/image (17).png',
      '/customer-docs/layouts/parthners_logo/image (18).png',
      '/customer-docs/layouts/parthners_logo/image (19).png',
      '/customer-docs/layouts/parthners_logo/image (20).png',
      '/customer-docs/layouts/parthners_logo/image (21).png',
      '/customer-docs/layouts/parthners_logo/Screenshot 2024-10-21 at 18.17.02.png',
    ],
    gallery: [
      '/customer-docs/layouts/photos_of_products/1.png',
      '/customer-docs/layouts/photos_of_products/2.png',
      '/customer-docs/layouts/photos_of_products/3.png',
      '/customer-docs/layouts/photos_of_products/4.png',
      '/customer-docs/layouts/photos_of_products/5.png',
      '/customer-docs/layouts/photos_of_products/6.png',
      '/customer-docs/layouts/photos_of_products/7.png',
      '/customer-docs/layouts/photos_of_products/8.png',
      '/customer-docs/layouts/photos_of_products/9.png',
      '/customer-docs/layouts/photos_of_products/10.png',
      '/customer-docs/layouts/photos_of_products/11.png',
      '/customer-docs/layouts/photos_of_products/12.png',
    ],
  },
  seminars: {
    title:    'Семинары',
    videoIds: ['xb83uYlYsWA', 'QLXhxr4lbQQ', 'L3gAmJerK3c', '6km4EqtEPpY'],
  },
  contacts: {
    phone:        '+375293244382',
    email:        'hleb.smychok.sbmt@gmail.com',
    telegram:     '@hlebsmychok',
    telegramUrl:  'https://t.me/hlebsmychok',
    instagram:    'hsmychok',
    instagramUrl: 'https://instagram.com/hsmychok',
  },
  web3formsKey: '',
}
