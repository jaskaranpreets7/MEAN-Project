var express = require('express');
var route = express.Router();
var heoresDAL = require('./dataAccessLayer/heroesDetailsDAL');
var heroesDetails = require('./beans/heroesDetails');

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
         console.log("result ",result)
         res.json({ "message": "Data added successfully "});
     }).catch(function(err){
         next(err);
     })
    //  res.end();
    //  res.status().end()

 })

module.exports = route;
