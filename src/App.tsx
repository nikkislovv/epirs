import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Дополнительные страницы добавляются здесь по SPEC.md */}
      </Routes>
    </BrowserRouter>
  )
}
