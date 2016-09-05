import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers';
import { addTodo, toggleTodo } from './actions';
import App from './components/App';
import './index.css';

const initialState = [
  {
    task: "Do something",
    completed: false,
    id: 0
  },
  {
    task: "Do something else",
    completed: true,
    id: 1
  }
]

let store = createStore(todos, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
