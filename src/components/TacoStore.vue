<template>
  <div class="taco-store-container">
    <h1>Taco Store</h1>
    <div class="store-buttons">
      <button id="buy-chef-button" @click="buy('chef')">$200 - Buy Chef (1 taco / sec)</button>
      <button id="buy-cart-button" @click="buy('cart')">$20,000 - Buy Cart (5 taco / sec)</button>
      <button id="buy-truck-button" @click="buy('truck')">$500,000 - Buy Truck (20 taco / sec)</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TacoStore',
  methods: {
    buy (item) {
      this.$store.dispatch('purchaseFromStore', item)
    }
  }
}
</script>

<style>
.store-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.store-buttons button {
  margin-top: 10px;
}
</style>
