const express = require('express');
const app = express(); //use Express

const port = process.env.PORT || 8080;

app.use(express.static('public')); //static assets are service under the 'public' folder
app.set('view engine', 'ejs'); //ejs as the rendering engine

const imageController = require('./controllers/images');

//=====before setup controller and models
app.get('/', (request, response) => {
    response.render('index') ;
});


app.get('/images/create', (request, response) => {
    response.render('new') ;
});


app.get('*', (request, response) => {
    response.render('404') ;
});


//=====use this after we setup controller & models
// app.get('/', imageController.get);
// app.get('/images', imageController.get);
// app.get('/images/create', imageController.new);
// app.post('/images/create', imageController.post);


const server = app.listen(port, () => {
    console.log(`started port ${port}`)
});