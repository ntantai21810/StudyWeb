import { combineReducers } from "redux";
import tasks from "./tasks";
import form from "./form";

let reducer = combineReducers({
  tasks,
  form,
});

export default reducer;
