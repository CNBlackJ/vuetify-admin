<template>
  <v-layout row wrap align-center id="counter">
    <v-btn flat fab small @click="onDesCounter">
      <v-icon>remove</v-icon>
    </v-btn>
    <v-flex xs4>
      <v-text-field
        label="Quantity"
        flat
        small
        inline
        hide-details
        v-model="counter"
      ></v-text-field>
    </v-flex>
    <v-btn fab flat small @click="onInsCounter">
      <v-icon>add</v-icon>
    </v-btn>
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