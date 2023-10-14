const pool = require('../utils/database/configdb');

function getUsers(params) {
    return new Promise((resolve, reject) => {
        const page = params.page || 1;
        const limit = params.limit || 10;
        pool.query(
            `SELECT * FROM users OFFSET ${(page - 1) * limit} LIMIT ${limit}`,
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function getUserById(idParams) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM users WHERE id = $1`,
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

function updateUserById(params) {
    return new Promise((resolve, reject) => {
        const { idParams, email, gender, password, role } = params;
        pool.query(
            `UPDATE users SET
            email = $1, gender = $2, password = $3, role = $4
            WHERE id = $5`,
            [email, gender, password, role, idParams],
            (error, result) => {
                if (error) {
                    console.error("Error while updating users:", error);
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function deleteUserById(idParams) {
    return new Promise((resolve, reject) => {
        pool.query(
            `DELETE FROM users WHERE id = $1`,
            [idParams],
            (error, result) => {
                if (error) {
                    console.error("Error while deleting users:", error);
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function cekUserByEmail(email) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM users WHERE email = $1`, [email],
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function createUser(params) {
    return new Promise((resolve, reject) => {
        const { id, email, gender, password, role } = params;
        pool.query(
            `INSERT INTO users (id, email, gender, password, role) VALUES
            ($1, $2, $3, $4, $5)`, [id, email, gender, password, role],
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
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    cekUserByEmail,
    createUser
};