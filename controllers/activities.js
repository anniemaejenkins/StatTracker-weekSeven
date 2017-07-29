
const Activity = require('../models/activity');

module.exports = {
// create
// read
// update
// delete

  list: function(req, res) {
    Activity.find({}).then(results => {
      console.log('results', results);
        res.render('activity/list', {model: results});
    });
  }
};
