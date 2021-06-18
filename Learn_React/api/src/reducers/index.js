import { combineReducers } from "redux";
import products from "./products";
import editingProduct from "./editingProduct";

const appReducer = combineReducers({ products, editingProduct });

export default appReducer;
