const { sequelize } = require('./index')
const { DataTypes } = require('sequelize')

const todos = sequelize.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
})

// todos.sync()

module.exports = todos
