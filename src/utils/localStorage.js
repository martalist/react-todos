const supportsHtml5Storage = () => {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (err){
    return false;
  }
};

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

export const get = () => {
  if (supportsHtml5Storage() && 'state' in localStorage) {
    return JSON.parse(localStorage.getItem('state'));
  }
  return initialState;
}

export const set = (state) => {
  if (supportsHtml5Storage()) {
    localStorage.setItem('state', JSON.stringify(state));
  }
}


