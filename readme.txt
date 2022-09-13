const axios=require("axios");
const express=require("express");
const bodyParser=require("body-parser");
const { response } = require("express");
const app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));


app.get("/api",async(req,res){
    
    let config={
        method:"get",
        url:`https://xdc.blocksscan.io/api/accounts/${req.query.address}`,
    };
    axios(config)
    .then(function(response){
        let ans={
            "status":"1",
            "message":"OK",
            "result":response.data.balance
        }
        res.send(ans);
    })
    
   .catch(function(error){
    console.log(error);
   });
});



app.listen(3000, function () {
    console.log("Server started on :http://localhost:3000");
  });