require('dotenv').config()
const express = require('express')
const pinoHTTP = require('pino-http')
const {sequelize, connectDB} = require('./models/index')
const cors = require('cors')
const logger = require('./logger')
const todosRouter = require('./routes/todos.router')

const app = express()
const PORT = process.env.PORT || 5000

app.use(pinoHTTP({logger}))
app.use(express.json())
app.use(cors())
app.use('/api', todosRouter)

const start = async () => {
    try {
        app.listen(PORT, () => {
            logger.info(`Server started on port ${PORT}`)
        })
        await sequelize.sync()
        await connectDB()
    } catch (e) {
        logger.error(e)
    }
}

start()