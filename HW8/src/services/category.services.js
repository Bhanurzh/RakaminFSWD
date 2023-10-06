const { categoryRepositories } = require('../repositories');

async function getCategorys() {
    const response = await categoryRepositories.getCategorys();
    return response;
}

module.exports = {
    getCategorys,
};