import { combineReducers } from "redux";
import ExampleReducer from "./ExampleReducer";

export default combineReducers({
  data: ExampleReducer,
});
