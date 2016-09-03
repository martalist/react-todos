import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, handleDelete }) => {
  return (
    <ul className="list-group">
      {todos.map(todo => 
        <Todo 
          key={todo.id}
          completed={todo.completed}
          toggleComplete={() => toggleComplete(todo.id)}
          handleDelete={() => handleDelete(todo.id)}>
            {todo.task}
        </Todo>
      )}
    </ul>
  );
};

export default TodoList;
