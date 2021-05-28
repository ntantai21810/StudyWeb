import * as types from "../constants/ActionTypes";

let initState = {
  filterName: "",
  filterStatus: "",
};

let reducer = (state = initState, action) => {
  switch (action.type) {
    case types.FILTER_TASK:
      return {
        ...action.filter,
      };
    default:
      return state;
  }
};

export default reducer;
