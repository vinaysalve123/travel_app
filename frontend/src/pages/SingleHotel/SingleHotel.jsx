import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HotelImages from "../../components/HotelImages/HotelImages";
import HotelDetails from "../../components/HotelDetails/HotelDetails";
import "./SingleHotel.css"
import  FinalPrice  from "../../components/FinalPrice/FinalPrice";
import { useAuth } from "../../context/auth-context";
import { useDate } from "../../context/date-context";
import { useAlert } from "../../context/alert-context";
import Alert from "../../components/Alert/Alert";
import SearchStayWithDate from "../../components/SearchStayWithDate/SearchStayWithDate";
import ProfileDropDown from "../../components/ProfileDropDown/ProfileDropDown";
import AuthModal from "../../components/AuthModal/AuthModal";

const SingleHotel = ()=>{
    
    const {id} = useParams(); //Object containing the parameters passed in url. Ex: name, address, id
    // console.log(id);
    const [singleHotel, setSingleHotel] = useState({});

    const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
    const { isSearchModalOpen } = useDate();
    const { alert } = useAlert();

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
        <div className="relative">
            <Navbar />
            <main className="single-hotel-page">
                <p className="hotel-name-add">
                {name}, {state}
                </p>
                <HotelImages singleHotel={singleHotel} />
                <div className="d-flex">
                <HotelDetails singleHotel={singleHotel} />
                <FinalPrice singleHotel={singleHotel} />
                </div>
            </main>
            {isSearchModalOpen && <SearchStayWithDate />}
            {isDropDownModalOpen && <ProfileDropDown />}
            {isAuthModalOpen && <AuthModal />}
            {alert.open && <Alert />}
        </div>
    )
}

export default SingleHotel;