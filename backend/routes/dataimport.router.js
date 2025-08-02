const express = require("express");

const Hotel = require("../model/hotel.model.js")
const hotels = require("../data/hotels.js");

const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        // await Hotel.remove();
        await Hotel.deleteMany({});
        const hotelsSaved = await Hotel.insertMany(hotels.data);
        res.status(201).json(hotelsSaved);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})
// router.post("/", async(req, res)=>{
//     try{
//         const newActor = new Hotel(hotels.data);
//         const hotelsSaved =  await newActor.save();
//         res.status(201).json(hotelsSaved);
//     }
//     catch(err){
//         console.log(error);
//     }
// })

module.exports = router;