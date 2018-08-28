var express = require('express');
var router = express.Router();
const Nexmo = require('nexmo');


router.get('/', function (req, res) {
    
    console.log("Hi");
    res.send("Hi");


});



router.get('/translate', function (req, res) {

    //this will simulate the sending of a tanslated sms via nexmo sms api.
    const nexmo = new Nexmo({
        apiKey: "d028ff0f",
        apiSecret: "KOmzKrspClqfex03"//,
        //msTranslateKey:"b548c1a406e14522912b451cdead22c4"
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
