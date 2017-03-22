const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todoModel');
var {User} = require('./models/userModel');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port ' + port);
});

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
/*var newUser = new models.User({
    email: 'ajmangas@ajm.com'
});
newUser.save().then((doc) => {
    console.log(doc)
}, (e) => {
    console.log(`Unable to save user. ${e}`);
});*/