var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');
var cors = require('cors');


//Init App
var app = express();


var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption));
//ssl
/*var options = {
   key  : fs.readFileSync('CoEKey'),
   cert : fs.readFileSync('CoECert'),
   passphrase: 'CoEnter11'
};*/


//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get('/',function(req,res){

  res.send("HI");

});

