const createServer = require('./server');
const { PORT } = require('./config');
const pool = require('./utils/database');

function startServer() {
    const app = createServer();
    return app.listen(PORT, () => {
        try {
            console.info(`Server is listening on port ${PORT}`);
            pool.connect((error) => {
                if (error) throw error;
                console.log('Connect');
            });
        } catch (err) {
            console.error("Cannot Start Server", err);
            process.exit(1);
        }
    });
}

startServer();