const mongoose = require('mongoose');
//const models = require('../models/models');

mongoose.Promise = global.Promise;

var uri = "mongodb://ajm_administrator:test@ds147510.mlab.com:47510/todo_app_mead";
var url = uri || 'mongodb://localhost:27017/TodoApp';

mongoose.connect(url);

module.exports = {
    mongoose
    // mongoose: mongoose // same thing
}