<template>
  <div class="game-container">
    <h1>Game</h1>
    <TacoClicker />
    <TacoStore />
    <GameStatus />
  </div>
</template>

<script>
import TacoClicker from '@/components/TacoClicker.vue'
import GameStatus from '@/components/GameStatus.vue'
import TacoStore from '@/components/TacoStore.vue'

export default {
  name: 'Game',
  components: {
    TacoClicker,
    GameStatus,
    TacoStore
  },
  mounted () {
    var intervalID = window.setInterval(this.tacoRunner, 500)
    console.log(intervalID)
  },
  methods: {
    tacoRunner () {
      this.$store.dispatch('addTacos')
    }
  }
}

</script>
