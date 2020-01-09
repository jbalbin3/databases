var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var config;
config = {
  mysqlPool: mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'chat'
  })
};
module.exports = config;

// var connection = mysql.createConnection({
//   host: 'localhost' || '127.0.0.1',
//   user: 'root',
//   database: 'chat'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });
// // module.exports.connection;
// // module.exports = {
// //   connection
// // };

// module.exports.connection = connection;