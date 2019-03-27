var express = require("express")
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var router= require("./route")
var app = express() // creating an express application
var config = require('./conifguration')
var cors = require('cors');
var app = express();

var userDetails = require('./dataAccessLayer/userDetailsDAL')

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('Secret', config.secret);
app.use('/',router,function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
    })

app.post('/auth', (req,res,next) =>{

    var result = userDetails().then(function(users){
            return users;
        }).catch(function(err){
            next(err);
        })

    result.then(function(users){
        
            let matched = {check: false} ;
            usersCheck(users, matched);
            function usersCheck(users,matched){
                for(var i = 0; i < users.length; i++){
                    if(req.body.username === users[i].username && req.body.password === users[i].password){
                        matched.check = true;
                    }
                }
            }
            
            if(matched.check){
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
                res.status(401).json({message:"Not Authorized!"})
            }
        })
    
    })
    
app.listen(3000)

console.log("Server started at port number 3000")