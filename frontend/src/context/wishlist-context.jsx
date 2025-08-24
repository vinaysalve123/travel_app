import { createContext, useContext, useEffect, useReducer } from "react"
import wishlistReducer from "../reducer/wishlist-reducer";

const initialValue = {
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || []
}

const WishlistContext = createContext(initialValue);

const WishlistProvider = ({children})=>{
    const [{wishlist}, wishlistDispatch] = useReducer(wishlistReducer, initialValue);

    // 🔒 Save to localStorage on wishlist change
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    return(
        <WishlistContext.Provider value={{wishlist, wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export {useWishlist, WishlistProvider};