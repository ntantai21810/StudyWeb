import * as types from "../constants/ActionTypes";

let initState = false;

let reducer = (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_FORM:
    case types.EDIT_FORM:
      state = true;
      return state;
    case types.CLOSE_FORM:
      state = false;
      return state;
    default:
      return state;
  }
};

export default reducer;
