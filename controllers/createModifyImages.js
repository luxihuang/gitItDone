const images = require('../models/images_repo');

module.exports.notFound = function(request, response) {
	return response.render('404')
}

// module.exports.new = function(request, response) {
// 	response.render('new') ;
// }


// module.exports.get = function(request, response){
//     response.render('new-image-post') ;
// };