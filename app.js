import express, { json } from "express";
import mongoose from "mongoose"
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
const app = express();
app.use(json())
app.use("/api/user",router)
app.use("/api/blog",blogRouter)

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
