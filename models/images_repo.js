// http://docs.sequelizejs.com/manual/tutorial/models-usage.html //SQL to Sequelize
// https://github.com/kodosenshi/express-test-app/blob/mvc-postgres/models/articles.js
// https://github.com/darrenklein/instagram-clone/blob/master/app.js

const Images = require('./images');

const createByUser = function(obj, callback){
    Images.create(obj).then(callback)
}

//SQL: select * from images; (list of all images)
const getAll = function(callback){
    Images.findAll().then(images => {
        callback(null, images);
    }, err => {
        callback(err);
    });
}

//SQL: select * from images where tag = [???]; (list of all images with a certain tag)
const getByTag = function(callback){
    Images.findAll({ where: { tag: [/* ??? */] } }).then(images => {
        callback(null, images);
    }, err => {
        callback(err);
    });
}

//SQL: select * from images where username = [???]; (list of all images by a certain user)
const getByUsername = function(callback){
    Images.findAll({ where: {username: [/* ??? */] } }).then(images => {
        callback(null, images);
    }, err => {
        callback(err);
    });
}

module.exports.getAll = getAll;
module.exports.getByTag = getByTag;
module.exports.getByUsername = getByUsername;
module.exports.createByUser = createByUser;

