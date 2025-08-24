import axios from "axios";

const loginHandler= async(number, password, setAlert)=>{
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

        localStorage.setItem("token", accessToken);
        localStorage.setItem("username", username);
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