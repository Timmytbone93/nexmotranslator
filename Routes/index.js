var express = require('express');
var router = express.Router();



router.post('/translate', function (req, res) {
    
    const params = Object.assign(req.query, reqbody)
    console.log(params)
    res.status(204).send()
});



module.exports = router;
