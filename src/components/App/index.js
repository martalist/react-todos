import React, { Component } from 'react';
import AddTodo from '../../containers/AddTodo';
import Todo from '../Todo';
import './index.css';

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
		this.toggleComplete = this.toggleComplete.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
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
          <AddTodo />
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
