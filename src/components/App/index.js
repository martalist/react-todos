import React from 'react';
import AddTodo from '../../containers/AddTodo';
import TodoListContainer from '../../containers/TodoListContainer';
import SummaryBarContainer from '../../containers/SummaryBarContainer';
import './index.css';

const App = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <AddTodo />
        <hr />
        <SummaryBarContainer />
        <hr />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default App;
