var models = require('../models');
var headers = require('../cors');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((data) => {
        // res.header(headers);
        // res.type('application/json')
        res.json({ results: data });
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, id) => {
        res.send('Message post, however the server needs more work on the query');

      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

