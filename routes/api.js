// const { Router } = require("express");
const express = require("express");
const router=express.Router()



router.get("/", async (req, res) => {
    var address = req.query.address;
    var ans2 = await sendRequest(address);
    res.send(ans2);
   
});

router.get("/api", async (req, res) => {
    var address = req.query.address.split(',');
   
    var ans1 = await sendRequest(address[0]);
      var ans2 = await sendRequest(address[1]);
     var ans3 = await sendRequest(address[2]);
      var ans = {
            "status": "1",
            "message": "OK",
            result:[
            {
                "account": address[0],
                "balance": ans1
            },
            {
                "account": address[1],
                "balance": ans2
            },
            {
                "account": address[2],
                "balance": ans3
            }
        ]
        }
        res.send(ans)
    
})


module.exports=router;