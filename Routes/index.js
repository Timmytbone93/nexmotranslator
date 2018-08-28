var express = require('express');
var router = express.Router();
const Nexmo = require('nexmo');
const config = require('../config/config');


router.get('/', function (req, res) {
    
    console.log("Hi");
    res.send("Hi");


});



router.get('/translate', function (req, res) {

    //this will simulate the sending of a tanslated sms via nexmo sms api.
    const nexmo = new Nexmo({
        apiKey: config.userData.nexmo_api_key,
        apiSecret: config.userData.nexmo_api_secret,
        msft_key:config.userData.msft_key
      });
    
     res.send("Translate");


      var options = {translateOptions:{"translate":true,"dest_lang":"es"}}
     // console.log(nexmo);
      
      nexmo.message.sendSms(
        "19126420089", '17328535972', 'the cat is red',options,
          (err, responseData) => {
            if (err) {
              //console.log(err);

            } else {
             // console.log(responseData);
         
            }
          }
       );
       
    
  
});



module.exports = router;
