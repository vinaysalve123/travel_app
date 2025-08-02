import { useFilter } from "../../context/filter-context";
import "./Filter.css"
import FreeCancel from "./FreeCancel/FreeCancel";
import PriceRange from "./PriceRange/PriceRange";
import PropertyType from "./PropertyType/PropertyType";
import Ratings from "./Ratings/Ratings";
import RoomsAndBeds from "./RoomsAndBeds/RoomsAndBeds";

const Filter=()=>{

    const {filterDispatch} = useFilter();

    const handleFilterModalCloseClick=()=>{
        filterDispatch({
            type:"SHOW_FILTER_MODAL"
        })
    }
    const handleClearFilterClick=()=>{
        filterDispatch({
            type: "CLEAR_ALL",
        })
    }

    return (
        <>
            <div className="filter-modal">
                <div className="filter-page shadow marginBottom">
                    <div className="d-flex align-center justify-space-between">
                        <span className="filter-label">Filter</span>
                        <button className="button btn-close cursor-pointer d-flex align-center justify-center" onClick={handleFilterModalCloseClick}>
                            <span className="material-icons-outlined">close</span>
                        </button>
                    </div>

                    <PriceRange />
                    <RoomsAndBeds />
                    <PropertyType />
                    <Ratings />
                    <FreeCancel />

                    <div className="d-flex align-center justify-space-between">
                        <button className="button cursor btn-link-primary" onClick={handleClearFilterClick}>Clear All</button>
                        <button className="button cursor btn-primary btn-apply" onClick={handleFilterModalCloseClick}>Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;