const mongoose  = require("mongoose")


const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        min: 8,
        required:true,
    },
    favorites:{
        type:Array,
        default:[]
    },
   
})

const User = mongoose.model("User",UserSchema)
module.exports = User
