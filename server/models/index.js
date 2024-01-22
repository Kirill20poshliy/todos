const dbConfig = require('../db/db')
const { Sequelize } = require('sequelize')
const logger = require('../logger')

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     pool: {
//         min: dbConfig.pool.min,
//         max: dbConfig.pool.max,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle,
//     }
// })

const sequelize = new Sequelize("postgres", "postgres", 'ev6d2dm2', {
    host: "postgres",
    dialect: "postgres",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000,
    }
})

sequelize.sync()

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        logger.info('Connection to the database was successful!')
    } catch (e) {
        logger.error(e)
    }
}

module.exports = {sequelize, connectDB}