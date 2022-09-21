const express = require("express");

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
module.exports=sendRequest; 