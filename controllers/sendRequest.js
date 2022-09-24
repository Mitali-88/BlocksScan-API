const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");


async function getBalance(address) {
    try {
    let config = {
        method: "get",
        url: `https://xdc.blocksscan.io/api/accounts/${address}`,
    };
    let data =await axios(config);
    return value=data.data.balance
    } 
    catch (error) {
        console.log(error);
        return error;
    };
};

async function getTxList(address) {
    try {
    let config = {
        method: "get",
        url: `https://xdc.blocksscan.io/api/txs/listByAccount/${address}`,
    };
  let data= ( await axios(config));
  console.log(data);
   
    }
    catch (error) {
        console.log(error);
        return error;
    };
};
module.exports={getBalance}; 
module.exports={getTxList}; 