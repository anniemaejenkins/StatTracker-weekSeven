const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');


const app = express();

//endpoints
//GET /api/activities
app.get('api/activities', (req, res) => {
  res.json({});
});
//POST /api/activities make a activity
app.post('api/activities', (req, res) =>{
  res.json(activity);
});
//GET /api/activites/:id
//PUT /api/activities/:id
//DELETE /api/activities/id
//POST /api/activities/:id/stats
//DELETE /api/activities/stats




app.listen(3000);
