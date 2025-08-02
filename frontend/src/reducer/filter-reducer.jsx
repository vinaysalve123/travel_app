const filterReducer = (state, {type, payload})=>{
    switch (type){
        case "SHOW_FILTER_MODAL":
            return{
                ...state,
                isFilterModalOpen: !state.isFilterModalOpen
            }
        
        case "MINIMUM_PRICE":
            return{
                ...state,
                priceRange: [Math.min(payload.newValue[0], payload.priceRange[1]-payload.minDifference), payload.priceRange[1]]
            }
        case "MAXIMUM_PRICE":
            return{
                ...state,
                priceRange: [payload.priceRange[0], Math.max(payload.newValue[1], payload.priceRange[0]+payload.minDifference)]
            }

        // case "MINIMUM_PRICE":
        //     const mini = Math.min(payload.newValue[0], payload.priceRange[1] - payload.minDifference);
        //     return {
        //         ...state,
        //         priceRange: [Math.max(mini, 100), payload.priceRange[1]],
        //     };

        // case "MAXIMUM_PRICE":
        //     const maxi = Math.max(payload.newValue[1], payload.priceRange[0] + payload.minDifference)
        //     return {
        //         ...state,
        //         priceRange: [payload.priceRange[0], maxi],
        //     };


        case "BEDROOMS":
            return{
                ...state,
                noOfBedrooms: (payload=== "Any") ? payload : (payload === '5+') ? 5 : Number(payload)
            }
        case "BEDS":
            return{
                ...state,
                noOfBeds: (payload=== "Any") ? payload : (payload === '5+') ? 5 : Number(payload)
            }
        case "BATHROOMS":
            return{
                ...state,
                noOfBathrooms: (payload=== "Any") ? payload : (payload === '5+') ? 5 : Number(payload)
            }

        case "PROPERTY_TYPE":
            return{
                ...state,
                propertyType: payload
            }

        case "RATING":
            return{
                ...state,
                travelOpRating: Number(payload)
            }

        case "CANCELLATION":
            return{
                ...state,
                isCancellable: payload
            }

        case "CLEAR_ALL":
            return{
                ...state,
                priceRange: [150, 25000],
                noOfBathrooms: "Any",
                noOfBedrooms: "Any",
                noOfBeds: "Any",
                propertyType: "Any",
                travelOpRating: 1,
                isCancellable: true
            }

        default:
            return state
    }
}

export default filterReducer;