<template>
  <div class="game-status-container">
    <h1>Game Status</h1>
    <p>{{tacoCount}}</p>
  </div>
</template>

<script>

export default {
  name: 'GameStatus',
  computed: {
    tacoCount: function () {
      return this.$store.state.tacoCount
    }
  }
}

</script>
