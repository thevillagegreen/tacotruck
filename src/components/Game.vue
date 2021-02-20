<template>
  <div class="game-container">
    <h1>Game</h1>
    <TacoClicker />
    <GameStatus />
  </div>
</template>

<script>
import TacoClicker from '@/components/TacoClicker.vue'
import GameStatus from '@/components/GameStatus.vue'

export default {
  name: 'Game',
  components: {
    TacoClicker,
    GameStatus
  }
}

</script>
