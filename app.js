const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const apiRoute=require("./routes/api");
const sendRequest=require("./controllers/sendRequest");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use("/api",apiRoute);


app.listen(3000, function () {
    console.log("Server started on :http://localhost:3000");
});


