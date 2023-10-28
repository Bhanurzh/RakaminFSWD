const mockResources = {
    TodoRepository: {
        getTodoList: {
            POSITIVE_CASE_INPUT: {
                page: 1,
                limit: 10
            },
            POSITIVE_CASE_OUTPUT: [
                {
                    id: 1,
                    title: 'Todo 1',
                    deskripsi: 'HW MSIB',
                    status: 'Selesai',
                }
            ],
            PARAMS_FIND_ALL: {
                attributes: ['id', 'title', 'deskripsi', 'status'],
                limit: 10,
                offset: 0
            }
        },
        getDetailTodo: {
            POSITIVE_CASE_INPUT: {
                id: 1,
            },
            POSITIVE_CASE_OUTPUT: {
                id: 1,
                title: 'Todo 1',
                deskripsi: 'HW MSIB',
                status: 'Selesai',
                createdAt: "2023-10-27T17:10:15.142Z",
                updatedAt: "2023-10-27T17:10:15.142Z",
                deletedAt: null
            }
        },
        addTodo: {
            POSITIVE_CASE_INPUT: {
                title: 'Todo 1',
                deskripsi: 'HW MSIB',
                status: 'Selesai',
            },
            POSITIVE_CASE_OUTPUT: {
                id: 1,
                title: 'Todo 1',
                deskripsi: 'HW MSIB',
                status: 'Selesai',
                createdAt: "2023-10-27T17:10:15.142Z",
                updatedAt: "2023-10-27T17:10:15.142Z",
                deletedAt: null
            }
        },
        deleteTodo: {
            POSITIVE_CASE_INPUT: {
                id: 1,
            },
            POSITIVE_CASE_OUTPUT: true,
            SAMPLE_VALUE_VARIABLE: 1,
            PARAMS_DELETE: {
                where: {
                    id: {
                        id: 1
                    }
                }
            }
        },
    }
};

module.exports = mockResources;