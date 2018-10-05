import { RECEIVE_ALL_ITEMS } from '../actions/items_actions';


const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;
