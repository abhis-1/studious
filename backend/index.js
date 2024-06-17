require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("./config/dbConnection.js")();

const rootRouter = require("./routes/index.js");

let PORT = 3000;

const app = express();

app.use(cors(
  {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
));
app.use(express.json());


app.use("", rootRouter);

app.listen(PORT, ()=> {
  console.log("server is running on port "+ PORT);
});