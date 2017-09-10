const pg = require('pg');
//This links to LH's test table 
//figure out how to test the connection

const client = new pg.Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'instagram_clone',
  password: 'Lalala!87',
});

//access the pg object, pg.query to do something with the table
module.exports.query = (queryString, queryParameters, callback) => {
  client.query(queryString, queryParameters, (err, res) => {
    callback(err, res);
  })
}