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

export const updateStatus = (index) => {
  return {
    type: types.UPDATE_STATUS,
    index,
  };
};

export const deleteTask = (index) => {
  return {
    type: types.DELETE_TASK,
    index,
  };
};

export const editingTask = (task) => {
  return {
    type: types.EDITING_TASK,
    task,
  };
};

export const deleteEditingTask = () => {
  return {
    type: types.DELETE_EDITING_TASK,
  };
};

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task,
  };
};

export const filterTask = (filter) => {
  return {
    type: types.FILTER_TASK,
    filter,
  };
};

export const searchTask = (keyword) => {
  return {
    type: types.SEARCH_TASK,
    keyword,
  };
};

export const sortTask = (sort) => {
  return {
    type: types.SORT_TASK,
    sort,
  };
};
