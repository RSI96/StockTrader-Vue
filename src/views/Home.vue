<template>
  <div>
    <h1>Viev your portfolio</h1>
    <hr>
    <h6>Save and load disabled</h6>
    <h6>Click End Day to update prices</h6>
    <hr>
    <p>You have: {{ funds | currency}}</p>
    <h6>Enjoy!</h6>
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
