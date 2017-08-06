
const Activity = require('../models/activity');

module.exports = {
  list: function(req, res) {
    Activity.find({}).then(results => {
      // console.log('results', activities);
        res.json(results);
    });
  },
  create: function(req, res) {
    let newActivity = new Activity({activity: req.body.activity});
    newActivity.save().then(results => {
      res.json(results);
    });
  }
};
