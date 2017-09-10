const Sequelize = require('sequelize');
const sequelize = require('../db');

const Comments = sequelize.define('comments', {
    comment: Sequelize.STRING
}, {
    timestamps: true,
    classMethods: { //comments pertain to a single image
        associate: function(models) {
            // Comments.hasMany(models.tags);
            // Comments.hasMany(models.comments);
            Comments.belongsTo(models.images, {
                through: {
                    model: models.images_id,
                    unique: false
                }
            })
        }
    }
});

Comments.sync();

Comments.create({
    comment: 'Welcome to the Madness'
}).then(res => {
    console.log('victory');
//     callback(null, res); 
// }, err => {
//     callback(err);
});

module.exports = Comments;