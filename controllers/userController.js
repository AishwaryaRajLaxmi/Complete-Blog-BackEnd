const constant = require("../helpers/constant");
const userService = require("../services/userServices");

module.exports.getAllUser = async (req, res) => {
  const response = { ...constant.defaultServerResponse };
  try {
    const serviceResponse = await userService.getAllUser(req.query);
    response.body = serviceResponse;
    response.message = constant.userMessage.USER_FETCHED;
    response.status = 200;

  } catch (error) {
    console.log(`Something went controller: userController: getAllUser \n 
 Error: ${error.message}`);

    response.message = constant.userMessage.USER_FETCHED;
    response.errors.message = error.message;
  }
  res.status(response.status).send(response);
};

//createCategories

module.exports.createUser = async (req, res) => {
  const response = { ...constant.defaultServerResponse };
  try {
    const serverResponse = await userService.createUser(req.body);
    response.body = serverResponse;
    response.status = 200;
    response.message = constant.userMessage.USER_CREATED;
  } catch (error) {
    console.log(`Something went wrong controller:
      subcategoryController : createSubCategory \n Error: ${error.message}`);
    response.message = constant.userMessage.USER_CREATED;
    response.errors.message = error.message;
  }

  res.status(response.status).send(response);
};

//deleteCategories
module.exports.deleteUserById = async (req, res) => {
  const response = { ...constant.defaultServerResponse };
  try {
    const serviceResponse = await userService.deleteUserById(req.params._id);
    response.body = serviceResponse;
    response.status = 200;
    response.message = constant.userMessage.USER_DELETED;
  } catch (error) {
    console.log(
      `Something went wrong controller: Controller: deleteUserById\n Error:${error.message}`
    );
    response.message = constant.userMessage.USER_DELETED;
    response.errors.message = error.message;
  }
  res.status(response.status).send(response);
};

//updateCategory
module.exports.updateUser = async (req, res) => {
  const response = { ...constant.defaultServerResponse };
  try {
    const serviceResponse = await userService.updateUser(
      req.params._id,
      req.body
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constant.userMessage.USER_UPDATED;
  } catch (error) {
    console.log(
      `Something went wrong controller: userController: updateUser\n Error:${error.message}`
    );
    response.message = constant.userMessage.USER_NOT_UPDATED;
    response.errors.message = error.message;
  }
  res.status(response.status).send(response);
};
