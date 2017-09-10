const Sequelize = require('sequelize');
const sequelize = require('../db');
const Users = require('./users');

const Images = sequelize.define('images', {
    image: { type: Sequelize.STRING, allowNull: false },
    description: Sequelize.STRING(150)
}, {
    timestamps: true,
    classMethods: { //images are made by specific users, have multiple tags, and may have multiple comments
        associate: function(models) {
            console.log('mello')
            Images.belongsTo(models.users);
            // Images.hasMany(models.tags);
            // Images.hasMany(models.comments);
            // Images.belongsToMany(models.users, {
            //     through: {
            //         model: models.user_tags,
            //         unique: false
            //     }
            // })
        }
    }
});

Images.User = Images.belongsTo(Users);

module.exports = Images;