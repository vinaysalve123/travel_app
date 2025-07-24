const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGOATLASURL = process.env.DATABASE_URL

if (!MONGOATLASURL) {
  console.error("❌ DATABASE_URL not set in .env file");
  process.exit(1);
}

const connectDB = async()=>{
    try{
        await mongoose.connect(MONGOATLASURL)
                .then(()=>console.log("Connected to mongodb Atlas !!"))
                .catch(err=>console.log(err))
    }
    catch(err){
        console.log(err)
    }
} 

module.exports = connectDB;