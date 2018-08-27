var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    
  res.send("Made it here ");

});



router.get('/translate', function (req, res) {
    
    const params = Object.assign(req.query, req.body)
    console.log(params)
    res.status(204).send()
});



module.exports = router;
