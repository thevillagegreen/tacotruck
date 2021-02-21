import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusInterval: 0.5,
    tacoCount: 1000,
    tacosPerInterval: 0,
    tacoStore: [
      { name: 'chef', cost: '100', tacosPerInterval: 1, owned: 0 },
      { name: 'cart', cost: '500', tacosPerInterval: 5, owned: 0 },
      { name: 'truck', cost: '1000', tacosPerInterval: 20, owned: 0 }
    ],
    countAfterPurchase: 0
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
      state.countAfterPurchase = state.tacoCount - storeObj.cost
      if (state.countAfterPurchase >= 0) {
        storeObj.owned++
        state.tacosPerInterval = state.tacosPerInterval + storeObj.tacosPerInterval
        state.tacoCount = state.countAfterPurchase
      } else {
        console.log('insufficient funds, would be left with: ' + state.countAfterPurchase)
      }
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
