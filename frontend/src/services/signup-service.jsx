import axios from "axios";

const signupHandler= async(username, number, email, password)=>{
    try{
        const data = await axios.post("https://travel-app-onjk.onrender.com/api/auth/register",
            {
                username: username,
                number: number,
                email: email,
                password: password
            }
        )
        console.log(data);
    }
    catch(err){
        console.log(err, "Error adding user to database !!");
    }
}

export default signupHandler