const User = require('../models/users');

module.exports = {
  create: function(req, res) {
    let newUser = new User(req.body);
      newUser.save().then(users => {
        res.json(users);
      });
    }
};
