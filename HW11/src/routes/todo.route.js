const { Router } = require('express');
const { todoController } = require('../controllers');
const { validator } = require('../middlewares');

const router = Router();
const { validate, requirements } = validator;

router
    .route('/')
    .get([validate(requirements.getTodoList)], todoController.getTodoList);

router
    .route('/:id')
    .get([validate(requirements.getDetailTodo)], todoController.getDetailTodo);

router
    .route('/')
    .post([validate(requirements.addTodo)], todoController.addTodo);

// router
//     .route('/:id')
//     .put([validate(requirements.updateTodo)], todoController.updateTodo);

router
    .route('/:id')
    .delete([validate(requirements.deleteTodo)], todoController.deleteTodo);

module.exports = router;