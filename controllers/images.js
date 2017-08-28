const images = require('../models/images');


module.exports.notFound = function(request, response) {
	return response.render('404')
}
