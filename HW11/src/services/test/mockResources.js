const mockResources = {
    TodoService: {
        getTodoList: {
            POSITIVE_CASE_INPUT: {
                page: 1,
                perPage: 10
            },
            POSITIVE_CASE_OUTPUT: [
                {
                    id: 1,
                    title: 'Todo 1',
                    deskripsi: 'HW MSIB',
                    status: 'Selesai',
                }
            ]
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
        // updateTodo: {
        //     POSITIVE_CASE_INPUT: {
        //         id: 1,
        //         title: 'Todo 1',
        //         deskripsi: 'HW MSIB',
        //         status: 'Selesai',
        //     },
        //     POSITIVE_CASE_OUTPUT: {
        //         data: "Data berhasil diupdate"
        //     }
        // },
        deleteTodo: {
            POSITIVE_CASE_INPUT: {
                id: 1,
            },
            POSITIVE_CASE_OUTPUT: {
                data: "Data berhasil di soft delete"
            }
        }
    }
};

module.exports = mockResources;