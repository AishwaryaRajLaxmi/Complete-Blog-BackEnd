const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//database connection
const dbConnection = require("./database/dbconnection");

dbConnection.connect();

//register body parser
app.use(express.json());

//register the routers
app.use("/api/v1/categories", require("./routes/categoryRoutes"));
app.use("/api/v1/subcategories", require("./routes/subcategoryRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
