require('dotenv').config();

const config = {
    PORT: parseInt(process.env.PORT) || 3000,
    API: process.env.API || 'api/v1',
    IS_DEVELOPMENT: ['development', 'dev', 'local'].includes(
        process.env.SERVER
    ),
    DB: {
        HOST: process.env.DB_HOST,
        DATABASE: process.env.DB_DATABASE,
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        PORT: parseInt(process.env.DB_PORT, 10) || 5432,
        DIALECT: process.env.DB_DIALECT || 'postgres',
        TIMEZONE: process.env.DB_TIMEZONE || 'Asia/Jakarta',
        IS_LOGGING: process.env.DB_LOG === 'true'
    }
};

module.exports = config;