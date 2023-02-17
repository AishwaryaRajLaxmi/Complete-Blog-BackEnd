// const { model } = require("mongoose");
const userModel=require("../database/models/userModel");

//getAllUser
module.exports.getAllUser=async(serviceData)=>{
    const{skip=0, limit=10, query=""}=serviceData;
    try{
        const response=await userModel.find({name:{$regex: query, $options:"i"}}).skip(skip).limit(limit);
        return response;
    }catch(error){
    console.log(
        `Something went wrong service:
        userService: getAllUser\n
        Error: ${error.message}`
    );

    //throw the error
    throw new Error(error.message);
}
};

//createUser
module.exports.createUser=async(serviceData)=>{
    try{
        const newdata=new userModel(serviceData);
        const response=await newdata.save();
        return response;
    }catch(error){
        console.log(`
        Something went wrong service: userService : createUser\n Error : ${error.message}`);
    //throw the error
    throw new Error(error.message);
    }
};

//deleteUser
module.exports.deleteUserById=async(id)=>{
    try{const userresponse=await userModel.findByIdAndDelete(id);
        const response=userresponse;
        return response;

    }catch(error){
        console.log(` Something went wrong service: userService : deleteUser\n Error : ${error.message}`);
        throw new Error(error.message);
    }
}

//updateUser
module.exports.updateUser=async(id,body)=>{
    try{const userresponse=await userModel.findByIdAndUpdate(id,body);
          const response=userresponse;
        return response;

    }catch(error){
        console.log(` Something went wrong service: userService : updateUser\n Error : ${error.message}`);
        throw new Error(error.message);
    }
}    
   