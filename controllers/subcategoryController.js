// const { defaultServerResponse } = require("../helpers/constant");
const constant = require("../helpers/constant");
const subcategoryService = require("../services/subcategoryServices");

//getAllSubCategories
module.exports.getAllSubCategories = async (req, res) => {
  const response = { ...constant.defaultServerResponse };

  try {
    const serviceResponse = await subcategoryService.getAllSubCategories(
      req.query
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constant.subcategoryMessage.SUB_CATEGORY_FETCHED;
  } catch (error) {
    console.log(`Something went controller: subcategoryController: getAllSubcategories \n 
 Error: ${error.message}`);

    response.message = constant.subcategoryMessage.SUB_CATEGORY_NOT_FETCHED;
    response.errors.message = error.message;
  }
  res.status(response.status).send(response);
};

//createCategories

module.exports.createSubCategory = async (req, res) => {
  const response = { ...constant.defaultServerResponse };
  try {
    const serverResponse = await subcategoryService.createSubCategory(req.body);
    response.body = serverResponse;
    response.status = 200;
    response.message = constant.subcategoryMessage.SUB_CATEGORY_CREATED;
  } catch (error) {
    console.log(`Something went wrong controller:
    subcategoryController : createSubCategory \n Error: ${error.message}`);
    response.message = constant.subcategoryMessage.SUB_CATEGORY_CREATED;
    response.errors.message = error.message;
  }

  res.status(response.status).send(response);
};

//deleteCategories
module.exports.deleteSubCategory = async (req, res) => {
  const response = { ...constant.defaultServerResponse };
  try {
    const serviceResponse = await subcategoryService.deleteSubCategory(
      req.params._id
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constant.subcategoryMessage.SUB_CATEGORY_DELETED;
  } catch (error) {
    console.log(
      `Something went wrong controller: subcategoryController: deleteSubCategory\n Error:${error.message}`
    );
    response.message = constant.subcategoryMessage.SUB_CATEGORY_NOT_DELETED;
    response.errors.message = error.message;
  }
  res.status(response.status).send(response);
};

//updateCategory
module.exports.updateSubCategory = async (req, res) => {
  const response = { ...constant.defaultServerResponse };
  try {
    const serviceResponse = await subcategoryService.updateSubCategory(
      req.params._id,
      req.body
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constant.subcategoryMessage.SUB_CATEGORY_UPDATED;
  } catch (error) {
    console.log(
      `Something went wrong controller: subcategoryController: udateSubCategory\n Error:${error.message}`
    );
    response.message = constant.subcategoryMessage.SUB_CATEGORY_NOT_UPDATED;
    response.errors.message = error.message;
  }
  res.status(response.status).send(response);
};
