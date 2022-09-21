const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const apiRoute=require("./routes/api");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));





// router.get("/", async (req, res) => {
//     var address = req.query.address;
//     var ans2 = await sendRequest(address);
//     res.send(ans2);
   
// });
app.use(apiRoute);


app.listen(3000, function () {
    console.log("Server started on :http://localhost:3000");
});


