const express = require('express');
const app = express(); //use Express
//-------------------------------------------------
//This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request.  https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express 	
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false })); //global use of body-parser 

//===============================================
const multer  = require('multer')
//https://www.youtube.com/watch?v=Gv0PJrMDBYc
// const aws = require('aws-sdk')
// const multerS3 = require('multer-s3') //https://www.npmjs.com/package/multer-s3	
// const AWS = require('aws-sdk');
const fs = require('fs');

//===============================================
// const bcrypt = require('bcryptjs');

//===============================================
// const sharp = require('sharp'); //NOT using this. Image processing module that let's you do things like resize, blur, rotate and crop images

//===============================================
const port = process.env.PORT || 8080;

app.use(express.static('public')); //static assets are service under the 'public' folder
app.set('view engine', 'ejs'); //ejs as the rendering engine

//==============================================
//Session & Authentication
//http://passportjs.org/docs/username-password
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

//passport init
app.use(passport.initialize());
app.use(passport.session());
//you can authenticate using 3rd party like Facebook, Twitter, single-sign-in.  Local strategy is Passport's strategy for authenticating with a username and password.  https://www.npmjs.com/package/passport-local

//Authenticate user 
//Copy and paste from http://passportjs.org/docs/username-password.  Error cann't get /login
passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

//====================
const session = require('express-session');
// https://www.npmjs.com/package/express-session.  Once you do this, you can go to network --> cookies, and see a cookie being created called connect.sid

//intialize session middleware
app.use(session({
  secret: 'sod42oejk08989x7232#', //similar to salt, signed with a secret for every session
  resave: true,  //updates the session on each page view, this avoids sessions from expiring
  saveUninitialized: false, //create a session everytime user visits the page even if the user isn't logged in.  Set this to false so you aren't using unnecessary storage space / cuts off database traffic for anoymous user.  When setting this to false, when user not logged in, when you go to network --> cookies, we shouldn't see a cookie created by the session.  Only after you are logged in
  // cookie: { secure: true }
}))

//============================================
const imageController = require('./controllers/images');
// const ceateModifyImagesController = require('./controllers/ceateModifyImages');
const userController = require('./controllers/users');
const testUserController = require('./controllers/usersLHTest');
const createNewImageController = require('./controllers/createModifyImages');
const sessionController = require('./controllers/sessions');
// middleware for routes where users should be logged-in
const isAuthenticated = sessionController.isAuthenticated;

app.get('/', function(request, response){
    response.render('index') ;
});


//Images add-new-image-post
app.get('/images/create', function(request, response){
    response.render('new-image-post') ;
});

app.post('/images/create', function(request, response){
	console.log(request.body);
    response.render('new-image-post') ;
});

//Sessions.  GET to render the page, POST to post data
app.get('/login',sessionController.login);
app.get('/logout', sessionController.logout);
app.post('/login', sessionController.new); 

//SIGNUP.  GET to render the page, POST to post data
app.get('/signup', userController.new);
app.post('/signup', userController.post);

//404 Error
app.get('*', createNewImageController.notFound);


const server = app.listen(port, () => {
    console.log(`started port ${port}`)
});