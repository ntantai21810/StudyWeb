import * as types from "../constants/ActionTypes";

let data = JSON.parse(localStorage.getItem("cart"));

let initState = data ? data : [];

const reducer = (state = initState, action) => {
  let newState = [];
  switch (action.type) {
    case types.ADD_TO_CART:
      for (let i = 0; i < state.length; i++) {
        if (state[i].product.id === action.product.id) {
          newState = state
            .slice(0, i)
            .concat([
              { product: action.product, quantity: state[i].quantity + 1 },
            ])
            .concat(state.slice(i + 1));
          localStorage.setItem("cart", JSON.stringify(newState));
          return newState;
        }
      }
      newState = [...state].concat([
        {
          product: action.product,
          quantity: 1,
        },
      ]);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case types.DELETE_PRODUCT:
      for (let i = 0; i < state.length; i++) {
        if (state[i].product.id === action.product.id) {
          newState = state.slice(0, i).concat(state.slice(i + 1));
          localStorage.setItem("cart", JSON.stringify(newState));
          return newState;
        }
      }
      return [...state];

    case types.CHANGE_QUANTITY_OF_PRODUCT:
      for (let i = 0; i < state.length; i++) {
        if (state[i].product.id === action.product.id) {
          if (state[i].quantity === 1 && action.quantity === -1) {
            newState = state.slice(0, i).concat(state.slice(i + 1));
          } else {
            newState = state
              .slice(0, i)
              .concat([
                {
                  product: action.product,
                  quantity: state[i].quantity + action.quantity,
                },
              ])
              .concat(state.slice(i + 1));
          }
          localStorage.setItem("cart", JSON.stringify(newState));
          return newState;
        }
      }
    default:
      return [...state];
  }
};

export default reducer;
