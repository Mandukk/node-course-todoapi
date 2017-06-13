const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({_id: '5940117b4b5fc90a1467b12d'}).then(res => {
//   console.log(res);
// });

Todo.findByIdAndRemove('594011d24b5fc90a1467b148').then(res => {
  console.log(res);
})
