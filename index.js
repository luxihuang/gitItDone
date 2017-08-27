const express = require('express');
const app = express(); //use Express

//
const port = process.env.PORT || 8080;

const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({ extended: false });


const expressValidator = require('express-validator');

app.use(express.static('public')); //static assets are service under the 'public' folder
app.set('view engine', 'ejs'); //ejs as the rendering engine

const imageController = require('./controllers/images');

app.get('/', imageController.get);
app.get('/images', imageController.get);
app.get('/images/create', imageController.new);
app.post('/images/create', imageController.post);


const server = app.listen(port, () => {
    console.log(`started port ${port}`)
});