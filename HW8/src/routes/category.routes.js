const { Router } = require('express');
const { categoryControllers } = require('../controllers');

const router = Router();

router.get('/', (req, res) => {
    categoryControllers.getCategorys(req, res);
});

module.exports = router;