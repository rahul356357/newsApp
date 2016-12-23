var express =require('express');
var router = express.Router();
var user = require('../models/User_Pass_Details.js');
var passport = require('passport');
var mongoose = require ('mongoose');
var LocalStrategy=require ("passport-local").Strategy;
var expressSession = require('express-session');
var flash=require('connect-flash');
/* GET home page. */
router.get('/',function(req,res){
  res.send("in login page")
})
//request send from this function to authenticate LocalStrategy
router.post('/', passport.authenticate('local'), function(req, res) {
console.log('IN post login');
res.json({"login":true});
});


var save=router.route('/save');
save.post(function(req, res) {
  console.log(req.body.username);
  console.log(req.body.password);
  var userprofile= new user({
        username:req.body.username,
        password:req.body.password
    });
 userprofile.save(function(err) {
            if (err) throw err;
            else {
                res.send("OK");
            }
        })
});



//logout route to logou user
var logout=router.route('/logout')
   logout.get(function(req, res) {
   res.send("logout succesfully");
   req.logout();
   res.redirect('/');
});

module.exports = router;
