import { v4 } from 'node-uuid';
import * as t from '../constants';

export const addTodo = (text, id = v4()) => ({
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

export const clearComplete = () => ({
  type: t.CLEAR_COMPLETE
});
