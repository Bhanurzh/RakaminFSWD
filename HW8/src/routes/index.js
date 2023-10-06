const { Router } = require('express');
const filmRoutes = require('./film.routes');
const categoryRoutes = require('./category.routes');

const router = Router();

router.use("/films", filmRoutes);
router.use("/categorys", categoryRoutes);

module.exports = router;