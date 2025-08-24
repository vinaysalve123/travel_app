import { createContext, useContext, useReducer } from "react"
import authReducer from "../reducer/auth-reducer";

const initialValue={
    isAuthModalOpen : false,
    isDropDownModalOpen: false,
    username: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    accessToken: localStorage.getItem("token") || "",
    name: localStorage.getItem("username") || "",
    selectedTab: "login"
}

const AuthContext = createContext(initialValue);

const AuthProvider = ({children})=>{
    const[{isAuthModalOpen, isDropDownModalOpen, username, number, email, password, confirmPassword, accessToken, name, selectedTab}, authDispatch] = useReducer(authReducer, initialValue);

    return(
        <AuthContext.Provider value={{isAuthModalOpen, isDropDownModalOpen, username, number, email, password, confirmPassword, accessToken, name, selectedTab, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};