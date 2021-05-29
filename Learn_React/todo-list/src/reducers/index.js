import { combineReducers } from "redux";
import tasks from "./tasks";
import form from "./form";
import editingTask from "./editingTask";
import filterTask from "./filterTask";
import searchTask from "./searchTask";
import sortTask from "./sortTask";

let reducer = combineReducers({
  tasks,
  form,
  editingTask,
  filterTask,
  searchTask,
  sortTask,
});

export default reducer;
