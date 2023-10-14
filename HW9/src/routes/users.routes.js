const { Router } = require('express');
const { usersControllers } = require('../controllers');

const router = Router();

router.get('/', (req, res) => {
    usersControllers.getUsers(req, res);
});

router.get('/:id', (req, res) => {
    usersControllers.getUserById(req, res);
});

router.put('/:id', (req, res) => {
    usersControllers.updateUserById(req, res);
});

router.delete('/:id', (req, res) => {
    usersControllers.deleteUserById(req, res);
});

module.exports = router;