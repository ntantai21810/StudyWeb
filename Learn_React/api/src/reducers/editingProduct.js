import * as Types from "../constants/ActionTypes";

let initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default reducer;
