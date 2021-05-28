import { combineReducers } from "redux";
import tasks from "./tasks";
import form from "./form";
import editingTask from "./editingTask";
import filterTask from "./filterTask";

let reducer = combineReducers({
  tasks,
  form,
  editingTask,
  filterTask,
});

export default reducer;
