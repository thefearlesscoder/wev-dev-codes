const { request } = require("express");
const getTodo = require("../models/Todo"); //import the Todo model to know the schema

//define the route handlers

exports.getTodo = async (req, res) => {
  try {
    //find all todos in the database
    const todos = await getTodo.find({}); //not using findOne because find() returns all documents that match the query
    //send a json response with the todos array with the success flag
    res.status(200).json(
        { success: true, 
            data: todos ,
            message: "todos fetched successfully",
        });
  } catch (error) {
    //if there is an error, send a json response with the error message and the failure flag
    console.error(error);
    res.status(500).json(
        { success: false, message: "Issue in fetching todos" }
    );
  }
};

//based on the id , we will fetch the item
exports.getTodoById = async(req, res)=>{
    try{
        //extract to do item based on id
        const id = req.params.id;
        const todo = await getTodo.findById( {_id: id} );

        //data for give ID not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found with given id"
            })
        }

        //data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data fetched successfully fetched`,
        })
    }
    catch(err){
        
    }

}
