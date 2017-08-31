const Sequelize = require('sequelize');
const sequelize = require('../db');

const Comments = sequelize.define('comments', {
    comment: Sequelize.STRING
}, {
    // classMethods: { // comments relate to specific images and are made by specific users
    //     associate: function(models) {
    //         Image.hasMany(models.comments);
    //         Image.belongsToMany(models.users, {
    //             through: {
    //                 model: models.user_tags,
    //                 unique: false
    //             }
    //         })
    //     }
    // }
})

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