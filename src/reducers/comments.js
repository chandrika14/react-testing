import { SAVE } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
}