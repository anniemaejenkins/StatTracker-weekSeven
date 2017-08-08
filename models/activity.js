const mongoose = require('mongoose');

 // activity schema
const activitySchema = new mongoose.Schema({
  activity: {type: String, required: true},
  stats: [{
    date: {type: Date, default: Date.now},
    attempts: {type: Number}
  }]
});

//compiles schema into a model
//'Activity' is the name of the model/table and the second is calling in the schema defined
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
