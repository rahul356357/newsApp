var express = require('express');
var router = express.Router();
var UserPassDetails = require('../models/User_Pass_Details.js');
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('"Hello username and password page"');
});

router.post('/save', function(req, res, next) {
var UserPass=new UserPassDetails({
firstname:req.body.firstname,
lastname:req.body.lastname,
  username:req.body.username,
  password:req.body.password,
email:req.body.email,
cpassword:this.body.cpassword,
mobile:this.body.mobile
});
UserPass.save(function(err) {
        if (err) throw err;
        else {
            res.send('updated succesfully');
        }
    });
});
module.exports = router;
