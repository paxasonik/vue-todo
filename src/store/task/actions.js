export default {
  initializeStore({state, commit}) {
    if (localStorage.hasOwnProperty('taskList')) {
      commit('SET_TASK', JSON.parse(localStorage.getItem('taskList')))
    }
  },
}
