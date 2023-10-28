const TodoRepository = require('../../repositories/todo.repository');
const mockResources = require('./mockResources');

describe('TodoService', () => {
    describe('TodoService.__getTodoList', () => {
        it('should return todo list', async () => {
            // arrange
            const mockInput = mockResources.TodoService.getTodoList.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoService.getTodoList.POSITIVE_CASE_OUTPUT;

            const todoRepository = TodoRepository;
            todoRepository.getTodoList = jest.fn().mockResolvedValue(mockOutput);

            // act
            const result = await new TodoRepository.getTodoList(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(todoRepository.getTodoList).toHaveBeenCalledTimes(1);
            expect(todoRepository.getTodoList).toBeCalledWith(mockInput);
        });
    });

    describe('TodoService.__getDetailTodo', () => {
        it('should return detail todo', async () => {
            // arrange
            const mockInput = mockResources.TodoService.getDetailTodo.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoService.getDetailTodo.POSITIVE_CASE_OUTPUT;

            const todoRepository = TodoRepository;
            todoRepository.getDetailTodo = jest.fn().mockResolvedValue(mockOutput);

            // act
            const result = await new TodoRepository.getDetailTodo(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(todoRepository.getDetailTodo).toHaveBeenCalledTimes(1);
            expect(todoRepository.getDetailTodo).toBeCalledWith(mockInput);
        });
    });

    describe('TodoService.__addTodo', () => {
        it('should return todo created', async () => {
            // arrange
            const mockInput = mockResources.TodoService.addTodo.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoService.addTodo.POSITIVE_CASE_OUTPUT;

            const todoRepository = TodoRepository;
            todoRepository.addTodo = jest.fn().mockResolvedValue(mockOutput);

            // act
            const result = await new TodoRepository.addTodo(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(todoRepository.addTodo).toHaveBeenCalledTimes(1);
            expect(todoRepository.addTodo).toBeCalledWith(mockInput);
        });
    });

    // describe('TodoService.__updateTodo', () => {
    //     it('should return todo updated', async () => {
    //         // arrange
    //         const mockInput = mockResources.TodoService.updateTodo.POSITIVE_CASE_INPUT;
    //         const mockOutput = mockResources.TodoService.updateTodo.POSITIVE_CASE_OUTPUT;

    //         const todoRepository = TodoRepository;
    //         todoRepository.updateTodo = jest.fn().mockResolvedValue(mockOutput);

    //         // act
    //         const result = await new TodoRepository.updateTodo(mockInput);

    //         // assert
    //         expect(result).toEqual(mockOutput);
    //         expect(todoRepository.updateTodo).toHaveBeenCalledTimes(1);
    //         expect(todoRepository.updateTodo).toBeCalledWith(mockInput);
    //     });
    // });

    describe('TodoService.__deleteTodo', () => {
        it('should return todo soft deleted', async () => {
            // arrange
            const mockInput = mockResources.TodoService.deleteTodo.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoService.deleteTodo.POSITIVE_CASE_OUTPUT;

            const todoRepository = TodoRepository;
            todoRepository.deleteTodo = jest.fn().mockResolvedValue(mockOutput);

            // act
            const result = await new TodoRepository.deleteTodo(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(todoRepository.deleteTodo).toHaveBeenCalledTimes(1);
            expect(todoRepository.deleteTodo).toBeCalledWith(mockInput);
        });
    });
});