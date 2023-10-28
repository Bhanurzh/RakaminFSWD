const express = require('express');
const routes = require('./routes');
const { API } = require('./config');
const { morganMiddleware, errorHandler } = require('./middlewares');

function createServer() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morganMiddleware);
    app.use(`/${API}`, routes);
    app.use(errorHandler);

    return app;
}

module.exports = createServer;