var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
      res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

// Save new something

/*var newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
});*/

/*var otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
});*/

/*var otherTodo = new Todo({
  text: '   Edit the video2  ',
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
  mongoose.disconnect();
}, (e) => {
    console.log('Unable to save todo',e);
});

var user1 = new User({
  email: "alsahe26@hotmail.com"
});

user1.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
  mongoose.disconnect();
}, (e) => {
    console.log('Unable to save todo',e);
}); */
