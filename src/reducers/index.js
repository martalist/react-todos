// handle changes to individual todos
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
          task: action.text,
          completed: false,
          id: action.id
        }
    case 'TOGGLE_TODO':
      return Object.assign(
            {},
            state,
            {completed: !state.completed}
      );
    default:
      return state;
  }
}

// handle changes to the todos array
const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ 
        ...state,
        todo({}, action)
      ];
    case 'DELETE_TODO':
      return state.filter(todo => action.id !== todo.id)
    case 'TOGGLE_TODO':
      return state.map(t => 
        action.id === t.id ? todo(t, action) : t
      );
    default:
      return state;
  }
}

export default todos;
