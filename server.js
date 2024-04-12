const express = require("express");
const cors = require("cors");
const app = express();
//
require("dotenv").config();
const PORT = process.env.PORT || 6001;
const URI = process.env.URI || "mongodb://localhost:27017/fake";
const TEMP=process.env.TEST || "Failed";
// database mongodb - attempting to get it done online

const mongoose = require("mongoose");
mongoose.connect(URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// If the connection throws an error

app.use("/api", require("./routes/foo"));

app.use("*", (req, res) => {
  res.status(200).json("Please use /api backend");
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
  console.log(`the dotenv is ${TEMP}`);
});
