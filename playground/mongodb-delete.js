const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(err);
  }

  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Luiz'}).then((result) => {
  //   console.log('Deleted!');
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("593ad91f2c580c6b76d52a6b")}).then((result) => {
    console.log(result);
  });

  //db.close();
});
