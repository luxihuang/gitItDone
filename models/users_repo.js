const Users = require('./users');

//SQL: select * from users; (list of all users)
const getByEmail = function(email, callback){
    Users.findOne({ where: { email: email }}).then(user => {
        callback(null, user);
    }, err => {
        callback(err);
    });
}

const create = function(obj, callback){
    Users.create(obj).then(res => {
        callback(res)
    });
}

module.exports.getByEmail = getByEmail;
module.exports.create = create;