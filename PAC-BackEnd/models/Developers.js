const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  developerId: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  coverImage: { type: String, required: true },
  name: { type: String, required: true },
  noOfProjects: { type: Number, required: true },
  age: { type: Number, required: true },
}, { collection: 'Developers' });

const Developer = mongoose.model('Developer', developerSchema);

module.exports = Developer;
