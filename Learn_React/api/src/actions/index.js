import * as Types from "../constants/ActionTypes";
import callAPI from "../utils/callAPI";

export const fetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

export const fetchProductsRequest = () => {
  return (dispatch) => {
    callAPI("products", "GET").then((res) => {
      dispatch(fetchProducts(res.data));
    });
  };
};

export const deleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};

export const deleteProductRequest = (id) => {
  return (dispatch) => {
    callAPI(`products/${id}`, "DELETE").then((res) => {
      dispatch(deleteProduct(id));
    });
  };
};

export const addProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};

export const addProductRequest = (product) => {
  return (dispatch) => {
    callAPI("products", "POST", product).then((res) => {
      dispatch(addProduct(res.data));
    });
  };
};

export const getProduct = (product) => {
  return {
    type: Types.GET_PRODUCT,
    product,
  };
};

export const getProductRequest = (id) => {
  return (dispatch) =>
    callAPI(`products/${id}`, "GET").then((res) =>
      dispatch(getProduct(res.data))
    );
};

export const updateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  };
};

export const updateProductRequest = (product) => {
  return (dispatch) =>
    callAPI(`products/${product.id}`, "PUT", product).then((res) => {
      dispatch(updateProduct(res.data));
    });
};
