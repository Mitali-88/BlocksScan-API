// const { Router } = require("express");
const express = require("express");
const router = express.Router()
const sendRequest = require("../controllers/sendRequest");




// http://localhost:3000/api?module=account&action=balancemulti&address=xdcd77875dF9C9dE07a5a701F4431743e3A0e9Fe03a
router.get("/", async (req, res) => {
    var address = req.query.address.split(',');
    if (req.query.action == "balancemulti") {
        var ans1 = await sendRequest.getBalance(address[0]);
        var ans2 = await sendRequest.getBalance(address[1]);
        var ans3 = await sendRequest.getBalance(address[2]);

        var ans = {
            "status": "1",
            "message": "OK",
            result: [
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
    }
// http://localhost:3000/api?module=account&action=balancemulti&address=xdcd77875dF9C9dE07a5a701F4431743e3A0e9Fe03a,xdcb94249638a3Cd070794a6896F65B954547685F8F,xdcA488B8FdC6df7cAD537e88b66841F67B1cBB315B&tag=latest&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5
    else if (req.query.action == "balance") {
        var address = req.query.address;
        var ans2 = await sendRequest.getBalance(address);
        var ans = {
            "status": "1",
            "message": "OK",
            "result": ans2
        }
        res.send(ans);
    }
// http://localhost:3000/api?module=account&action=txlist&address=xdcd77875dF9C9dE07a5a701F4431743e3A0e9Fe03a&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5

    else if(req.query.action=="txlist"){
        var address=req.query.address;
        var ans1= await sendRequest.getTxList(address);
        
        var ans={
            "status": "1",
            "message": "OK",
             "result": ans1
        }
        res.send(ans);
    }

});

module.exports = router;