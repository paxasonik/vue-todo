import {STORE_NAME} from "./constants";

const SET_TASK = (state, tasks) => {
  state.tasks = tasks;
};
const ADD_TASK = (state, task) => {
  state.tasks.push(task);
  localStorage.setItem(STORE_NAME, JSON.stringify(state.tasks));
};
const DELETE_TASK = (state, index) => {
  state.tasks.splice(index, 1);
  localStorage.setItem(STORE_NAME, JSON.stringify(state.tasks));
};
const EDIT_TASK = (state, [index, task]) => {
  state.tasks.splice(index, 1, task);
  localStorage.setItem(STORE_NAME, JSON.stringify(state.tasks));
};

export default {
  SET_TASK,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK
}
