const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

let hashedPassword = '$2a$10$8fjxAqtkLOj2vz3fV6oorOfZDOz9spWEybs7mFAUf5rzKaRKFvNkS';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// const data = {
//     id: 10
// };

// const token = jwt.sign(data, '123abc');
// console.log(token);

// const decoded = jwt.verify(token, '123abc');
// console.log('Decoded', decoded);
