// app crete
const express = require("express");
const app = express();
//find port
const PORT = process.env.PORT || 3000;

//middleware add krna hai
app.use(express.json());

//adding middleware for file upload
//we can also use multer for this purpose
const fileupload = require("express-fileupload");

app.use(fileupload()); //server pe upload krta hai

//connect to db
const db = require("./config/database");
db.connect();

//connect to cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api routes mount krn hia
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);
//ACTIVATE SERVER
app.listen(PORT, () => {
  console.log(`app is running at port${PORT}`);
});
