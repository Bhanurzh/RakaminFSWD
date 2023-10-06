const { Router } = require('express');
const { filmControllers } = require('../controllers');

const router = Router();

router.get("/", (req, res) => {
    filmControllers.getFilms(req, res);
});

router.get('/:id', (req, res) => {
    filmControllers.getFilmById(req, res);
});

module.exports = router;