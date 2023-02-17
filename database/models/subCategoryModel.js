const mongoose = require("mongoose");
// const category=require("./categoryModel");
const subcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },

    //foreignkey
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mycategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mycategory", subcategorySchema);
