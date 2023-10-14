const pool = require('../utils/database/configdb');

function getMovies(params) {
    return new Promise((resolve, reject) => {
        const page = params.page || 1;
        const limit = params.limit || 10;
        pool.query(
            `SELECT * FROM movies OFFSET ${(page - 1) * limit} LIMIT ${limit}`,
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function getMovieById(idParams) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM movies WHERE id = $1`,
            [idParams],
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function addMovie(params) {
    return new Promise((resolve, reject) => {
        const { id, title, genres, year } = params;
        pool.query(
            `INSERT INTO movies (id, title, genres, year) VALUES
            ($1, $2, $3, $4)`,
            [id, title, genres, year],
            (error, result) => {
                if (error) {
                    console.error("Error while adding movies:", error);
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function updateMovieById(params) {
    return new Promise((resolve, reject) => {
        const { id, title, genres, year } = params;
        pool.query(
            `UPDATE movies SET
            title = $1, genres = $2, year = $3
            WHERE id = $4`,
            [title, genres, year, id],
            (error, result) => {
                if (error) {
                    console.error("Error while updating movies:", error);
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function deleteMovieById(idParams) {
    return new Promise((resolve, reject) => {
        pool.query(
            `DELETE FROM movies WHERE id = $1`,
            [idParams],
            (error, result) => {
                if (error) {
                    console.error("Error while deleting movies:", error);
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovieById,
    deleteMovieById,
};