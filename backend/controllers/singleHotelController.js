const Hotel = require("../model/hotel.model.js");

const singleHotelHandler = async(req, res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.json(hotel);
    }
    catch(err){
        console.log(err);
        res.status(404).json("No Hotel Found");
    }
}

module.exports = singleHotelHandler;