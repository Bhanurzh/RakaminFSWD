const { body, param, query } = require('express-validator');

const requirements = {
    getTodoList: [
        query("page").isInt({ min: 1 }).optional({ nullable: true }),
        query("limit").isInt({ min: 10, max: 50 }).optional({ nullable: true }),
    ],
    getDetailTodo: [
        param("id").isInt({ min: 1 })
    ],
    addTodo: [
        body("title").notEmpty().isString().isLength({ min: 4 }),
        body("deskripsi").notEmpty().isString().isLength({ min: 5 }),
        body("status").notEmpty().isString().isIn(["Belum Selesai", "Dikerjakan", "Selesai"])
    ],
    // updateTodo: [
    //     param("id").isInt({ min: 1 }),
    //     body("title").optional().isString().isLength({ min: 4 }),
    //     body("deskripsi").optional().isString().isLength({ min: 5 }),
    //     body("status").optional().isString().isIn(["Belum Selesai", "Dikerjakan", "Selesai"])
    // ],
    deleteTodo: [
        param("id").isInt({ min: 1 })
    ],
};

module.exports = requirements;