const mongoose=require("mongoose");
const categorySchema=new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true,
    },
    image:{
        type:String,
        required:true,
    },
},
{
    timestamps:true}

);

module.exports=mongoose.model("category",categorySchema);