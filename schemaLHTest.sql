CREATE TABLE users (
  id serial NOT NULL PRIMARY KEY,   /*Auto-incrementing integer value which is equivalent to serial4. */
  email VARCHAR(100) NOT NULL, /* length over 100 is usually fake email */
  password VARCHAR(60) NOT NULL, /*for hashing.  No matter how long user's plain password, it will always be stored to 60 */
);

/* Default values define what the default value is https://www.postgresql.org/docs/9.4/static/ddl-default.html */

/*Postgres data types https://www.techonthenet.com/postgresql/datatypes.php */