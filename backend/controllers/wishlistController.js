const Wishlist = require("../model/wishlist.model.js");

const createWishlistHandler = async(req, res)=>{
    const newWishlist = new Wishlist(req.body);
    try{
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }
    catch(err){
        res.status(500).json({message: "Failed to create Wishlist !!"});
    }
}

const deleteWishlistHandler = async(req, res)=>{
    try{
        const deletedWishlist = await Wishlist.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted the Hotel from Wishlist Successfully !!"});
    }
    catch(err){
        res.status(500).json({message: "Couldn't delete the hotel from wishlist !!"});
    }
}

const getWishlistHandler = async(req, res)=>{
    try{
        const allHotelIdInWishlist = await Wishlist.find();
        allHotelIdInWishlist ? res.json(allHotelIdInWishlist) : res.json({message: "No hotels found in the wishlist !!"});
    }
    catch(err){
        res.json(err);
    }
}

module.exports = {createWishlistHandler, deleteWishlistHandler, getWishlistHandler};