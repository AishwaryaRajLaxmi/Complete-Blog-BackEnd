const express=require("express");
const subcategoryController=require("../controllers/subcategoryController");
const subcatRoutes=express.Router();

//getAllSubCategories
subcatRoutes.get("/",subcategoryController.getAllSubCategories);

//createSubCategory
subcatRoutes.post("/",subcategoryController.createSubCategory);

//deleteSubCategory
subcatRoutes.delete("/:_id",subcategoryController.deleteSubCategory);


//updateSubCategory
subcatRoutes.patch("/:_id",subcategoryController.updateSubCategory);

module.exports=subcatRoutes;