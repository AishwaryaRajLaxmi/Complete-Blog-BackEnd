const { defaultServerResponse } = require("../helpers/constant");
const constant=require("../helpers/constant");
const categoryService=require("../services/categoryServices");

//getAllCategories
module.exports.getAllCategories=async(req,res)=>{
    const response={...constant.defaultServerResponse};

try{
    const serviceResponse=await categoryService.getAllCategories(req.query);
    response.body=serviceResponse;
    response.status=200;
    response.message=constant.categoryMessage.CATEGORY_FETCHED;
}catch(error){
 console.log(`Something went controller: categoryController: getAllCategories \n 
 Error: ${error.message}`)

 response.message=constant.categoryMessage.CATEGORY_NOT_FETCHED;
 response.errors.message=error.message;
}
res.status(response.status).send(response);
  
}

//createCategories

module.exports.createCategory=async(req,res)=>{
const response={...constant.defaultServerResponse};
try{
    const serverResponse=await categoryService.createCategory(req.body);
    response.body=serverResponse;
    response.status=200;
    response.message=constant.categoryMessage.CATEGORY_CREATED;

}catch(error){
    console.log(`Something went wrong controller:
    categoryController : createCategory \n Error: ${error.message}`);
response.message=constant.categoryMessage.CATEGORY_NOT_CREATED;
response.errors.message=error.message;
}

res.status(response.status).send(response);
}

//deleteCategories
module.exports.deleteCategory=async(req,res)=>{
    const response={...constant.defaultServerResponse};
    try{
        const serviceResponse=await categoryService.deleteCategory(req.params._id);   
         response.body = serviceResponse;
        response.status = 200;
        response.message = constant.categoryMessage.CATEGORY_DELETED;
      } catch (error) {
        console.log(
          `Something went wrong controller: categoryController: deleteCategory\n Error:${error.message}`
        );
        response.message = constant.categoryMessage.CATEGORY_NOT_DELETED;
        response.errors.message = error.message;
      }
      res.status(response.status).send(response);
    };

    //updateCategory
    module.exports.updateCategory=async(req,res)=>{
        const response={...constant.defaultServerResponse};
        try{
            const serviceResponse=await categoryService.updateCategory(req.params._id,req.body);
            response.body=serviceResponse;
            response.status=200;
            response.message=constant.categoryMessage.CATEGORY_UPDATED;
           
        }catch (error) {
            console.log(
              `Something went wrong controller: categoryController: updateCategory\n Error:${error.message}`
            );
            response.message = constant.categoryMessage.CATEGORY_NOT_UPDATED;
            response.errors.message = error.message;
          }
        res.status(response.status).send(response);
    }