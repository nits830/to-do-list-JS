const zod = require('zod');

// Schema for the POST request
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
  });
  
  // Schema for the PUT request
  const updateTodo = zod.object({
    id: zod.string(),
  });
  
  module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
  }

