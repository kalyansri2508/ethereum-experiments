const express = require('express');
const util = require('util');
const app = express();
app.set('view engine','ejs');
app.use('/public',express.static('./public'));
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
const address = require('./config/address.js');
const SimpleContract = new web3.eth.Contract([
  {
    "constant": true,
    "inputs": [],
    "name": "getName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newName",
        "type": "string"
      }
    ],
    "name": "setName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
],address.contracts[0].address);

app.get('/',(req,res)=>{
  SimpleContract.methods.getName().call().then((result)=>{
  //  res.sendStatus(200);
//  console.log(Boolean(result));
    res.setHeader('Content-Type', 'text/html');
    res.status(200).render('home.ejs',{name:result,result:undefined});
  });
});


const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/setName',urlencodedParser,function(req,res){
  SimpleContract.methods.setName(req.body.name).send({from:address.from}).then((result)=>{
      console.log(result);
      res.render('home.ejs',{result:util.inspect(result),name:undefined});
  });
});

app.listen(3000,()=>{
  console.log('listening on 3000');
});

module.exports= app;
