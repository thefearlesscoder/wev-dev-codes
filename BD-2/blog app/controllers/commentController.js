//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//bussiness logic
exports.createComment = async (req, res) => {
  try {
    // way 2 of adding the data to DB using save function , first create the object then use save()
    //on it
    //fetch data from request bosy
    const { post, user, body } = req.body;
    //create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    //save the new comment into the database
    const savedComment = await comment.save();

    //find the post by ID, add the new comment to its coment array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comment: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec(); // populate the comenta array with comments docume

    // post id ko fetch karo aur push operator
    // se update karo... new: true se updated wala documnet aayega ...
    res.json({
        post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
        error: "Error while creating comment",
    });
  }
};
