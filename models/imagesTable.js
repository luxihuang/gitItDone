const Sequelize = require('sequelize');
const sequelize = require('../db');

const Images = sequelize.define('images', {
    image: { type: Sequelize.STRING, allowNull: false },
    description: Sequelize.STRING(150)
}, {
    timestamps: true,
    classMethods: { //images are made by specific users, have multiple tags, and may have multiple comments
        associate: function(models) {
            Images.belongsTo(models.usernames);
            Images.hasMany(models.tags);
            Images.hasMany(models.comments);
            // Images.belongsToMany(models.users, {
            //     through: {
            //         model: models.user_tags,
            //         unique: false
            //     }
            // })
        }
    }
});

Images.sync();

Images.create({
    image: 'C:\Users\Kira\Pictures\other\l',
    description: 'lawliet'
}).then(res => {
    console.log('success');
//     callback(null, res); 
// }, err => {
//     callback(err);
});

module.exports = Images;