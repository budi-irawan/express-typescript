require("dotenv").config();

const { Sequelize } = require('sequelize');

const koneksi = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  pool: {
    max: 1000,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  },
  timezone: '+07:00'
});

module.exports = { koneksi }

// module.exports = {
//   "development": {
//     "username": process.env.DB_USER,
//     "password": process.env.DB_PASSWORD,
//     "database": process.env.DB_NAME,
//     "host": process.env.DB_HOST,
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }
