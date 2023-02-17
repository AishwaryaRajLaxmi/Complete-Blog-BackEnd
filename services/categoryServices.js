const categoryModel=require("../database/models/categoryModel");

//getAllCategories
module.exports.getAllCategories=async(serviceData)=>{
    const{skip=0, limit=10, query=""}=serviceData;
    try{
        const response=await categoryModel.find({name:{$regex: query, $options:"i"}}).skip(skip).limit(limit);
        return response;
    }catch(error){
    console.log(
        `Something went wrong service:
        categoryService: getAllCategories\n
        Error: ${error.message}`
    );

    //throw the error
    throw new Error(error.message);
}
};


//createCategory
module.exports.createCategory=async(serviceData)=>{
    try{
        const newData=new categoryModel(serviceData);
        const response=newData.save();
        return response;

    }catch(error){
        console.log(`
        Something went wrong servic: categoryService : createCategory \n Error : ${error.message}`);
    //throw the error
    throw new Error(error.message);
    }
};

//deleteCategory
module.exports.deleteCategory=async(id)=>{
    try{const catResponse=await categoryModel.findByIdAndDelete(id);
        const response=catResponse;
        return response;
    }catch(error){
        console.log(`Somethin went wrong service: categoryService: deleteCategory\nError: ${error.message}`)

        throw new Error(error.message);
    }
};

//updateCategory
module.exports.updateCategory=async(id,body)=>{
    try{
        const catResponse=categoryModel.findByIdAndUpdate(id,body);
        const response=catResponse;
        return response;

    }catch(error){
        console.log(`Something is wrong service: categoryservice: updateCategory \n Error :${error.message}`);
        throw new Error(error.message);
        }
};
