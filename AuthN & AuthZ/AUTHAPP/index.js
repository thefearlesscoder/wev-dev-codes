const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser()); //adding cookie parser middleware -- used in auth

require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//activate server
app.listen(PORT, () => {
    console.log(`app is listeitng at ${PORT}`);
})