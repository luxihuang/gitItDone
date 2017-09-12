const users = require('../models/users_repo');
const bcrypt = require('bcryptjs');

//logic to render the user-signup.ejs
module.exports.new = function(request, response) {
  response.render('user-signup');
}

module.exports.post = function(request, response, next) {
    // save the new user
    const userInput = {
      email: request.body.email,
      password: request.body.password
    }

    users.create(userInput, (err) => {
      if (err) {
      console.log(userInput); //shows you values you pass to the form
        return response.render('user-signup', {
          errors: [{msg: err.message}] 
        });
      }
     // redirect to the index page which has all the images if successful
     response.redirect('/');
    });
}