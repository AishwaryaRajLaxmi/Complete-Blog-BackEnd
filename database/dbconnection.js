const mongoose=require("mongoose");
const constants=require("../helpers/constant");

module.exports.connect=async()=>{
    try{
        mongoose.set('strictQuery', false);
        const url=process.env.MONGO_URL || "mongodb://127.0.0.1:27017/CompleteBlog";
        const response=await mongoose.connect(url);
        console.log(
            `${constants.dbMessage.DB_CONNECTED}
            Host:${response.connection.host}
            Port: ${response.connection.port}
            Database:${response.connection.name}`
        );

    }catch(error){
        console.log(`${constants.dbMessage.DB_ERROR} \n ${error.message}`);
    }

}