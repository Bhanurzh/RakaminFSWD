const { moviesRepositories } = require('../repositories');

async function getMovies(params) {
    const { page, limit } = params;
    const response = await moviesRepositories.getMovies({ page, limit });
    return response;
}

async function getMovieById(idParams) {
    const response = await moviesRepositories.getMovieById(idParams);
    return response;
}

async function addMovie(params) {
    const { id, title, genres, year } = params;
    const response = await moviesRepositories.addMovie({ id, title, genres, year });
    return response;
}

async function updateMovieById(params) {
    const { id, title, genres, year } = params;
    const response = await moviesRepositories.updateMovieById({ id, title, genres, year });
    return response;
}

async function deleteMovieById(idParams) {
    const response = await moviesRepositories.deleteMovieById(idParams);
    return response;
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovieById,
    deleteMovieById
};