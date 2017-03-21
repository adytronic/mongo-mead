const mongoose = require('mongoose');
//const models = require('../models/models');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
    // mongoose: mongoose // same thing
}