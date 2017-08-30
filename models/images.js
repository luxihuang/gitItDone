//model handels of data
//https://www.npmjs.com/package/jsonfile
const jsonfile = require('jsonfile');

// =================================================
// GET ALL ARTICLES
const get = function(callback) {
    jsonfile.readFile('./models/images.json', callback);
}

// =================================================

module.exports.get = get