import { useAuth } from "../../context/auth-context";
import signupHandler from "../../services/signup-service";
import validateEmail from "../../utils/email-regex";
import validateName from "../../utils/name-regex";
import validateNumber from "../../utils/number-regex";
import validatePassword from "../../utils/password-regex";
import "./Auth.css";

let isNumberValid, isNameValid, isEmailValid, isPasswordValid, isConfirmPasswordValid, passwordValid, confirmPasswordValid;

const AuthSignup=()=>{

    const { username, number, email, password, confirmPassword, authDispatch} = useAuth();

    // const handleNumberChange=(event)=>{
    //     const isNumberValid = validateNumber(event.target.value);
    //     if(isNumberValid){
    //         console.log("Valid Number !!");
    //         authDispatch({
    //             type:"NUMBER",
    //             payload: event.target.value
    //         })
    //     }
    //     else{
    //         console.log("Invalid Number !!");
    //     }
        
    // }
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

    // const handleEmailChange=(event)=>{
    //     const isValidEmail = validateEmail(event.target.value);
    //     if(isValidEmail){
    //         console.log("Valid Email !!");
    //         authDispatch({
    //             type:"EMAIL",
    //             payload: event.target.value
    //         })
    //     }
    //     else{
    //         console.log("Invalid Email !!");
    //     }
        
    // }
    const handleEmailChange = (event) => {
        isEmailValid = validateEmail(event.target.value);
        
        // Always update state
        authDispatch({
            type: "EMAIL",
            payload: event.target.value
        });

        // Then optionally validate
        if (!(isEmailValid)) {
            console.log("Invalid Email !!");
        } else {
            console.log("Valid Email !!");
        }
    };

    const handleNameChange=(event)=>{
        isNameValid = validateName(event.target.value);
        authDispatch({
            type:"NAME",
            payload: event.target.value
        })
        if(isNameValid){
            console.log("Valid Name !!");
            
        }
        else{
            console.log("Invalid Name !!");
        }
        
    }
    const handlePasswordChange=(event)=>{
        passwordValid = event.target.value;
        isPasswordValid = validatePassword(passwordValid);
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
    const handleConfirmPasswordChange=(event)=>{
        confirmPasswordValid = event.target.value;
        isConfirmPasswordValid = validatePassword(confirmPasswordValid);
        authDispatch({
            type:"CONFIRM_PASSWORD",
            payload: event.target.value
        })
        if(isConfirmPasswordValid){
            console.log("Valid Password !!")
            
        }
        else{
            console.log("Invalid Password !!")
        }
        
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        // console.log("clicked !!");
        console.log({isNumberValid, isNameValid, isEmailValid, isPasswordValid, isConfirmPasswordValid});
        if(isNumberValid && isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid &&(passwordValid === confirmPasswordValid)){
            signupHandler(username, number, email, password);
        }
        else{
            alert("You Entered Invalid Entries. Please try again !!");
        }

        authDispatch({
            type:"CLEAR_USER_DATA"
        })
    }

    console.log({username, number, email, password, confirmPassword});

    return(
        <div className="auth-container">
            <form onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Name
                        <span className="asterisk">*</span>{" "}
                    </label>
                    <input value={username} onChange={handleNameChange} className="auth-input" type="text" placeholder="Enter Name" required />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Mobile Number 
                        <span className="asterisk">*</span>{" "}
                    </label>
                    <input value={number} onChange={handleNumberChange} className="auth-input" type="number" placeholder="Enter Mobile Number" maxLength="10" required />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Email
                        <span className="asterisk">*</span>{" "}
                    </label>
                    <input value={email} onChange={handleEmailChange} className="auth-input" type="email" placeholder="Enter Email" required />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Password 
                        <span className="asterisk">*</span>{" "}
                    </label>
                    <input value={password} onChange={handlePasswordChange} className="auth-input" type="password" placeholder="Enter Password" required />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Confirm Password 
                        <span className="asterisk">*</span>{" "}
                    </label>
                    <input value={confirmPassword} onChange={handleConfirmPasswordChange} className="auth-input" type="password" placeholder="Enter Password" required />
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthSignup;