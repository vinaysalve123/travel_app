const express = require("express");
const router = express.Router();

const signupHandler = require("../controllers/signupController.js");
const loginController = require("../controllers/loginController.js");


//User needs to sign up/Register
//http://localhost:3500/api/auth/register
router.post("/register", signupHandler);

//User needs to sign In
// LOGIN
router.post("/login", loginController);

module.exports = router;