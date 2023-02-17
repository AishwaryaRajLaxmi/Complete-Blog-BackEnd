const express=require("express");
const usercontroller=require("../controllers/userController");
const userRoutes=express.Router();

//getAllSubCategories
userRoutes.get("/",usercontroller.getAllUser);

//createSubCategory
userRoutes.post("/",usercontroller.createUser);

//deleteSubCategory
userRoutes.delete("/:_id",usercontroller.deleteUserById);


//updateSubCategory
userRoutes.patch("/:_id",usercontroller.updateUser);

module.exports=userRoutes;