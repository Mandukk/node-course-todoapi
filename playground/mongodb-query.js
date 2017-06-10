const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '593c11d54ea6c52d00e19016';
//
// if (!ObjectID.isValid(id)) {
//   console.log ('Id not valid');
// }
//
// Todo.find({_id: id}).then((todos) => {
//   if (todos === []) {
//     return console.log('Id not found');
//   }
//   console.log('Find', todos);
// });
//
// Todo.findOne({_id: id}).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('findOne', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('findById', todo);
// });
const id = '593c1cf1c0b3c7ad9041a070';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user);
}).catch((e) => {
  console.log(e);
})
