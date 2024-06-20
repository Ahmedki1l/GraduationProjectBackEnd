const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("./models/User"); // Adjust the path according to your directory structure

const MONGODB_URI =
  "mongodb+srv://PAC-Ahmed:PAC-01556617918@pac.6qbzqpp.mongodb.net/PAC-MainDatabase?retryWrites=true&w=majority&appName=PAC"; // Ensure you specify the correct database name

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    hashAndInsertUser();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

async function hashAndInsertUser() {
  try {
    const username = "ahmed";
    const password = "123"; // Plain text password

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    // Insert the user with hashed password
    const user = new User({ username, password: hashedPassword });
    await user.save();

    console.log("User inserted successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting user:", error.message);
    mongoose.connection.close();
  }
}
