// const jwt = require("jsonwebtoken");

// const verifyUser = (req,res,next)=>{
//     const token = req.headers.authorization;
//     if(token){
//         jwt.verify(token, process.env.ACCESS_TOKEN, (err, user)=>{
//             if(err)res.status(403).json({message: "Invalid Token !!"});

//             req.user = user;
//             next();
//         })
//     }
// }

// module.exports = verifyUser;


const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Authorization header:", authHeader);


    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided!" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid Token !!" });
        }

        req.user = user;
        next(); // ✅ Only called if token is valid
    });
};

module.exports = verifyUser;
