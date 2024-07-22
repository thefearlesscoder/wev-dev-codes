const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000; // port process se aayega,, but nahi aaya toh 4000 use kr lena

//middleware to parse json request bodies... alternate to body parser
app.use(express.json()); //parsing ke liye eligible ho jaunga

// routes ko import krenge for todo API
const todoRoutes = require("./routes/todo");

//mount the todo API routes
app.use("/api/v1", todoRoutes); // hum routes ke sath custom path define kr sakte hain,, like yahan hamne
// /api/v1/ use kr liya
//start server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//connect ro database
const dBConnect = require("./config/database");
dBConnect();

//default route .... mandatory to write
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Homepage!<h1>`);
});
