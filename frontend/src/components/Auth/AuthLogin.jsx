
import { useAuth } from "../../context/auth-context";
import loginHandler from "../../services/login-service";
import validateNumber from "../../utils/number-regex";
import validatePassword from "../../utils/password-regex";
import "./Auth.css";

let isNumberValid, isPasswordValid;

const AuthLogin=()=>{

    const {number, password, authDispatch} = useAuth();

    const handleNumberChange = (event) => {
        let value = event.target.value;

        // Only digits allowed, and limit to 10 characters
        value = value.replace(/\D/g, '').slice(0, 10);

        authDispatch({
            type: "NUMBER",
            payload: value
        });
        isNumberValid = validateNumber(value);
        if (!isNumberValid) {
            console.log("Mobile number not valid !!");
        } else {
            console.log("Valid mobile number");
        }
    };

    const handlePasswordChange=(event)=>{
        isPasswordValid = validatePassword(event.target.value);
        authDispatch({
            type:"PASSWORD",
            payload: event.target.value
        })
        if(isPasswordValid){
            console.log("Valid Password !!");
            
        }
        else{
            console.log("Invalid Password !!");
        }
        
    }

    const handleFormSubmit= async(event)=>{
        event.preventDefault();

        if(isNumberValid && isPasswordValid){
            try{
                const {accessToken, username} = await loginHandler(number, password);
                console.log(accessToken, username);
                
                authDispatch({
                    type:"SET_ACCESS_TOKEN",
                    payload: accessToken
                })
                authDispatch({
                    type:"SET_USERNAME",
                    payload: username
                })

                authDispatch({
                    type: "SHOW_AUTH_MODAL"
                })

            }catch(err){
                alert("Login failed. Try again.");
                console.error("Login error:", err);
            }
        }
        else{
            alert("You Entered Wrong Credentials. Please Try Again !!")
        }

        authDispatch({
            type:"CLEAR_USER_DATA"
        })
    }

    return(
        <div className="auth-container">
            <form onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Mobile Number 
                        <span className="asterisk">*</span>{" "}
                    </label>
                    <input value={number} onChange={handleNumberChange} className="auth-input" type="number" placeholder="Enter Mobile Number" maxLength={10} required />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Password 
                        <span className="asterisk">*</span>{" "}
                    </label>
                    <input value={password} onChange={handlePasswordChange} className="auth-input" type="password" placeholder="Enter Password" required />
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">
                        Login
                    </button>
                </div>
            </form>

            <div className="cta">
                <button className="button btn-outline-primary cursor-pointer">
                    Login with Test Credentials
                </button>
            </div>
        </div>
    )
}

export default AuthLogin;