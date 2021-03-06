import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return;
      }
      dispatch(addTodo(input.value));
      input.value = '';
    }}>
      <input 
        ref={node => {input = node}}
        className="form-control input-lg" 
        placeholder="What do you need to do?" />
    </form>
  );
};

export default AddTodo = connect()(AddTodo);
