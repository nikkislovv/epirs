// Постобработка сборки: делаем 404.html точной копией index.html.
// На Netlify (и почти любом статик-хостинге) файл 404.html отдаётся по умолчанию
// на любой путь без совпадающего файла — БЕЗ каких-либо правил редиректа.
// Так как это копия SPA, дальше маршрут разруливает React Router:
// /privacy → страница приватности, любой другой путь → главная (см. App.tsx).
import { copyFileSync, existsSync } from 'node:fs'

const from = 'dist/index.html'
const to = 'dist/404.html'

if (!existsSync(from)) {
  console.error(`[copy-404] Не найден ${from}. Сначала должен отработать vite build.`)
  process.exit(1)
}

copyFileSync(from, to)
console.log(`[copy-404] ${to} создан как копия ${from}`)
