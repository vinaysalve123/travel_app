
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home"
import SingleHotel from './pages/SingleHotel/SingleHotel'
import SearhResults from './pages/SearchResults/SearchResults'
import Wishlist from './pages/Wishlist/Wishlist'
import Payment from './pages/Payment/Payment'
import OrderSummary from './pages/OrderSummary/OrderSummary'
// import { useAuth } from './context/auth-context'

function App() {
  // const {accessToken} = useAuth();

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/hotels/:name/:address/:id/reserve' element = {<SingleHotel />}/>
        <Route path="/hotels/:address" element={<SearhResults />} />
        {/* <Route path="/wishlist" element={accessToken ? <Wishlist /> : <Navigate to="/" />} /> */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/confirm-booking/stay/:id' element={<Payment />} />
        <Route path='/order-summary' element={<OrderSummary />} />
      </Routes>
      
    </>
  )
}

export default App
