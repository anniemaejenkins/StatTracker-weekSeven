const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const path = require('path');

const activityController = require('./controllers/activities.js');



const app = express();

const users = {
  'annie': 'zach'
};

passport.use(new BasicStrategy(
  function(username, password, done) {
    const userPassword = users[username];
    if (!userPassword) { return done(null, false); }
    if (userPassword !== password) { return done(null, false); }
    return done(null, username);
  }
));

// require in models
const Activity = require('./models/activity');
const User = require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/statdb');

//endpoints
//GET /api/activities
app.get('/api/activities', passport.authenticate('basic', {session: false}), activityController.list);

//POST /api/activities make a activity
app.post('/api/activities', passport.authenticate('basic', {session: false}), activityController.create);

//GET /api/activites/:id
app.get('/api/activities/:id', passport.authenticate('basic', {session: false}), activityController.findActivity);

//PUT /api/activities/:id
app.put('/api/activities/:id', passport.authenticate('basic', {session: false}), activityController.updateActivity);

//DELETE /api/activities/:id
app.delete('/api/activities/:id', passport.authenticate('basic', {session: false}), activityController.delete);

//POST /api/activities/:id/stats
app.post('/api/activities/:id/stats', passport.authenticate('basic', {session: false}), activityController.updateStats);

//DELETE /api/activities/stats
app.delete('/api/activities/:id/stats', passport.authenticate('basic', {session: false}), activityController.deleteStats);



app.listen(3000);
