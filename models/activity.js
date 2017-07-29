const mongoose = require('mongoose');

 // activity schema
const activitySchema = new mongoose.Schema({
  // keys and values
  // activity name
  activity: {
    type: String,
    unique: true
  },
  // day activity is done
  stats: {
    date: Date
  },
  // how many times activity is attempted a day
  attempts: Number
});

//compiles schema into a model
//'Recipe' is the name of the model/table and the second is calling in the schema defined
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
