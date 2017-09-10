// const db = require('../db/indexLHTest');

// // =================================================
// // SAVE a New Image 
// const createNewImage = function(data, callback) {
//     const insertNewImage = [
//         data.image, 
//         data.description,
//         data.createdAt,
//         data.updatedAt, 
//         data.userId
//         ];

//     const insertSql = 'INSERT INTO users (email, password) VALUES ($1, $2)';

//     console.log(insertSql,insertNewImage);

//     db.query(insertSql, insertNewImage, (err, response) => {
//     callback(err, response);
//   })
// }

// module.exports.createNewImage = createNewImage;
