import { useFilter } from "../../../context/filter-context";

const raatings = ["1", "2", "3", "4", "5"];

const Ratings=()=>{

    const {travelOpRating, filterDispatch} = useFilter();

    const handleRatingClick=(rating)=>{
        filterDispatch({
            type: "RATING",
            payload: rating
        })
    }

    console.log(travelOpRating);

    return(
        <div className="filter-container">
            <span className="filter-label">
                Ratings
            </span>
            <div className="d-flex align-center gap">
                {
                    raatings.map((rating) => <span className={`span-label amenity-count star d-flex align-center justify-center cursor-pointer on-hover ${travelOpRating.toString() === rating ? "selected" : ""}`} onClick={()=>handleRatingClick(rating)} key={rating}>{rating} &Up</span>)
                }
            </div>
        </div>
    )
}

export default Ratings;