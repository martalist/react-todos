import expect from 'expect';
import * as actions from '../actions';

describe('todo actions', () => {

  it('addTodo should create an ADD_TODO action', () => {
    expect(actions.addTodo('Eat brussel sprouts')).toEqual({ 
      type: 'ADD_TODO',
      text: 'Eat brussel sprouts',
      id: 0
    });

    expect(actions.addTodo('Eat asparagus')).toEqual({ 
      type: 'ADD_TODO',
      text: 'Eat asparagus',
      id: 1
    });

  });

  it('deleteTodo should create a DELETE_TODO action', () => {
    expect(actions.deleteTodo(1)).toEqual({ 
      type: 'DELETE_TODO',
      id: 1
    });
  });

  it('toggleTodo should create a TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({ 
      type: 'TOGGLE_TODO',
      id: 1
    });
  });

});
