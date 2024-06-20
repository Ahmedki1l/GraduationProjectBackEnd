const express = require("express");
const router = express.Router();
const Assets = require("../models/Assets");
const Developers = require("../models/Developers");
const Locations = require("../models/Locations");

router.get("/getAllAssets", async (req, res) => {
  try {
    // Fetch all assets, developers, and locations from the database
    let assets = await Assets.find();
    let developers = await Developers.find();
    let locations = await Locations.find();

    // Create maps for developerId to developer name and locationId to location name
    let developerMap = new Map();
    let locationMap = new Map();

    developers.forEach(dev => {
      developerMap.set(dev.developerId, dev.name);
    });

    locations.forEach(loc => {
      locationMap.set(loc.locationId, loc.name);
    });

    // Replace developerId and locationId with names
    assets = assets.map(asset => {
      let assetObj = asset.toObject();
      assetObj.developer = developerMap.get(asset.developerId);
      assetObj.location = locationMap.get(asset.locationId);
      delete assetObj.developerId;
      delete assetObj.locationId;
      return assetObj;
    });

    res.status(200).json({ assets });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/getAllDevelopers", async (req, res) => {
  try {
    const developers = await Developers.find();
    res.status(200).json({ developers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
