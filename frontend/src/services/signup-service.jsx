import axios from "axios";

const signupHandler= async(username, number, email, password, setAlert)=>{
    try{
        const data = await axios.post("https://travel-app-onjk.onrender.com/api/auth/register",
            {
                username: username,
                number: number,
                email: email,
                password: password
            }
        )

        console.log("Signed Up !!");
        console.log(data);
        setAlert({
            open: true,
            message: `Account Created:: username - ${username}`,
            type: "success"
        })
    }
    catch(err){
        console.log(err, "Error adding user to database !!");
    }
}

export default signupHandler