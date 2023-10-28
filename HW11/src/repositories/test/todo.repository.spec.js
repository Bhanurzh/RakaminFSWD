const TodoRepository = require('../todo.repository');
const { Todo } = require('../../models');
const mockResources = require('./mockResources');

describe('TodoRepository', () => {
    describe('TodoRepository.__getTodoList', () => {
        it('should return todo list', async () => {
            // arrange
            const mockInput = mockResources.TodoRepository.getTodoList.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoRepository.getTodoList.POSITIVE_CASE_OUTPUT;
            const paramsFindAll = mockResources.TodoRepository.getTodoList.PARAMS_FIND_ALL;

            Todo.findAll = jest.fn().mockResolvedValue(mockOutput);

            // act
            const result = await TodoRepository.getTodoList(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(Todo.findAll).toHaveBeenCalledTimes(1);
            expect(Todo.findAll).toBeCalledWith(paramsFindAll);
        });
    });

    describe('TodoRepository.__getDetailTodo', () => {
        it('should return detail todo', async () => {
            // arrange
            const mockInput = mockResources.TodoRepository.getDetailTodo.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoRepository.getDetailTodo.POSITIVE_CASE_OUTPUT;

            Todo.findByPk = jest.fn().mockResolvedValue(mockOutput);

            // act
            const result = await TodoRepository.getDetailTodo(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(Todo.findByPk).toHaveBeenCalledTimes(1);
            expect(Todo.findByPk).toBeCalledWith(mockInput);
        });
    });

    describe('TodoRepository.__addTodo', () => {
        it('should return todo created', async () => {
            // arrange
            const mockInput = mockResources.TodoRepository.addTodo.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoRepository.addTodo.POSITIVE_CASE_OUTPUT;

            Todo.create = jest.fn().mockResolvedValue(mockOutput);

            // act
            const result = await TodoRepository.addTodo(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(Todo.create).toHaveBeenCalledTimes(1);
            expect(Todo.create).toBeCalledWith(mockInput);
        });
    });

    describe('TodoRepository.__deleteTodo', () => {
        it('should return todo deleted', async () => {
            // arrange
            const mockInput = mockResources.TodoRepository.deleteTodo.POSITIVE_CASE_INPUT;
            const mockOutput = mockResources.TodoRepository.deleteTodo.POSITIVE_CASE_OUTPUT;
            const paramsDelete = mockResources.TodoRepository.deleteTodo.PARAMS_DELETE;
            const sampleInput = mockResources.TodoRepository.deleteTodo.SAMPLE_VALUE_VARIABLE;

            Todo.destroy = jest.fn().mockResolvedValue(sampleInput);

            // act
            const result = await TodoRepository.deleteTodo(mockInput);

            // assert
            expect(result).toEqual(mockOutput);
            expect(Todo.destroy).toHaveBeenCalledTimes(1);
            expect(Todo.destroy).toBeCalledWith(paramsDelete);
        });
    });
});