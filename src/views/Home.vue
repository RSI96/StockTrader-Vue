<template>
  <div>
    <h1>Viev your portfolio</h1>
    <h6>Save and load in progress</h6>
    <h6>Click End Day to end a day...</h6>
    <hr>
    <p>Your funds: {{ funds | currency}}</p>
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
