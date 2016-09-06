import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import todos from './reducers';
import * as storage from './utils/localStorage';
import App from './components/App';
import './index.css';


let store = createStore(todos, storage.get());

store.subscribe(throttle(
  () => storage.set(store.getState()),
  1000
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
