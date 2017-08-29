const images = require('../models/images');


module.exports.notFound = function(request, response) {
	return response.render('404')
}


module.exports.new = function(request, response) {
	response.render('new') ;
}