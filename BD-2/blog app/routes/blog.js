// const express = require("express");
// const router = express.Router();

// //import controllers
// const {dummyLink} = require("../controllers/likeController");

// // create mapping
// router.get("/dummyroute",dummyLink);

// //export
// module.exports = router;

//-------------------------------------------------------------------------------------

// 1. define controller
// 2. import controller in the route file
// 3. create a mapping for that controller
// 4. export the route

//--------------------------------------------------------------------------------------

const express = require("express");
const router = express.Router();

//import controller
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");
const { likePost, unlikePost } = require("../controllers/LikeController");

//mappng controller
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("posts/", getAllPosts);
router.post("likes/like", likePost);
router.post("like/unlike", unlikePost);

//export
module.exports = router;
