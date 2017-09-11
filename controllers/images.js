const images = require('../models/images');
const imageBlog = require('../models/images')

module.exports.notFound = function(request, response) {
	return response.render('404')
}

const pagetitle = '#gitItDone'

module.exports.get = function(request,response) {	
    imageBlog.get(function(err,data){
        response.render('images',{pagetitle: pagetitle, data: data});
    })
		
}
module.exports.getTag =  function (req, res) {
    //console.log(req.params.id)
    //res.send(req.params)
    images.get(function(err,data){
        
        var image = data.filter(function(item){
            return item.id == req.params.id
        })
        res.render('imageDetail', image[0] );
    })
  }