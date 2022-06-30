const mongoose=require("mongoose")

const USerchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    googleID:{
        type:String
    }

})
module.exports=mongoose.model("user",USerchema)