const { Router } = require('express');
const todoRoutes = require('./todo.route');

const router = Router();

router.use('/todos', todoRoutes);

module.exports = router;