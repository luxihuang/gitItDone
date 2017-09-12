// const users = require('../models/usersLHTest');

// //logic to render the user-signup.ejs
// module.exports.new = function(request, response) {
//   response.render('user-signup');
// }

// module.exports.post = function(request, response, next) {
//     // save the new user
//   const userInput = {
//     email: request.body.email,
//     password: request.body.password
//   }
  
//   users.createNewUser(userInput, (err) => {
//     if (err) {
//       return response.render('user-signup', {
//         errors: [{msg: err.message}] 
//       });
//     }
//      //  redirect to the index page which has all the images if successful
//  response.redirect('/');
//   });
// }