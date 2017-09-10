const users = require('../models/users_repo');

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
// review this video for form field validation with express-validator https://www.youtube.com/watch?v=NWGDcv54Q4Q&list=PLpPnRKq7eNW3Qm2OfoJ3Hyvf-36TulLDp&index=2
//==========================

