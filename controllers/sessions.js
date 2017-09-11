module.exports.new = function(request, response, next, passport) {

  console.log(request.body); //shows you values you pass to the form
  passport.authenticate('local-login', { 
      successRedirect: '/',
      failureRedirect: '/login', 
      failureFlash: true 
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
