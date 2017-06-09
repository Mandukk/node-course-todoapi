const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(err);
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new doc into Users collection (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Luiz',
  //   age: 17,
  //   location: 'Vila Velha - ES'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
