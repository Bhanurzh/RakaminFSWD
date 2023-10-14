const { usersRepositories } = require('../repositories');

async function getUsers(params) {
    const { page, limit } = params;
    const response = await usersRepositories.getUsers({ page, limit });
    return response;
}

async function getUserById(idParams) {
    const response = await usersRepositories.getUserById(idParams);
    return response;
}

async function updateUserById(params) {
    const { idParams, email, gender, password, role } = params;
    const response = await usersRepositories.updateUserById({ idParams, email, gender, password, role });
    return response;
}

async function deleteUserById(idParams) {
    const response = await usersRepositories.deleteUserById(idParams);
    return response;
}

async function cekUserByEmail(email) {
    const response = await usersRepositories.cekUserByEmail(email);
    return response;
}

async function createUser(params) {
    const { id, email, gender, password, role } = params;
    const response = await usersRepositories.createUser({ id, email, gender, password, role });
    return response;
}

module.exports = {
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    cekUserByEmail,
    createUser
};