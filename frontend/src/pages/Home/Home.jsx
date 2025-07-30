import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import HotelCard from '../../components/HotelCard/HotelCard';
import "./Home.css"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component"
import Categories from '../../components/Categories/Categories';
import { useCategory } from '../../context/category-context';
import { useDate } from '../../context/date-context';
import SearchStayWithDate from '../../components/SearchStayWithDate/SearchStayWithDate';
import { useFilter } from '../../context/filter-context';
import Filter from '../../components/Filters/Filter';
import getHotelsByPriceRange from '../../utils/price-range';
import getHotelsByRoomAndBeds from '../../utils/room-beds';
import getHotelsByPropertyType from '../../utils/property-type';
import getHotelsByRatings from '../../utils/rating';
import getHotelsByCancellation from '../../utils/hotel-cancellable';
import { useAuth } from '../../context/auth-context';
import AuthModal from '../../components/AuthModal/AuthModal';

const Home = () => {

  const [hasMore, setHasMore] = useState(true); //Checks whether there are more hotels remaining to display
  const [currentIndex, setCurrentIndex] = useState(16);
  const [testData, setTestData] = useState([]);
  const [hotels, setHotels] = useState([]);

  const {hotelCategory} = useCategory();
  const {isSearchModalOpen} = useDate();
  const {isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, travelOpRating, isCancellable} = useFilter();
  const {isAuthModalOpen} = useAuth();

  useEffect(()=>{
    (async()=>{
      try{
        const {data} = await axios.get(`https://travel-app-onjk.onrender.com/api/hotels?category=${hotelCategory}`)
        // console.log("Hotels fetched:", data);
        setTestData(data);
        setHotels(data ? data.slice(0,16) : []);
      }
      catch(err){
        console.log(err);
      }
    })()
  },[hotelCategory])

  const fetchMoreData = ()=>{
    if(hotels.length >= testData.length){
      setHasMore(false);
      return;
    }
    setTimeout(()=>{
      if(hotels && hotels.length > 0){
        setHotels(hotels.concat(testData.slice(currentIndex, currentIndex+16)))
        setCurrentIndex(prev=>prev+16)
      }
      else{
        setHotels([]);
      }
    }, 1000)
  }

  const filteredHotelsByPrice = getHotelsByPriceRange(hotels, priceRange);
  const filteredHotelsByRoomsAndBeds = getHotelsByRoomAndBeds(filteredHotelsByPrice, noOfBathrooms, noOfBedrooms, noOfBeds)
  const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByRoomsAndBeds, propertyType);
  const filteredHotelsByRatings = getHotelsByRatings(filteredHotelsByPropertyType, travelOpRating);
  const filteredHotelsByCancellable = getHotelsByCancellation(filteredHotelsByRatings, isCancellable);

  return (
    <div className='relative'>
      <Navbar />
      <Categories />
      
      {
        hotels && hotels.length>0 ? (
          <InfiniteScroll 
            dataLength={hotels.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={hotels.length>0 && <h3 className="alert-text">Loading...</h3>}
            endMessage={<p className="alert-text">You have seen it all !!</p>}
          >
            <main className='main d-flex align-center wrap gap-larger'>
              {
                filteredHotelsByCancellable && filteredHotelsByCancellable.map((hotel)=> <HotelCard key={hotel._id} hotel={hotel} />)
              }
            </main>
          </InfiniteScroll>
        )
        :
        (<></>)
      }
      {
        isSearchModalOpen && <SearchStayWithDate />
      }
      {
        isFilterModalOpen && <Filter />
      }
      {
        isAuthModalOpen && <AuthModal />
      }
    </div>
  )
}

export default Home;
