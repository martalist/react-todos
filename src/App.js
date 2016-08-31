import React, { Component } from 'react';
import './App.css';

const Todo = ({children, completed, toggleComplete, handleDelete}) => {
	return (
		<li className="list-group-item" >
			<i 
				onClick={toggleComplete}
				className={completed ? 'fa fa-fw fa-2x fa-check-square-o text-success task-check' : 'fa fa-fw fa-2x fa-square-o task-check'}>
			</i>
			<span 
				onClick={toggleComplete}
				className={completed ? 'task-text task-completed text-success' : 'task-text'}>
					{children}
			</span>
			<button className="btn btn-danger btn-sm pull-right" onClick={handleDelete}><i className="fa fa-2x fa-times-circle"></i></button>
		</li>
	);
}


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{
              task: "Do something",
              completed: false
            }, {
              task: "Do something else",
              completed: true
          }],
			text: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const todos = this.state.todos.concat([{
			task: this.state.text, 
			completed: false
		}]);
		const text = '';
		this.setState({ todos, text	});
	}

	toggleComplete(index) {
		const { task, completed } = this.state.todos[index];
		const todos = [
			...this.state.todos.slice(0, index),
			{ task, completed: !completed},
			...this.state.todos.slice(index + 1)
		];
		this.setState({ todos });
	}

	handleDelete(index) {
		const todos = [
			...this.state.todos.slice(0, index),
			...this.state.todos.slice(index + 1)
		];
		this.setState({ todos });
	}
 
  render() {
		const todos = this.state.todos.map((todo, i) => 
			<Todo 
				key={i}
				completed={todo.completed}
				toggleComplete={() => this.toggleComplete(i)}
				handleDelete={() => this.handleDelete(i)}>
					{todo.task}
			</Todo>
		);
    return (
			<div className="row">
        <div className="col-sm-12">
					<form onSubmit={this.handleSubmit}>
						<input 
							className="form-control input-lg" 
							placeholder="What do you need to do?" 
							value={this.state.text || ''}
							onChange={e => this.setState({text: e.target.value})} />
					</form>
          <hr />
          <ul className="list-group">
						{todos}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
