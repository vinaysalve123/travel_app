import axios from "axios";

const loginHandler= async(number, password, setAlert, authDispatch)=>{
    try{
        const {data} = await axios.post("https://travel-app-onjk.onrender.com/api/auth/login", 
            {
                number: number,
                password: password
            }
        )

        console.log("Logged IN !!");
        // console.log(data.accessToken, data.username);
        const {accessToken, username} = data;
        // console.log(accessToken, username);

        // Save to localStorage
        localStorage.setItem("token", accessToken);
        localStorage.setItem("username", username);

        // 🔥 Update context too
        authDispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
        authDispatch({ type: "SET_USERNAME", payload: username });

        setAlert({
            open: true,
            message: "Login Successful !!",
            type: "success"
        })
        return{accessToken, username}
    }catch(err){
        console.log(err, "Unable to Login !!");
    }
}

export default loginHandler;