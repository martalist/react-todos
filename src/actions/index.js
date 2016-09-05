import * as t from '../constants';

let id = 0;
export const addTodo = (text) => ({
  type: t.ADD_TODO,
  text,
  id: id++
});

export const deleteTodo = (id) => ({
  type: t.DELETE_TODO,
  id
});

export const toggleTodo = (id) => ({
  type: t.TOGGLE_TODO,
  id
});

export const clearComplete = () => ({
  type: t.CLEAR_COMPLETE
});
