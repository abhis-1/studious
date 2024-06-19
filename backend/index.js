require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

const rootRouter = require("./routes/index.js");

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());


app.use("", rootRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});