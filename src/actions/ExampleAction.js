import { GET_DATA } from '../actionTypes/ExampleActionTypes';

export const exampleAction = (payload) => ({
  type: GET_DATA,
  payload,
});

export default GET_DATA;
