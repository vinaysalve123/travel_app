import React from 'react'
import "./HotelCard.css";

const HotelCard = ({hotel}) => {

    const {_id, name, image, address, state, rating, price} = hotel;

  return (
    <div className='relative hotelcard-container cursor-pointer shadow'>
        <div className="">
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
                    <span>Night</span>
                </p>
            </div>
            
        </div>

        <div className="wishlist">
            <button className='button btn-wishlist absolute'>
                <span className='material-icons favorite cursor'>favorite</span>
            </button>
        </div>
    </div>
  )
}

export default HotelCard
