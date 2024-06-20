// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'Users' }); // Explicitly set the collection name

const User = mongoose.model('User', userSchema);

module.exports = User;


// const User = [
//   {
//     name:"ahmed",
//     password:"123"
//   },
//   {
//     name:"ibrahim",
//     password:"123"
//   },
//   {
//     name:"mohamed",
//     password:"123"
//   }
// ]

module.exports = User;
