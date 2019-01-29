var express = require('express');
var route = express.Router();
var heoresDAL = require('./dataAccessLayer/heroesDetailsDAL');
var usersDAL = require('./dataAccessLayer/userDetailsDAL');


route.get('/heroes',function(req,res,next){

    heoresDAL().then(function(details){
        res.json(details);
    }).catch(function(err){
        next(err);
    })
})

 route.post('/addHeroes',function(req,res,next){
     heoresDAL.addHero(req.body.heroId, req.body.heroName, req.body.universe, req.body.specialPower,req.body.description)
     .then((result)=>{
        //  console.log("result ",result)
         res.json({ "Message": "Data added successfully "});
     }).catch((err)=>{
         next(err);
     })
    //  res.end();
    //  res.status().end()
 })

route.post('/users', function(req,res,next){
    usersDAL.signup(req.body.firstName,req.body.lastName, req.body.email, req.body.username, req.body.password)
    .then((result) => {
        console.log("result ",result)
        res.json({"Message" : "User Details Added Successfully"})
    }).catch((error)=>{
        next(error);
    })
 })


module.exports = route;
