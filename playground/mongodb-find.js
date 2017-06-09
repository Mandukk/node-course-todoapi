const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(err);
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Luiz'}).count().then((count) => {
    console.log(`Have ${count} documents with the name Luiz!`);
  }, (err) => {
    console.log(err);
  });

  db.collection('Users').find({name: 'Luiz'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  db.close();
});
