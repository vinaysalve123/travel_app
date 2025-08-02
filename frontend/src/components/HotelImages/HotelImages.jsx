import "./HotelImages.css"

const HotelImages = ({singleHotel})=>{
    console.log(singleHotel);
    const {image, imageArr} = singleHotel;
    
    return(
        <>
        <div className="hotel-image-container d-flex gap-small">
            <div className="primary-image-container">
                <img className="primary-img" src={image} alt="Primary Image" />
            </div>
            <div className="d-flex wrap gap-small">
                {
                    imageArr && imageArr.map((imag)=> <img className="hotel-img" key={imag} src={imag} alt="hotel-image"/>)
                }
            </div>
        </div>
        </>
    )
}

export default HotelImages;