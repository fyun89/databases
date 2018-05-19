var models = require('../models');
var app = require('../app')

module.exports = {
  messages: {
    get: function (req, res) {
      //pass the data to model. 
      // console.log(req, '<------------controllers-------------')
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // models.messages.post(req, res);
      // console.log(req, '<----------------------------')
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.get(req.body);
      // console.log(req.body);
     
    }
  }
};

