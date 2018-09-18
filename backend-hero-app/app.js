var express = require("express")
var bodyParser = require("body-parser");
var router= require("./route")
var app = express() // creating an express application

var cors = require('cors');
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
console.log("hi app")
app.use('/',router);

app.listen(3000)

console.log("Server started at port number 3000")