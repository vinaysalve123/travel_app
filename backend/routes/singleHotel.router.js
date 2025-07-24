const express = require("express");
const router = express.Router();

const singleHotelHandler = require("../controllers/singleHotelController.js");

router.get("/:id", singleHotelHandler);

module.exports = router;