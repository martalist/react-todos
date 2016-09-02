import expect from 'expect';
import todos from '../reducers';

const todoList =[
  {
    task: "Test todos",
    completed: true,
    id: 0
  },
  {
    task: "Second test todos",
    completed: false,
    id: 1
  },
  {
    task: "Third test todos",
    completed: false,
    id: 2
  }
];

describe('todos reducer', () => {

  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: "Test todos",
        id: 0
      }).length
    ).toEqual(1);

    expect(
      todos([
        {
          task: "Test todos",
          completed: true,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        text: "Second test todos",
        id: 1
      })
    ).toEqual([
        {
          task: "Test todos",
          completed: true,
          id: 0
        },
        {
          task: "Second test todos",
          completed: false,
          id: 1
        }
    ]);

    expect(
      todos([
        {
          type: 'ADD_TODO',
          text: "Test todos",
          id: 0
        },
        {
          type: 'ADD_TODO',
          text: "Second test todos",
          id: 1
        }
      ], {
        type: 'ADD_TODO',
        text: "Third test todos",
        id: 2
      }).length
    ).toEqual(3);

  });

  it('should handle DELETE_TODO', () => {
    
    expect(
      todos(todoList.slice(0, 1), {
        type: 'DELETE_TODO',
        id: 0
      }).length
    ).toEqual(0);

    expect(
      todos(todoList.slice(0, 2), {
        type: 'DELETE_TODO',
        id: 1
      })
    ).toEqual([
      {
        task: "Test todos",
        completed: true,
        id: 0
      }
    ]);

    expect(
      todos(todoList, {
        type: 'DELETE_TODO',
        id: 1
      })
    ).toEqual([
      {
        task: "Test todos",
        completed: true,
        id: 0
      },
      {
        task: "Third test todos",
        completed: false,
        id: 2
      }
    ]);

  });

  it('should handle TOGGLE_TODO', () => {

    expect(
      todos(todoList.slice(0, 1), {
        type: 'TOGGLE_TODO',
        id: 0
      })
    ).toEqual([
      {
        task: "Test todos",
        completed: false,
        id: 0
      }
    ]);

    expect(
      todos(todoList, {
        type: 'TOGGLE_TODO',
        id: 2
      })
    ).toEqual([
      ...todoList.slice(0, 2),
      {
        task: "Third test todos",
        completed: true,
        id: 2
      }
    ]);

  });

});
