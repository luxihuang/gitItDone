const Sequelize = require('sequelize');
const sequelize = require('../db');
const Images = require('./images');

const Tags = sequelize.define('tags', {
    tag: Sequelize.STRING(150)
}, {
    classMethods: { // an image may have many tags, tags may apply to multiple images
        associate: function(models) {
            console.log('sayu')
            Tags.hasMany(models.images);
            // Tags.hasMany(models.comments);
            Tags.belongsToMany(models.images, {
                through: {
                    model: models.image_id,
                    unique: false
                }
            })
        }
    }
});

module.exports = Tags;