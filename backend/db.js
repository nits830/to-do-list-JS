/*
 * Todo {
    title:string,
    description:string,
    completed: boolean
 }

 
 
 */
//mongoDB url : mongodb://localhost:27017
//.env

 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017')

 const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

 })

 const todo = mongoose.model('todos', todoSchema)


module.exports = {
    todo
}

// if key and value are the same, we can write only todo