import * as types from "../constants/ActionTypes";

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
  };
};

export const changeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message,
  };
};

export const deleteProduct = (product) => {
  return {
    type: types.DELETE_PRODUCT,
    product,
  };
};

export const changeQuantityOfProduct = (product, quantity) => {
  return {
    type: types.CHANGE_QUANTITY_OF_PRODUCT,
    product,
    quantity,
  };
};
