const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }
  console.log('Connect to MondoDB server');

  // Delete many
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  // Delete one
  /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  // FindOneAndDelete
  /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });*/

  //db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5aefb27faf6af39a788d0b27") }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  db.close();
});
