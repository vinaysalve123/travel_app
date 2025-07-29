import { useFilter } from "../../../context/filter-context";

const RoomsAndBeds=()=>{

    const numOfAmenities = ["Any", "1", "2", "3", "4", "5+"]
    const {noOfBathrooms, noOfBedrooms, noOfBeds, filterDispatch} = useFilter();

    const handleBedroomsClick=(number)=>{
        filterDispatch({
            type:"BEDROOMS",
            payload: number
        })
    }
    const handleBedsClick=(number)=>{
        filterDispatch({
            type:"BEDS",
            payload: number
        })
    }
    const handleBathroomsClick=(number)=>{
        filterDispatch({
            type:"BATHROOMS",
            payload: number
        })
    }

    console.log({noOfBedrooms, noOfBeds, noOfBathrooms});

    return (
        <>
            <div className="filter-container">
                <span className="filter-label">
                    Rooms And Beds
                </span>
                <div className="d-flex align-center gap-large">
                    <div className="d-flex direction-column gap">
                        <span className="span-label">Bedrooms</span>
                        <span className="span-label">Beds</span>
                        <span className="span-label">Bathrooms</span>
                    </div>

                    <div className="d-flex direction-column gap">
                        <div>
                            {
                                numOfAmenities.map((num) => (
                                    <span className={`span-label amenity-count d-flex align-center justify-center cursor-pointer on-hover ${(noOfBedrooms.toString() === num || (noOfBedrooms=== 5 && num === "5+"))? "selected": ""}`} onClick={()=>handleBedroomsClick(num)} key={num}>
                                        {num}
                                    </span>
                                ))
                            }
                        </div>
                        <div>
                            {
                                numOfAmenities.map((num) => <span className={`span-label amenity-count d-flex align-center justify-center cursor-pointer on-hover ${(noOfBeds.toString() === num  || (noOfBeds=== 5 && num === "5+")) ? "selected": ""}`} onClick={()=>handleBedsClick(num)} key={num}>{num}</span>)
                            }
                        </div>
                        <div>
                            {
                                numOfAmenities.map((num) => <span className={`span-label amenity-count d-flex align-center justify-center cursor-pointer on-hover ${(noOfBathrooms.toString() === num || (noOfBathrooms=== 5 && num === "5+")) ? "selected": ""}`} onClick={()=>handleBathroomsClick(num)} key={num}>{num}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomsAndBeds;