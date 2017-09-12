const users = require('../models/users_repo');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);

//logic to render the user-signup.ejs
module.exports.new = function(request, response) {
  response.render('user-signup');
}


module.exports.post = function(request, response, next) {
    // save the new user
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash("B4c0/\/", salt, function(err, hash) {
          // Store hash in your password DB.
        const userInput = {
          email: request.body.email,
          password: hash
        }
    users.create(userInput, (err) => {
      if (err) {
        console.log(userInput);
        return response.render('user-signup', {
          errors: [{msg: err.message}] 
        });
      }
      response.redirect('/'); // redirect to the index page which has all the images if successful
    });
  });
});
}





  

