var database = require('../dataAccessLayer/Database');
var heroesDetails = require('../beans/heroesDetails')

var heroesDAL = {};

heroesDAL = function(){
    return database.then(function(con){
        promise = con.query('select * from heroesDetails');
        return promise;
    }).then(function(result){
        if(result.length > 0){
            return result;
        }
        return null;
    })

}

module.exports = heroesDAL;