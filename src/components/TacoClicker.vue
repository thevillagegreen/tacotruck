<template>
  <div class="taco-clicker-container">
    <h1>Taco Clicker</h1>
    <button id="taco-button" @click="clickTaco">Make Taco</button>
  </div>
</template>

<script>

export default {
  name: 'TacoClicker',
  methods: {
    clickTaco () {
      this.$store.dispatch('incrementTacoCount')
    }
  }
}

</script>
