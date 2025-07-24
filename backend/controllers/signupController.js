const CryptoJS = require("crypto-js");

const User = require("../model/user.model.js");


const signupHandler = async(req, res)=>{
    try{
        const userObject = {
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        }
        const newUser = new User(userObject);
            
        // const {username, number, email, password} = req.body;
        // const newUser = new User({username, number, email, password});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    }
    catch(err){
        console.log(err);
        res.status(500).json("Internal Server Error !!");
    }
}

module.exports = signupHandler;