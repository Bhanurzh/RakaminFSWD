const morganMiddleware = require('./morgan.middleware');
const errorHandler = require('./errorHandler.middleware');
const validator = require('./validator');


module.exports = {
    morganMiddleware,
    errorHandler,
    validator
};