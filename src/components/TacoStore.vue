<template>
  <div class="taco-store-container">
    <h1>Taco Store</h1>
    <div class=".store-buttons">
        <button
          v-for='(item, index) in store'
            :key="index"
            :disabled="canAfford(item.cost)"
            @click="buy(item.name)"
            >
          {{ item.name }}
        </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TacoStore',
  data () {
    return {
      store: this.$store.state.tacoStore
    }
  },
  computed: {
    count: function () {
      return this.$store.state.tacoCount
    }
  },
  methods: {
    buy (item) {
      this.$store.dispatch('purchaseFromStore', item)
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
