import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusInterval: 0.5,
    clickMultiplier: 1,
    tacoCount: 999,
    tacosPerInterval: 0,
    tacoStore: [
      { name: 'chef', cost: 100, tacosPerInterval: 1, owned: 0, nextCostFactor: 0.125, upgrades: 0 },
      { name: 'cart', cost: 500, tacosPerInterval: 5, owned: 0, nextCostFactor: 0.125, upgrades: 0 },
      { name: 'truck', cost: 1000, tacosPerInterval: 20, owned: 0, nextCostFactor: 0.125, upgrades: 0 }
    ],
    tacoUpgrades: [
      { name: 'click', cost: 100, owned: 0 },
      { name: 'chef', cost: 500, owned: 0 },
      { name: 'cart', cost: 750, owned: 0 },
      { name: 'truck', cost: 1000, owned: 0 },
      { name: 'all', cost: 10000, owned: 0 }
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
    purchaseCapital (state, purchaseName) {
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
    },
    purchaseUpgrade (state, purchaseName) {
      var upgradeObj = state.tacoUpgrades.find(obj => {
        return obj.name === purchaseName
      })
      state.countAfterPurchase = state.tacoCount - upgradeObj.cost
      if (state.countAfterPurchase >= 0) {
        // if all, increase all intervals
        if (purchaseName === 'all') {

        } else if (purchaseName === 'clicks') {

        } else {
          var storeObj = state.tacoStore.find(obj => {
            return obj.name === purchaseName
          })
          storeObj.upgrades++
          storeObj.tacosPerInterval = storeObj.tacosPerInterval * 2
        }
        state.tacoCount = state.countAfterPurchase
      } else {
        console.log('insufficient funds, would be left with: ' + state.countAfterPurchase)
      }
      // else, increase interval for given name

      // state.countAfterPurchase = state.tacoCount - storeObj.cost
      // if (state.countAfterPurchase >= 0) {
      //   storeObj.owned++
      //   state.tacosPerInterval = state.tacosPerInterval + storeObj.tacosPerInterval
      //   state.tacoCount = state.countAfterPurchase
      // } else {
      //   console.log('insufficient funds, would be left with: ' + state.countAfterPurchase)
      // }
    }
  },
  actions: {
    incrementTacoCount (context) {
      context.commit('incrementTacoCount')
    },
    addTacos (context) {
      context.commit('addTacos')
    },
    purchaseCapital (context, purchase) {
      context.commit('purchaseCapital', purchase)
    },
    purchaseUpgrade (context, purchase) {
      context.commit('purchaseUpgrade', purchase)
    }
  },
  getters: {
    getTacoCount: state => state.tacoCount,
    getTacoUpgrades: state => state.tacoUpgrades
  }
})
