const { filmRepositories } = require('../repositories');

async function getFilms(category) {
    const response = await filmRepositories.getFilms(category);
    return response;
}

async function getFilmById(id) {
    const response = await filmRepositories.getFilmById(id);
    return response;
}

module.exports = {
    getFilms,
    getFilmById,
};