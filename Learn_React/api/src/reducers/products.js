import * as Types from "../constants/ActionTypes";

let initState = [];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return [...action.products];
    case Types.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.id);
    case Types.ADD_PRODUCT:
      return [...state, action.product];
    case Types.UPDATE_PRODUCT:
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      );
    default:
      return [...state];
  }
};

export default reducer;
