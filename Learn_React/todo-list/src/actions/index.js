import { bindActionCreators } from "redux";
import * as types from "../constants/ActionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task,
  };
};

export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};

export const editForm = () => {
  return {
    type: types.EDIT_FORM,
  };
};

export const updateStatus = (index) => {
  return {
    type: types.UPDATE_STATUS,
    index,
  };
};