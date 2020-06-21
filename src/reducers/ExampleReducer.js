import { GET_DATA_SUCCESS } from '../actionTypes/ExampleActionTypes';

export default function ExampleReducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...action.data
      };
    default:
      return state;
  }
}
