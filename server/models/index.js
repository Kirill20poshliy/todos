const dbConfig = require('../db/db')
const { Sequelize } = require('sequelize')
const logger = require('../logger')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
})


const connectDB = async () => {
    try {
        await sequelize.authenticate()
        logger.info('Connection to the database was successful!')
    } catch (e) {
        logger.error(e)
    }
}

module.exports = {sequelize, connectDB}