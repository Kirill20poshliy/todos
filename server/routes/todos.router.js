const Router = require('express')
const router = new Router()
const todosController = require('../controllers/todos.controller')

router.post('/todos', todosController.createTodo)
router.get('/todos', todosController.getTodos)
router.get('/todos/:id', todosController.getTodo)
router.put('/todos', todosController.updateTodo)
router.patch('/todos/:id', todosController.flagTodo)
router.delete('/todos/:id', todosController.deleteTodo)

module.exports = router