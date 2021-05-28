import * as types from "../constants/ActionTypes";

let initState = "";

let reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SEARCH_TASK:
      return action.keyword;
    default:
      return state;
  }
};

export default reducer;
