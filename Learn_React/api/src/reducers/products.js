import * as Types from "../constants/ActionTypes";

let initState = [];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return [...state];
    default:
      return [...state];
  }
};

export default reducer;
