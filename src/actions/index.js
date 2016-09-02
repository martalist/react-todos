import * as t from '../constants';

export const addTodo = (text, id) => ({
  type: t.ADD_TODO,
  text,
  id
});

export const deleteTodo = (id) => ({
  type: t.DELETE_TODO,
  id
});

export const toggleTodo = (id) => ({
  type: t.TOGGLE_TODO,
  id
});
