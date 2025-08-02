const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../model/user.model.js");

const loginController = async (req, res) => {
    try {
        const user = await User.findOne({ number: req.body.number });
        if (!user) {
            return res.status(401).json({ message: "Invalid Mobile Number !!" });
        }

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY)
                                           .toString(CryptoJS.enc.Utf8);
        if (decodedPassword !== req.body.password) {
            return res.status(401).json({ message: "Incorrect Password !!" });
        }

        // Optional: Don't send the password back
        const { password, ...rest } = user._doc;
        const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN)

        res.status(200).json({...rest, accessToken});

    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error !!");
    }
}

module.exports = loginController;