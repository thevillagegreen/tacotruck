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
  },
  mounted () {
    var intervalID = window.setInterval(this.tacoRunner, 500)
    console.log(intervalID)
  },
  methods: {
    tacoRunner () {
      // take the tacospersec, add that to tacoCount, every second
      this.$store.dispatch('addTacos')
    }
  }
}
</script>

<style scoped lang="scss">
  * {
    background-color: grey;
  }
</style>
