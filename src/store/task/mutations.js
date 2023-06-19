const ADD_TASK = (state, task) => {
  state.tasks.push(task);
};
const DELETE_TASK = (state, task) => {
  state.tasks = state.tasks.filter(item => item !== task)
};
const EDIT_TASK = (state, [index, task]) => {
  state.tasks.splice(index, 1, task);
};

export default {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK
}
