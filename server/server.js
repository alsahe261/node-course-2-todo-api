require('./config/config') 

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT;

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

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/12345
app.get('/todos/:id/', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    res.status(404).send();
  }
  else {
    Todo.findById(id).then((todo) => {
      if (!todo) {
        res.status(404).send();
      }
      else {
        res.send({todo});
      }
    }).catch((e) => res.status(400).send());
  }
});

app.delete('/todos/:id', (req, res) => {
  // get the id
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo){
      return res.status(404).send();
    }
    return res.send(todo);
  }).catch((e) => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

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
