const { usersServices } = require('../services');

async function getUsers(req, res) {
    const page = req.query.page;
    const limit = req.query.limit;
    try {
        const result = await usersServices.getUsers({ page, limit });
        res.status(200).json({
            message: "Successfully getting users data",
            data: result.rows
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getUserById(req, res) {
    const idParams = parseInt(req.params.id);
    try {
        const result = await usersServices.getUserById(idParams);
        if (result.rows.length === 0) {
            res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            message: `Successfully getting user data by id = ${idParams}`,
            data: result.rows
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function updateUserById(req, res) {
    const idParams = parseInt(req.params.id);
    const { email, gender, password, role } = req.body;
    try {
        const userBeforeUpdate = await usersServices.getUserById(idParams);
        if (userBeforeUpdate.rows.length === 0) {
            res.status(404).json({ error: "User not found" });
        } else {
            const result = await usersServices.updateUserById({
                idParams, email, gender, password, role
            });
            res.status(200).json({
                message: "User Successfully Updated",
                info: result.rows,
                afterUpdate: { idParams, email, gender, password, role },
                beforeUpdate: userBeforeUpdate.rows[0]
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteUserById(req, res) {
    const idParams = parseInt(req.params.id);
    try {
        const cekUser = await usersServices.getUserById(idParams);
        if (cekUser.rows.length === 0) {
            res.status(404).json({ error: "User not found" });
        } else {
            const result = await usersServices.deleteUserById(idParams);
            res.status(200).json({
                message: "User Successfully Deleted",
                info: result.rows
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};