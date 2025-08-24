import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CategoryProvider } from './context/category-context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DateProvider } from './context/date-context.jsx'
import { FilterProvider } from './context/filter-context.jsx'
import { AuthProvider } from './context/auth-context.jsx'
import { WishlistProvider } from './context/wishlist-context.jsx'
import { AlertProvider } from './context/alert-context.jsx'
import { HotelProvider } from './context/hotel-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <HotelProvider>
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
        </HotelProvider>
      </AlertProvider>  
    </BrowserRouter>
  </StrictMode>,
)
