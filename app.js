const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const activityController = require('./controllers/activities.js');


const app = express();

// require in models
const Activity = require('./models/activity');
const User = require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/statdb');

//endpoints
//GET /api/activities
app.get('/api/activities', activityController.list);

//POST /api/activities make a activity
app.post('/api/activities', activityController.create);

//GET /api/activites/:id
app.get('/api/activities/:id', activityController.findActivity);

//PUT /api/activities/:id
app.put('/api/activities/:id', activityController.updateActivity);

//DELETE /api/activities/:id
app.delete('/api/activities/:id', activityController.delete);

//POST /api/activities/:id/stats
app.post('/api/activities/:id/stats', activityController.updateStats);

//DELETE /api/activities/stats
// https://stackoverflow.com/questions/15641492/mongodb-remove-object-from-array
app.delete('/api/activities/:id/stats', activityController.deleteStats);



app.listen(3000);
