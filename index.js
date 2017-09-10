const express = require('express');
const app = express(); //use Express
//-------------------------------------------------
//This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request.  https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express 	
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false })); //global use of body-parser 
//-------------------------------------------------------
const multer  = require('multer')
//https://www.youtube.com/watch?v=Gv0PJrMDBYc
const aws = require('aws-sdk')
const multerS3 = require('multer-s3') //https://www.npmjs.com/package/multer-s3	
const AWS = require('aws-sdk');
const fs = require('fs');

//-------------------------------------------------------
// const sharp = require('sharp'); //NOT using this. Image processing module that let's you do things like resize, blur, rotate and crop images

//-------------------------------------------------------
const port = process.env.PORT || 8080;

app.use(express.static('public')); //static assets are service under the 'public' folder
app.set('view engine', 'ejs'); //ejs as the rendering engine

const imageController = require('./controllers/images');
// const ceateModifyImagesController = require('./controllers/ceateModifyImages');
const userController = require('./controllers/users');


//========================================================
app.get('/', function(request, response){
    response.render('index') ;
});
app.get('/images', imageController.get)

app.get('/images/:id', function (req, res) {
    //console.log(req.params.id)
    //res.send(req.params)
    res.render('imageDetail',
    {
        id: req.params.id,
        image: "/images/albert.jpeg",
        des:"Loremictumquam iscing massa. ligula in ultricies quam nullam adipiscing massa. ligula in ultricies quam nullam adipiscing massa. ligula in ultricies quam nullam adipiscing massa."

    }) ;
  })
//========================================================
app.get('/images/create', function(request, response){
    response.render('new-image-post') ;
});
app.post('/images/create', function(request, response){
	console.log(request.body);
    response.render('new-image-post') ;
});
//========================================================
//Login.  GET to render the page, POST to post data
app.get('/login', function(request, response){
    response.render('login') ;
});

app.post('/login', function(request, response){
    console.log(request.body); //shows you values you pass to the form
    response.render('login');
});
//========================================================
//SIGNUP.  GET to render the page, POST to post data
app.get('/signup', function(request, response){
	response.render('user-signup') ;
});

app.post('/signup', userController.post);

//========================================================
app.get('*',function(request, response){
    response.render('index') ;
});



//=====use this after we setup controller & models
// app.get('/', imageController.get);
// app.get('/images', imageController.get);
// app.get('/images/create', imageController.new);
// app.post('/images/create', imageController.post);


const server = app.listen(port, () => {
    console.log(`started port ${port}`)
});