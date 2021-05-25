import * as types from "../constants/ActionTypes";

let data = JSON.parse(localStorage.getItem("tasks"));

let initState = data ? data : [];

let reducer = (state = initState, action) => {
  let newState = [];
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      let newTask = {
        id:
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15),
        ...action.task,
      };
      newState = [...initState, newTask];
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    case types.UPDATE_STATUS:
      newState = state.map((task, index) => {
        if (index === action.index) {
          return {
            ...task,
            status: !task.status,
          };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default reducer;
