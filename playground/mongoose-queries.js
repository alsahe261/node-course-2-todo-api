const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

//var id = '&5af92064ba30241906540654';
var id = '5af7c3d6514c321a06007928';

if (!ObjectID.isValid(id)){
  console.log('ID not valid');
  return;
}

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('user by Id', user);
}).catch((e) => console.log(e));

/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});*/

/*Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e) => console.log(e));*/
