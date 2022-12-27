import { createStore } from 'vuex'

export default createStore({
  state: {
    OriginAndDestinationPlace : '',
    payment: ''
  },
  getters: {
  },
  mutations: {
    setRoute (state, data) {
      state.OriginAndDestinationPlace = data
    },
    setPayment (state, pay) {
      state.payment = pay
    }
  },
  actions: {
  },
  modules: {
  }
})
