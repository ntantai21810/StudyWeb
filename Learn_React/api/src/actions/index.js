import * as Types from "../constants/ActionTypes";

export const fetchProducts = () => {
  return {
    type: Types.FETCH_PRODUCTS,
  };
};
