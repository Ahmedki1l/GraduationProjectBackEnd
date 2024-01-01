// models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

const User = [
  {
    name:"Ahmed",
    password:"123"
  },
  {
    name:"omar",
    password:"123"
  },
  {
    name:"mohamed",
    password:"123"
  }
]

module.exports = User;
