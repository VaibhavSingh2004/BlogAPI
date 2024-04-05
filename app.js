import express from "express";
import mongoose from "mongoose"

const app = express();

// Replace <username> and <password> with your actual MongoDB Atlas username and password

// Replace <admin1234> with your actual MongoDB Atlas password
const connectionString = "mongodb+srv://admin:admin1234@cluster0.5chfgxd.mongodb.net/BlogData?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(connectionString)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});
