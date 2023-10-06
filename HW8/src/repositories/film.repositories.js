const pool = require('../utils/database');

function getFilms(category) {
    return new Promise((resolve, reject) => {
        if (!category) {
            pool.query(
                `SELECT * FROM film ORDER BY film_id`,
                (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result);
                }
            );
        }
        pool.query(
            `SELECT * FROM film f 
            INNER JOIN film_category ON f.film_id = film_category.film_id
            INNER JOIN category ON film_category.category_id = category.category_id
            where category.category_id = ${category} ORDER BY film_category.film_id`,
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function getFilmById(id) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM film WHERE film_id = ${id}`,
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

module.exports = {
    getFilms,
    getFilmById,
};