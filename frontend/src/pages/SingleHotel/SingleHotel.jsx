import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HotelImages from "../../components/HotelImages/HotelImages";
import HotelDetails from "../../components/HotelDetails/HotelDetails";
import "./SingleHotel.css"
import  FinalPrice  from "../../components/FinalPrice/FinalPrice";

const SingleHotel = ()=>{
    
    const {id} = useParams(); //Object containing the parameters passed in url. Ex: name, address, id
    // console.log(id);
    const [singleHotel, setSingleHotel] = useState({});

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await axios.get(`https://travel-app-onjk.onrender.com/api/hotels/${id}`)
                // console.log(data);
                setSingleHotel(data);
            }catch(err){
                console.log(err);
            }
        })()
    },[id])

    const {name, state} = singleHotel;
    
    return (
        <>
            {/* <h1>Single Hotel Page !!</h1> */}
            <Navbar />
            <main className="single-hotel-page">
                <p className="hotel-name-add">
                    {name}, {state}       
                </p>
                <HotelImages singleHotel={singleHotel} />

                <div className="d-flex align-center">
                    <HotelDetails singleHotel={singleHotel}/>
                    <FinalPrice singleHotel={singleHotel} />
                </div>
            </main>
        </>
    )
}

export default SingleHotel;