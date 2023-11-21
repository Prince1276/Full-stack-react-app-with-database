const express = require("express");
const cors = require("cors");
const app = express();
const todoRouters = require("./Routers");

//middleware
app.use(cors());
app.use(express.json());

//Routers
app.use("/todo/v1/api", todoRouters);

//server
app.listen(4000, () => {
  console.log("Server is listening on port 3000...");
});
