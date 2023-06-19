const SET_TASK = (state, tasks) => {
  state.tasks = tasks;
};
const ADD_TASK = (state, task) => {
  state.tasks.push(task);
  localStorage.setItem('taskList', JSON.stringify(state.tasks));
};
const DELETE_TASK = (state, index) => {
  state.tasks.splice(index, 1);
  localStorage.setItem('taskList', JSON.stringify(state.tasks));
};
const EDIT_TASK = (state, [index, task]) => {
  state.tasks.splice(index, 1, task);
  localStorage.setItem('taskList', JSON.stringify(state.tasks));
};

export default {
  SET_TASK,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK
}
