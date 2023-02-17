const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            require:true,
            trim:true,
            unique:true,
        },
        mobile:{
            type:String,
            require:true,
        },
        profileimage:{
            type:String,
            require:true,
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