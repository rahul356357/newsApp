
var express = require('express');
var router = express.Router();
var news = require('../models/User_News_Save.js');
var mongoose = require('mongoose');
router.get('/', isLoggedIn,function(req, res, next) {
  res.send('Hello newspaper');
});
//save news  from SaveComponent
router.post('/saveNews',isLoggedIn, function(req, res) {
  var UserProfile = new news({
    username:'admin',
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    url:req.body.url,
    urlToImage:req.body.urlToImage,
    publishedAt:req.body.publishedAt,
    comment:req.body.comment
  });
  UserProfile.save(function(err) {
    if (err) throw err;
    else {
      res.send("OK");
    }
  })
});

//display news from DisplayComponent
var searchall = router.route("/searchall")
searchall.get(isLoggedIn,function(req, res) {
  //  console.log("inside a route")
  news.find(function(err, articles) {
    if (err) {
    }
    res.send(articles)
  })
});
var searchone = router.route("/searchone")
searchone.post(function(req, res) {
  var name = req.body.id;
  console.log(name)
  news.findById(name, function(err, articles) {
    if (err) {
      console.log("error");
    }
    console.log(articles.author);
    res.send(articles)
  })
});
//update from UserUpdate component
var update = router.route("/update")
update.post(isLoggedIn,function(req, res) {
  console.log("inside a update")
  console.log(req.body.id);
  news.findOne({
    _id: req.body.id
  }, function(err, article) {
    if (err) throw err;
    article.comment = req.body.comment
    article.save(
      function(err) {
        console.log("update succesfully at the server side")
      }
    );
  })
});

// del from userDelete
var deleteNews = router.route  ("/deleteNews")
deleteNews.delete(isLoggedIn,function(req, res) {
  var id= req.body.id;
  console.log(id);
  news.findOne({_id: id
  }, function(err, articles) {
    articles.remove(function(err,res) {
      if (err) throw err;
    })
  })
});

function isLoggedIn (req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  else {
    res.json('not authenticated');
  }
};

module.exports = router;
