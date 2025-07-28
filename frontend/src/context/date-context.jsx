import { createContext, useContext, useReducer } from "react";
import dateReducer from "../reducer/date-reducer";

const initialState = {
    destination: "",
    guests: 0,
    checkInDate:null,
    checkOutDate:null,
    isSearchModalOpen: false,
    isSearchResultOpen: true
}

const DateContext = createContext(initialState);

const DateProvider = ({children})=>{
    // const [state, dateDispatch] = useReducer(dateReducer, initialState);    //state variable becomes ini. val.
    const [{destination, guests, checkInDate, checkOutDate, isSearchModalOpen, isSearchResultOpen}, dateDispatch] = useReducer(dateReducer, initialState);    //state variable becomes ini. val.

    return (  
        <DateContext.Provider value={{destination,guests, checkInDate, checkOutDate, isSearchModalOpen, isSearchResultOpen, dateDispatch}}>
            {children}
        </DateContext.Provider>
    )
}

const useDate = ()=> useContext(DateContext);

export {useDate, DateProvider};