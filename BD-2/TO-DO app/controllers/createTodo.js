// to make the todo we should import the Todo model to know the schema
const Todo = require("../models/Todo");

//define the route handlers
// main thread block na ho isliye async and await karo
exports.createTodo = async (request, res) => {
  try {
    //extract data from request body
    const { title, description } = request.body;
    //create a new todo object and insert it into the database
    const response = await Todo.create({ title, description });
    console.log(response);
    //send a json response with the created todo object with the success flag
    res.status(200).json(
        { 
            success: true,
            data: response,
            message: "entry created successfully"
        }
    );
  }
   catch (error) {
    console.error(error);
    console.log("issue in creating todo");
    res.status(500).json(
        {
            success: false,
            message: "Issue in creating todo"
      
  })
}}

