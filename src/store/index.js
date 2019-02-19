import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


function getState() {
  let states = window.sessionStorage.getItem('state')
  let state
  try {
    state = JSON.parse(states) || initState
  } catch (e) {
    state = initState
  }
  return state;
}

let initState = {
  user:{},
}

Vue.use(Vuex)
let state = getState()
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
})
