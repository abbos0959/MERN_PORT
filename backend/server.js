const express = require("express");
const app = express();
const userRouter=require("./router/userRouter")
const dotenv = require("dotenv");
dotenv.config();
const DB = require("./connect/db");
DB();
app.use(express.json())




app.use("/api/v1/users",userRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
   console.log("server ishladi");
});

//MdMLEk6WppZsOjSx
