import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CategoryProvider } from './context/category-context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DateProvider } from './context/date-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <App />
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
