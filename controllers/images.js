const images = require('../models/images_repo');
//const imageBlog = require('../models/images')

const pagetitle = '#gitItDone'

module.exports.get = function(request,response) {	
    images.get(function(err,data){
        response.render('images',{pagetitle: pagetitle, data: data});
    })
		
}
