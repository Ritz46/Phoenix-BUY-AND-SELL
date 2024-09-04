const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://parthirache8:ufPeWVX7HabgpyVh@cluster0.eo9svyz.mongodb.net/Phoenix-E-Mart");
    console.log("MongoDB connection established");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}
module.exports = connectDB;