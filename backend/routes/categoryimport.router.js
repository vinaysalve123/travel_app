const express = require("express");

const Category = require("../model/category.model.js")
const categories = require("../data/categories.js");

const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        // await Hotel.remove();
        await Category.deleteMany({});
        const categoriesSaved = await Category.insertMany(categories.data);
        res.status(201).json(categoriesSaved);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router;