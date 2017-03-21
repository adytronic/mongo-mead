const mongoose = require('mongoose');
const models = require('../models/models');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


// Todo new objects
/*var newTodo = new models.Todo({
    text: 'Feed Sanson'
});
newTodo.save().then((doc) => {
    console.log(doc)
}, (e) => {
    console.log(`Unable to save todo. ${e}`);
});*/

// User new objects
var newUser = new models.User({
    email: 'ajmangas@ajm.com'
});
newUser.save().then((doc) => {
    console.log(doc)
}, (e) => {
    console.log(`Unable to save user. ${e}`);
});