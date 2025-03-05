import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages'
import DetailPage from './pages/detail'
import { BrowserRouter, Routes, Route } from "react-router";



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
