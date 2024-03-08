// routes/auth.js
const express = require("express");
const router = express.Router();
const Assets = require("../models/Assets");
const Developers = require("../models/Developers");
const Locations = require("../models/Locations");

router.get("/getAllAssets", async (req, res) => {
  try {
    // Directly use the Assets array
    let assets = Assets;

    // Iterate through each asset and replace developerId with developerName
    for (let i = 0; i < assets.length; i++) {
      const developer = Developers.find(
        (dev) => dev.developerId === assets[i].developerId
      );
      if (developer) {
        assets[i].developer = developer.name;
        delete assets[i].developerId;
      }
    }

    // Iterate through each asset and replace locationId with locationName
    for (let i = 0; i < assets.length; i++) {
      const location = Locations.find(
        (loc) => loc.locationId === assets[i].locationId
      );
      if (location) {
        assets[i].location = location.name;
        delete assets[i].locationId;
      }
    }
    res.status(200).json({ assets });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//mongodb method:
// router.get('/getAllAssets', async (req, res) => {
//   try {
//     const assets = await Asset.find();
//     res.status(200).json({ assets });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.get("/getAllDevelopers", async (req, res) => {
  try {
    res.status(200).json({ Developers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
