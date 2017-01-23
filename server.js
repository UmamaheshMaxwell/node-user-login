var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var expressValidator = require("express-validator")
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bodyParser = require("body-parser");
var multer = require("multer");
var flash = require("connect-flash")
var favicon = require("serve-favicon")


var routes = require("./routes/index")
var users = require("./routes/users")
var app = express();


app.use(favicon(__dirname + "/public/images/favicon.ico"))
app.use(logger("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//Handle express sessions
app.use(session({
	secret: "JohnGalt",
	saveUnintialized: true,
	resave: true
}))

//Passport
app.use(passport.initialize());
app.use(passport.session());

// validator 
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use(flash())

app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//handle File uploads
app.use(multer({dest: "./uploads"}).single())


app.use("/", routes);
app.use("/users", users)

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log("Server Listening at PORT "+ PORT)
})