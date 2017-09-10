// const users = require('../models/imagesLHTest');

// //logic to render the user-signup.ejs
// module.exports.new = function(request, response) {
//   response.render('new-image-post');
// }

// module.exports.post = function(request, response, next) {
//     // save the new user
//     const imageInput = {
//       image: request.body.image,
//       description: request.body.description
//     }

//     users.createNewImage(imageInput, (err) => {
//       if (err) {
//       console.log(imageInput); //shows you values you pass to the form
//         return response.render('new-image-post', {
//           errors: [{msg: err.message}] 
//         });
//       }
//      // redirect to the index page which has all the images if successful
//      response.redirect('/');
//     });