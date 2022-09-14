const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// 0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
// app.get("/api",async(req,res)=>{
//     let config={
//         method:"get",
//         url:`https://xdc.blocksscan.io/api/accounts/${req.query.address}`,

//     };
//    const ans1= axios(config)

//     try{
//         const res1 = await app.get('url');
//         let ans={
//             "status":"1",
//             "message":"OK",
//             "result":ans1.balance
//         }

//         res.send(ans);

//     }

//    catch(error){
//     console.log(error);
//    };
// });


async function sendRequest(address) {
    let config = {
        method: "get",
        url: `https://xdc.blocksscan.io/api/accounts/${address}`,
    };
    axios(config)
    
        .then(function (response) {
           let ans = {
                "status": "1",
                "message": "OK",
                "result": response.data.balance
            }
        })
    
        .catch(function (error) {
            console.log(error);
        });

};

app.get("/api", async (req, res) => {
    var address = req.query.address;
    var ans2 = await sendRequest(address);
    
     res.send(ans2);
    // console.log(ans2);
});


app.listen(3000, function () {
    console.log("Server started on :http://localhost:3000");
});

  // app.get("/hello", async (req,res)=>{
// let ans=req.query.name;
// var ans2 = await hello(ans);
// res.send(ans2);
// });
