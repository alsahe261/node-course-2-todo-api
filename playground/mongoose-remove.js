const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '5afa15b2d54bb74cfd4a1454'}).then((todo) => {
  console.log(todo);
});

/*Todo.findByIdAndRemove('5afa15b2d54bb74cfd4a1454').then((todo) => {
  console.log(todo);
});*/
