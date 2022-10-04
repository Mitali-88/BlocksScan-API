// const { Router } = require("express");
const express = require("express");
const router = express.Router()
const sendRequest = require("../controllers/sendRequest");

function displayResponse(result){
    return({
        "Status":"1",
        "message":"OK",
        "result":result
    })
}
// http://localhost:3000/api?module=account&action=balancemulti&address=xdcd77875dF9C9dE07a5a701F4431743e3A0e9Fe03a,xdcb94249638a3Cd070794a6896F65B954547685F8F,xdcA488B8FdC6df7cAD537e88b66841F67B1cBB315B&tag=latest&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5
router.get("/", async (req, res) => {
    var action = req.query.action;
    switch (action) {
        case "balancemulti":
            
            var address = req.query.address.split(',');

            {
                var ans1 = await sendRequest.getBalance(address);
                // var ans2 = await sendRequest.getBalance(address[1]);
                // var ans3 = await sendRequest.getBalance(address[2]);
                var ans = {
                    "status": "1",
                    "message": "OKK",
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
            break;
    
// http://localhost:3000/api?module=account&action=balance&address=xdcd77875dF9C9dE07a5a701F4431743e3A0e9Fe03a
        case "balance":
        
            {
                var address = req.query.address;
                var ans2 = await sendRequest.getBalance(address);
                var display=displayResponse(ans2)
                res.send(display);
            }
            break;
// http://localhost:3000/api?module=account&action=txlist&address=xdcd77875dF9C9dE07a5a701F4431743e3A0e9Fe03a&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5
        case "txlist":

            {
                var address = req.query.address;
                var list = await sendRequest.getTxList(address);
                var display=displayResponse(list)
                res.send(display);
            }
        break;
//  http://localhost:3000/api?module=account&action=txlistinternal&address=xdc0000000000000000000000000000000000000088&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5

case "txlistinternal":
    {
        var address = req.query.address;
        var internallist = await sendRequest.internalist(address);
        var display=displayResponse(internallist)
        res.send(display);
    }
    break;
// http://localhost:3000/api?module=account&action=txlistinternal&txhash=0x2c72d194fe75a2857c6881d556d9fc42452a30e417f60db3dab07ef931a0ce4b&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5
case "txhash":
    {
        var hash=req.query.txhash;
        var transaction=await sendRequest.getBalance(hash);
        var display=displayResponse(transaction)
        res.send(display);
    }
   
    // http://localhost:3000/api?module=contract&action=getabi&address=xdcd4b5f10d61916bd6e0860144a91ac658de8a1437&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5
    case "getabi":
        {
            var address=req.query.address;
            var abiCode=await sendRequest.getabi(address);
            var display=displayResponse(abiCode)
            res.send(display)
        }
// http://localhost:3000/api?module=contract&action=getsourcecode&address=xdcd4b5f10d61916bd6e0860144a91ac658de8a1437&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5
case "getsourcecode":
        {
            var address=req.query.address;
            var sourceCode=await sendRequest.sourceCode(address);
            var display=displayResponse(sourceCode)
            res.send(display)
        
        }
// http://localhost:3000/api?module=proxy&action=XDC_blockNumber&apikey=VHT25VME49MQTZ42QRSJYCUZHFG7496PW5  
case "XDC_blockNumber":
        {
             var blockNumber=await sendRequest.XDC_block();
             var display=displayResponse(blockNumber);
             res.send(display);

        }
        
}
});

module.exports = router;