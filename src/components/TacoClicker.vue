<template>
  <div class="taco-clicker-container">
    <h1>Taco Clicker</h1>
    <button id="taco-button" @click="clickTaco">Make Taco ({{ clickMul }})</button>
  </div>
</template>

<script>

export default {
  name: 'TacoClicker',
  methods: {
    clickTaco () {
      this.$store.dispatch('incrementTacoCount')
    }
  },
  computed: {
    clickMul: function () {
      return this.$store.state.clickMultiplier
    }
  }
}

</script>
