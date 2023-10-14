const createServer = require('./server');
const { PORT } = require('./config');
const pool = require('./utils/database/configdb');

function startServer() {
    const app = createServer();

    return app.listen(PORT, () => {
        try {
            console.info(`Server is listening on port http://localhost:${PORT}`);
        } catch (error) {
            console.error('Cannot Start Server ', error);
            process.exit(1);
        }
    });
}

startServer();