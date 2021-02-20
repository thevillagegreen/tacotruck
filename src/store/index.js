import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusInterval: 0.5,
    tacoCount: 420,
    tacosPerInterval: 0,
    tacoStore: [
      { name: 'chef', cost: '250', tacosPerInterval: 1, owned: 0 },
      { name: 'cart', cost: '250', tacosPerInterval: 5, owned: 0 },
      { name: 'truck', cost: '250', tacosPerInterval: 20, owned: 0 }
    ]
  },
  mutations: {
    incrementTacoCount (state) {
      state.tacoCount++
    },
    addTacos (state) {
      state.tacoCount = Math.round(state.tacoCount + (state.tacosPerInterval * state.statusInterval))
    },
    purchaseFromStore (state, purchaseName) {
      var storeObj = state.tacoStore.find(obj => {
        return obj.name === purchaseName
      })
      storeObj.owned++
      state.tacosPerInterval = state.tacosPerInterval + storeObj.tacosPerInterval
    }
  },
  actions: {
    incrementTacoCount (context) {
      context.commit('incrementTacoCount')
    },
    addTacos (context) {
      context.commit('addTacos')
    },
    purchaseFromStore (context, purchase) {
      context.commit('purchaseFromStore', purchase)
    }
  },
  getters: {
    getTacoCount: state => state.tacoCount
  }
})
