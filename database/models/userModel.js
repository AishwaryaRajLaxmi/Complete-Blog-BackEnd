const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
        },
        mobile:{
            type:String,
        },
        profileimage:{
            type:String,
            required:true,
            unique:true,
        },
        status:{
            type:Boolean,
            default:true,
        },
    },
        {timestamps:true
        }
    );

    module.exports=mongoose.model("user",userSchema);