<template>
  <div class="home">
    <Game />
  </div>
</template>

<script>
import Game from '@/components/Game.vue'

export default {
  name: 'Home',
  components: {
    Game
  }
}
</script>

<style scoped lang="scss">
  * {
    background-color: grey;
  }
</style>
