const users = require('../models/usersLHTest');

//logic to render the user-signup.ejs
module.exports.new = function(request, response) {
  response.render('user-signup');
}

module.exports.post = function(request, response, next) {
    // save the new user
    users.createNewUser({
      email: request.body.email,
      password: request.body.password
    }, (err) => {
      if (err) {
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

// module.exports.createNewUser = function(request, response, next, passport) {
//   passport.authenticate('local-signup', (err, user) => {
//     if (err) {
//       return response.render('new-user', {error: err});
//     }
//     if (!user) {
//       return response.render('new-user', {error: new Error('Please check email and password')});
//     }
//     response.redirect('/login');
//   })(request, response, next);
// }