const subcategoryModel=require("../database/models/categoryModel");

//getAllCategories
module.exports.getAllSubCategories=async(serviceData)=>{
    const{skip=0, limit=10, query=""}=serviceData;
    try{
        const response=await subcategoryModel.find({name:{$regex: query, $options:"i"}}).skip(skip).limit(limit);
        return response;
    }catch(error){
    console.log(
        `Something went wrong service:
        categoryService: getAllSubCategories\n
        Error: ${error.message}`
    );

    //throw the error
    throw new Error(error.message);
}
};


//createCategory
module.exports.createSubCategory=async(serviceData)=>{
    try{
        const newData=new subcategoryModel(serviceData);
        const response=newData.save();
        return response;

    }catch(error){
        console.log(`
        Something went wrong service: SubcategoryService : createSubCategory \n Error : ${error.message}`);
    //throw the error
    throw new Error(error.message);
    }
};

//deleteCategory
module.exports.deleteSubCategory=async(id)=>{
    try{const catResponse=await subcategoryModel.findByIdAndDelete(id);
        const response=catResponse;
        return response;
    }catch(error){
        console.log(`Somethin went wrong service: subcategoryService: deletesubCategory\nError: ${error.message}`)

        throw new Error(error.message);
    }
};

//updateCategory
module.exports.updateSubCategory=async(id,body)=>{
    try{
        const catResponse=subcategoryModel.findByIdAndUpdate(id,body);
        const response=catResponse;
        return response;

    }catch(error){
        console.log(`Something is wrong service: subcategoryservice: updateSubCategory \n Error :${error.message}`);
        throw new Error(error.message);
        }
};
