const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ 
        ...state,
        {
          task: action.text,
          completed: false,
          id: action.id
        }
      ]
    case 'DELETE_TODO':
      return state.filter(todo => action.id !== todo.id)
    case 'TOGGLE_TODO':
      return state.map(
        todo => action.id !== todo.id ? 
          todo :
          Object.assign(
            {},
            state[action.id],
            {completed: !state[action.id].completed}
          )
      );
    default:
      return state;
  }
}

export default todos;
