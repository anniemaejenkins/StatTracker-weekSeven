const mongoose = require('mongoose');
// user schema
const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, require: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
