const Images = require('./images');
const Users = require('./users');

Images.sync({force: true});
Users.sync();