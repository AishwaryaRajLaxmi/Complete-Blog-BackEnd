const express=require("express");
const categoryController=require("../controllers/categoryController");
const catRoutes=express.Router();

//getAllCategories
catRoutes.get("/",categoryController.getAllCategories);

//createCategory
catRoutes.post("/",categoryController.createCategory);

//delteCategory
catRoutes.delete("/:_id",categoryController.deleteCategory);


//updateCategory
catRoutes.patch("/:_id",categoryController.updateCategory);

module.exports=catRoutes;