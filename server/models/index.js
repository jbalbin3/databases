var db = require('../db').mysqlPool;

module.exports = {
  messages: {
    get: function (cb) {
      db.getConnection((err, connection) => {
        if (err) {
          console.error(err);
        } else {
          connection.query({
            sql: 'select messages.text, rooms.roomname, users.username from messages inner join rooms on (rooms.id=messages.room_id) inner join users on (users.id=messages.user_id);'
          }, ((err, results) => {
            connection.release();
            if (err) {
              console.error(err);
            } else {
              cb(results);
            }
          })
          );
        }
      });
    },
    // a function which produces all the messages

    post: function (data, cb) {
      console.log(data);

      db.getConnection((err, connection) => {
        if (err) {
          console.error(err);
        } else {
          connection.query({
            sql: 'INSERT INTO rooms (roomname) SELECT * FROM (SELECT \'' + data.roomname + '\') AS temp WHERE NOT EXISTS (SELECT roomname FROM rooms WHERE roomname=\'' + data.roomname + '\'); INSERT INTO users (username) SELECT * FROM (SELECT \'' + data.username + '\') AS temp WHERE NOT EXISTS (SELECT username FROM users WHERE username=\'' + data.username + '\'); INSERT INTO messages (text, room_id, user_id) values (\'' + data.text + '\', (select id from rooms where roomname=\'' + data.roomname + '\'), (select id from users where username=\'' + data.username + '\'));'
          }, ((err, result) => {
            if (err) {
              console.error(err);
            } else {
              connection.query({
                sql: 'SELECT id FROM messages WHERE text=\'' + data.text + '\';'
              }, ((err, result) => {
                cb(err, result);
              })
              );
            }
          })
          );
        }
      });
    },
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

