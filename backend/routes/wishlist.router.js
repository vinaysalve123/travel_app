const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/verifyUser.js");
const wishlistController = require("../controllers/wishlistController.js");
const {createWishlistHandler, deleteWishlistHandler, getWishlistHandler} = wishlistController;


// router.post("/", createWishlistHandler)
router.post("/", verifyUser, createWishlistHandler)

// router.delete("/:id", deleteWishlistHandler)
router.delete("/:id", verifyUser, deleteWishlistHandler)

// router.get("/", getWishlistHandler)
router.get("/", verifyUser, getWishlistHandler)

module.exports = router;