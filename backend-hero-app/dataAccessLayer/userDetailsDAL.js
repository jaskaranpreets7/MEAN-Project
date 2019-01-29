var database = require('../dataAccessLayer/Database');
var usersDAL = {};

// usersDAL = function(){
//     return database.then(function(con){
//         promise = con.query('SELECT * FROM usersDetails');
//         return promise;
//     }).then(function(result){
//         if(result.length > 0){
//             return result;
//         }
//         return null;
//     })
// }
usersDAL.signup = function(firstName,lastName, email,username, password){
    return database.then(function(con){
        promise = con.query('INSERT INTO usersDetails(firstName,lastName, email,username, password) VALUES(?,?,?,?,?)',
        [firstName,lastName, email,username, password])
        return promise;
    }).then(function(result){
        if(result.affectedRow == 0){
           throw new Error('something messed up in @userdetails')
        }
        return result;
    }).catch(
        (err)=>{
            throw err
           }
       )
}

module.exports = usersDAL;