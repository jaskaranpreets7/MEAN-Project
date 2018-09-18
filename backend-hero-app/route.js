var express = require('express');
var route = express.Router();
var heoresDAL = require('./dataAccessLayer/heroesDetailsDAL');
var heroesDetails = require('./beans/heroesDetails');

route.get('/heroes',function(req,res,next){

    heoresDAL().then(function(details){
        console.log(" hi route")
        res.json(details);
    }).catch(function(err){
        next(err);
    }).catch((err)=>{throw err})
})

module.exports = route;