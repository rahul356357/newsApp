
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
            ObjectId = Schema.ObjectId;
 var userSchema=new Schema({
   username:String,
   password:String
 });

var user=mongoose.model('user',userSchema);
 module.exports=user;
