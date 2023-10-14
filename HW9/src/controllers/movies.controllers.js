const { moviesServices } = require('../services');

async function getMovies(req, res) {
    const page = req.query.page;
    const limit = req.query.limit;
    try {
        const result = await moviesServices.getMovies({ page, limit });
        res.status(200).json({
            message: "Successfully getting movies data",
            data: result.rows,
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getMovieById(req, res) {
    const idParams = parseInt(req.params.id);
    try {
        const result = await moviesServices.getMovieById(idParams);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Movie Not Found" });
        }
        res.status(200).json({
            message: `Successfully getting movie data by id = ${idParams}`,
            data: result.rows
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function addMovie(req, res) {
    const { id, title, genres, year } = req.body;
    try {
        if (!id || !title || !genres || !year) {
            res.status(400).json({ message: "Bad request" });
        } else {
            const result = await moviesServices.addMovie({
                id: parseInt(id), title, genres, year
            });
            res.status(201).json({
                message: "Movie Successfully Added",
                info: result.rows,
                data: { id, title, genres, year }
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function updateMovieById(req, res) {
    const id = parseInt(req.params.id);
    const { title, genres, year } = req.body;
    try {
        const movieBeforeUpdate = await moviesServices.getMovieById(id);
        if (movieBeforeUpdate.rows.length === 0) {
            res.status(404).json({ message: "Movie Not found" });
        }
        else {
            const result = await moviesServices.updateMovieById({
                id, title, genres, year
            });
            res.status(200).json({
                message: "Movie Successfully Updated",
                info: result.rows,
                afterUpdate: { id, title, genres, year },
                beforeUpdate: movieBeforeUpdate.rows[0]
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteMovieById(req, res) {
    const idParams = parseInt(req.params.id);
    try {
        const cekMovie = await moviesServices.getMovieById(idParams);
        if (cekMovie.rows.length === 0) {
            res.status(404).json({ message: "Movie Not found" });
        } else {
            const result = await moviesServices.deleteMovieById(idParams);
            res.status(200).json({
                message: "Movie Successfully Deleted",
                info: result.rows
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovieById,
    deleteMovieById,
};