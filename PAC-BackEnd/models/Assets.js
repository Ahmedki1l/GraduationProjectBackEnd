const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  assetId: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  noOfBath: { type: Number, required: true },
  noOfBed: { type: Number, required: true },
  locationId: { type: Number, required: true },
  developerId: { type: Number, required: true },
}, { collection: 'Assets' }); // Explicitly set the collection name

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;