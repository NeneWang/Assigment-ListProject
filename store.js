// store.js
import { createStore } from 'redux';

const initialState = {
  items: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'DELETE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, completed: !item.completed } : item
        ),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
