# SPEC.md — Сайт ЭПИРС

> Единый источник истины для реализации. При конфликте с `BRIEF.md` — этот файл приоритетнее.
> Инфраструктура проекта описана в `CLAUDE.md` — отталкиваться от неё.

---

## 1. Обзор проекта

| Параметр | Значение |
|---------|---------|
| Клиент | ООО «ЭПИРС» |
| Тип сайта | Одностраничный scroll-сайт (single route `/`) |
| Язык | Только русский |
| Стиль | Минимализм (референс: apple.com) |
| Meta title | `ЭПИРС — производство изделий из стеклопластика` |
| Meta description | `ООО «ЭПИРС» — эксперт в производстве изделий из стеклопластика и композиционных материалов с 2004 года. Транспорт, судостроение, энергетика, медицина.` |

---

## 2. Дизайн-токены

### 2.1 Цветовая палитра

| Tailwind-класс | Hex | Назначение |
|---------------|-----|-----------|
| `bg-primary` / `text-primary` | `#e8e6e0` | Фон сайта |
| `bg-accent` / `text-accent` | `#F0B429` | Акцент (кнопки, highlights) |
| `text-heading` | `#4a6fa5` | Заголовки секций |
| `text-secondary` | `#7f8595` | Вторичный текст, неактивные ссылки nav |
| `border-stroke` | `#edc254` | Рамки карточек |
| `bg-darkblock` | `#dcdbda` | Фон тёмных блоков (технологии, семинары, галерея) |
| `text-black` | `#000000` | Основной текст |

**Добавить в `tailwind.config.ts`:**
```ts
colors: {
  primary:   'var(--color-primary)',
  accent:    'var(--color-accent)',
  heading:   '#4a6fa5',
  secondary: '#7f8595',
  stroke:    '#edc254',
  darkblock: '#dcdbda',
},
animation: {
  marquee: 'marquee 30s linear infinite',
},
keyframes: {
  marquee: {
    '0%':   { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
```

### 2.2 Типографика

| Роль | Шрифт | Вес | Размер |
|------|-------|-----|--------|
| Заголовок Hero | Montserrat | 700 | 20px |
| Подзаголовок Hero | Inter | 700 | 12.5px |
| Описание Hero | Inter | 400 | 12.5px |
| Заголовки секций (H2) | Montserrat | 700 | 37.3px |
| Тело секций | Inter | 400 / 700 | 12px |

**Обновить `src/index.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400;700&display=swap');

:root {
  --color-primary:  #e8e6e0;
  --color-accent:   #F0B429;
  --color-text:     #000000;
  --font-heading:   'Montserrat', sans-serif;
  --font-body:      'Inter', sans-serif;
  --font-family:    'Inter', sans-serif;
}
```

### 2.3 Прочие константы

| Параметр | Значение |
|---------|---------|
| Скругление карточек | `rounded-[15px]` |
| Скругление тёмных блоков | `rounded-[28px]` |
| Толщина рамки карточек | `border-[7px]` |
| Цвет рамки карточек | `border-stroke` (`#edc254`) |
| Прозрачность фото-фона (Судостроение) | `opacity-50` |
| Прозрачность фото-фона (Транспорт) | `opacity-[0.32]` |
| Прозрачность фото-фона (Энергетика) | `opacity-[0.32]` |
| Прозрачность фото-фона (Медицина) | `opacity-[0.27]` |

---

## 3. Навигация (Navbar)

### Поведение
- Фиксированный хедер: `position: fixed`, `top-0`, `z-50`, `bg-primary/90 backdrop-blur-sm`
- **Логотип** — левый верхний угол, `<img>` **без `<Link>`**, статичный, некликабельный
  - Файл: `/customer-docs/layouts/Logo/epirs_logo_no_background.png`
  - Высота: `h-10`
- **Навигационные ссылки** — клик плавно скроллит до секции через `scrollTo(id)`
- **Активная секция** (определяется через IntersectionObserver): цвет `#000000`
- **Неактивные секции**: цвет `#7f8595` (secondary)
- **Hover**: псевдоэлемент `after:` — подчёркивание плавно заполняет ширину текста, `duration-300`

### Пункты меню

| Метка | `scrollTo` ID |
|-------|-------------|
| О нас | `#hero` |
| Сферы | `#spheres` |
| Технологии | `#technologies` |
| Партнёры | `#partners` |
| Семинары | `#seminars` |
| Контакты | `#contacts` |

---

## 4. Структура страницы (`MainPage.tsx`)

```
<Navbar />
<main>
  <HeroSection         id="hero" />
  <SpheresSection      id="spheres" />
  <TechnologiesSection id="technologies" />
  <PartnersSection     id="partners" />
  <SeminarsSection     id="seminars" />
  <ContactsSection     id="contacts" />
</main>
<Footer />
```

---

## 5. Секции — полная спецификация

---

### 5.1 HeroSection (`id="hero"`)

**Layout:** 2-колонки. Левая — текст. Правая — изображение автобуса.  
**Фон:** `bg-primary`

#### Левая колонка
| Элемент | Текст | Стиль |
|---------|-------|-------|
| H1 заголовок | `Продукция из стеклопластика задающая стандарты` | Montserrat 700, 20px, `#000000` |
| Подзаголовок | `ООО «ЭПИРС» — эксперт в производстве изделий из композиционных материалов с 2004 года.` | Inter 700, 12.5px, `#000000` |
| Описание | *(см. ниже)* | Inter 400, 12.5px, `#000000` |
| CTA-кнопка | `Написать` | `bg-accent`, клик → `scrollTo('#contacts')` |

**Текст описания (полный):**
```
Мы специализируемся на выпуске высококачественных изделий из полиэфирных и эпоксидных смол,
используя передовые материалы от мировых лидеров, таких как BUFA, AOC, и BASF.
Наш многолетний опыт и использование лучших компонентов гарантируют высочайшее качество
продукции для различных отраслей — от транспорта до туризма.
```

#### Правая колонка
- Изображение: `/customer-docs/layouts/start_bus/bus_frame_no_background.png`
- Эффект: `useParallax(speed=0.25)` → `transform: translateY()`
- `<img alt="Автобус ЭПИРС">`

---

### 5.2 SpheresSection (`id="spheres"`)

**Общий стиль заголовков:** Montserrat 700, 37.3px, `text-heading` (`#4a6fa5`)  
**Стиль тела:** Inter 400/700, 12px, `text-black`

4 подсекции, каждая — 2-колонки. Объект с параллаксом чередуется: правая → левая → правая → левая.  
Фоновое фото — `position: absolute`, за основным объектом, `rounded-[28px]`, с прозрачностью по таблице.

---

#### 5.2.1 Судостроение
**Изображения:**
- Основной объект (справа): `/customer-docs/layouts/Areas_Of_Activity/boat_no_background.png`
- Фоновое фото (за объектом): `/customer-docs/layouts/Areas_Of_Activity/_.jpeg`, `opacity-50`

**Текст:**
```
ЭПИРС разрабатывает стеклопластиковые изделия для морской и речной индустрии —
от промышленного судостроения до спортивных и персональных проектов.

B2B: корпуса маломерных судов, палубные элементы, надстройки и технические
композитные конструкции, устойчивые к воде, нагрузкам и агрессивной среде эксплуатации.

B2C / спорт и туризм: спортивные и туристические байдарки и каноэ, созданные на
основе опыта сотрудничества с Plastex — одного из мировых производителей гоночных лодок.
Этот опыт сформировал глубокую экспертизу в работе с высокоточным спортивным композитом.

От инженерных корпусов до гоночных лодок — решения, где критичны вес, жёсткость
и геометрическая точность.
```

---

#### 5.2.2 Транспорт
**Изображения:**
- Основной объект (слева): `/customer-docs/layouts/Areas_Of_Activity/truck_no_background_no_logo.png`
- Фоновое фото (за объектом): `/customer-docs/layouts/Areas_Of_Activity/image (4).png`, `opacity-[0.32]`

**Текст:**
```
ЭПИРС разрабатывает и производит изделия из стеклопластика для транспортной отрасли —
от городского транспорта до крупногабаритной техники.

Трамваи. Автобусы. Поезда. Автомобилестроение. Спецтехника.

Мы создаём внешние и внутренние композитные элементы любой сложности: кузовные детали,
маски, панели, корпуса, интерьерные элементы, аэродинамические конструкции,
технологические кожухи и нестандартные инженерные изделия.

От единичных прототипов до серийного производства. Высокая прочность, малый вес,
устойчивость к нагрузкам, коррозии и агрессивной среде — стеклопластик открывает
новые возможности для современного транспорта.
```

---

#### 5.2.3 Энергетика
**Изображения:**
- Основной объект (справа): `/customer-docs/layouts/Areas_Of_Activity/wind_turbines_no_background.png`
- Фоновое фото (за объектом): `/customer-docs/layouts/Areas_Of_Activity/image (5).png`, `opacity-[0.32]`

**Текст:**
```
ЭПИРС разрабатывает стеклопластиковые изделия для энергетики и инфраструктуры,
где важны защита, ресурс и стабильная работа в сложных условиях.

Ключевое направление — корпуса для электрозаправочных станций: композитные оболочки
и защитные конструкции, устойчивые к погоде, нагрузкам и городской эксплуатации.

Также создаём элементы для энергетических систем и технических модулей,
требующих лёгких и антикоррозийных решений.

От зарядных станций до энергетических узлов — стеклопластик работает там,
где стандартные материалы ограничены.
```

---

#### 5.2.4 Медицина и отдых
**Изображения:**
- Основной объект (слева): `/customer-docs/layouts/Areas_Of_Activity/massage_chair_no_background.png`
- Фоновое фото (за объектом): `/customer-docs/layouts/Areas_Of_Activity/image (6).png`, `opacity-[0.27]`

**Текст:**
```
ЭПИРС создаёт стеклопластиковые решения для медицинского и wellness-сектора,
где важны эргономика, точность и эстетика.

Корпуса и элементы для массажных кресел, SPA-оборудования и установок индустрии отдыха.
А также композитные оболочки для лазерных и высокотехнологичных медицинских систем,
требующих стабильности формы и надёжности в эксплуатации.

От релаксационного оборудования до медицинских установок —
стеклопластик объединяет комфорт и технологию.
```

---

### 5.3 TechnologiesSection (`id="technologies"`)

**Заголовок:** `Наши технологии` — Montserrat 700, 37.3px, `text-heading`  
**Контейнер:** `bg-darkblock rounded-[28px]`

3 карточки в ряд:

| Карточка | SVG-файл | Название карточки |
|---------|----------|-----------------|
| 1 | `/customer-docs/layouts/technologies/tech_vacuum_infusion (1).svg` | Вакуумная инфузия |
| 2 | `/customer-docs/layouts/technologies/tech_flex_moulding (1).svg` | Гибкое формование |
| 3 | `/customer-docs/layouts/technologies/tech_light_rtm (1).svg` | Лёгкий RTM |

**Стиль карточки:** `border-[7px] border-stroke rounded-[15px]`  
SVG-схемы содержат встроенный русскоязычный текст — отображать как есть.  
Каждая карточка — `useParallax`.

---

### 5.4 PartnersSection (`id="partners"`)

**Заголовок:** `Партнёры` — Montserrat 700, 37.3px, `text-heading`

#### Бегущая строка логотипов
- `overflow-hidden` обёртка
- Внутренний `div` с `animate-marquee` (CSS keyframes из tailwind.config)
- Список логотипов дублируется для бесшовного цикла
- Каждый логотип: `grayscale hover:grayscale-0 transition duration-300`
- Высота логотипов: `h-10 object-contain`

**Файлы логотипов** (`/customer-docs/layouts/parthners_logo/`):
```
image (2) (1).png   image (7).png    image (8).png    image (9).png
image (10).png      image (11).png   image (12).png   image (13).png
image (14).png      image (15).png   image (16).png   image (17).png
image (18).png      image (19).png   image (20).png   image (21).png
Screenshot 2024-10-21 at 18.17.02.png
```

#### Галерея продукции
- Контейнер: `bg-darkblock rounded-[28px]`
- Карточка: `border-[7px] border-stroke rounded-[15px]`
- Автопереключение: `setInterval(3000)` через `useEffect`
- Dot-пагинация внизу: клик меняет текущее фото, активная точка — `bg-accent`

**Файлы галереи** (`/customer-docs/layouts/photos_of_products/`):
```
1.png   2.png   3.png   4.png   5.png   6.png
7.png   8.png   9.png   10.png  11.png  12.png
```

---

### 5.5 SeminarsSection (`id="seminars"`)

**Заголовок:** `Семинары` — Montserrat 700, 37.3px, `text-heading`  
**Контейнер:** `bg-darkblock rounded-[28px]`

4 встроенных YouTube-видео в сетке 2×2:

| № | Video ID | URL |
|---|----------|-----|
| 1 | `xb83uYlYsWA` | `https://www.youtube.com/embed/xb83uYlYsWA` |
| 2 | `QLXhxr4lbQQ` | `https://www.youtube.com/embed/QLXhxr4lbQQ` |
| 3 | `L3gAmJerK3c` | `https://www.youtube.com/embed/L3gAmJerK3c` |
| 4 | `6km4EqtEPpY` | `https://www.youtube.com/embed/6km4EqtEPpY` |

**Стиль карточки плеера:** `border-[7px] border-stroke rounded-[15px] overflow-hidden`  
**Соотношение сторон:** 16:9 (padding-bottom trick или `aspect-video`)

---

### 5.6 ContactsSection (`id="contacts"`)

**Заголовок:** `Контакты` — Montserrat 700, 37.3px, `text-heading`

#### Форма (Web3Forms)
Метод: `fetch` POST на `https://api.web3forms.com/submit`  
Access key: значение из `content.web3formsKey` (= `compozit777@yandex.ru`)

| Поле | Placeholder | Тип | Required |
|------|------------|-----|---------|
| Имя | `Ваше имя` | text | да |
| Контакт | `Телефон или Email` | text | да |
| Сообщение | `Сообщение` | textarea | нет |
| Кнопка | `Отправить` | submit | — |

Сообщения состояний:
- Успех: `Спасибо! Мы свяжемся с вами.`
- Ошибка: `Произошла ошибка. Попробуйте снова.`

#### Контактные данные

| Тип | Значение |
|-----|---------|
| Телефон | `+375293244382` |
| Email | `hleb.smychok.sbmt@gmail.com` |
| Telegram | `@hlebsmychok` (ссылка: `https://t.me/hlebsmychok`) |
| Instagram | `hsmychok` (ссылка: `https://instagram.com/hsmychok`) |

---

## 6. Новый хук: `useParallax.ts`

Путь: `src/lib/useParallax.ts`

```ts
import { useRef, useEffect, RefObject } from 'react'

export function useParallax<T extends HTMLElement>(speed = 0.3): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId: number

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed
        el.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [speed])

  return ref
}
```

---

## 7. UI-компоненты

### `SectionHeading.tsx`
`src/components/ui/SectionHeading.tsx`
```tsx
export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Montserrat'] font-bold text-[37.3px] text-heading mb-8">
      {children}
    </h2>
  )
}
```

### `DarkBlock.tsx`
`src/components/ui/DarkBlock.tsx`
```tsx
export default function DarkBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-darkblock rounded-[28px] p-8 ${className}`}>
      {children}
    </div>
  )
}
```

### `YouTubeEmbed.tsx`
`src/components/ui/YouTubeEmbed.tsx`
```tsx
export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video border-[7px] border-stroke rounded-[15px] overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`Семинар ЭПИРС`}
      />
    </div>
  )
}
```

---

## 8. Структура `content.ts`

```ts
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
    description: 'ООО «ЭПИРС» — эксперт в производстве изделий из стеклопластика и композиционных материалов с 2004 года.',
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
```

---

## 9. Файлы к изменению

| Файл | Действие |
|------|---------|
| `src/content.ts` | Полная замена на интерфейс и данные из раздела 8 |
| `src/index.css` | Обновить CSS-переменные, подключить Montserrat |
| `tailwind.config.ts` | Добавить цвета heading/secondary/stroke/darkblock + анимацию marquee |
| `src/pages/MainPage.tsx` | Заменить импорты секций, добавить новые |
| `src/components/layout/Navbar.tsx` | Лого → статичная img, новые nav-пункты, hover-underline |
| `src/components/layout/Footer.tsx` | Обновить под новые ключи content |
| `src/components/sections/HeroSection.tsx` | Полная перезапись под ЭПИРС |
| `src/components/sections/ContactSection.tsx` | Переименовать в ContactsSection, обновить ключи |

## 10. Файлы к созданию

| Файл | Назначение |
|------|-----------|
| `src/lib/useParallax.ts` | Параллакс-хук (см. раздел 6) |
| `src/components/sections/SpheresSection.tsx` | Секция сфер |
| `src/components/sections/TechnologiesSection.tsx` | Секция технологий |
| `src/components/sections/PartnersSection.tsx` | Логотипы + галерея |
| `src/components/sections/SeminarsSection.tsx` | 4 YouTube-видео |
| `src/components/ui/DarkBlock.tsx` | Тёмный блок-обёртка |
| `src/components/ui/SectionHeading.tsx` | Стандартный H2 |
| `src/components/ui/YouTubeEmbed.tsx` | Responsive iframe 16:9 |

## 11. Файлы к удалению

| Файл | Причина |
|------|--------|
| `src/components/sections/AboutSection.tsx` | Заменена переписанной HeroSection |
| `src/components/sections/ServicesSection.tsx` | Заменена SpheresSection |
