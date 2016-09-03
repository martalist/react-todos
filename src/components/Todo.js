import React, { PropTypes } from 'react';

const Todo = ({children, completed, toggleComplete, handleDelete}) => {
	return (
		<li className="list-group-item" >
      <span>
        <i 
          onClick={toggleComplete}
          className={completed ? 'fa fa-fw fa-2x fa-check-square-o text-success task-check' : 'fa fa-fw fa-2x fa-square-o task-check'}>
        </i>
        <span 
          onClick={toggleComplete}
          className={completed ? 'task-text task-completed text-success' : 'task-text'}>
            {children}
        </span>
      </span>
			<button className="btn btn-danger btn-sm pull-right" onClick={handleDelete}><i className="fa fa-2x fa-times-circle"></i></button>
		</li>
	);
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Todo;
