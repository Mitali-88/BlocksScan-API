const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
// const { response } = require("express");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// 0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae

async function sendRequest(address) {
    try {
    let config = {
        method: "get",
        url: `https://xdc.blocksscan.io/api/accounts/${address}`,
    };
    let data =await axios(config);
    let value=data.data.balance

        let ans = {
            "status": "1",
            "message": "OK",
             "result": value
        }
        return ans;
    }
    catch (error) {
        console.log(error);
        return error;
    };
};

app.get("/api", async (req, res) => {
    var address = req.query.address;
    var ans2 = await sendRequest(address);
    res.send(ans2);
   
});



app.listen(3000, function () {
    console.log("Server started on :http://localhost:3000");
});


