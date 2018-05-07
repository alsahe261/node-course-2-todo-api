// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//const config = require('../config.json');

//console.log(config.username);
//console.log(config.password);

/*var obj = new ObjectID();
console.log(obj);*/

/*var user = {name: 'Alex', age: 25};
var {name} = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }
  console.log('Connect to MondoDB server');

  /*db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
      if (err) {
        return console.log('Unable to insert todo', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
  });*/

  /*db.collection('Users').insertOne({
    name: 'Alexander Salguero',
    age: 35,
    location: 'Cali, Colombia'
  }, (err, result) => {
      if (err) {
        return console.log('Unable to insert todo', err);
      }

      //console.log(JSON.stringify(result.ops, undefined, 2));
      console.log(result.ops[0]._id.getTimestamp());
  });*/

  db.close();
});
