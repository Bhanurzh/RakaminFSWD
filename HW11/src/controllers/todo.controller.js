const { todoService } = require('../services');

async function getTodoList(req, res, next) {
    try {
        const result = await todoService.getTodoList(req.query);
        res.json({
            message: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function getDetailTodo(req, res, next) {
    try {
        const id = req.params.id;
        const result = await todoService.getDetailTodo(id);
        res.json({
            message: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function addTodo(req, res, next) {
    try {
        const { title, deskripsi, status } = req.body;
        const result = await todoService.addTodo({ title, deskripsi, status });
        res.json({
            message: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

// async function updateTodo(req, res, next) {
//     try {
//         const id = req.params.id;
//         const { title, deskripsi, status } = req.body;
//         const result = await todoService.updateTodo(id, { title, deskripsi, status });
//         res.json({
//             message: 'Success',
//             data: result
//         });
//     } catch (err) {
//         next(err);
//     }
// }

async function deleteTodo(req, res, next) {
    try {
        const id = req.params.id;
        const result = await todoService.deleteTodo(id);
        res.json({
            message: 'Success',
            data: result
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getTodoList,
    getDetailTodo,
    addTodo,
    // updateTodo,
    deleteTodo
};