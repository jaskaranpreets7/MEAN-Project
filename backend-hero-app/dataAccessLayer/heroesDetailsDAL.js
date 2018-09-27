var database = require('../dataAccessLayer/Database');

var details = require('../beans/heroesDetails');

var heroesDAL = {};

heroesDAL = function(){
    return database.then(function(con){
        promise = con.query('SELECT * FROM heroesDetails');
        return promise;
    }).then(function(result){
        if(result.length > 0){
            return result;
        }
        return null;
    })
}

 heroesDAL.addHero = function(heroId, heroName, universe, specialPower, description){
     return database.then(function(con){
         promise = con.query('INSERT INTO heroesDetails(heroId, heroName, universe, specialPower,description) VALUES(?,?,?,?,?)',
         [heroId, heroName, universe, specialPower, description])
         return promise;
     }).then(function(intId){
         if(intId.length > 0){
             return intId
         }else{
             throw new Error('something wrong with the insertion')
         }
     }).catch((err)=>{throw err})
 }

module.exports = heroesDAL;