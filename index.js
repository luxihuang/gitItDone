const express = require('express');
const app = express(); //use Express

//This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request 	
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;

app.use(express.static('public')); //static assets are service under the 'public' folder
app.set('view engine', 'ejs'); //ejs as the rendering engine

const imageController = require('./controllers/images');

//=====before setup controller and models
app.get('/', function(request, response){
    response.render('index') ;
});

app.get('/images/create', function(request, response){
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

app.post('/signup', function(request, response){
	console.log(request.body); //shows you values you pass to the form
    response.render('user-signup') ;
});
//========================================================
app.get('*', imageController.notFound);


//=====use this after we setup controller & models
// app.get('/', imageController.get);
// app.get('/images', imageController.get);
// app.get('/images/create', imageController.new);
// app.post('/images/create', imageController.post);


const server = app.listen(port, () => {
    console.log(`started port ${port}`)
});