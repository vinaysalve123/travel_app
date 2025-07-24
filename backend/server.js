const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const PORT = process.env.PORT;
const PORT = process.env.PORT || 3000;

const hotelDataAddedToDBRouter = require("./routes/dataimport.router.js");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router.js");

const hotelRouter = require("./routes/hotel.router.js");
const categoryRouter = require("./routes/category.router.js");
const singleHotelRouter = require("./routes/singleHotel.router.js");
const authRouter = require("./routes/auth.router.js");
const wishlistRouter = require("./routes/wishlist.router.js");

const connectDB = require("./config/dbconfig.js");

app.use(express.json());
connectDB();

app.get("/", (req,res)=>{
    res.send("This is the home page of breeze travel !!");
})

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});


app.use("/api/hotels", hotelRouter);    //To get/retrieve hotels
app.use("/api/categories", categoryRouter);    //To get/retrieve categories
app.use("/api/hoteldata", hotelDataAddedToDBRouter);   //To add hotels to database
app.use("/api/categorydata", categoryDataAddedToDBRouter);   //To add cateogries to database
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

// app.listen(PORT, ()=>{
//     console.log("Server is UP and Running !!");
// })

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is UP and Running on PORT ${PORT}!!`);
});
