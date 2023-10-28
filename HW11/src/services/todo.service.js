const { todoRepositories } = require('../repositories');

async function getTodoList({ page = 1, limit = 10 }) {
    if (page < 1 || limit < 1) {
        return Promise.reject(new Error('Invalid page and/or limit'));
    }

    const todos = await todoRepositories.getTodoList({
        page: parseInt(page),
        limit
    });
    if (!todos.length) {
        return Promise.reject(new Error('Todos not found'));
    }

    return todos;
}

async function getDetailTodo(id) {
    if (!id) {
        return Promise.reject(new Error('Invalid Id'));
    }

    const todo = await todoRepositories.getDetailTodo(id);
    if (!todo) {
        return Promise.reject(new Error('Todo not found'));
    }

    return todo;
}

async function addTodo({ title, deskripsi, status }) {
    if (!title || !deskripsi || !status) {
        return Promise.reject(new Error('Title or deskripsi or status cannot be empty'));
    }

    const todo = await todoRepositories.addTodo({ title, deskripsi, status });

    return todo;
}

// async function updateTodo(id, { title, deskripsi, status }) {
//     if (!id) {
//         return Promise.reject(new Error('Invalid Id'));
//     }

//     const todo = await todoRepositories.updateTodo(id, { title, deskripsi, status });

//     if (todo) {
//         return 'Data berhasil diupdate';
//     } else {
//         return Promise.reject(new Error('Gagal mengupdate data atau data tidak ditemukan'));
//     }
// }

async function deleteTodo(id) {
    if (!id) {
        return Promise.reject(new Error('Invalid Id'));
    }

    const todo = await todoRepositories.deleteTodo(id);

    if (todo) {
        return 'Data berhasil di soft delete';
    } else {
        return Promise.reject(new Error('Gagal menghapus data atau data tidak ditemukan'));
    }
}

module.exports = {
    getTodoList,
    getDetailTodo,
    addTodo,
    // updateTodo,
    deleteTodo
};