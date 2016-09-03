import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers';
import { addTodo, toggleTodo } from './actions';
import App from './components/App';
import './index.css';

let store = createStore(todos);

// initial state
(() => {
  ["Do something", "Do something else"].forEach(task => {
    store.dispatch(addTodo(task))
  });
  store.dispatch(toggleTodo(1));
})();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
