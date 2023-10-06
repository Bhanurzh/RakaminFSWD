const fs = require('fs');
const pool = require('./database');

const seedQuery = fs.readFileSync('src/utils/seeding.sql', { encoding: 'utf-8' });
pool.query(seedQuery, (error, result) => {
    if (error) {
        throw error;
    }
    console.log('Seeding Complete');
    pool.end();
});