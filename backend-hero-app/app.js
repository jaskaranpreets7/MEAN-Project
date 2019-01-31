var express = require("express")
var bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
var router= require("./route")
var app = express() // creating an express application
var config = require('./conifguration')
var cors = require('cors');
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('/',router);
app.set('Secret', config.secret);
app.use('/',router,function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
    })

app.post('/auth',(req,res)=>{
    if(req.body.username==="admin" && req.body.password === "admin"){
             //if eveything is okey let's create our token 
             const payload = {check:  true};
    
              var token = jwt.sign(payload, app.get('Secret'), {
                    expiresIn: 120 // expires in 2 hours
              });

              res.json({
                message: 'authentication done ',
                token: token
              });
    
                // res.json({message:"please check your password !"})
        
        }else{
            res.json({message:"user not found !"})
        }
    
    })
    
app.listen(3000)

console.log("Server started at port number 3000")