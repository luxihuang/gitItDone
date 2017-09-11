const db = require('../db/indexLHTest');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// =================================================
// SAVE a New User 
const createNewUser = function(data, callback) {
    const insertNewUser = [
        data.email, 
        data.password, 
        ];

    const insertSql = 'INSERT INTO users (email, password) VALUES ($1, $2)';

    console.log(insertSql,insertNewUser);

    const password = request.body.password;

	// bcrypt.hash(password, saltRounds, function(err, hash) {
	  db.query(insertSql, insertNewUser, (err, response) => {
	  	callback(err, response);
	  });
	};
// };

module.exports.createNewUser = createNewUser;