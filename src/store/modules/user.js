//用户

export default {
  state: {
    user: {},
  },
  mutations: {
    GET_ACCOUNT_PROFILE(state, user) {
      state.user = user
    },
  },
  actions: {
    getAccountProfile({commit}){
     
    },
  },
}
