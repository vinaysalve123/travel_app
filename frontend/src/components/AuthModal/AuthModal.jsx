import { useAuth } from "../../context/auth-context"
import AuthLogin from "../Auth/AuthLogin";
import AuthSignup from "../Auth/AuthSignup";
import "./AuthModal.css"


const AuthModal = ()=>{

    const {selectedTab, authDispatch} = useAuth();

    const handleLoginClick=()=>{
        authDispatch({
            type: "SET_TO_LOGIN"
        })
    }
    const handleSignupClick=()=>{
        authDispatch({
            type: "SET_TO_SIGNUP"
        })
    }

    const handleModalCloseClick=()=>{
        authDispatch({
            type: "SHOW_AUTH_MODAL"
        })
    }

    return(
        <div className="auth-modal-container fixed">
            <div className="auth-modal absolute right-0 shadow">
                <div className="d-flex align-center shadow">
                    <button onClick={handleLoginClick} className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab==="login"? "btn-auth-selected":""}`}>Login</button>
                    <button onClick={handleSignupClick} className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab==="signup"? "btn-auth-selected":""}`}>Signup</button>
                    <button onClick={handleModalCloseClick} className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer">
                        <span className="material-icons-outlined">close</span>
                    </button>
                </div>

                <div>
                    {
                        selectedTab === "login" ? <AuthLogin /> : selectedTab === "signup" ? <AuthSignup /> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthModal;