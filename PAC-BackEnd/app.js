const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const dataRoutes = require('./routes/data');
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://PAC-Ahmed:PAC-01556617918@pac.6qbzqpp.mongodb.net/PAC-MainDatabase?retryWrites=true&w=majority&appName=PAC";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.use("/auth", authRoutes);
app.use("/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
