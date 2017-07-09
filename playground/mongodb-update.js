//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connect to MongoDb server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('596186943619da16c85cb7bf')
  }, {
    $set: {
      name: 'Tuan Anh',
      age: '26'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
