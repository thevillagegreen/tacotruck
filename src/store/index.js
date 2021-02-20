import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tacoCount: 420
  },
  mutations: {
    incrementTacoCount (state) {
      state.tacoCount++
    }
  },
  actions: {
    incrementTacoCount (context) {
      context.commit('incrementTacoCount')
    }
  },
  getters: {
    getTacoCount: state => state.tacoCount
  }
})
