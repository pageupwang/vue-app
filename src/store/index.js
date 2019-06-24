import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage
})
Vue.use(Vuex)
import user from './modules/user'
export default new Vuex.Store({
  modules: {
    user: user,
  },
  plugins: [vuexSession.plugin]
})
