const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "movies",
    password: "Bismillah27",
    port: 5432,
});

pool.connect((error) => {
    if (error) throw error;
    console.log('Successfully connect to database');
});

module.exports = pool;