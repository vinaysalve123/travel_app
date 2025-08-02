import { createContext, useContext, useReducer } from "react";
import filterReducer from "../reducer/filter-reducer";

const initialValue= {
    isFilterModalOpen: false,
    priceRange: [150, 25000],
    noOfBathrooms: "Any",
    noOfBedrooms: "Any",
    noOfBeds: "Any",
    propertyType: "Any",
    travelOpRating: 1,
    isCancellable: true
}

const FilterContext = createContext(initialValue);

const FilterProvider=({children})=>{
    const[{isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, travelOpRating, isCancellable}, filterDispatch] = useReducer(filterReducer, initialValue);

    return (
        <FilterContext.Provider value={{isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, travelOpRating, isCancellable, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = ()=> useContext(FilterContext);

export {useFilter, FilterProvider};
