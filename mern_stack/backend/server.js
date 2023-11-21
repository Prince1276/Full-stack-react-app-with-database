const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());


app.use(express.json());

const uri = "mongodb://127.0.0.1:27017/mongopro";
mongoose.connect(uri,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
});

const exerciseRouter = require('./api_routes/exercises');
const userRouter = require('./api_routes/users');

app.use('/exercise',exerciseRouter);
app.use('/users',userRouter);

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});