import * as types from "../constants/ActionTypes";

let initState = {
  sortBy: "",
  asc: false,
};

let reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SORT_TASK:
      return {
        ...action.sort,
      };
    default:
      return state;
  }
};

export default reducer;
