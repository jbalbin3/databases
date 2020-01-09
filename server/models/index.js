var db = require('../db').mysql_pool;

module.exports = {
  messages: {
    get: function (cb) {
      db.getConnection((err, connection) => {
        if (err) {
          console.error(err);
        } else {
          connection.query({
            sql: 'select messages.text, rooms.roomname, users.username from messages inner join rooms on (rooms.id=messages.room_id) inner join users on (users.id=messages.user_id);'
          }, (err, results) => {
            if (err) {
              console.error(err);
            } else {
              cb(results);
            }
          });
        }
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

