var express = require("express")
var bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
var router= require("./route")
var app = express() // creating an express application

var cors = require('cors');
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/',router);

app.listen(3000)

console.log("Server started at port number 3000")