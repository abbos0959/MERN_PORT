const express = require("express");
const app = express();
const userRouter=require("./router/userRouter")
const TourRouter=require("./router/tourRouter")
const dotenv = require("dotenv");
const cors=require("cors")
dotenv.config();
const DB = require("./connect/db");
DB();
app.use(express.json())
app.use(cors())




app.use("/api/v1/users",userRouter)
app.use("/api/v1/tours",TourRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
   console.log("server ishladi");
});

//MdMLEk6WppZsOjSx
