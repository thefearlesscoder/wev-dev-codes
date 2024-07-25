//import mongoose
const mongoose = require('mongoose');

//route handler

const likedSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Like", likedSchema);