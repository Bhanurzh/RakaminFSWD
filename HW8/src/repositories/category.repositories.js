const pool = require('../utils/database');

function getCategorys() {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM category ORDER BY category_id`,
            (error, result) => {
                if (error) {
                    reject(err);
                }
                resolve(result);
            }
        );
    });
}

module.exports = {
    getCategorys,
};