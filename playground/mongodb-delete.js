//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connect to MongoDb server');

  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectId('5960ee1911260f12cc7b0806')
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
