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
app.get('/api/activities', activityController.list );

//POST /api/activities make a activity
app.post('api/activities', activityController.create);


//GET /api/activites/:id
//PUT /api/activities/:id
//DELETE /api/activities/id
//POST /api/activities/:id/stats
//DELETE /api/activities/stats




app.listen(3000);
