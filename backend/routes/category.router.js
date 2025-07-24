const express = require("express");
const router  = express.Router();

const categoryHandler = require("../controllers/categoryController.js");

router.get("/", categoryHandler);

module.exports = router;