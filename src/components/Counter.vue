<template>
  <v-layout row wrap align-center id="counter">
    <v-text-field
      v-model="counter"
      type="number"
      label="Number"
      append-outer-icon="add"
      @click:append-outer="onInsCounter"
      prepend-icon="remove"
      @click:prepend="onDesCounter">
    </v-text-field>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      counter: 1
    }
  },
  methods: {
    onInsCounter () {
      this.counter++
    },
    onDesCounter () {
      this.counter--
    }
  }
}
</script>

<style>
  #counter input {
    text-align: center;
  }
</style>