import { createContext, useContext, useState } from "react";

const initialVal = "National Parks";

const CategoryContext = createContext(initialVal);

const CategoryProvider = ({children})=>{
    const [hotelCategory, setHotelCategory] = useState(initialVal);

    return(
        <CategoryContext.Provider value={{hotelCategory, setHotelCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export {useCategory, CategoryProvider};