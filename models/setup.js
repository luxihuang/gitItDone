const Images = require('./images');
const Users = require('./users');
const Comments = require('./commentsTable');
const Tags = require('./tagsTable');

Images.sync({force: true});
Users.sync();
Comments.sync();
Tags.sync();