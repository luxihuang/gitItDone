const users = require('../models/images_repo');

//logic to render the new image
module.exports.new = function(request, response) {
  response.render('new-image-post');
}


module.exports.notFound = function(request, response){
    response.render('404');
}

// module.exports.post = function(request, response, next) {
//     // save the new image
//     const imageInput = {
//       image: request.body.image,
//       description: request.body.description
//     }

//     Images.createNewImage(imageInput, (err) => {
//       if (err) {
//       console.log(imageInput); //shows you values you pass to the form
//         return response.render('new-image-post', {
//           errors: [{msg: err.message}] 
//         });
//       }
//      // redirect to the index page which has all the images if successful
//      response.redirect('/');
//     });