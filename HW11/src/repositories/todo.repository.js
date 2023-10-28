const { Todo } = require('../models');

async function getTodoList({ page, limit }) {
    const offset = (page - 1) * limit;
    return Todo.findAll({
        attributes: ["id", "title", "deskripsi", "status"],
        limit,
        offset
    });
}

async function getDetailTodo(id) {
    return Todo.findByPk(id);
}

async function addTodo({ title, deskripsi, status }) {
    return Todo.create({
        title,
        deskripsi,
        status
    });
}

// async function updateTodo(id, { title, deskripsi, status }) {
//     const [rowsUpdated] = await Todo.update(
//         {
//             title,
//             deskripsi,
//             status
//         },
//         {
//             where: {
//                 id
//             },
//             returning: true
//         }
//     );

//     if (rowsUpdated === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

async function deleteTodo(id) {
    const rowsDeleted = await Todo.destroy({
        where: {
            id
        },
    });

    if (rowsDeleted === 1) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getTodoList,
    getDetailTodo,
    addTodo,
    // updateTodo,
    deleteTodo
};