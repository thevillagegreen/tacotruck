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
  }
}

</script>
