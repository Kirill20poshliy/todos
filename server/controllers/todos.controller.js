const logger = require('../logger')
const todosService = require('../services/todos.service')

class TodosController {

    async createTodo(req, res) {
        try {
            const body = req.body
            const todo = await todosService.createTodo(body)
            if (!todo) {
                throw new Error('Невозможно создать задание!')
            }
            res.status(201).json(todo)
        } catch (e) {
            res.status(400).json(e.message)
            logger.error(e)
        }
    }

    async getTodos(req, res) {
        try {
            const todos = await todosService.getTodos()
            if (!todos) {
                throw new Error('Невозможно получить список заданий!')  
            }
            res.status(200).json(todos)
        } catch (e) {
            res.status(400).json(e.message)
            logger.error(e)
        }
    }

    async getTodo(req, res) {
        try {
            const id = req.params.id
            const todo = await todosService.getTodo(id)
            if (!todo) {
                throw new Error('Невозможно найти задание!')
            }
            res.status(200).json(todo)
        } catch (e) {
            res.status(400).json(e.message)
            logger.error(e)
        }
    }

    async updateTodo(req, res) {
        try {
            const body = req.body
            const todo = await todosService.updateTodo(body)
            if (!todo) {
                throw new Error('Невозможно найти задание!')
            }
            res.status(200).json(todo)
        } catch (e) {
            res.status(400).json(e.message)
            logger.error(e)
        }
    }

    async flagTodo(req, res) {
        try {
            const id = req.params.id
            const todo = await todosService.flagTodo(id)
            if (!todo) {
                throw new Error('Невозможно найти задание!')
            }
            res.status(200).json(todo)
        } catch (e) {
            res.status(400).json(e.message)
            logger.error(e)
        }        
    }

    async deleteTodo(req, res) {
        try {
            const id = req.params.id
            const todo = await todosService.deleteTodo(id)
            if (!todo) {
                throw new Error('Невозможно найти задание!')
            }
            res.status(200).json(todo)
        } catch (e) {
            res.status(400).json(e.message)
            logger.error(e)
        }
    }

}

module.exports = new TodosController()