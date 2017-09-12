const Sequelize = require('sequelize');
const sequelize = require('../db');

const Users = sequelize.define('users', {
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false }
}, {
    timestamps: false,
    classMethods: { // users may create multiple images, may create multiple comments
        associate: function(models) {
            // Images.belongsTo(models.users);
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

module.exports = Users;