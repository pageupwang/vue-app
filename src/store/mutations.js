function addState(val) {
  window.sessionStorage.setItem('state', JSON.stringify(val))
}

export default {
  SET_USER(state,user){
    state.user=user
    addState(state)
  },
  
}
