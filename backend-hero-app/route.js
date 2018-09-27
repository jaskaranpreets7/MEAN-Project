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
     heoresDAL.addHero(heroesDetails.heroId, heroesDetails.heroName, heroesDetails.universe, heroesDetails.specialPower,heroesDetails.description).then((intId)=>{
         console.log("inserting id: " ,intId)
         res.json(intId);
     }).catch(function(err){
         next(err);
     })

 })

module.exports = route;