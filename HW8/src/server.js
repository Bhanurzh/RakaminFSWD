const express = require('express');
const { API } = require('./config');
const routes = require('./routes');

function createServer() {
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(`/${API}`, routes);

    return app;
}

module.exports = createServer;