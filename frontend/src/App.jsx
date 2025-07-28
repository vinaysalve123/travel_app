
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home"
import SingleHotel from './pages/SingleHotel/SingleHotel'
import SearhResults from './pages/SearchResults/SearchResults'

function App() {

  return (
    <>
      {/* <h1>This is the Travel App</h1> */}
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/hotels/:name/:address/:id/reserve' element = {<SingleHotel />}/>
        <Route path="/hotels/:address" element={<SearhResults />} />
      </Routes>
      
    </>
  )
}

export default App
