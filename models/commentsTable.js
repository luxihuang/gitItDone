const Sequelize = require('sequelize');
const sequelize = require('../db');
const Users = require('./users');
const Images = require('./images');

const Comments = sequelize.define('comments', {
    comment: Sequelize.STRING
}, {
    timestamps: true,
    classMethods: { // comment pertains to a single image, a single user
        associate: function(models) {
            // Comments.hasMany(models.tags);
            // Comments.hasMany(models.comments);
            Comments.hasOne(models.users);
            Comments.belongsTo(models.images, {
                through: {
                    model: models.images_id,
                    unique: false
                }
            })
        }
    }
});

module.exports = Comments;