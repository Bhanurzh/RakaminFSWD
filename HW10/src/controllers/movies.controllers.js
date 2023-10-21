const { moviesServices } = require('../services');

async function getMovies(req, res, next) {
    try {
        const result = await moviesServices.getMovies(req.query);
        res.render('movies', {
            title: 'Data Movie',
            layout: 'layouts/main-layouts',
            result
        });
        // res.json({
        //     status: 'Success',
        //     data: result
        // });
    } catch (err) {
        next(err);
    }
}

async function getMovieById(req, res, next) {
    try {
        const id = req.params.id;
        const result = await moviesServices.getMovieById(id);
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function addMovie(req, res, next) {
    try {
        const { title, genres, year } = req.body;
        const photo = req.file.filename;
        const result = await moviesServices.addMovie({ title, genres, year, photo });
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function updateMovie(req, res, next) {
    try {
        const id = req.params.id;
        const { title, genres, year } = req.body;
        let photo = null;

        if (req.file) {
            photo = req.file.filename;
        } else {
            const existingMovie = await moviesServices.getMovieById(id);
            if (existingMovie) {
                photo = existingMovie.photo;
            }
        }

        const result = await moviesServices.updateMovie(id, { title, genres, year, photo });
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function deleteMovie(req, res, next) {
    try {
        const id = req.params.id;

        const result = await moviesServices.deleteMovie(id);
        res.json({
            status: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
};