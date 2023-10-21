const { Router } = require("express");
const { moviesControllers } = require('../controllers');
const { validator, multerMiddleware } = require('../middlewares');

const router = Router();
const { validate, requirements } = validator;

router
    .route('/')
    .get([validate(requirements.getMovies)], moviesControllers.getMovies);

router
    .route('/:id')
    .get([validate(requirements.getMovieById)], moviesControllers.getMovieById);

router
    .route('/')
    .post(multerMiddleware, [validate(requirements.createMovie)], moviesControllers.addMovie);

router
    .route('/:id')
    .put(multerMiddleware, [validate(requirements.updateMovie)], moviesControllers.updateMovie);

router
    .route('/:id')
    .delete([validate(requirements.deleteMovie)], moviesControllers.deleteMovie);

module.exports = router;