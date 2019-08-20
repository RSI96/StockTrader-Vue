<template>
  <div>
    <h1>Viev your portfolio</h1>
    <h6>You can save and load your data</h6>
    <h6>Click End Day to end day...</h6>
    <hr>
    <p>Your funds: {{ funds }}</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>
