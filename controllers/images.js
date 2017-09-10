const images = require('../models/images');
//const imageBlog = require('../models/images')

module.exports.notFound = function(request, response) {
	return response.render('404')
}

const pagetitle = '#gitItDone'

module.exports.get = function(request,response) {	
    images.get(function(err,data){
        response.render('images',{pagetitle: pagetitle, data: data});
    })
		
}
