require('dotenv').config()

module.exports = {
    HOST: "postgres",
    USER: "postgres",
    PASSWORD: 'ev6d2dm2',
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };