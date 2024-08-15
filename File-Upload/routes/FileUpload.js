//pehele express ka instance late hain fir router ko add krte hain

const express = require("express");
const router = express.Router();

// fetch all handlers functions--> present in the controller folder
const {
  imageUpload,
  videoUpload,
  imageReducerUpload,
  localFileUpload,
} = require("../controllers/fileUpload");

//api routes
// router.post("/imageupload", imageUpload);
// router.post("/videoupload", videoUpload);
// router.post("/imagereducer", imageReducerUpload);
router.post("/localfileupload", localFileUpload);

module.exports = router;