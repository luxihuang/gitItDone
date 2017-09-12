//local strategy https://github.com/jaredhanson/passport-local
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);

module.exports.new = function(request, response, next, passport) {
  console.log(request.body); //shows you values you pass to the form
  passport.authenticate('local-login', {  //code copied and pasted from http://passportjs.org/docs/authenticate
      successRedirect: '/',
      failureRedirect: '/login', 
      // failureFlash: true 
  })(request, response, next)
}

module.exports.login = function(request, response) {
  response.render('login');
}

module.exports.logout = function(request, response) {
  request.logout();
  response.redirect('/');
}

// simple middleware for routes that should be authenticated
module.exports.isAuthenticated = function(request, response, next){
  if(request.user) {
    return next();
  } else {
    response.redirect('/login');
  }
}