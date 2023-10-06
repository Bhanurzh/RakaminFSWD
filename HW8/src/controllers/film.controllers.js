const { filmServices } = require('../services');

async function getFilms(req, res) {
    const category = req.query.category;
    try {
        const result = await filmServices.getFilms(category);
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getFilmById(req, res) {
    const id = req.params.id;
    try {
        const result = await filmServices.getFilmById(id);
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getFilms,
    getFilmById,
};