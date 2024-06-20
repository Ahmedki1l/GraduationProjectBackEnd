const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User"); // Adjust the path according to your directory structure

const MONGODB_URI =
  "mongodb+srv://PAC-Ahmed:PAC-01556617918@pac.6qbzqpp.mongodb.net/PAC-MainDatabase?retryWrites=true&w=majority&appName=PAC"; // Ensure you specify the correct database name

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    testUser();
    //printAllUsers();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

async function printAllUsers() {
  try {
    // Retrieve all users
    const users = await User.find({});
    console.log("All users in the database:", users);

    // Close the database connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error fetching users:", error.message);
    mongoose.connection.close();
  }
}

async function testUser() {
  try {
    const username = "ahmed"; // The username to test
    const password = "123"; // The password to test

    // Find the user by username
    console.log("Searching for user:", username);
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found");
      return;
    }

    // Log the retrieved user
    console.log("Retrieved user:", user);

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      console.log("Authentication successful");
    } else {
      console.log("Authentication failed");
    }

    // Close the database connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error during authentication:", error.message);
    mongoose.connection.close();
  }
}
