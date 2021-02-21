<template>
  <div class="taco-store-container">
    <h1>Taco Store</h1>
    <div class="capital">
      <h3>Capital</h3>
      <div class=".store-buttons">
        <button
          v-for='(item, index) in store'
            :key="index"
            :disabled="canAfford(item.cost)"
            @click="buy('capital', item.name)"
            >
          {{ item.name }} ({{ item.cost }})
        </button>
    </div>

    </div>
    <div class="upgrades">
      <h3>Upgrades</h3>
      <div class=".store-buttons">
        <button
          v-for='(item, index) in upgrades'
            :key="index"
            :disabled="canAfford(item.cost)"
            @click="buy('upgrade', item.name)"
            >
          {{ item.name }} ({{ item.cost }})
        </button>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TacoStore',
  data () {
    return {
      store: this.$store.state.tacoStore,
      upgrades: this.$store.state.tacoUpgrades
    }
  },
  computed: {
    count: function () {
      return this.$store.state.tacoCount
    }
  },
  methods: {
    buy (type, item) {
      if (type === 'capital') {
        this.$store.dispatch('purchaseCapital', item)
      } else {
        console.log('upgrade')
        this.$store.dispatch('purchaseUpgrade', item)
      }
    },
    canAfford (cost) {
      if (cost > this.count) {
        return 'disabled'
      }
    }
  }
}
</script>

<style>

</style>
