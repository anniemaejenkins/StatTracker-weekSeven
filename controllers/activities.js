
const Activity = require('../models/activity');

module.exports = {
// create
// read
// update
// delete

  list: function(req, res) {
    Activity.find({}).then(results => {
      // console.log('results', activities);
        res.json(results);
    });
  },
  create: function(req, res) {
    let newActivity = new Activity({activity: req.body.activity});
    newActivity.save().then(results => {
      console.log('activity', results);
      res.json(results);
    });
  }
};
