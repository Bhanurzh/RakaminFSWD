const { Router } = require('express');
const { moviesControllers } = require('../controllers');

const router = Router();

router.get('/', (req, res) => {
    moviesControllers.getMovies(req, res);
});

router.get('/:id', (req, res) => {
    moviesControllers.getMovieById(req, res);
});

router.post('/', (req, res) => {
    moviesControllers.addMovie(req, res);
});

router.put('/:id', (req, res) => {
    moviesControllers.updateMovieById(req, res);
});

router.delete('/:id', (req, res) => {
    moviesControllers.deleteMovieById(req, res);
});

module.exports = router;