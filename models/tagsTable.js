const Sequelize = require('sequelize');
const sequelize = require('../db');

const Tags = sequelize.define('tags', {
    tag: Sequelize.STRING(150)
}, {
    classMethods: { //tags are only related to images, but an image has many tags and tags apply to multiple images
        associate: function(models) {
            Tags.hasMany(models.images);
            // Tags.hasMany(models.comments);
            Tags.belongsToMany(models.images, {
            //     through: {
            //         model: models.user_tags,
            //         unique: false
            //     }
            // })
        }
    }
});

Tags.sync();

module.exports = Tags;