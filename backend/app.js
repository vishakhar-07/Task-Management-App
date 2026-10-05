
require("dotenv").config()
const express = require("express");
const app = express();


const apiRouter = require("./router/task")

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("MongoDB connect SuccessFully")
}).catch((err)=>{
    console.log(err)
})


app.use(express.json())





app.use("/api",apiRouter);

let port = process.env.PORT || 5000
app.listen(port , ()=>{
    console.log(`Running on port ${port}`);
})