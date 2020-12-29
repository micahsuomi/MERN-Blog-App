require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Router = require("./server/routes/routes");
const path = require('path'); 

//use bodyparser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

//user corse
app.use(cors());

// parse application/json
const PORT = process.env.PORT || 5000;
mongoose.connect(
  process.env.mongoDBurl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err);
    console.log("the server is connected with MongoDB");
  }
);

//app.use(express.static(path.join(__dirname, './client/build')))
//serve static assets if we are in production
/*
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
*/
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
