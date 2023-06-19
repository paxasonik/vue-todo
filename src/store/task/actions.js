import {STORE_NAME} from "./constants";

export default {
  initializeStore({state, commit}) {
    if (localStorage.hasOwnProperty(STORE_NAME)) {
      commit('SET_TASK', JSON.parse(localStorage.getItem(STORE_NAME)))
    }
  },
}
