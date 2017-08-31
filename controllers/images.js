const images = require('../models/images');
const imageBlog = require('../models/images')

module.exports.notFound = function(request, response) {
	return response.render('404')
}

// module.exports.new = function(request, response) {
// 	response.render('new') ;
// }



const pagetitle = '#gitItDone'
//This is the controller
//controller goes communicate with model and view


module.exports.get = function(request,response) {	
    imageBlog.get(function(err,data){
        response.render('images',{pagetitle: pagetitle, data: data});
    })
		
}
>>>>>>> inprogress
>>>>>>> fix merge conflict
