const axios=require("axios");
const express=require("express");
const bodyParser=require("body-parser");
const { response } = require("express");
const app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));


app.get("/api",async(req,res)=>{
    let config={
        method:"get",
        url:`https://xdc.blocksscan.io/api/accounts/${req.query.address}`,
        data:data
    };

    axios(config)

    try{
        let ans={
            "status":"1",
            "message":"OK",
            "result":data.balance
        }
        const res = await axios.get('url', ans)
        res.send(ans);
    }
    
   catch(error){
    console.log(error);
   };
});



app.listen(3000, function () {
    console.log("Server started on :http://localhost:3000");
  });