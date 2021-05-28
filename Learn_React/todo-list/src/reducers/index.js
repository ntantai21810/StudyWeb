import { combineReducers } from "redux";
import tasks from "./tasks";
import form from "./form";
import editingTask from "./editingTask";
import filterTask from "./filterTask";
import searchTask from "./searchTask";

let reducer = combineReducers({
  tasks,
  form,
  editingTask,
  filterTask,
  searchTask,
});

export default reducer;
