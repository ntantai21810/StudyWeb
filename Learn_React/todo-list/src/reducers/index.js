import { combineReducers } from "redux";
import tasks from "./tasks";
import form from "./form";
import editingTask from "./editingTask";

let reducer = combineReducers({
  tasks,
  form,
  editingTask,
});

export default reducer;
