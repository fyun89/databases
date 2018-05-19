var models = require('../models');
var app = require('../app')

module.exports = {
  messages: {
    get: function (req, res) {
      //pass the data to model. 
      // console.log(req, '<------------controllers-------------')
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body, 'request body for post =============================');
      models.messages.post(req.body, res).then(function(result) {
        res.status(200).send('hi')
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body).then(function(result) {
        res.status(200).send(result)
      }).catch(function(err) {
        console.log('already taken');
        res.status(406).send(err);
      });
      // console.log(req.body);
     
    }
  }
};

