var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      //db.
    }, // a function which produces all the messages
    post: function (body, res) {
      var roomName = body.roomname;
      var message = body.message;
      var name = body.username;
      // var writeMessages = `insert into messages (message, user, room) values ('${message}', 'select id from users where user_name = ${body.username}', 'select id from rooms where room_name = ${body.roomname}')`;
      
      return new Promise (function(resolve, reject) {
        db.con.query(`select id from users where user_name = '${name}'`, function (err, result) {
          if(err) {
            reject(err);
          }

          resolve(result[0].id);
        })
      }).then(function(result) {
        // var result = result;
        console.log(result, 'I hope it is an id from users table!!!!!!!!!!!!!');
        // console.log(message, result, 'values =====================================')
        db.con.query(`insert into messages (message, user) values("${body.message}", '${result}')`, function(err, result) {
          if(err) {
            throw err;
          }
          res.status(201).send('posted');
          // console.log('Is it working????? yes!!!!!');
        })
  
      })
    } // a function which can be used to insert a message into the database
  },
  
  
  users: {
    // Ditto as above.
    get: function (body) {
      
    },
    post: function (body) {
      //body = { username: 'Valjean' }
         
      var username = body.username || null;
      var writeUsername = `insert ignore into users (User_Name) values ('${username}')`;
      
           
      return new Promise(function(resolve, reject) {
        db.con.query(writeUsername, function(err, result) {
          if(err) {
            reject(err);
          }
          console.log('The result from creating new username in DB is ', result);
          resolve(result);
        })
      })
    }
  }
}

