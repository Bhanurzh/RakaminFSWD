const { categoryServices } = require('../services');

async function getCategorys(req, res) {
    try {
        const result = await categoryServices.getCategorys();
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getCategorys,
};