import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { useDate } from "../../context/date-context"
import HotelCard from "../../components/HotelCard/HotelCard";
import axios from "axios";
import { useCategory } from "../../context/category-context";
import { useAlert } from "../../context/alert-context";
import Alert from "../../components/Alert/Alert";

const SearhResults = ()=>{

    const {destination} = useDate();
    const {hotelCategory} = useCategory();
    const [hotels, setHotels] = useState([]);
    const {alert} = useAlert();

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await axios.get(`https://travel-app-onjk.onrender.com/api/hotels?category=${hotelCategory}`)
                // console.log("Hotels fetched:", data);
                setHotels(data);
            }
            catch(err){
                console.log(err);
            }
        })()
    },[destination, hotelCategory])

    const filteredSearchResults = hotels.filter(({address, city, state, country})=>
        address.toLowerCase() === (destination.toLowerCase()) ||
        city.toLowerCase() === (destination.toLowerCase()) ||
        state.toLowerCase() === (destination.toLowerCase()) ||
        country.toLowerCase() === (destination.toLowerCase()) 
    )

    return (
        <>
            <Navbar />

            <section className="main d-flex align-center gap-larger">
                {
                    filteredSearchResults ?
                        filteredSearchResults.map((hotel)=> <HotelCard key={hotel._id} hotel={hotel} />)
                    :
                        (<h3>Nothing Found !!</h3>)
                }
            </section>
            {
                alert.open && <Alert />
            }
        </>
    )
}

export default SearhResults