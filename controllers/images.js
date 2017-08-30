<<<<<<< 8fd68d9adbf1b93bac7ffc0e4f08e25b1b9ed7af
// const images = require('../models/images');

module.exports.notFound = function(request, response) {
	return response.render('404')
}

// module.exports.new = function(request, response) {
// 	response.render('new') ;
// }
=======
const imageBlog = require('../models/images')

const pagetitle = '#gitItDone'
//This is the controller
//controller goes communicate with model and view


module.exports.get = function(request,response) {	
    imageBlog.get(function(err,data){
        response.render('images',{pagetitle: pagetitle, data: data});
    })
		
}
>>>>>>> inprogress
