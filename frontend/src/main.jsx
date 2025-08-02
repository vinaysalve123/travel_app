import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CategoryProvider } from './context/category-context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DateProvider } from './context/date-context.jsx'
import { FilterProvider } from './context/filter-context.jsx'
import { AuthProvider } from './context/auth-context.jsx'
import { WishlistProvider } from './context/wishlist-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <FilterProvider>
          <DateProvider>
            <AuthProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </AuthProvider>
          </DateProvider>
        </FilterProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
