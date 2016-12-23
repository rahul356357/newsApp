var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var index = require('./webserver/routes/index');
var app = express();
var compiler = webpack(config);
var newspaper = require('./webserver/routes/newspaper');
var users = require('./webserver/routes/users.js');
var login = require('./webserver/routes/login.js');
var user = require('./webserver/models/User_Pass_Details.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));
var expressSession = require('express-session');
var passport = require('passport');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());


var LocalStrategy = require('passport-local').Strategy;

//Mo ngoose
var db = 'mongodb://localhost/NewsDatabase';
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connnected with mongo");
});
//Ruotes
app.use('/newspaper', newspaper);
app.use('/Register', users);
app.use('/login', login);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}));
app.use(webpackHotMiddleware(compiler));
//Listening to port 8081
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }
    console.log("Server started at 8080");
});

//passport authentication
//app.use('/login',passport)

passport.use(new LocalStrategy(function(username, password, done) {
    user.findOne({
        username: username,
    }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'Incorrect username.'});
        }
        if (!(user.password==password)) {
          console.log(password+"in request");
          console.log(user.password+"in database");
            return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user);
    });
}));
passport.serializeUser(function(user, done) {
  done(null, user._id);
  console.log(user._id);
});

passport.deserializeUser(function(id, done) {
  user.findById(id, function(err, user) {
    done(err, user);
  });
});
