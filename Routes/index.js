var express = require('express');
var router = express.Router();
const Nexmo = require('nexmo');
const config = require('../config');


router.get('/', function (req, res) {
    
    console.log("Hi");
    res.send("Hi");


});



router.get('/translate', function (req, res) {

    //this will simulate the sending of a tanslated sms via nexmo sms api.
    const nexmo = new Nexmo({
        apiKey: config.userData.apiKey,
        apiSecret: config.userData.apiSecret,
        msTranslateKey:config.userData.msTranslateKey
      });
    
     res.send("Translate");
    console.log(nexmo);
      //const translateSend =[{"":""}];

      /*

      nexmo.message.sendSms(
        "19126420089", '17328535972', 'yo',
          (err, responseData) => {
            if (err) {
              console.log(err);

            } else {
              console.dir(responseData);
         
            }
          }
       );
       
    */
  
});



module.exports = router;
