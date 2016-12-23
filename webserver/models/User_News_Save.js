
var mongoose = require('mongoose')
var Schema = mongoose.Schema,
            ObjectId = Schema.ObjectId;

 var userSchema=new Schema({
  username:String,
  author:String,
  title:String,
  description:String,
  url:String,
  urlToImage:String,
  publishedAt:String,
  comment:String
});

var news=mongoose.model('news',userSchema);
 module.exports=news;
