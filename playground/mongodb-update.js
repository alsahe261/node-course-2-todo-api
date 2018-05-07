const config = require('../config.json');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(config.connectionString, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }
  console.log('Connect to MondoDB server');

  /*db.collection("Todos").findOneAndUpdate({
    _id: new ObjectID("5aef9d01af6af39a788d0948")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: true
  }).then((results) => {
    console.log(results);
  });*/

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5aefb273af6af39a788d0b22")
  }, {
    $set: {
      name: 'Alexander'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: true
  }).then((results) => {
    console.log(results);
  });

  db.close();
});
