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
    tacoCount: 100000,
    tacosPerInterval: 0,
    tacoStore: [
      { name: 'chef', cost: 100, tacosPerInterval: 1, owned: 0, nextCostFactor: 0.125, upgrades: 0 },
      { name: 'cart', cost: 500, tacosPerInterval: 5, owned: 0, nextCostFactor: 0.125, upgrades: 0 },
      { name: 'truck', cost: 1000, tacosPerInterval: 20, owned: 0, nextCostFactor: 0.125, upgrades: 0 }
    ],
    tacoUpgrades: [
      { name: 'click', cost: 100, nextCostFactor: 0.5 },
      { name: 'chef', cost: 500, nextCostFactor: 0.5 },
      { name: 'cart', cost: 750, nextCostFactor: 0.5 },
      { name: 'truck', cost: 1000, nextCostFactor: 0.5 },
      { name: 'all', cost: 10000, nextCostFactor: 0.5 }
    ],
    countAfterPurchase: 0
  },
  mutations: {
    incrementTacoCount (state) {
      state.tacoCount = state.tacoCount + state.clickMultiplier
    },
    addTacos (state) {
      var tacosFromCapital = 0
      state.tacoStore.forEach(store => {
        if (store.owned >= 1) {
          tacosFromCapital = tacosFromCapital + store.tacosPerInterval
        }
      })
      state.tacoCount = Math.round(state.tacoCount + (tacosFromCapital * state.statusInterval))
    },
    purchaseCapital (state, purchaseName) {
      var storeObj = state.tacoStore.find(obj => {
        return obj.name === purchaseName
      })
      state.countAfterPurchase = state.tacoCount - storeObj.cost
      if (state.countAfterPurchase >= 0) {
        storeObj.owned++
        storeObj.tacosPerInterval++
        state.tacoCount = state.countAfterPurchase
        storeObj.cost = Math.round(storeObj.cost + (storeObj.cost * storeObj.nextCostFactor))
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
          state.tacoStore.forEach(store => {
            store.upgrades++
            store.tacosPerInterval = store.tacosPerInterval * 2
          })
        } else if (purchaseName === 'click') {
          state.clickMultiplier = (state.clickMultiplier * 2)
        } else {
          var storeObj = state.tacoStore.find(obj => {
            return obj.name === purchaseName
          })
          storeObj.upgrades++
          storeObj.tacosPerInterval = storeObj.tacosPerInterval * 2
        }
        state.tacoCount = state.countAfterPurchase
        upgradeObj.cost = Math.round(upgradeObj.cost + (upgradeObj.cost * upgradeObj.nextCostFactor))
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
