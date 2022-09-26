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

   // app.get("/hello", async (req,res)=>{
// let ans=req.query.name;
// var ans2 = await hello(ans);
// res.send(ans2);
// });

https://api.etherscan.io/api
   ?module=account
   &action=balancemulti
   &address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f67
   &tag=latest
   &apikey=YourApiKeyToken
   address={
    xdcd77875dF9C9dE07a5a701F4431743e3A0e9Fe03a,
    xdcb94249638a3Cd070794a6896F65B954547685F8F,
    xdcA488B8FdC6df7cAD537e88b66841F67B1cBB315B
   }


   // if (req.query.action == "balancemulti")
   // else if (req.query.action == "balance") 
   // else if(req.query.action=="txlist")