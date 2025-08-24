import React from 'react'
import "./HotelCard.css";
import {useNavigate} from "react-router-dom";
import { useWishlist } from '../../context/wishlist-context';
import findHotelInWishlist from '../../utils/find-hotel-in-wishlist';
import { useAuth } from '../../context/auth-context';
import { useAlert } from '../../context/alert-context';

const HotelCard = ({hotel}) => {

    const {_id, name, image, address, state, rating, price} = hotel;
    const {wishlist, wishlistDispatch} = useWishlist();
    const { setAlert } = useAlert();
    const {accessToken, authDispatch} = useAuth();
    // console.log(accessToken);

    const navigate = useNavigate();
    const handleHotelCardClick=()=>{
        navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`)
    }


    const isHotelInWishlist = findHotelInWishlist(wishlist, _id);
    const handleWishlistClick=()=>{
        if (accessToken) {
        if (!isHotelInWishlist) {
            wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: hotel,
            });
            setAlert({
                open: true,
                message: `Hotel:: ${name} added to wishlist`,
                type: "success"
            })
        } else {
            wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: _id,
            });
            setAlert({
                open: true,
                message: `Hotel:: ${name} removed from wishlist`,
                type: "success"
            })
        }
        } else {
            authDispatch({
                type: "SHOW_AUTH_MODAL",
            });
        }
        
    }
    // console.log(wishlist);

  return (
    <div className='relative hotelcard-container cursor-pointer shadow'>
        <div onClick={handleHotelCardClick}>
            <img className='img' src={image} alt={name} />
            <div className="hotelcard-details">
                <div className='d-flex align-center'>
                    <span className='location'>{address},{state}</span>
                    <span className='rating d-flex align-center'>
                        <span className='material-icons-outlined'>star</span>
                        <span>{rating}</span>
                    </span>
                </div>

                <p className="hotel-name">{name}</p>
                <p className="price-details d-flex align-center">
                    <span className="price">Rs. {price}</span>
                    <span>night</span>
                </p>
            </div>
            
        </div>

        <div className="wishlist">
            <button onClick={handleWishlistClick} className='button btn-wishlist absolute'>
                <span className={`material-icons favorite cursor ${isHotelInWishlist ? "fav-selected" : ""}`}>favorite</span>
            </button>
        </div>
    </div>
  )
}

export default HotelCard
