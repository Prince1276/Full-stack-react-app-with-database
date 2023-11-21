const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/key");

//Routers
const epApiRouter = require("./apiRouters/epApiRouter");
const bpApiRouter = require("./apiRouters/bpApiRouter");

//Middlewears
app.use(cors());
app.use(express.json());

//DB connections
mongoose
  .connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected successfully`))
  .catch((err) => console.log(`Error in connection. --> ${err}`));

// API routers usage
app.use("/bpApiRouter/api/v1", bpApiRouter);
app.use("/epApiRouter/api/v1", epApiRouter);

//Server listing on port 5000
app.listen(5000, () => {
  console.log(`Listing on port 5000...`);
});
