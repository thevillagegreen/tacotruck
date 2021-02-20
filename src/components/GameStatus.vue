<template>
  <div class="game-status-container">
    <h1>Game Status</h1>
    <p>Tacos: {{tacoCount}}</p>
    <p>Chefs: {{ tacoStore[0].owned }}</p>
    <p>Carts: {{ tacoStore[1].owned }}</p>
    <p>Trucks: {{ tacoStore[2].owned }}</p>
  </div>
</template>

<script>

export default {
  name: 'GameStatus',
  computed: {
    tacoCount: function () {
      return this.$store.state.tacoCount
    },
    tacoStore: function () {
      return this.$store.state.tacoStore
    }
  }
}

</script>
