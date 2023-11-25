const todos = require('../models/todos.model')

class TodosService {

    async createTodo(body) {
        try {
            const todo = await todos.create({
                name: body.name,
            })
            if (!todo) {
                throw new Error('Не удалось создать задание!')
            }
            return todo
        } catch (e) {
            throw new Error(e)
        }
    }

    async getTodos() {
        try {
            const todoList = await todos.findAll()
            if (!todoList) {
                throw new Error('Не удалось получить список заданий!')
            }
            return todoList
        } catch (e) {
            throw new Error(e)
        }
    }

    async getTodo(id) {
        try {
            const todo = await todos.findByPk(id)
            if (todo === null) {
                throw new Error('Такого задания не существует!')
            }
            return todo
        } catch (e) {
            throw new Error(e)
        }
    }

    async updateTodo(body) {
        try {
            const todo = await todos.update({name: body.name}, {where: {id: body.id}})
            if (!todo) {
                throw new Error('Такого задания не существует!')
            }
            return todo
        } catch (e) {
            throw new Error(e)
        }        
    }

    async flagTodo(id) {
        try {
            const todo = await todos.findByPk(id)
            if (!todo) {
                throw new Error('Такого задания не существует!')
            }
            const flag = todo.isCompleted ? false : true
            todo.set({
                isCompleted: flag
            }) 
            await todo.save()
            return todo
        } catch (e) {
            throw new Error(e)
        }        
    }

    async deleteTodo(id) {
        try {
            const todo = await todos.destroy({where: {id: id}})
            if (!todo) {
                throw new Error('Такого задания не существует!')
            }
            return todo
        } catch (e) {
            throw new Error(e)
        } 
    }

}

module.exports = new TodosService