# CLAUDE.md — Сайт-визитка

## Что мы строим

**Сайт-визитка** — многостраничный  персональный сайт для специалиста или малого бизнеса (фрилансер, юрист, мастер, репетитор, врач и т.п.). Выполняет роль онлайн-визитки: посетитель за 10–15 секунд понимает кто это, чем занимается и как связаться.

**Результат:** чистый, профессиональный, быстро загружающийся сайт с базовыми анимациями появления. Никакой лишней сложности — только то, что нужно клиенту прямо сейчас.

**Для кого:** клиенты специалиста, которые получили ссылку и хотят быстро убедиться что человек надёжный и понять как связаться.

Все данные для конкретного клиента находятся в `SPEC.md`. 

---

## Стек (не менять, не добавлять библиотеки без явной инструкции)

- **Vite 5 + React 18 + TypeScript** — точка входа `src/main.tsx`
- **React Router DOM 6** — навигация между страницами (уже настроен в `App.tsx`)
- **Tailwind CSS 3** — единственный способ стилизации. Никаких inline-стилей, никаких отдельных `.css` файлов кроме `src/index.css`
- **Lucide React** — иконки
- **React Helmet Async** — meta-теги (обёрнут в `HelmetProvider` в `src/main.tsx`)
- **Web3Forms** — форма контактов через `fetch`, без отдельного npm-пакета (ключ в `content.web3formsKey`)

## Структура проекта

```
src/
  pages/        ← страницы (MainPage.tsx + дополнительные по SPEC.md)
  components/
    sections/   ← секции страниц
    ui/         ← переиспользуемые примитивы (Button, SectionWrapper)
    layout/     ← Navbar, Footer
  lib/
    useScrollAnimation.ts  ← хук для анимаций появления
  content.ts
  App.tsx       ← BrowserRouter + Routes (роуты добавляются по SPEC.md)
```

- Файлы: PascalCase для компонентов, camelCase для хуков/утилит, расширение `.tsx` / `.ts`
- Каждый компонент — `export default`
- Импорт контента — только из `src/content.ts`

## Маршрутизация

- `/` → `MainPage` — всегда присутствует
- Дополнительные страницы → добавить `<Route path="/slug" element={<PageComponent />} />` в `App.tsx`
- Навигационные ссылки на другие страницы — через `<Link to="/slug">` из react-router-dom
- Ссылки на секции внутри страницы — через `scrollTo(id)` (уже в Navbar)

## Контент и тема

- **Весь текстовый контент** — только из `src/content.ts`. Никаких хардкод строк в JSX
- **Цвета** — только через Tailwind-классы `text-primary`, `bg-primary`, `text-accent`, `bg-accent`
- **Шрифт** — задан переменной `--font-family` в `src/index.css`

## Анимации

**Базовые (разрешены):** CSS transitions + fade/slide при появлении секций через Intersection Observer.

Использование:
```tsx
import { useScrollAnimation } from '../../lib/useScrollAnimation'

export default function MySection() {
  const ref = useScrollAnimation<HTMLElement>()
  return <section ref={ref} data-animate>...</section>
}
```

**Запрещено:** Framer Motion, parallax, scroll-triggered JS-библиотеки, Lottie, кастомные курсоры.
