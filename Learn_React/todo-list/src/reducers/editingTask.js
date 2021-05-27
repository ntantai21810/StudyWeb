import * as types from "../constants/ActionTypes";

let initState = null;

let reducer = (state = initState, action) => {
  let newState = {};
  switch (action.type) {
    case types.EDITING_TASK:
      newState = { ...action.task };
      return newState;
    case types.DELETE_EDITING_TASK:
      return null;
    default:
      return state;
  }
};

export default reducer;
