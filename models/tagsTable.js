const Sequelize = require('sequelize');
const sequelize = require('../db');

const Tags = sequelize.define('tags', {
    tag: Sequelize.STRING(150)
}, {
    // classMethods: { //tags are only related to images, but an image has many tags and tags apply to multiple images
    //     associate: function(models) {
    //         Image.hasMany(models.tags);
    //         Image.hasMany(models.comments);
    //         Image.belongsToMany(models.users, {
    //             through: {
    //                 model: models.user_tags,
    //                 unique: false
    //             }
    //         })
    //     }
    // }
});

Tags.sync();

module.exports = Tags;