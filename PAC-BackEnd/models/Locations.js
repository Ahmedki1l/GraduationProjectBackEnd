const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  locationId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  tax: { type: String, required: true },
  size: { type: String, required: true },
}, { collection: 'Locations' });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
