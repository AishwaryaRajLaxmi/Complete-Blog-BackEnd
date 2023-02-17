const constants={
    defaultServerResponse:{
        message:"",
        body:null,
        errors:{},
        status:400,
    },

    dbMessage: {
        DB_CONNECTED: "Database Connected Successfully",
        DB_ERROR: "Oops Database not connected",
      },
    
      categoryMessage: {
        CATEGORY_FETCHED: "Category Fetched Successfully !",
        CATEGORY_NOT_FETCHED: "Category Not Fetched !",
        CATEGORY_CREATED: "Category Created Successfully !",
        CATEGORY_NOT_CREATED: "Category Not Created !",
        CATEGORY_DELETED: "Category Deleted Successfully !",
        CATEGORY_NOT_DELETED: "Category Not Deleted !",
        CATEGORY_UPDATED: "Category Updated",
        CATEGORY_NOT_UPDATED: "Category Not Updated",
      },

      subcategoryMessage: {
        SUB_CATEGORY_FETCHED: "Sub Category Fetched Successfully !",
       SUB_CATEGORY_NOT_FETCHED: "Sub Category Not Fetched !",
       SUB_CATEGORY_CREATED: "Sub Category Created Successfully !",
        SUB_CATEGORY_NOT_CREATED: " Sub Category Not Created !",
        SUB_CATEGORY_DELETED: "Sub Category Deleted Successfully !",
        SUB_CATEGORY_NOT_DELETED: "Sub Category Not Deleted !",
        SUB_CATEGORY_UPDATED: "Sub Category Updated",
       SUB_CATEGORY_NOT_UPDATED: "Sub Category Not Updated",
      },

      userMessage: {
        USER_FETCHED: "USER Fetched Successfully !",
        USER_NOT_FETCHED: "USER Not Fetched !",
        USER_CREATED: "USER Created Successfully !",
        USER_NOT_CREATED: "USER Not Created !",
        USER_DELETED: "USER Deleted Successfully !",
        USER_NOT_DELETED: "USER Not Deleted !",
        USER_UPDATED: "USER Updated",
        USER_NOT_UPDATED: "USER Not Updated",
      },
    };
    
    module.exports = constants;
    