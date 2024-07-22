const express = require('express');
const router = express.Router();

//import controllers
const {createTodo} = require('../controllers/createTodo'); //import the createTodo function from given directory
const {getTodo, getTodoById} = require('../controllers/getTodo'); //import the getTodos function
const {updateTodo} = require('../controllers/updateTodo'); //import the updateTodo function
const {deleteTodo} = require('../controllers/deleteTodo'); //import the deleteTodo function

//define API routes
router.post('/createTodo', createTodo); //path to controller se map kr diya ,,,, yahan createTodo controller hai
router.get('/getTodos', getTodo); //path to controller se map kr diya ,
router.get('/getTodos/:id', getTodoById);
router.put('/updateTodo/:id', updateTodo); //path to controller se map kr diya ,
router.delete('/deleteTodo/:id', deleteTodo);//path to controller se map kr diya ,
module.exports = router; 