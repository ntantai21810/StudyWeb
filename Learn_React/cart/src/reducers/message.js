import * as types from "../constants/ActionTypes";
import * as Messages from "../constants/Message";

let initState = Messages.MSG_WELCOME;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default reducer;
