const express = require('express');
const { API, API_DOCS } = require('./config');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./utils/swagger/apidocs.json');
const morgan = require('morgan');

function createServer() {
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(`/${API}`, routes);
    app.use(
        `/${API_DOCS}`,
        swaggerUi.serve,
        swaggerUi.setup(apiDocumentation, {
            explorer: true
        })
    );

    return app;
}

module.exports = createServer;