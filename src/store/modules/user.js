//用户
import {account_profile} from '../../api/confined/common'
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
      account_profile({}).then(res => {
        let data = res.data
        if (data.code === '000') {
          commit('GET_ACCOUNT_PROFILE',data.content)
        } else {
          commit('GET_ACCOUNT_PROFILE',{})
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
      
      })
      
    },
  },
}
