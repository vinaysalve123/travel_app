const express = require("express");
const router  = express.Router();
// const hotels = require("../data/hotels");

const getAllHotelHandler = require("../controllers/hotelController.js");

router.get("/", getAllHotelHandler);

module.exports = router;