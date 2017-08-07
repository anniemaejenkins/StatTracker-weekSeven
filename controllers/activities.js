
const Activity = require('../models/activity');

module.exports = {
  list: function(req, res) {
    Activity.find({}).then(results => {
      // console.log('results', activities);
        res.json(results);
    });
  },
  create: function(req, res) {
    let newActivity = new Activity(req.body);
    newActivity.save().then(results => {
      res.json(results);
    });
  },
  findActivity: function(req, res) {
    let id = req.params.id;
    Activity.findById(id).then(results => {
      res.json(results);
      // console.log(results);
    });
  },
  updateActivity: function(req, res) {
    let id = req.params.id;
    Activity.findById(id).then(results => {
      results.activity = req.body.activity || results.activity;
      results.date = req.body.stats.date || results.date;
      results.attempts = req.body.stats.attempts || results.attempts;
      results.save();
      // console.log("update",results);
      res.json(results);
    });
  },
  delete: function(req, res) {
    let id = req.params.id;
    Activity.findOneAndRemove(id).then(results => {
      results.save();
      res.json(results);
    });
  },
  updateStats: function(req, res) {
    let id = req.params.id;
    Activity.findById(id).then(results => {
      results.date = req.body.date;
      results.attempts = req.body.attempts;
      results.save();
      res.json(results);
    });
  },
  // https://stackoverflow.com/questions/15641492/mongodb-remove-object-from-array
  deleteStats: function(req, res) {
    let id = req.params.id;
    let statId = req.params.statId;
    Activity.update(
      {'_id': id},
      { $pull: { "stats" : { id: statId} } }
    ).then(results => {
      res.json(results);
    });

  }
};
