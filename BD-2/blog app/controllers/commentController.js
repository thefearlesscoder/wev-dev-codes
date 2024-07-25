//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//bussiness logic
exports.createComment = async (req, res) =>{
    try{  // way 2 of adding the data to DB using save function , first create the object then use save() 
        //on it
        //fetch data from request bosy
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save()
    }
    catch(error){

    }
}