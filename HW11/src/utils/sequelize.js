const { Sequelize } = require('sequelize');
const { DB } = require('../config');
const logger = require('./logger');

const sequelize = new Sequelize({
    host: DB.HOST,
    database: DB.DATABASE,
    username: DB.USERNAME,
    password: DB.PASSWORD,
    port: DB.PORT,
    timezone: DB.TIMEZONE,
    dialect: DB.DIALECT,
    logging: DB.IS_LOGGING ? (sql) => logger.debug(sql) : false
});

async function syncTables() {
    const models = require('../models');
    for (const model of Object.values(models)) {
        await model.sync();
    }
}

module.exports = {
    sequelize,
    syncTables
};