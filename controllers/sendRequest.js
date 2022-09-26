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
    let Balance=data.data.balance
    return Balance
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
  let txlist=data.data.items;
  return txlist;
    }
    catch (error) {
        console.log(error);
        return error;
    };
};
async function internalist(address) {
    try {
    let config = {
        method: "get",
        url: `https://xdc.blocksscan.io/api/txs/internal/${address}`,
        
    };
  let data= ( await axios(config));
return data.data.items;
    }
    catch (error) {
        console.log(error);
        return error;
    };
};

module.exports={getBalance,getTxList,internalist}; 
// module.exports={getTxList}; 