import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo, deleteTodo } from '../actions';

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = (dispatch) => ({
  toggleComplete: id => dispatch(toggleTodo(id)),
  handleDelete: id => dispatch(deleteTodo(id))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer;
