const { Router } = require('express');
const moviesRoutes = require('./movies.routes');
const usersRoutes = require('./users.routes');
const authMiddleware = require('../middlewares/authentication');
const jwtUtil = require('../utils/jwt.util');
const { usersServices } = require('../services');

const router = Router();

router.post('/auth/register', async (req, res) => {
    const { id, email, gender, password, role } = req.body;
    try {
        const cekUser = await usersServices.cekUserByEmail(email);
        if (cekUser.rows.length === 1) {
            return res.status(409).json({ error: 'User already exists' });
        }
        await usersServices.createUser({ id: parseInt(id), email, gender, password, role });

        res.status(200).json({ message: "Register Sukses" });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

router.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await usersServices.cekUserByEmail(email);

        if (user.rows[0].email === email && user.rows[0].password === password) {
            const fixEmail = user.rows[0].email;
            const token = jwtUtil.generateToken(fixEmail);

            res.json({ token });
        } else {
            res.status(401).json({ data: user.rows[0], error: 'Authentication failed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Authentication failed' });
    }
});

router.use(authMiddleware);

router.use('/movies', moviesRoutes);
router.use('/users', usersRoutes);

module.exports = router;