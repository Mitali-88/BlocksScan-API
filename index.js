const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

async function sendRequest(address) {
    try {
        let config = {
            method: "get",
            url: `https://xdc.blocksscan.io/api/accounts/${address}`
        };
        let data = await axios(config);
        
        return ( ans = {
            "status": "1",
            "message": "OK",
            result:
            {
                "account": address,
                "balance": data.data.balance
            }
        }
        )
    }

    catch (error) {
        console.log(error);
        return error;
    }

}

// api for multiple address in the single call
app.get("/api", async (req, res) => {
    var address = req.query.address.split(',');
    res.write("message:1\n");
    res.write("status:OK\n");

    var ans1 = await sendRequest(address[0]);
    res.write(ans1);
    
      var ans2 = await sendRequest(address[1]);
     res.write(ans2);

    var ans3 = await sendRequest(address[2]);
    res.write(ans3);
    
    
    res.send();

   
   

})
app.listen(3000, function (req, res) {
    console.log("server is running on port :http://localhost:3000")
});