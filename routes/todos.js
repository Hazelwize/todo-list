const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')

router.get('/', todoController.getTodo)
router.post('/createTodo', todoController.createTodo)
router.delete('/deleteTodo', todoController.deleteTodo)
router.put('/markComplete',todoController.markCompleted)


module.exports = router

